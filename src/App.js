
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard';
import Dashboardt from './components/Dashboard/tdashboard';
import Form from './components/Form/login';
import Navbar from './components/Navbar/Navbar.js';
import Assignment from './components/Assigmentpage/Assignment.js'
import Navbart from './components/Navbar/tNavbar.js'
function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Form />

          </Route>
          <Route exact path="/dashboard/student">

            <Navbar />
            <Dashboard />
          </Route>
          <Route exact path="/dashboard/teacher">

            <Navbart />
            <Dashboardt />
          </Route>
          <Route exact path="/student/assignment">
            <Assignment />
          </Route>
          <Route exact path="/teacher/assignment">

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
