import { Component } from "react";

export class Image extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="image-container">
        <img src={this.props.src} alt="dog-image" width="350px" />
      </div>
    );
  }
}
