import React from "react";
import { Issue, useIssue } from "../components/Issue";
import { GroupIdent } from ".";
import { Props as Board } from '../components/Board';

type SetType = { [key: string]: Issue[] };
const reducer = (accumulator: SetType, currentValue: SetType) => ({ ...accumulator, ...currentValue });

export default function useFilteredProject(group: GroupIdent, project: Board[]) {
    const { data, fetch } = useIssue(group);

    const filtered = React.useMemo(() => {
        if (!project || !project[0] || !data) return {};

        const result = project && project[0].lists
            .map<{ [key: string]: Issue[] }>(l => ({ [l.label.name]: [] }))
            .reduce(reducer, { 'Opened': [] });

        result['Closed'] = [];

        const setEntries = Object.entries(result);

        data.forEach(i => {
            const added: number[] = [];

            setEntries.forEach(([key]) => {
                if (i.labels.includes(key)) {
                    result[key].push(i);
                    added.push(i.id);
                }
            });

            if (!added.includes(i.id)) {
                if (i.state === 'opened') result.Opened.push(i);
                else result.Closed.push(i)
            }
        });

        return result;

    }, [project, data]);

    return {
        filtered,
        fetch
    }
}