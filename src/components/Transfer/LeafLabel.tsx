import { Chip } from "@material-ui/core";
import { Icons } from "@storybook/components";
import React from "react";
import { TransferStye } from "./style";

type Props = {
    name: string;
    classes: TransferStye;
    isLive: boolean;
    onClick: (name: string) => void;
    onDelete: (name: string) => void;
}

export default function LeafLabel({ name, classes, isLive, onClick, onDelete }: Props) {
    return (
        <div className={classes.component}>
            <Chip
                size="small"
                icon={
                    <Icons
                        className={classes.avatarComponent}
                        icon='bookmarkhollow'
                        style={{ height: '12px' }}
                    />}
                label={name}
                onClick={isLive ?  null : () => onClick(name)}
                onDelete={isLive ? () => onDelete(name) : null}
            />
        </div>
    )
}