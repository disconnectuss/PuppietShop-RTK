import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import DefaultNavbar from '../components/navbar/DefaultNavbar';
import TabNav from '../navigation/TabNav';
import Grid from '../components/icons/Grid';

const PackageProvider = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <TabNav />
        <Grid/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default PackageProvider;
