import { useStorybookState } from "@storybook/api";
import { TabsState } from "@storybook/components";
import { convert, themes } from "@storybook/theming";
import React from "react";
import { GroupIdent } from "../api";
import useFilteredProject from "../api/useFilteredProject";
import { useProject } from "./Board";
import Create from "./Create/Create";
import Issue from "./Issue";
import Label, { useLabel } from "./Label";

type Props = {
  group: GroupIdent;
  storyKey: string;
  storiesHash: { [id: string]: any };
}

function Content(props: Props) {
  const label = useLabel(props.group);
  const { project } = useProject();
  const { filtered, fetch } = useFilteredProject(props.group, project);

  return (
    <TabsState
      initial="overview"
      backgroundColor={convert(themes.normal).background.hoverable}
    >
      <div
        id="overview"
        title="Overview"
        color={convert(themes.normal).color.darkest}
      >
        <div style={{ padding: '1em' }}>
          {<Label {...label} />}
        </div>
      </div>
      <div
        id="create"
        title="New Issue"
        color={convert(themes.normal).color.orange}
      >
        {({ active }: { active: boolean; selected: string }) =>
          active ? <div key='create-tab' style={{ padding: '1em' }}><Create refresh={fetch} /></div> : null
        }
      </div>
      {
        Object.entries(filtered).map(([key, value]) => {
          const list = project[0].lists.find(l => l.label.name === key)
            || { label: { color: 'grey' } };

          return (
            <div
              key={key}
              id={key}
              title={`${value.length} ${key}`}
              color={list.label.color}
            >
              <Issue storiesHash={props.storiesHash} issue={value} />
            </div>
          )
        })
      }
    </TabsState>
  );
};

function areEqual(prevProps: Props, nextProps: Props) {
  return (
    prevProps.group === nextProps.group &&
    prevProps.storiesHash === nextProps.storiesHash
  );
}

const MemoContent = React.memo(Content, areEqual);

export function PanelContent() {
  const state = useStorybookState();
  const group = state.storyId.split('--')[0] as GroupIdent;
  return state.globals.storylab ? <MemoContent group={group} storyKey={state.storyId} storiesHash={state.storiesHash} />
    : <span>Enable this add-on by selecting the GitLab icon in the toolbar above</span>
}