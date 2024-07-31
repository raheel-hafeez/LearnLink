import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import images from "../../constants/images";
import { route } from "../../constants";

const { width: screenWidth } = Dimensions.get("window");

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageMain}
        source={images.mainImage}
      />

      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome to Learn-Link App</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.loginButtonWrapper, { backgroundColor: "#0064E1" }]}
          onPress={() => navigation.navigate(route.LOGIN)}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.loginButtonWrapper}
          onPress={() => navigation.navigate(route.SIGNUP)}
        >
          <Text style={styles.signupButtonText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
  },
  imageMain: {
    height: "50%",
    width: screenWidth,
  },
  textContainer: {
    paddingTop: 40,
    marginTop: -100,
    backgroundColor: "#f8f9fa",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    width: screenWidth,
  },
  welcomeText: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 90,
  },
  buttonContainer: {
    marginTop: 150,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#0064E1",
    width: "80%",
    height: 60,
    borderRadius: 100,
    alignSelf: "center",
  },
  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 90,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupButtonText: {
    color: "#0064E1",
    fontSize: 18,
    fontWeight: "bold",
  },
});
