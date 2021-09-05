import React from "react";
import { useAsync } from "../../api";
import { getProjectLabel } from "./service";
import { Label } from "./type";

const initial: Label[] = [];
export function useProjectLabel(enabled: boolean) {
  const { data, run, reset } = useAsync(initial);

  React.useEffect(() => {
    if(enabled) run(getProjectLabel());
    else reset();
  }, [enabled]);

  return data;
}
