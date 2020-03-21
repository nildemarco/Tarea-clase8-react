import React from 'react';
import styled from 'styled-components';
import CardPhoto from './CardPhoto'

const ContainerMain = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
text-align: justify;`
const ContainerPhotos = ({ feedsource }) => {

    return (
        <ContainerMain>
            {
                feedsource.map(photo =>
                    <CardPhoto
                        key={ photo.id }
                        img={ photo.source }
                        likes={ photo.likes }
                        comments= { photo.comments } />
                )
            }
        </ContainerMain>
    );
}
export default ContainerPhotos