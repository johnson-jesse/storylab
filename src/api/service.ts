import { storylab_base } from "./const";

export function encodeLabel(name: string) {
  return name.replace("/", "%2F");
}

export function header() {
  return {
    headers: {
      Authorization: `Bearer ${process.env.SL_GL_TOKEN}`,
      Accept: "application/json",
    },
  };
}

export async function getProjectBoard() {
  const url = `${storylab_base}/projects/${process.env.SL_GL_PROJECT_ID}/boards`;
  const response = await fetch(url, {
    ...header(),
  });
  return await response.json();
}