export const initial: Props[] = [{ id: 0, name: '', lists: [] }];

export type Props = Pick<Board, 'id' | 'name' | 'lists'>;

export interface BoardService {
    project: Props[];
    fetch(): void;
}

export type Board = {
    id: number;
    name: string;
    project: Project;
    milestone: Milestone;
    lists: List[];
}

export type Project = {
    id: number;
    name: string;
    name_with_namespace: string;
    path: string;
    path_with_namespace: string;
    http_url_to_repo: string;
    web_url: string;
}

export type Milestone = {
    id: number;
    title: string;
}

// This label slightly differs from the issues label
export type Label = {
    name: string;
    color: string;
    description?: any;
}

export type List = {
    id: number;
    label: Label;
    position: number;
    max_issue_count: number;
    max_issue_weight: number;
    limit_metric?: any;
}
