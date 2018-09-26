import React from 'react';
import { ListWrapper, ItemCard, Loading } from './Common';
import { getRecipes } from '../api/recipes';
import { withData } from '../hocs/fetch';

// @withData({ fetchFunction: getRecipes })
class Recipes extends React.Component {
  render() {
    const { loading, error, data } = this.props;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <div>Error </div>;
    }

    return (
      <ListWrapper>
        {data.recipes.map(({ name, id }) => (
          <ItemCard key={id}>
            <strong>Recipe Name:</strong>
            {name}
          </ItemCard>
        ))}
      </ListWrapper>
    );
  }
}

// export default Recipes;

export default withData({ fetchFunction: getRecipes })(Recipes);
