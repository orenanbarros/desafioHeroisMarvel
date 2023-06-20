'use client'

import styled from "styled-components"
import { MLogo } from "./M"



const TagFooter = styled.footer`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:20px;
`

export default function Header() {
    return (
        <TagFooter>
            <MLogo />
        </TagFooter>
    )
}