import { project_path } from "../../api/const";
import { encodeLabel, header } from "../../api/service";
import { Label } from "./type";

function url() {
  return `${project_path}/labels`;
}

export async function getLabel(name: string): Promise<Label> {
  const response = await fetch(`${url()}/${encodeLabel(name)}`, {
    ...header(),
  });
  const data = await response.json();
  return data;
}

// By default, this request returns 20 results at a time because the API results are paginated.
export async function getProjectLabel(): Promise<Label[]> {
  const response = await fetch(`${url()}`, {
    ...header(),
  });
  const data = await response.json();
  return data;
}