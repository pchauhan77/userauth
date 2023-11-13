import React from 'react';
import './App.css';
import AppRoutes from './routes/routes';
import ThemeCustomization from './themes';
import { SnackbarProvider } from 'notistack';
import './assets/fonts/inter/inter.css';

function App() {
  return (<ThemeCustomization>
    <SnackbarProvider>
      <AppRoutes />
    </SnackbarProvider>
  </ThemeCustomization>);
}

export default App;
