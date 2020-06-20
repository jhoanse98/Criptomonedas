import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
 font-size: 30px;
 padding: 1rem;
 text-transform: uppercase;
 font-family: 'Bebas Neue', cursive;
 font-weight: bold;
 color: #FFF;
 background-color: #b7322c;
 text-align: center;
`;

const Error = ({mensaje}) => {
    return (
        <MensajeError>{mensaje}</MensajeError>
      );
}

Error.propTypes = {
  mensaje : PropTypes.string.isRequired,
};
 
export default Error;