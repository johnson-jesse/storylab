import { project_path } from "../../api/const";
import { encodeLabel, header } from "../../api/service";
import { Label } from "./type";

function url(name: string) {
  return `${project_path}/labels/${encodeLabel(name)}`;
}

export async function getLabel(name: string): Promise<Label> {
  const response = await fetch(url(name), {
    ...header(),
  });
  const data = await response.json();
  return data;
}
