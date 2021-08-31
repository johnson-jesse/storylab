import React from "react";
import { useAsync } from "../../api";
import { getLabel } from "./service";
import { Label } from "./type";

const initial: Label = { name: '', color: '', text_color: '' };
export function useLabel(param: string) {
  const { data, run, reset } = useAsync(initial);

  React.useEffect(() => {
    if(param) run(getLabel(param));
    else reset();
  }, [param]);

  return data;
}
