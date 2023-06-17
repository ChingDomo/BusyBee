import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import BeeHiveScreens from './src/component/BeeHive/BeeHiveScreen';
import Message from './src/component/BeeHive/Message';
import Done from './src/component/BeeHive/Done';
import BeeHiveItem from './src/component/BeeHive/BeeHiveItem';
const Stack = createStackNavigator();

// const Home = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BeeHive">
        <Stack.Screen name="BeeHive" component={BeeHiveScreens} options={{ headerShown: false, animationEnabled: false }} />
        <Stack.Screen name="Message" component={Message} options={{ headerShown: false, animationEnabled: false }} />
        <Stack.Screen name="Done" component={Done} options={{ headerShown: false, animationEnabled: false }} />
        <Stack.Screen name="BeeHiveItem" component={BeeHiveItem} options={{ headerShown: false, animationEnabled: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;