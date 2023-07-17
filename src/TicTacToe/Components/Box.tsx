import styled from 'styled-components';
import React from 'react';
import { ISquareData } from '../types';

const StyledSquare = styled.div`
  border: 6px solid #2c3e50;
  border-radius: 2px;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Square: React.FC<{
  data: ISquareData;
  onClick: (data: ISquareData) => void;
}> = ({ data, onClick }) => {
  const handleClick = () => {
    if (data === null) {
      onClick(data);
    }
  };

  return <StyledSquare onClick={handleClick}>{data}</StyledSquare>;
};
