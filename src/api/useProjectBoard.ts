import { useAddonState } from "@storybook/api";
import React from "react";
import { ADDON_ID } from "../constants";
import { Board } from ".";
import { getProjectBoard } from "./service";

const READONLY_EMPTY_ARRAY: Board[] = [];

export function useProjectBoard() {
  const [board, setBoard] = useAddonState(ADDON_ID, READONLY_EMPTY_ARRAY);
  
  React.useEffect(() => {
    let isSubscribed = true;
    getProjectBoard().then(d => { isSubscribed && setBoard(d)});
    return () => { isSubscribed = false; }
  }, []);
  
  return board;
}
