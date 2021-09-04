import React from "react";
import { useAsync } from "../../api";
import { getLabel } from "./service";
import { Props } from "./type";

const initial: Props = { name: '', color: '', text_color: '' };
export function useLabel(enabled: boolean, param: string) {
  const { data, run, reset } = useAsync(initial);

  React.useEffect(() => {
    if(enabled && param) run(getLabel(param));
    else reset();
  }, [enabled, param]);

  return data;
}
