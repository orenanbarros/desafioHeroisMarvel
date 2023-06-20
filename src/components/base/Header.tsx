'use client'

import styled from "styled-components"
import { MarvelLogo } from "./Marvel"


const TagHeader = styled.header`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:20px;
`

export default function Header() {
    return (
        <TagHeader>
            <MarvelLogo />
        </TagHeader>
    )
}