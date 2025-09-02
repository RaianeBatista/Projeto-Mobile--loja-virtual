import { StyleSheet, Text, View, Image } from "react-native";
import { SocialIcons } from "../../components/SocialIcons";

export default function Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textoApresentacao}>Olá, eu sou a Raiane!</Text>
      <Image
        source={{ uri: "https://github.com/RaianeBatista.png" }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.me}>Fui eu quem fez 😊</Text>
      <SocialIcons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
    backgroundColor: "#ddd",
  },
  me: {
    fontSize: 16,
    marginBottom: 10,
  },
  textoApresentacao: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#C13584",
    marginBottom: 20,
  },
});
