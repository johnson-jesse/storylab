import { useGlobals, useParameter } from "@storybook/api";
import { TabsState } from "@storybook/components";
import { convert, themes } from "@storybook/theming";
import React from "react";
import useFilteredProject from "../api/useFilteredProject";
import { PARAM_KEY } from "../constants";
import { useProject } from "./Board";
import Create from "./Create/Create";
import Issue from "./Issue";
import Label, { useLabel } from "./Label";

type Results = {
  danger: any[];
  warning: any[];
};

interface PanelContentProps {
  results: Results;
  fetchData: () => void;
  clearData: () => void;
}

export const PanelContent: React.FC<PanelContentProps> = () => {
  const ident = useParameter<string>(PARAM_KEY);
  const [{ storylab }] = useGlobals();
  const { project } = useProject(storylab);
  const label = useLabel(storylab, ident);
  const filtered = useFilteredProject(storylab, ident, project);

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
          {storylab && <Label {...label} />}
          {!storylab && `Enable this add-on by selecting the GitLab icon in the toolbar above`}
        </div>
      </div>
      {storylab && <div
        id="create"
        title="New Issue"
        color={convert(themes.normal).color.orange}
      >
        {({ active }: { active: boolean; selected: string }) =>
          active ? <div key='create-tab' style={{ padding: '1em' }}><Create /></div> : null
        }
      </div>}
      {
        project && project[0].lists.map(i => (
          <div
            key={i.id}
            id={`${i.id}`}
            title={`${filtered[i.label.name].length} ${i.label.name}`}
            color={i.label.color}
          >
            <Issue ident={ident} issue={filtered[i.label.name]} />
          </div>
        ))
      }
    </TabsState>
  );
};
