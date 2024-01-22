import { FC } from 'react';
import Navigation from './components/Navigation';

import './style.scss';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <Navigation />
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};
