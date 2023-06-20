import { CharacterFetchResponse } from "@/types/character-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import md5 from "md5";

const marvelPublicKey = 'c364e2670b671671131bb5c171be4105'
const marvelPrivateKey = '3eb59916d84345674ef2daab65fa2662a97ad8d2'
const time = Number(new Date());
const hash = md5(time + marvelPrivateKey + marvelPublicKey)

const fetcher = (): AxiosPromise<CharacterFetchResponse> => {
    return axios.get(process.env.NEXT_PUBLIC_API_URL + `/v1/public/characters?ts=${time}&apikey=${marvelPublicKey}&hash=${hash}`)
}
export function useCharacters() {
    const { data } = useQuery({
        queryFn: fetcher,
        queryKey: ['characters'],
    })

    return {
        data: data?.data.data?.results
    }
}