import { useParameter } from "@storybook/api";
import React from "react";
import { PARAM_KEY } from "../../constants";
import { getLabel } from "./service";
import { Label } from "./type";

export function useLabel() {
  const param = useParameter<string>(PARAM_KEY);
  const [label, setLabel] = React.useState<Label>({} as Label);

  React.useEffect(() => {
    let isSubscribed = true;
    if (param) getLabel(param).then((l) => isSubscribed && setLabel(l));
    return () => {
      isSubscribed = false;
    };
  }, [param]);

  return label;
}
