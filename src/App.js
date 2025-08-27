import React from "react";
import "./App.css";
import ImageComponent from "./components/image-component";
import TextEditComponent from "./components/text-header-component/text-header.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      emailLink: "",
    };
  }
  render() {
    return (
      <div className="App">
        <div className="body-container">
          <ImageComponent />
          <TextEditComponent />
        </div>
      </div>
    );
  }
}

export default App;
