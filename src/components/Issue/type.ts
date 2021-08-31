import {
  Person,
  TimeStats,
  TaskCompletionStatus,
  Links,
  References,
} from "../../api/type";

export type IssueState = {
  danger: Issue[];
  warning: Issue[];
  closed: Issue[];
}

export type Issue = {
  id: number;
  iid: number;
  project_id: number;
  title: string;
  description: string;
  state: string;
  created_at: Date;
  updated_at: Date;
  closed_at?: any;
  closed_by?: any;
  labels: string[];
  milestone?: any;
  assignees: Person[];
  author: Person;
  type: string;
  assignee: Person;
  user_notes_count: number;
  merge_requests_count: number;
  upvotes: number;
  downvotes: number;
  due_date?: any;
  confidential: boolean;
  discussion_locked?: any;
  issue_type: string;
  web_url: string;
  time_stats: TimeStats;
  task_completion_status: TaskCompletionStatus;
  blocking_issues_count: number;
  has_tasks: boolean;
  _links: Links;
  references: References;
  moved_to_id?: any;
  service_desk_reply_to?: any;
};

export type Props = {
  param: string;
  issue: Issue[];
};
