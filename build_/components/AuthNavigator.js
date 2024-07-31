import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import {Login, ForgetPassword, Register, Signup} from '../Screens';
import Login from "../Screens/auth/login";
import Signup from "../Screens/auth/signup";
import Register from "../Screens/auth/Register";
import ForgetPassword from "../Screens/auth/ForgetPassword";
import Welcome from "../Screens/Pages/welcome";

import { COLORS, route } from "../constants";
// import DrawerNavigator from './DrawerNavigator';
import Homepage from "../Screens/Pages/homepage";
import { NavigationContainer } from "@react-navigation/native";
import HomeTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();
// Navigator, Screen, Group

export default function AuthNavigator() {
  console.log(Stack);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}} initialrouteName={route.WELCOME}>
        <Stack.Screen
          name={route.WELCOME}
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={route.FORGET_PASSWORD}
          component={ForgetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={route.LOGIN}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={route.SIGNUP}
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={route.REGISTER} component={Register} />
        <Stack.Screen
          name={route.HOMEPAGE}
          component={Homepage}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createStackNavigator } from '@react-navigation/stack'
// import { SafeAreaProvider } from "react-native-safe-area-context";

// //Pages
// import Homepage from '../pages/homepage'
// import Login from '../pages/auth/login'
// import Signup from '../pages/signup'
// import Welcome from '../pages/welcome'

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// export default function ScreenNavigation() {
//   return (
//     <SafeAreaProvider>
//         <NavigationContainer  independent={true}>
//           <Stack.Navigator initialrouteName="Welcome">
//             <Stack.Screen
//               name="Welcome"
//               component={Welcome}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="Signup"
//               component={Signup}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="Login"
//               component={Login}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="Homepage"
//               component={Homepage}
//               options={{ headerShown: false }}
//             />
//             {/* <Stack.Screen
//             name="MainStack"
//             component={MainStack}
//             options={{ headerShown: false }}
//           /> */}
//           </Stack.Navigator>
//         </NavigationContainer>
//       </SafeAreaProvider>
//   )
// }
