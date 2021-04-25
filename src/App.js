import Navbar from './components/Navbar/';
import NoteList from './components/NoteList/';
import About from './components/About/';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={NoteList}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
