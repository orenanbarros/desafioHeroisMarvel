
import styled from "styled-components"

const IconSearch = styled.span`
    fill: none;
    stroke-width: 2px;
    stroke-linecap: square;
    stroke: #151515;
`




export function MagnifyingGlassIcon() {
    return (
        <IconSearch>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fillRule="evenodd"><circle cx="6.5" cy="6.5" r="5.5"></circle><path d="M14 14l3.536 3.536"></path></svg>
        </IconSearch>
    )
}

