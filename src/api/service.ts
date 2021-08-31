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
