import { ReactNode } from "react"
import { fonts, sizes, weights } from "../src/components/typo/text.enums"

export type TextProp = {
    /**
     * The text
     */
    children: ReactNode,
    /**
     * Additional tailwind classes
     */
    className?: string,
    /**
     * What font, default is poppins
     */
    font?: keyof typeof fonts,
    /**
     * The size of the string
     * size ranges: s < n < b < l < x
     */
    size?: keyof typeof sizes,
    /**
     * Color of the text in tailwind form
     */
    color?: string
     /**
     * Weight of the text eg bold
     * weight ranges: x < n < b < t < bl
     */
    weight?: keyof typeof weights
}
