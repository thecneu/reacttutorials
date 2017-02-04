import React from 'react';
import Link from './Link';

export default () => (
  <footer>
  Show:
  {' '}
  <Link active={true}>All</Link>
  {' '}
  <Link>Active</Link>
  {' '}
  <Link>Complete</Link>
  </footer>
)