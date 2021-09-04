import React from "react";
import { useAsync } from "../..//api";
import { getIssueByLabelName } from "./service";
import { Issue } from "./type";

const initial: Issue[] = [];
export function useIssue(enabled: boolean, param: string) {
  const { data, run, reset } = useAsync<Issue[]>(initial);

  React.useEffect(() => {
    if (enabled && param) run(getIssueByLabelName(param));
    else reset();
  }, [enabled, param]);

  return data;
}
