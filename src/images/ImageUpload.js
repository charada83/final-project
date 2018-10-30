import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { storage } from "../firebase";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({
        image
      }));
    }
  };

  handleUpload = () => {};
  render() {
    const style = {
      height: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    };
    return (
      <div>
        {" "}
        style=
        {style}
        <input type="file" onChange={this.handleChange} />
        <Button onClick={this.handleUpload}>Upload</Button>
      </div>
    );
  }
}

export default ImageUpload;
