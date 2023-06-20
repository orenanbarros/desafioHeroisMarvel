"use client"
import { useCharacters } from '@/hooks/useCharacters'
import React from 'react'

interface CharactersListInterface {

}

const CharactersList = (props: CharactersListInterface) => {
    const { data } = useCharacters()
    console.log(data);
    return (
        <div>charactersList</div>
    )
}

export default CharactersList