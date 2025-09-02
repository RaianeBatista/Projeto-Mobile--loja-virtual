import { View, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export const SocialIcons = () => (
  <View style={styles.socialContainer}>
    <TouchableOpacity
      onPress={() => {
        Linking.openURL("https://github.com/RaianeBatista");
      }}
    >
      <FontAwesome name="github" size={32} color="#333" style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(
          "https://www.linkedin.com/in/raiane-batista-developer/"
        );
      }}
    >
      <FontAwesome
        name="linkedin"
        size={32}
        color="#0077B5"
        style={styles.icon}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        Linking.openURL("https://www.instagram.com/raianebtsilva/?hl=pt_BR");
      }}
    >
      <FontAwesome
        name="instagram"
        size={32}
        color="#C13584"
        style={styles.icon}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});
