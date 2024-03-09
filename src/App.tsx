import './App.css';
import MapView from './components/MapView';
import React from "react";
import { Login } from './components/login.tsx';
import useToken from './components/useToken';
import useID from './components/useID';


function App() {
  const { token, setToken } = useToken();
  const { id, setID } = useID();

  if (!token) {
    return <Login setToken = {setToken} setID = {setID} />
  }

  else {
    return (

      <MapView data = { [token, id] }/>

    );
  }
}

export default App;
