import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";

export const Tool = () => {
  const [{ storylab }, updateGlobals] = useGlobals();

  const toggleMyTool = useCallback(
    () =>
      updateGlobals({
        storylab: storylab ? undefined : true
      }),
    [storylab]
  );

  return (
    <IconButton
      key={TOOL_ID}
      active={storylab}
      title="Enable Storylab"
      onClick={toggleMyTool}
    >
      <Icons icon="gitlab" />
    </IconButton>
  );
};
