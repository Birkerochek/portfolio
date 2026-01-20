import React from "react";


export interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
    color?: 'primary' | 'gray' | 'black' | 'white';
    variant?: "h1" | "h2" | "h3" | "h4" | "body" | "small" | "caption" | "overline";
    as?: React.ElementType;
    customStyles?: boolean;
}