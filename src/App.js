import React from "react";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import customTheme from "./customTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Main from "./containers/Main";
import "./App.css";


export default function App() {
  const store = configureStore();
  const theme = getMuiTheme();

  console.log(store.getState(), '---')

  
  return (
    <MuiThemeProvider muiTheme={theme}>
      <Provider store={store}>
          <Main/>
       </Provider>
      </MuiThemeProvider>
  );
}
