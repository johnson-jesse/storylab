import { useGlobals, useParameter } from "@storybook/api";
import { Button, TabsState } from "@storybook/components";
import { convert, styled, themes } from "@storybook/theming";
import React from "react";
import useFilteredProject from "../api/useFilteredProject";
import { PARAM_KEY } from "../constants";
import { useProject } from "./Board";
import Issue from "./Issue";
import Label, { useLabel } from "./Label";

export const RequestDataButton = styled(Button)({
  marginTop: "1rem",
});

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
  const [{ myAddon }] = useGlobals();
  const { project } = useProject(myAddon);
  const label = useLabel(myAddon, ident);
  const filtered = useFilteredProject(myAddon, ident, project);

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
          {label.name && <Label {...label} />}
          {!label.name && `Enable this add-on by selection the GitLab icon in the toolbar above`}
        </div>
      </div>
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
