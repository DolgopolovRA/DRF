import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import UserList from './components/User';
import ProjectList from './components/Projects';
import TodoList from './components/Todoes';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'projects': [],
      'todoes': []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users')
      .then(response => {
        const users = response.data
        this.setState(
          {
            'users': users
          }
        )
      }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8000/api/projects')
      .then(response => {
        const projects = response.data
        this.setState(
          {
            'projects': projects
          }
        )
      }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8000/api/todoes')
      .then(response => {
        const todoes = response.data
        this.setState(
          {
            'todoes': todoes
          }
        )
      }).catch(error => console.log(error))

  }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to='/users'>Users</Link>
              </li>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>
              <li>
                <Link to='/todoes'>ToDo</Link>
              </li>
            </ul>
          </nav>
          <Route exact path='/users' component={() => <UserList users={this.state.users} />} />
          <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects} />} />
          <Route exact path='/todoes' component={() => <TodoList todoes={this.state.todoes} />} />
        </BrowserRouter>
      </div>
    )
  }

}

export default App;
