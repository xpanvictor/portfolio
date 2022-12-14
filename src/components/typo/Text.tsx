import React, { useEffect } from 'react'
import { TextProp } from '../../../types/text.type'
import { fonts, sizes, weights } from './text.enums'

const Text = ({children, font='pop', size='normal', color='text-ascent-300', weight='normal', className}: TextProp) => {
    const t_font = fonts[font]
    const t_size = sizes[size]
    const t_weight = weights[weight]
    return (
        <span className={`${t_font} ${t_weight} ${t_size} ${color} ${className}`}
        >{children}</span>
    )
}

export const SubText = ({children}: TextProp) => {
    return (
        <Text font='inter' color='text-bgs-200'>{children}</Text>
    )
}

export const LabelText = ({children, color='text-ascent-300', size='xl'}: TextProp) => {
    return (
        <Text font='ubuntu' weight='black' size={size} color={color}>{children}</Text>
    )
}

export default Text
