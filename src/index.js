import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { GlobalStateProvider } from './GlobalStateContext/GlobalStateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/Sushi-Edmonton'>
      {/* <Provider store={store}>
          <ThemeProvider theme={theme}> */}
      <GlobalStateProvider>
        <App/>
      </GlobalStateProvider>
          {/* </ThemeProvider>
      </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
