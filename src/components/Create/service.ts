import { header, project_path } from "../../api";
import { Issue } from "../Issue";
import { Label } from "../Label/type";
import { Form } from "./type";

export async function postIssue(form: Form): Promise<Issue> {
    const response = await fetch(`${project_path}/issues`, {
        method: 'POST',
        ...header(),
        body: transformForm(form)
    });
    return await response.json();
}

function transformForm(form: Form) {
    return JSON.stringify({
        title: form.title,
        description: form.description,
        labels: [
            form.identifyer.split('--')[0],
            form.identifyer,
            ...form.other].join(',')
    });
}