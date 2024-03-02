import styled from "styled-components";

type PicturePropsTypes = {
    src:string,
    alt:string,
}

export const Picture = styled.img<PicturePropsTypes>`
    width: 280px;
    height: 170px;
    border-radius: 10px;
    margin: 10px;
`