import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ThemeWrapper from './components/ThemeWrapper.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeWrapper>
      {({ theme, toggleTheme }) => <App theme={theme} toggleTheme={toggleTheme} />}
    </ThemeWrapper>
  </React.StrictMode>
);
