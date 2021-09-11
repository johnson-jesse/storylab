import React from "react";
import { useAsync } from "../../api";
import { getProjectLabel } from "./service";
import { Label } from "./type";

const initial: Label[] = [];
export function useProjectLabel() {
  const { data, run } = useAsync(initial);

  const refresh = React.useCallback(() => {
    run(getProjectLabel(), true);
  }, []);

  React.useEffect(() => {
    refresh();
  }, []);

  return {
    label: data,
    refresh
  };
}
