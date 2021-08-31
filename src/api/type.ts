export type Person = {
  id: number;
  name: string;
  username: string;
  state: string;
  avatar_url: string;
  web_url: string;
};

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
