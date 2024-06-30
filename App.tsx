import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./src/screens/DetailsScreen";
import TabNavigator from "./src/navigators/TabNavigator";
import PaymentScreen from "./src/screens/PaymentScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import React from "react";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           <Stack.Screen
//             name={"Tab"}
//             component={TabNavigator}
//             options={{ animation: "fade_from_bottom" }}
//           ></Stack.Screen>
//           <Stack.Screen
//             name={"Details"}
//             component={DetailsScreen}
//             options={{ animation: "fade_from_bottom" }}
//           ></Stack.Screen>
//           <Stack.Screen
//             name={"Payment"}
//             component={PaymentScreen}
//             options={{ animation: "fade_from_bottom" }}
//           ></Stack.Screen>
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }



const Stack = createNativeStackNavigator();

const App = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
