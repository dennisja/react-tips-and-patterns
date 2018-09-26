import React from 'react';
import { ListWrapper, ItemCard } from './Common';

export const Categories = ({ categories }) => (
  <ListWrapper>
    {categories.map(category => (
      <Category {...category} key={category.id} />
    ))}
  </ListWrapper>
);

const Category = ({ name }) => <ItemCard>{name}</ItemCard>;
