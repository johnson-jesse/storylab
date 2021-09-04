import React from "react";
import { Issue, useIssue } from "../components/Issue";
import { Ident } from ".";
import { Props } from '../components/Board';

type SetType = { [key: string]: Issue[] };
const reducer = (accumulator: SetType, currentValue: SetType) => ({ ...accumulator, ...currentValue });

export default function useFilteredProject(enabled: boolean, ident: Ident, project: Props[]) {
    const issue = useIssue(enabled, ident);

    const filtered = React.useMemo(() => {
        if (!project || !project[0] || !issue) return {};

        const result = project && project[0].lists
            .map<{ [key: string]: Issue[] }>(l => ({ [l.label.name]: [] }))
            .reduce(reducer, {});

        const setEntries = Object.entries(result);

        issue.forEach(i => {
            setEntries.forEach(([key]) => {
                if (i.labels.includes(key)) result[key].push(i);
            });
        });

        return result;

    }, [project, issue]);

    return filtered;
}