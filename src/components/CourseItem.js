import React from "react";

class CourseItem extends React.Component {
  render() {
    const completeStyle = {
    }

    return <li className="course-item">
        <button onClick={() => this.props.deleteCourseProps(this.props.course.id)}>DELETE</button>
        <span style={this.props.course.completed ? completeStyle : null}>{this.props.course.title}</span>
    </li>
  }
}

export default CourseItem