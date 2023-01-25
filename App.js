import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import Home from './src/Screens/Home';
import Inventory from './src/Screens/Inventory';
import Insurance from './src/Screens/Insurance';
import More from './src/Screens/More';
import { MaterialIcons } from '@expo/vector-icons';
import Stuff from './src/Components/Stuff';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    
      <NavigationContainer>
        <TailwindProvider>
          <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarActiveTintColor: '#0E1E5E', }} >
            <Tab.Screen name="Home" component={Home} 
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="home" size={24} color="black" />
                ),
              }}
            />
            <Tab.Screen name="Inventory" component={Inventory} 
              options={{
                tabBarLabel: 'Inventory',
                tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="inventory" size={24} color="black" />
                ),
              }}
            />
            <Tab.Screen name="Insurance" component={Insurance} 
              options={{
                tabBarLabel: 'Insurance',
                tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="inventory" size={24} color="black" />
                ),
              }}
            />
            <Tab.Screen name="More" component={More} 
              options={{
                tabBarLabel: 'More',
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="menu" size={24} color="black" />
                ),
              }}
            />
          </Tab.Navigator>
        </TailwindProvider>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
