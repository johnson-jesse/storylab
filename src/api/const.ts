export const version = 'api/v4';
export const storylab_base = process.env.SL_GL_BASE_URL ? `${process.env.SL_GL_BASE_URL}/${version}` : `https://gitlab.com/${version}`;
export const project_path = `${storylab_base}/projects/${process.env.SL_GL_PROJECT_ID}`;