import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { route } from "../constants";

// Import your screens
import OnlineCourses from "../Screens/Pages/homepage";
import TimeTable from "../Screens/Pages/onlineCourses";
import Teachers from "../Screens/Pages/teachers";
import Homepage from "../Screens/Pages/timeTable";

const Tab = createBottomTabNavigator();

export default function HomeTabNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === route.HOME_TAB) {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === route.ONLINECOURSES) {
              iconName = focused ? "book" : "book-outline";
            } else if (route.name === route.TIMETABLE) {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (route.name === route.TEACHERS) {
              iconName = focused ? "people" : "people-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name={route.HOME_TAB} component={Homepage} />
        <Tab.Screen name={route.ONLINECOURSES} component={OnlineCourses} />
        <Tab.Screen name={route.TIMETABLE} component={TimeTable} />
        <Tab.Screen name={route.TEACHERS} component={Teachers} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// import React from "react";
// import { View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

// // Screens
// import Homepage from "../pages/homepage";
// import OnlineCourses from "../pages/onlineCourses";
// import TimeTable from "../pages/timeTable";
// import Teachers from "../pages/teachers";
// import { Stack } from "expo-routesr";

// // Screen names
// // const homepage = "Homepage";
// // const onlineCourses = "OnlineCourses";
// // const timeTable = "TimeTable";
// // const teachers = "Teachers";

// const Tab = createBottomTabNavigator();

// export default function AppTabNavigation() {

//   function TabStack(){
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="MyTab" component={MyTab}/>
//       </Stack.Navigator>
//     )
//   }

//   function MyTab() {
//     return (
//       <Tab.Navigator>
//         <Tab.Screen name="HomePage" component={Homepage} />
//         <Tab.Screen name="OnlineCourses" component={OnlineCourses} />
//         <Tab.Screen name="Teaches" component={Teachers} />
//         <Tab.Screen name="Timetable" component={TimeTable} />
//       </Tab.Navigator>
//     );
//   }
//   return( <NavigationContainer>
//     <TabStack/>
//   </NavigationContainer>);

// }

// {/* <Tab.Navigator
//   // initialroutesName="Homepage"
//   // screenOptions={{
//   //   showLabel: false,
//   //   tabBarStyle: {
//   //     position: "absolute",
//   //     borderTopEndRadius: 15,
//   //     height: 90,
//   //     backgroundColor: "#fff",
//   //   },
//   // }}
// > */}

//   {/* <Tab.Screen
//     name={homepage}
//     component={Homepage}
//     options={{
//       tabBarIcon: ({ focused }) => (
//         <Ionicons
//           name={focused ? "home" : "home-outline"}
//           size={24}
//           color="black"
//         />
//       ),
//     }}
//   />
//   <Tab.Screen
//     name={onlineCourses}
//     component={OnlineCourses}
//     options={{
//       tabBarIcon: ({ focused }) => (
//         <Ionicons
//           name={focused ? "book" : "book-outline"}
//           size={24}
//           color="black"
//         />
//       ),
//     }}
//   />
//   <Tab.Screen
//     name={teachers}
//     component={Teachers}
//     options={{
//       tabBarIcon: ({ focused }) => (
//         <Ionicons
//           name={focused ? "people" : "people-outline"}
//           size={24}
//           color="black"
//         />
//       ),
//     }}
//   />
//   <Tab.Screen
//     name={timeTable}
//     component={TimeTable}
//     options={{
//       tabBarIcon: ({ focused }) => (
//         <Ionicons
//           name={focused ? "calendar" : "calendar-outline"}
//           size={24}
//           color="black"
//         />
//       ),
//     }}
//   /> */}
// {/* </Tab.Navigator> */}

// {
//   /**
// initialroutesName={homepage}
//         screenOption=
//         {({ routes }) => {
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             let rn = routes.name;

//             if (rn === homepage) {
//               iconName = focused ? "home" : "home-outline";
//             } else if (rn === onlineCourses) {
//               iconName = focused ? "courses" : "book-outline";
//             } else if (rn === timeTable) {
//               iconName = focused ? "timetable" : "timetable";
//             } else if (rn === teachers) {
//               iconName = focused ? "teachers" : "chalkboard-teacher";
//             }

//             return <Ionicons name={iconName} size={size} color={color} />
//             return <MaterialCommunityIcons name={iconName} size={size} color={color} />
//           };
//         }}
// //Outside Tab Navigator
//         <Tab.Screen name={homepage} component={Homepage} />
//         <Tab.Screen name={onlineCourses} component={OnlineCourses} />
//         <Tab.Screen name={teachers} component={Teachers} />
//         <Tab.Screen name={timeTable} component={TimeTable} />
//   */
// }
