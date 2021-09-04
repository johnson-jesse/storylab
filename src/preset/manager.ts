import { addons, types } from "@storybook/addons";

import { ADDON_ID, TOOL_ID, PANEL_ID } from "../constants";
import { Tool } from "../Tool";
import { Panel } from "../Panel";
import { ADDON_TITLE } from '../constants';

// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: ADDON_TITLE,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool,
  });

  // Register the panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: ADDON_TITLE,
    match: ({ viewMode }) => viewMode === "story",
    render: Panel,
  });
});
