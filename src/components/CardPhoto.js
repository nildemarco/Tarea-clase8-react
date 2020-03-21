import React from 'react';
import styled from 'styled-components';

const StylePhoto = styled.div`
width: 300px;
margin: 5px;
img {
    width: 100%;
    height: auto;
    object-fit: cover;
}
`

const CardPhoto = ({img, likes, comments}) => {
    return (
        <StylePhoto>
        <img alt="Foto publicada" src= {img}></img>
        </StylePhoto>

    );
}
export default CardPhoto;