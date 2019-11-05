import styled from 'styled-components';
import { IonInput } from '@ionic/react';

export const StyledBrand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    margin: 0px 0px 0.5rem;
    font-size: 1.2rem;
    font-weight: 700;
    color: #5d5d5d;
  }
`;

export const StyledLogo = styled.img`
  width: 3.2rem;
`;

export const StyledHeader = styled.div`
  width: fit-content;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledInput = styled(IonInput)`
  border: solid;
  border-color: #dfe1e5;
  border-radius: 2rem;
  border-width: 1px;
`;
