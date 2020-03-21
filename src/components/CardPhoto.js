import React from 'react';
import styled from 'styled-components';

const StylePhoto = styled.div`
width: 295px;
margin: 5px;
img {
    width: 295px;
    height: 295px;
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