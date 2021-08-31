import { project_path } from "../../api/const";
import { header } from "../../api/delegate";
import { Label } from "./type";

function url(name: string) {
  return `${project_path}/labels?${name}=true`;
}

export async function getLabel(name: string): Promise<Label> {
  const response = await fetch(url(name), {
    ...header(),
  });
  const data = await response.json();
  console.log('getLabel:', data);
  return data[0];
}
