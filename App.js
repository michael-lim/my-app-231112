import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyNavigations from './src/navigation/index.js';

function App() {
  return (
    <NavigationContainer>
      <MyNavigations />
    </NavigationContainer>
  );
}

export default App;