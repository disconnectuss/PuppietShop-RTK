import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import DefaultNavbar from '../components/navbar/DefaultNavbar';
import TabNav from '../navigation/TabNav';

const PackageProvider = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default PackageProvider;
