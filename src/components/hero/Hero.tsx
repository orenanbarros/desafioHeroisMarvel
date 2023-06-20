'use client'

import styled from "styled-components"

import characters_art from '../../app/characters_art.jpg'

import { Roboto_Condensed } from 'next/font/google'

const robotoCondesed = Roboto_Condensed({
    weight: ['300', '400', '700'],
    subsets: ['latin']
})

const HeroText = styled.div`
    position:absolute;
    color:#fff;
    display:flex;
    flex-direction: column;
    text-align: center;
    justify-content:center;
`
const Masthead_headline = styled.span`
  
    @media (min-width: 961px) {
        font-size: 44px;
    }
`
const Masthead_headline_subText = styled.span`
    letter-spacing: .5px;
  
`



export default function Hero() {
    return (
        <section className="relative flex justify-center items-center" id="hero">

            <img src={characters_art.src} className="w-screen" />
            <HeroText>
                <Masthead_headline className={robotoCondesed.className}>PERSONAGENS MARVEL</Masthead_headline>
                <Masthead_headline_subText>Fique viciado em uma porção generosa de heróis e vilões da humilde Casa das idéias!</Masthead_headline_subText>
            </HeroText>

        </section>
    )
}