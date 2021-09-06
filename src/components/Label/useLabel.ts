import React from "react";
import { useAsync } from "../../api";
import { getLabel } from "./service";
import { Props } from "./type";

const initial: Props = { name: '', color: '', text_color: '' };
export function useLabel(param: string) {
  const { data, run } = useAsync(initial);

  React.useEffect(() => {
    if(param) run(getLabel(param));
  }, [param]);

  return data;
}
