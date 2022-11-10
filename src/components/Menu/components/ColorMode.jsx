import { createContext, useState } from 'react';

export const ColorModeContext = createContext({
  mode: '',
  setMode: () => {
    alert('Setting me...');
  },
  toggleMode: () => {
    alert('Setting me...');
  },
});

export default function ColorModeProvider(props) {
  const [mode, setMode] = useState(props.initialMode);

  function toggleMode() {
    if (mode === 'dark') setMode('light');
    if (mode === 'light') setMode('dark');
  }

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {props.children}
    </ColorModeContext.Provider>
  );
}
