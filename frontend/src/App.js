import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import UserList from './components/User';
import ProjectList from './components/Projects';
import TodoList from './components/Todoes';
import LoginForm from './components/Auth';
import { BrowserRouter, Route, Link, } from 'react-router-dom'
import Cookies from 'universal-cookie';
import ProjectForm from './components/ProjectForm';
import TodosForm from './components/TodoesForm';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'projects': [],
      'todoes': [],
      'token': []
    }
  }

  set_token(token) {
    const cookies = new Cookies()
    cookies.set('token', token)
    this.setState({ 'token': token }, () => this.load_data())
  }

  is_authenticated() {
    return this.state.token != ''
  }

  logout() {
    this.set_token('')
  }

  get_token_from_storage() {
    const cookies = new Cookies()
    const token = cookies.get('token')
    this.setState({ 'token': token }, () => this.load_data())
  }

  get_token(username, password) {
    axios.post('http://127.0.0.1:8000/api-token-auth/', {
      username: username,
      password: password
    })
      .then(response => {
        this.set_token(response.data['token'])
      }).catch(error => alert('Неверный логин или пароль'))
  }

  get_headers() {
    let headers = {
      'Content-Type': 'application/json'
    }
    if (this.is_authenticated()) {
      headers['Authorization'] = 'Token ' + this.state.token
    }
    return headers
  }

  createProject(name, repo, users) {
    const headers = this.get_headers()
    const data = { name: name, repo: repo, users: users }
    axios.post(`http://127.0.0.1:8000/api/projects/`, data, { headers })
      .then(response => {
        let new_project = response.data
      })
      .catch(error => console.log(error))
  }

  createTodoes(project, text, user, is_active) {
    const headers = this.get_headers()
    const data = { project: project, text: text, user: user, is_active: is_active }
    axios.post(`http://127.0.0.1:8000/api/todoes/`, data, { headers })
      .then(response => {
        let new_todoes = response.data
      })
      .catch(error => console.log(error))
  }

  deleteProject(id) {
    const headers = this.get_headers()
    axios.delete(`http://127.0.0.1:8000/api/projects/${id}`, { headers })
      .then(response => {
        this.setState({
          projects: this.state.projects.filter((project) => project.id !== id)
        })
      }).catch(error => console.log(error))
  }

  deleteToDo(id) {
    const headers = this.get_headers()
    axios.delete(`http://127.0.0.1:8000/api/todoes/${id}`, { headers })
      .then(response => {
        this.setState({
          todoes: this.state.todoes.filter((todo) => todo.id !== id)
        })
      }).catch(error => console.log(error))
  }

  load_data() {
    const headers = this.get_headers()
    axios.get('http://127.0.0.1:8000/api/users', { headers })
      .then(response => {
        const users = response.data.results
        this.setState(
          {
            'users': users
          }
        )
      }).catch(error => {
        console.log(error)
        this.setState({ users: [] })
      })

    axios.get('http://127.0.0.1:8000/api/projects', { headers })
      .then(response => {
        const projects = response.data.results
        this.setState(
          {
            'projects': projects
          }
        )
      }).catch(error => {
        console.log(error)
        this.setState({ projects: [] })
      })


    axios.get('http://127.0.0.1:8000/api/todoes', { headers })
      .then(response => {
        const todoes = response.data.results
        this.setState(
          {
            'todoes': todoes
          }
        )
      }).catch(error => {
        console.log(error)
        this.setState({ todoes: [] })
      })

  }

  componentDidMount() {
    this.get_token_from_storage()
  }

  render() {
    return (
      <div className='App' >
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                {this.is_authenticated() ? <button onClick={() => this.logout()}>Logout</button> :
                  <Link to='/login'>Login</Link>}
              </li>
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
          <Route exact path='/projects/create' component={() => <ProjectForm createProject={(name, repo, users) => this.createProject(name, repo, users)} />} />
          <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects} deleteProject={(id) => this.deleteProject(id)} />} />
          <Route exact path='/todoes/create' component={() => <TodosForm createTodoes={(project, text, user, is_active) => this.createTodoes(project, text, user, is_active)}/>} />
          <Route exact path='/todoes' component={() => <TodoList todoes={this.state.todoes} deleteToDo={(id) => this.deleteToDo(id)} />} />
          <Route exact path='/login' component={() => <LoginForm get_token={(username, password) => this.get_token(username, password)} />} />
        </BrowserRouter>
      </div>
    )
  }

}

export default App;
