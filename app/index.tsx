import { router } from "expo-router";
import { View, StyleSheet, Text, Button } from "react-native";

export default function Screen() {

  const getProducts = async () =>{
    
  }



  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Tela Inicial</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  h1: {
    fontSize: 22,
  },
});
