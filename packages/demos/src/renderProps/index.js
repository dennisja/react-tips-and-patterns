import React from 'react';
import Fetch from './Loader';
import { getCategories } from '../api/categories';
import { Categories } from '../components/Categories';

export default class RenderPropsDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* Un comment this for the Render Props demo */}
        <Fetch fetchFunction={getCategories}>
          {({ data }) => {
            return <Categories categories={data.recipe_cats} />;
          }}
        </Fetch>
      </React.Fragment>
    );
  }
}
