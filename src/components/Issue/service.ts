import { storylab_base } from "../../api/const";
import { encodeLabel, header } from "../../api/service";
import { Issue, IssueState } from "./type";

const LABEL_STATE = process.env.SL_STATE ? process.env.SL_STATE.split(',') : ['Progress', 'Review', 'Acceptance', 'Done'];

function url(name: string) {
  return `${storylab_base}/issues?labels=${encodeLabel(name)}`;
}

export async function getIssueByLabelName(name: string): Promise<Issue[]> {
  const response = await fetch(url(name), {
    ...header(),
  });
  return await response.json();
}

export function sortAsType(issue: Issue[]): IssueState {
  const danger: Issue[] = [];
  const warning: Issue[] = [];
  const closed: Issue[] = [];

  issue.forEach(i => {
    if (i.state !== 'opened') closed.push(i);
    if (i.labels.some(s => LABEL_STATE.includes(s)))
      warning.push(i);
    else danger.push(i);
  });

  return {
    danger,
    warning,
    closed
  }
}