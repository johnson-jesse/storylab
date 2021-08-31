import React from "react";
import { styled, themes, convert } from "@storybook/theming";
import { TabsState, Button, Placeholder } from "@storybook/components";
import Label, { useLabel } from "./Label";
import Issue, { useIssue } from "./Issue";

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
  const label = useLabel();
  const issue = useIssue();

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
        {issue.danger.length > 0 && <Issue issue={issue.danger} />}
      </div>
      <div
        id="warning"
        title={`${issue.warning.length} Active`}
        color={convert(themes.normal).color.warning}
      >
        {issue.warning.length > 0 && <Issue issue={issue.warning} />}
      </div>
      <div
        id="closed"
        title={`${issue.closed.length} Closed`}
        color={convert(themes.normal).color.primary}
      >
        {issue.closed.length > 0 && <Issue issue={issue.closed} />}
      </div>
    </TabsState>
  );
};
