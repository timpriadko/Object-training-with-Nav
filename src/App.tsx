import { FC } from 'react';
import Navigation from './components/Navigation';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Navigation />
    </div>
  );
};
