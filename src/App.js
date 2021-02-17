import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/common/nav.js';
import Student from './components/student/student';
import StudentList from './components/student/studentlist';


function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      <div className="content-panel">
        <Route exact path="/student" component={StudentList} />
        <Route exact path="/student/:id" component={Student} />
      </div>
      </Router>
    </div>
  );
}

export default App;
