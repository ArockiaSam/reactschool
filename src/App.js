import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/common/nav.js';
import Student from './components/student/student';
import StudentB from './components/student/studentB';
import StudentList from './components/student/studentlist';


function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      <div className="content-panel">
        <Route exact path="/student" component={StudentList} />
        {/* <Route exact path="/student/:id" component={Student} /> */}
        <Route exact path="/student/:id" component={StudentB} />
      </div>
      </Router>
    </div>
  );
}

export default App;
