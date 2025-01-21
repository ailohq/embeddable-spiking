import { Stack } from "expo-router";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Drawer} from "expo-router/drawer";

export default function RootLayout() {
  return (
      // 1. just component: working
      // <Stack />
      // 2. using tabs: working
    // <Stack>
    //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    // </Stack>
      // 3. use drawer
      <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer>
              <Drawer.Screen
                  name="index" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Home',
                      title: 'overview',
                  }}
              />
          </Drawer>
      </GestureHandlerRootView>
  );
}
