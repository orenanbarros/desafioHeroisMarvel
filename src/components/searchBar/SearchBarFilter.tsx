'use client'

import styled from "styled-components"

import { MagnifyingGlassIcon } from "./MagnifyingGlassIcon"

import { Roboto_Condensed } from 'next/font/google'

const robotoCondesed = Roboto_Condensed({
    weight: ['300', '400', '700'],
    subsets: ['latin']
})

const InlineFilter = styled.div`
    display:flex;
    align-items:center;
    padding-bottom:10px;
    border-bottom:3px solid #151515;
`
const InputSearch = styled.div`
   font-size:26px;

   input{
        border:none;
        background:none;
        padding-left:.5rem;
        
        outline:none;

        ::placeholder {
            color:#767676;
            
        }
   }

`

export default function SearchBarFilter() {
    return (
        <InlineFilter>
            <MagnifyingGlassIcon />
            <InputSearch><input placeholder="PROCURAR" className={robotoCondesed.className}></input></InputSearch>
        </InlineFilter>
    )
}