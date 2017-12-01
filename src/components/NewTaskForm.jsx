import React from 'react'; // eslint-disable-line

export default class NewTaskForm extends React.Component {
  // BEGIN (write your solution here)
  addTask = (e) => {
    e.preventDefault()
    this.props.addTask({ text: this.props.newTaskText })
  }

  updateNewTaskText = (e) => {
    e.preventDefault()
    this.props.updateNewTaskText({ text: e.target.value })
  }
  // END

  render() {
    console.log(this.props)
    const { newTaskText } = this.props;

    return <form action="" className="form-inline" onSubmit={this.addTask}>
      <div className="form-group mx-sm-3">
        <input type="text" required
          value={newTaskText} onChange={this.updateNewTaskText} />
      </div>
      <button type="submit" className="btn btn-primary btn-sm">Add</button>
    </form>;
  }
}