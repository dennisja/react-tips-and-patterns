import theme from 'mdx-deck/themes';
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia';

export default {
  ...theme,
  colors: {
    text: 'rgb(106, 215, 152)',
    background: 'rgb(1, 22, 39)',
    link: 'blue',
  },
  prism: {
    style: okaidia,
  },
  strong: {
    color: 'yellow',
    textTransform: 'capitalize',
  },
};
