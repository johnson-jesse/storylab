import { Chip, CircularProgress } from "@material-ui/core";
import { Icons } from "@storybook/components";
import React from "react";
import { postLabel } from "../Label/service";
import { useChipStyle } from "./style";

type Props = {
    name: string;
    avatar: string;
    variant: 'component' | 'bookmarkhollow';
    className?: string;
    isLive: boolean;
    refresh(): void;
}

export default function ActionLabel({ name, avatar, variant, className, isLive, refresh }: Props) {
    const style = useChipStyle();
    const [pending, setPending] = React.useState(false);
    
    const handleClick = () => {
        setPending(true);
        postLabel(name).finally(() => {
            setPending(false);
            refresh();
        });
    }
    
    const handleDelete = () => { 
        setPending(true);
    }

    const action: any = {};
    if (isLive) {
        action.onDelete = handleDelete;
        action.deleteIcon = pending ? <CircularProgress size="small" /> : null;
    }
    else action.onClick = handleClick;

    return (
        <div className={className}>
        <Chip
            size="small"
            color={isLive ? 'primary' : 'default'}
            classes={style}
            icon={
                <Icons
                    className={avatar}
                    icon={variant}
                    style={{ height: '12px' }}
                />}
            label={name}
            {...action}
            disabled={pending}
        />
        </div>
    )
}