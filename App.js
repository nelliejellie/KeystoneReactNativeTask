import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import Home from './src/Screens/Home';
import Inventories from './src/Screens/Inventories';
import Insurance from './src/Screens/Insurance';
import More from './src/Screens/More';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Search from './src/Screens/Search';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    
      <NavigationContainer>
        <TailwindProvider>
          <Tab.Navigator initialRouteName="Inventories" screenOptions={{ headerShown: false, tabBarActiveTintColor: '#0E1E5E', }} >
            <Tab.Screen name="Home" component={Home} 
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="home" size={24} color="gray" />
                ),
              }}
            />
            <Tab.Screen name="Insurance" component={Insurance} 
              options={{
                tabBarLabel: 'Insurance',
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="umbrella" size={24} color="gray" />
                ),
              }}
            />
            <Tab.Screen name="Inventories" component={Inventories} 
              options={{
                tabBarLabel: 'Inventories',
                tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="inventory" size={24} color="gray" />
                ),
              }}
            />
            <Tab.Screen name="Search" component={Search} 
              options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="search" size={24} color="gray" />
                ),
              }}
            />
            <Tab.Screen name="More" component={More} 
              options={{
                tabBarLabel: 'More',
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="menu" size={24} color="gray" />
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
