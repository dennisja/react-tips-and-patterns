import React from 'react';
import Fetch from './Fetch';
import { Loading } from '../components/Common';

export default function FetchingContainer(props) {
  return (
    <Fetch fetchFunction={props.fetchFunction}>
      {({ loading, error, data }) => {
        if (loading) {
          return <Loading />;
        }

        if (error) {
          return <div>error</div>;
        }

        return props.children({ data, ...props });
      }}
    </Fetch>
  );
}
