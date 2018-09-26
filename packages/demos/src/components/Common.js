import React from 'react';
import styled from 'styled-components';

export const ListWrapper = styled.ul`
  display: grid;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 10px;

  @media only screen and (max-width: 676px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
  }
`;

export const ItemCard = styled.li`
  list-style-type: none;
  padding: 30px;
  display: block;
  border: 1px solid #eee;
  box-shadow: 1px 1px 1px 1px #eee;
  background-color: white;
`;

export const Loading = () => <div>Loading....</div>;
