import { Drawer } from "expo-router/drawer";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CustomDrawer } from "../components/custom-drawer";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Drawer drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="index" />

        <Drawer.Screen name="about" />
      </Drawer>
    </GestureHandlerRootView>
  );
}
