import React from 'react';
import { Props } from './type';

export default function Label({ name, color, background, group, ...props }: Props) {
    return name ? (
        <span style={{
            backgroundColor: background,
            color: color,
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            paddingBottom: '2px',
            borderRadius: '15px',
            whiteSpace: 'nowrap'
        }} className={props.className}>
            {name}{props.children}
        </span>
    ) : <span>This label doesn't exist on GitLab: <i><b>{group}</b></i></span>
}