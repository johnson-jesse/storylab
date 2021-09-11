import React from "react";
import { useStorybookState } from '@storybook/api';
import { useForm } from 'react-hook-form';
import { useProjectLabel } from "../Label";
import { Loader } from "@storybook/components";
import { Form } from "./type";
import { postIssue } from "./service";
import { Issue } from "../Issue/type";
import { useTransferStyle } from './style';

export default function Create({ refresh }: { refresh: () => void }) {
    const [pending, setPending] = React.useState(false);
    const [issue, setIssue] = React.useState<Issue>();
    const state = useStorybookState();
    const { label: pl } = useProjectLabel();
    const style = useTransferStyle();

    const {
        register,
        handleSubmit,
        formState,
        reset
    } = useForm<Form>();

    const onSubmit = async (form: Form) => {
        setPending(true);
        const result = await postIssue(form);
        setPending(false);
        setIssue(result);
        reset();
        refresh();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.slWrapper} autoComplete="off">
            <label htmlFor="title" className={formState.errors.title && 'error'}>Title</label>
            <input placeholder='title' {...register("title", { required: true, })} disabled={pending} />
            <label htmlFor="description" className={formState.errors.description && 'error'}>Description</label>
            <input placeholder='description' {...register("description", { required: true })} disabled={pending} />
            <label htmlFor="identifyer">Identifying Label</label>
            <input value={`${state.storyId}`} {...register("identifyer")} readOnly />
            <label htmlFor="other">Other labels:</label>
            <select id="other" {...register("other")} multiple disabled={pending}>
                {
                    pl.filter(l => !state.storiesHash.hasOwnProperty(l.name)).map(l => (
                        <option key={l.id} value={l.name}>{l.name}</option>
                    ))
                }
            </select>
            <div className={style.slLoaderWrapper}>
                {pending && <Loader role="progressbar" className='sl-loader' />}
                {!pending && issue && (
                    <a href={issue.web_url} target="_blank">
                        New issue {issue.iid} created
                    </a>
                )}
            </div>
            <input className={style.slSubmit} type="submit" disabled={pending} />
        </form>
    );
}