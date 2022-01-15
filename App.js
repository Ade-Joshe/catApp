/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useState } from 'react';
import { RootNavigation } from "./src/navigation";
import { ThemeContext, AppContext } from './src/util';

const App = () => {

  const [faveCats, setFaveCats] = useState([]);
  const theme = useContext(ThemeContext);

  return (
    <AppContext.Provider value={{ faveCats, setFaveCats }}>
      <ThemeContext.Provider value={theme}>
        <RootNavigation />
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
};

export default App;
