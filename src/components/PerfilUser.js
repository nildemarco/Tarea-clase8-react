import React from 'react';
import styled from 'styled-components';
import PhotoUser from '../img/user.jpeg';

const Perfil = styled.main `
height: 230px;
display: flex;
justify-content: space-around;
align-items: center;
padding: 20px 200px;

.container-photo-perfil {
    width: 200px;
    border-radius: 50%;
}
img {
    width: 100%;
    height: 185px;
    border-radius: 50%;
    object-fit: cover;
}
.perfil-details {
    width: 50%;
    heigth:200px;
    div {
        display:flex;
        flex-direction: colummns;
        margin-bottom: 10px;
        h3 {
            margin-right: 10px;
        }
    }
.perfil-info {
    display: flex;
    justify-content: flex-start;
    span {
        font-weight: bold;
        margin-right: 7px;
    }
    p{
        margin-right: 10px;
    }
}
h4 {
    margin-top 10px;
}
}
`
const PerfilUser = () => {
    return (
     <Perfil>
      <div className="container-photo-perfil"> 
          <img alt="Foto del usuario" src= {PhotoUser}></img>
      </div>
      <div className="perfil-details">
          <div>
          <h3>Lalolanda</h3>
          <button>Edit Perfil</button>
          </div>
          <div className="perfil-info">
          <span>5</span><p>Post</p><span>299</span><p>Followers</p> 
          <span>325 </span> <p>Following </p>
          </div>
          <h4>Lalo</h4>
      </div>

     </Perfil> 
    );
}
export default PerfilUser;