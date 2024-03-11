import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNav from './src/navigation/TabNav';
import DefaultNavbar from './src/components/navbar/DefaultNavbar';
import {NativeBaseProvider} from 'native-base';
import { Provider } from 'react-redux';

const App = () => {
  return (

      <NativeBaseProvider>
      <NavigationContainer>
        <DefaultNavbar/>
        <TabNav />
      </NavigationContainer>
    </NativeBaseProvider>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
});
