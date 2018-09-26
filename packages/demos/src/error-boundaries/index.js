import React from 'react';
import styled from 'styled-components';

// will fail in development mode
// easily confirm on codesandbox https://codesandbox.io/s/n4z49z0lxl
class ItemErrorBoundary extends React.Component {
  state = {
    errorOccured: false,
  };

  componentDidCatch(error, info) {
    this.setState({ errorOccured: true, error });
  }

  render() {
    if (this.state.errorOccured) {
      return (
        <Item error={true}>
          <Title title="Error:" /> {this.state.error.message}
        </Item>
      );
    }
    return this.props.children;
  }
}

const Item = styled.div`
  list-style-type: none;
  padding: 30px;
  display: block;
  border: 1px solid #eee;
  box-shadow: 1px 1px 1px 1px #eee;
  color: ${(props) => (props.error ? 'white' : 'black')};
  background-color: ${(props) => (props.error ? 'red' : 'white')};
`;

const Strong = styled.strong`
  font-weight: bold;
  text-transform: capitalize;
`;

const Title = ({ title }) => {
  console.log(title);
  if (!title) {
    throw new Error('Title Not Specified');
  }
  return <Strong>{title}</Strong>;
};

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 10px;

  @media only screen and (max-width: 676px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
  }
`;

const ListItem = ({ desc, title }) => (
  <ItemErrorBoundary>
    <Item>
      <Title title={title} />: {desc}
    </Item>
  </ItemErrorBoundary>
);

const items = [
  { name: 'mango', desc: 'A cool fruit to eat' },
  { name: 'dj', desc: 'A cool guy to .....' },
  { name: 'Chad', desc: 'An revolutionary English Speaker' },
  { title: 'kkk' },
];

const ItemsList = ({ items }) => (
  <ListWrapper>
    {items.map(({ name, desc }) => (
      <ListItem desc={desc} title={name} key={name} />
    ))}
  </ListWrapper>
);

export default () => <ItemsList items={items} />;
