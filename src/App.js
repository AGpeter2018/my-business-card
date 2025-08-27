import React from "react";
import "./App.css";
import ImageComponent from "./components/image-component";
import TextEditComponent from "./components/text-header-component/text-header.component";
import SocialIcon1 from "./components/social-icon1-component/social-icon1-component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      emailLink: "mailto:adenijipeter@gmail.com",
      emailLogoLink: "envelope",
      linkedInLink: "https://www.linkedin.com/in/adeniji-peter/",
      linkedInLogoLink: "linkedin",
    };
  }
  render() {
    return (
      <div className="App">
        <div className="body-container">
          <ImageComponent />
          <div className="text-and-icon-container">
          <TextEditComponent />
          <SocialIcon1 />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
