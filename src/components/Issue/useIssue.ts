import React from "react";
import { useAsync } from "../..//api";
import { getIssueByLabelName } from "./service";
import { IssueState } from "./type";

const initial: IssueState = { danger: [], warning: [], closed: [] };
export function useIssue(param: string) {
  const { data, run, reset } = useAsync<IssueState>(initial);

  React.useEffect(() => {
    if (param) run(getIssueByLabelName(param));
    else reset();
  }, [param]);

  return data;
}
