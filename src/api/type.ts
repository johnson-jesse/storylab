import { Label } from "src/components/Label";

export type Ident = string;

export type Person = {
  id: number;
  name: string;
  username: string;
  state: string;
  avatar_url: string;
  web_url: string;
};

export type Milestone = {
  project_id : number,
  description : string,
  state : string,
  due_date : number,
  iid : number,
  created_at : string,
  title : string,
  id : number,
  updated_at : string
}

export type TimeStats = {
  time_estimate: number;
  total_time_spent: number;
  human_time_estimate?: any;
  human_total_time_spent?: any;
};

export type TaskCompletionStatus = {
  count: number;
  completed_count: number;
};

export type Links = {
  self: string;
  notes: string;
  award_emoji: string;
  project: string;
};

export type References = {
  short: string;
  relative: string;
  full: string;
};

export type List = {
  id: number;
  label: Label;
}

export type Board = {
  id: number;
  name: string;
  lists: List[];
}

export type Phase = {
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