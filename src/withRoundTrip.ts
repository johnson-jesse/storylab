import { StoryFn as StoryFunction, useChannel } from "@storybook/addons";
import { STORY_CHANGED } from "@storybook/core-events";
import { Issue } from "./components/Issue/type";
import { EVENTS } from "./constants";

export const withRoundTrip = (storyFn: StoryFunction) => {
  const emit = useChannel({
    [EVENTS.REQUEST]: (data: { danger: Issue[], warning: Issue[] }) => {
      emit(EVENTS.RESULT, {
        danger: data.danger,
        warning: data.warning,
      });
    },
    [STORY_CHANGED]: () => {
      emit(EVENTS.RESULT, {
        danger: [],
        warning: [],
      });
    },
    [EVENTS.CLEAR]: () => {
      emit(EVENTS.RESULT, {
        danger: [],
        warning: [],
      });
    },
  });
  return storyFn();
};
