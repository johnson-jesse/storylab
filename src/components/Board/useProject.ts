import { useAddonState } from "@storybook/api";
import React from "react";
import { PARAM_KEY } from "../../constants";
import { getBoard } from "./service";
import { BoardService, initial } from "./type";

export function useProject(): BoardService {
    const [project, setProject] = useAddonState(PARAM_KEY, initial);

    const fetch = React.useCallback(() => {
        getBoard().then(setProject)
    }, []);

    React.useEffect(() => {
        fetch();
    }, []);

    return {
        project,
        fetch
    };
}
