
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/common/nav.js';
import Notification from './components/common/notification.js';
// import Student from './components/student/student';
import StudentB from './components/student/studentB';
import StudentList from './components/student/studentlist';
import SampleComponent from './components/student/temp';


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
      <SampleComponent />
      <Notification />
    </div>
  );
}


export default App;

