import { storylab_base } from "../../api/const";
import { encodeLabel, header } from "../../api/service";
import { Issue, IssueState } from "./type";

function url(name: string) {
  return `${storylab_base}/issues?labels=${encodeLabel(name)}`;
}

export async function getIssueByLabelName(name: string): Promise<IssueState> {
  const response = await fetch(url(name), {
    ...header(),
  });
  const data = await response.json();
  return sortAsType(data);
}

export function sortAsType(issue: Issue[]): IssueState {
  const danger: Issue[] = [];
  const warning: Issue[] = [];
  const closed: Issue[] = [];

  issue.forEach(i => {
    if (i.state !== 'opened') closed.push(i);
    if (i.labels.some(s => ['Progress', 'Review', 'Acceptance', 'Done'].includes(s)))
      warning.push(i);
    else danger.push(i);
  });

  return {
    danger,
    warning,
    closed
  }
}