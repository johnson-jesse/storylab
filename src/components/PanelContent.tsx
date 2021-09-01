import { useParameter } from "@storybook/api";
import { Button, TabsState } from "@storybook/components";
import { convert, styled, themes } from "@storybook/theming";
import React from "react";
import { PARAM_KEY } from "../constants";
import Issue, { IssueState, useIssue } from "./Issue";
import Label, { useLabel, Label as LabelType } from "./Label";

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

/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
export const PanelContent: React.FC<PanelContentProps> = () => {
  const param = useParameter<string>(PARAM_KEY);
  const label = useLabel(param);
  const issue = useIssue(param);

  return (
    <TabsState
      initial="overview"
      backgroundColor={convert(themes.normal).background.hoverable}
    >
      <div
        id="overview"
        title="Overview"
        color={convert(themes.normal).color.positive}
      >
        <div style={{ padding: '1em' }}>
          <Label label={label} />
        </div>
      </div>
      <div
        id="danger"
        title={`${issue.danger.length} Idle`}
        color={convert(themes.normal).color.negative}
      >
        {issue.danger.length > 0 && <Issue param={param} issue={issue.danger} />}
      </div>
      <div
        id="warning"
        title={`${issue.warning.length} Active`}
        color={convert(themes.normal).color.warning}
      >
        {issue.warning.length > 0 && <Issue param={param} issue={issue.warning} />}
      </div>
      <div
        id="closed"
        title={`${issue.closed.length} Closed`}
        color={convert(themes.normal).color.primary}
      >
        {issue.closed.length > 0 && <Issue param={param} issue={issue.closed} />}
      </div>
    </TabsState>
  );
};
