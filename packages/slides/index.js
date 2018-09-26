import componentApis from './slides/deck.mdx';
import container from './slides/containers.mdx';
import provider from './slides/provider.mdx';
import renderProps from './slides/render-props.mdx';
import hoc from './slides/hoc.mdx';
import compound from './slides/compound.mdx';
import beyond from './slides/beyond-render-props.mdx';
import performance from './slides/performance.mdx';
import extra from './slides/extra';

export default [
  ...componentApis,
  ...container,
  ...hoc,
  ...renderProps,
  ...provider,
  ...compound,
  ...beyond,
  ...performance,
  ...extra,
];
