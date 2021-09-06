import {
  Person,
  TimeStats,
  TaskCompletionStatus,
  Links,
  References,
  Milestone,
} from "../../api/type";

export type IssueState = {
  danger: Issue[];
  warning: Issue[];
  closed: Issue[];
}

export type Issue = {
  state: string,
  description: string
  author: Person,
  milestone: Milestone,
  project_id: 1,
  assignees: Person[],
  assignee: Person,
  type: string,
  updated_at: string,
  closed_at: string,
  closed_by: Person,
  id: number,
  title: string,
  created_at: string,
  moved_to_id: number,
  iid: number,
  labels: string[],
  upvotes: number,
  downvotes: number,
  merge_requests_count: number,
  user_notes_count: number,
  due_date: string,
  web_url: string,
  references: References,
  time_stats: TimeStats,
  has_tasks: boolean,
  task_status: string,
  confidential: boolean,
  discussion_locked: boolean,
  issue_type: string,
  _links: Links,
  task_completion_status: TaskCompletionStatus
}

export type Props = {
  storiesHash: { [id: string]: any };
  issue: Issue[];
};
