import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const handleMenuButton = () => {
    router.push("/about");
  };

  return (
    <DrawerContentScrollView {...props} style={styles.scrollView}>
      <View style={styles.headerArea}></View>

      <Button title="Home" onPress={() => router.navigate('/')}></Button>
      <Button title="Sbre" onPress={() => router.navigate('/about')}></Button>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#AFEEEE",
  },
  headerArea: {
    backgroundColor: "#DDA0DD",
    height: 80,
  },
});
