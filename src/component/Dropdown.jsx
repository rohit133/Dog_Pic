import { Component } from "react";

export class DropDownSelector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label className="dropdown-label" htmlFor={this.props.title}>
          Choose a {this.props.title}:
        </label>
        <select
          onChange={this.props.onChange}
          name={this.props.title}
          id={this.props.title}
        >
          {this.props.listOfItems.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
