import React from "react";
import { useStorybookState } from '@storybook/api';
import { useForm } from 'react-hook-form';
import { Style } from './style';
import Label, { useProjectLabel } from "../Label";
import { Loader } from "@storybook/components";

export default function Create() {
    const [pending, setPending] = React.useState(false);
    const state = useStorybookState();
    const pl = useProjectLabel(true);
    const {
        register,
        handleSubmit,
        formState,
    } = useForm();

    const onSubmit = (data: any) => setPending(true);

    return (
        <Style>
            <form onSubmit={handleSubmit(onSubmit)} className='sl-wrapper' autoComplete="off">
                <label htmlFor="title" className={formState.errors.title && 'error'}>Title</label>
                <input placeholder='title' {...register("title", { required: true, })} disabled={pending} />
                <label htmlFor="description" className={formState.errors.description && 'error'}>Description</label>
                <input placeholder='description' {...register("description", { required: true })} disabled={pending} />
                <label htmlFor="identifying">Identifying Label</label>
                <input placeholder={`${state.storyId}`} {...register("identifying")} disabled />
                <label htmlFor="other">Other labels:</label>
                <select id="other" {...register("other")} multiple disabled={pending}>
                    {
                        pl.map(l => (
                            <option key={l.id} value={l.name}>{l.name}</option>
                        ))
                    }
                </select>
                <div className='sl-loader-wrapper'>{pending && <Loader role="progressbar" className='sl-loader' />}</div>
                <input className='sl-submit' type="submit" disabled={pending} />
            </form>
        </Style>
    );
}