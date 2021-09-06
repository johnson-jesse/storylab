import React from "react";
import { useAsync } from "../../api";
import { getIssueByLabelName } from "./service";
import { Issue } from "./type";

const initial: Issue[] = [];
export function useIssue(group: string) {
  const { data, run, reset } = useAsync<Issue[]>(initial);

  const fetch = React.useCallback(() => {
    run(getIssueByLabelName(group));
  }, [group]);

  React.useEffect(() => {
    if (group) fetch();
    else reset();
  }, [group]);

  return {
    data,
    fetch
  }
}
