import { Chip } from "@material-ui/core";
import { Icons } from "@storybook/components";
import React from "react";
import { useLabelStyle } from "./style";

type Props = {
    name: string;
    className: string;
    isLive: boolean;
    onClick: (name: string) => void;
    onDelete: (name: string) => void;
}

export default function BranchLabel({ name, className, isLive, onClick, onDelete }: Props) {
    const { leaf, branch, ...style } = useLabelStyle({ isLive });
    return (
        <div className={className}>
            <Chip
                classes={style}
                className={isLive ? 'live' : ''}
                size="small"
                icon={
                    <Icons
                        className={branch}
                        icon='component'
                        style={{ height: '12px' }}
                    />}
                label={name}
                onClick={isLive ? null : () => onClick(name)}
                onDelete={isLive ? () => onDelete(name) : null}
            />
        </div>
    )
}