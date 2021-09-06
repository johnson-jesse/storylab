import React from "react";
import { useAsync } from "../../api";
import { getLabel } from "./service";
import { Label } from "./type";

const initial: Pick<Label, 'name' | 'color' | 'text_color' > = { name: '', color: '', text_color: '' };
export function useLabel(param: string) {
  const { data, run } = useAsync(initial);

  React.useEffect(() => {
    if(param) run(getLabel(param));
  }, [param]);

  return data;
}
