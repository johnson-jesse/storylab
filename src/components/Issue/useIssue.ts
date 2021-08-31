import { useParameter } from "@storybook/api";
import React from "react";
import { PARAM_KEY } from "../../constants";
import { getIssueByLabelName } from "./service";
import { Issue, IssueState } from "./type";

export function useIssue() {
  const param = useParameter<string>(PARAM_KEY);
  const [issue, setIssue] = React.useState<IssueState>({ danger: [], warning: [], closed: [] });

  React.useEffect(() => {
    let isSubscribed = true;
    if (param) getIssueByLabelName(param).then(i => isSubscribed && setIssue(i));
    return () => {
      isSubscribed = false;
    };
  }, [param]);

  return issue;
}
