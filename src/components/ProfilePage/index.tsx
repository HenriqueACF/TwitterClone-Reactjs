import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Henrique Assis</h1>
        <h2>@r1qu1_</h2>

        <p>
          Frontend Developer || Software Engineer Student
        </p>

        <ul>
          <li>
            <LocationIcon />
            Belém, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 16 de maio de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>100 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
