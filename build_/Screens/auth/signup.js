import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  Alert,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";
// import Homepage from "./homepage";
import { Ionicons } from "@expo/vector-icons";
import { route } from "../../constants";
import images from "../../constants/images";

export default function Signup({ navigation }) {
  // const [username, setusername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSignup = async () => {
  //   // try {
  //   //   await SignUp(username, email, password);
  //   //   Alert.alert("Success", "Account created successfully");
  //   //   navigation.navigate("MainPage");
  //   // } catch (error) {
  //   //   Alert.alert("Error", error.error);
  //   // }
  //   navigation.navigate("Homepage");
  // };
  const handleSignup = () => {
    // Perform login logic here (e.g., API call)
    // For this example, we'll navigate to the main page after logging in
    navigation.navigate(route.HOMEPAGE);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>

      <View style={styles.input}>
        <Ionicons name="mail-outline" size={24} color="grey" />
        <TextInput style={styles.textInput} placeholder="Enter your email" />
      </View>
      <View style={styles.input}>
        <Ionicons name="phone-portrait-outline" size={24} color="grey" />
        <TextInput style={styles.textInput} placeholder="Enter your phone no" />
      </View>
      <View style={styles.input}>
        <Ionicons name="lock-closed-outline" size={24} color="grey" />
        <Text></Text>
        <TextInput
          style={styles.textInput}
          // secureTextEntry={secureEntry}
          placeholder="Password"
        />
        <TouchableOpacity
          onPress={() => {
            setSecureEntry((prev) => !prev);
          }}
        >
          <Ionicons
            style={styles.eyePass}
            name="eye-outline"
            size={24}
            color="grey"
          />
        </TouchableOpacity>
      </View>

      {/* SignUp button */}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignup}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonSignp}>SignUp</Text>
      </TouchableOpacity>

      <Text style={styles.midButtonText}>or continue with</Text>

          <TouchableOpacity
            style={styles.buttonGoogle}
            activeOpacity={0.8}
            onPress={handleSignup}
          >
            <Image
              style={styles.googleIcon}
              source={images.googleIcon}
            />
            {/* <Text style={styles.googleLogin}>Google</Text> */}
          </TouchableOpacity>

          <View style={styles.footerText}>
            <Text style={styles.accountText}>Already got an Account?</Text>
            <Text style={styles.signupText}
              onPress={() => navigation.navigate(route.LOGIN)}
            >Login</Text>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },

  title: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 100,
    fontSize: 15,
    alignItems: "center",
    padding: 2,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#0064E1",
    padding: 10,
    marginTop: 20,
    width: "100%",
  },
  buttonSignp: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonGoogle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#0064E1",
    padding: 5,
    marginTop: 20,
    width: "100%",
  },
  googleIcon: {
    height: 25,
    width: 25,
    color: "#0C8DE4",
    padding: 15,
  },
  googleLogin: {
    color: "#0C8DE4",
    fontSize: 24,
    marginLeft: 5,
    fontWeight: "bold",
  },
  forgetPassText: {
    textAlign: "right",
    marginVertical: 5,
    fontWeight : 'bold'
  },
  midButtonText: {
    textAlign: "center",
    marginTop: 20,
  },
  footerText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems : 'center',
    marginVertical : 20,
    gap : 2,
  },
  signupText : {
    fontWeight : 'bold'
  }
});
