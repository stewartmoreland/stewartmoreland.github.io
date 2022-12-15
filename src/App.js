import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLayoutEffect } from 'react';

import HomePage from "./pages/HomePage";

const theme = {
  background: '#240b2d',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
}

function useTheme(theme) {
  useLayoutEffect(
    () => {
      for (const key in theme) {
        document.documentElement.style.setProperty(`--${key}`, theme[key]);
      }
    },
    [theme]
  );
}

export default function App() {
  useTheme(theme);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
