import React, { Component } from "react";

class InputCourse extends Component {
    state = {
        title: ""
    };
    
    onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addCourseProps(this.state.title);
        this.setState({
            title: ""
        });
    };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="f-container">
        <input type="text" className="f-input" placeholder="Add a new Course" value={this.state.title} onChange={this.onChange} name="title" />
        <input type="submit" value="SUBMIT" className="f-submit" />
      </form>
    )
  }
}
export default InputCourse