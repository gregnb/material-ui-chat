import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import ChatRoom from "./ChatRoom";

class App extends React.Component {

  render() {

    return (
      <React.Fragment>
        <CssBaseline />
        <ChatRoom />
      </React.Fragment>
    );
  }

}

ReactDOM.render(<App />, document.getElementById("app-root"));


