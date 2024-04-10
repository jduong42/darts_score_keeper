import { AddScore } from './components/AddScore.js';

import { GlobalProvider } from './context/GlobalState.js';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <AddScore />
    </GlobalProvider>
  );
}

export default App;
