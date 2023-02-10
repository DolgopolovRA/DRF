import React from 'react'

class TodoesForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { project: '', user: '', text: '', is_active: '' }
    }
    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }
    handleSubmit(event) {
        console.log(this.state.project)
        console.log(this.state.user)
        console.log(this.state.text)
        console.log(this.state.is_active)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label for="project">project</label>
                    <input type="text" className="form-control" name="project"
                        value={this.state.project} onChange={(event) => this.handleChange(event)} />
                </div>
                <div className="form-group">
                    <label for="user">user</label>
                    <input type="number" className="form-control" name="user"
                        value={this.state.user} onChange={(event) => this.handleChange(event)} />
                </div>
                <div className="form-group">
                    <label for="text">text</label>
                    <input type="text" className="form-control" name="text"
                        value={this.state.text} onChange={(event) => this.handleChange(event)} />
                </div>
                <div className="form-group">
                    <label for="is_active">is_active</label>
                    <input type="number" className="form-control" name="is_active"
                        value={this.state.is_active} onChange={(event) => this.handleChange(event)} />
                </div>
                <input type="submit" className="btn btn-primary" value="Save" />
            </form>
        );
    }
}
export default TodoesForm