import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";



// import './index.css';
import App from './App';

const theme = createMuiTheme();
// import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
=======
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
>>>>>>> 496d53b9ddf3c9f032041c971ec12bf44b6de63c
