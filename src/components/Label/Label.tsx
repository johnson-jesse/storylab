import React from 'react';
import { Props } from './type';

export default function Label({ name, color, text_color, group }: Props) {
    return name ? (
        <span style={{
            backgroundColor: color,
            color: text_color,
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            paddingBottom: '2px',
            borderRadius: '15px'
        }}>
            {name}
        </span>
    ) : <span>This label doesn't exist on GitLab: <i><b>{group}</b></i></span>
}