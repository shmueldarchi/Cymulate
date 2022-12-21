import logo from './logo.svg';
import './App.css';
import {  Routes,  Route} from "react-router-dom";
import { Auth } from '../src/components/authentication/Authentication';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Auth />} />
  </Routes>
  );
}

export default App;
