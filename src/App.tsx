// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { donneesTest } from './component/types/Propriete'
import Tableau from './component/tableau/tableau.component'
const App = () => {
  return (
      <div>
          <h1>Tableau Statistiques des joueurs</h1>
          <Tableau  />
      </div>
  );
};

export default App;