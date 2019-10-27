import React from 'react';
import { IonContent, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import styled from 'styled-components';
import logo from '../assets/ius-logo.svg';

const StyledBrand = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 35%;

  h1 {
    margin: 0px 0px 0.5rem;
    font-size: 1.2rem;
    font-weight: 700;
    color: #5d5d5d;
  }
`;

const StyledLogo = styled.img`
  width: 3.2rem;
`;

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent>
        <StyledBrand>
          <StyledLogo alt="astronaut" className="astronaut" src={logo} />
          <h1>Instant Username Search</h1>
        </StyledBrand>
        <IonInput placeholder="Search username"></IonInput>
      </IonContent>
    </IonPage>
  );
};

export default Home;
