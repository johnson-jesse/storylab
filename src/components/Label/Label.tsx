import React from 'react';
import { Props } from './type';

export default function Label({ label }: Props) {
    if (!label.name) return (
        <span>No data for this component</span>
    );

    return (
        <span style={{
            backgroundColor: label.color,
            color: label.text_color,
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            paddingBottom: '2px',
            borderRadius: '15px'
        }}>
            {label.name}
        </span>
    );
}