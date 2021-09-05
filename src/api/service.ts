export function encodeLabel(name: string) {
  return encodeURI(name).replace("/", "%2F");
}

export function header() {
  return {
    headers: {
      Authorization: `Bearer ${process.env.SL_GL_TOKEN}`,
      'Content-Type': 'application/json',
      Accept: "application/json",
    },
  };
}