import React from 'react';
import { Props } from './type';

export default function Label({ name, color, text_color }: Props) {
    return (
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
    );
}