import { ShowScore } from './components/ShowScore.js';
import { AddScore } from './components/AddScore.js';

import { GlobalProvider } from './context/GlobalState.js';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <ShowScore />
      <AddScore playerId={1} />
    </GlobalProvider>
  );
}

export default App;
