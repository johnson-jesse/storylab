import React from 'react';
import { Props } from './type';

export default function Label({ color, background, ...props }: Props) {
    return (
        <span style={{
            backgroundColor: background,
            color: color,
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            paddingBottom: '2px',
            borderRadius: '15px',
            whiteSpace: 'nowrap'
        }} className={props.className}>
            {props.hasOwnProperty('name') ?
                (props as { name: string })['name'] :
                (props as { children: any })['children']}
        </span>
    );
}