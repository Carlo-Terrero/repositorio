import React, {useState} from 'react';
import Navigation from './navigation/navigationMenu';
import RoutesNavigation from './navigation/routesNavigation';

function App() {

  const [login, setLogin] = useState(false);

  return (
    <>
      <Navigation state={login} changeState={setLogin}/>
      <RoutesNavigation state={login} changeState={setLogin}/>
    </>
  )
}

export default App
