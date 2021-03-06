import { addons, types } from "@storybook/addons";

import { ADDON_ID, TOOL_ID, PANEL_ID, PARAM_KEY } from "../constants";
import { Tool } from "../Tool";
import { Panel } from "../Panel";
import { Tab } from "../Tab";
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

  // Register the tab
  addons.add(PANEL_ID, {
    type: types.TAB,
    title: ADDON_TITLE,
    //👇 Checks the current route for the story
    route: ({ storyId }) => `/${PARAM_KEY}/${storyId}`,
    //👇 Shows the Tab UI element in myaddon view mode
    match: ({ viewMode }) => viewMode === PARAM_KEY,
    render: Tab,
  });
});
