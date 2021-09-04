import { storylab_base, header } from '../../api';
import { Board } from "./type";

const url = `${storylab_base}/projects/${process.env.SL_GL_PROJECT_ID}/boards`;

export async function getBoard(): Promise<Board[]> {
    const response = await fetch(url, { ...header() });
    return await response.json();
  }