import * as React from 'react';
import { View, Text } from 'react-native';

import EmcOnlineHeader from './components/EmcHeader';

import MenuItems from './components/MenuItems';

import EmcFooter from './components/Emcfooter';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <EmcOnlineHeader />
      <MenuItems />
      <EmcFooter />
    </View>
  );
}
