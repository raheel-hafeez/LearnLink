import React, { useState } from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import images from "../../constants/images";
import { route } from "../../constants";
// import IconEx from '../components/icons';

export default function Login({ navigation }) {
  // const [secureEntry, setSecureEntry] = useState("true");

  // const handleLogin = () => {
  //   // Perform login logic here (e.g., API call)
  //   // For this example, we'll navigate to the main page after logging in
  //   navigation.navigate("Homepage");
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <View style={styles.backButtonWrapper} >
          <TouchableOpacity  
          onPress={() => navigation.navigate("Welcome")}
          activeOpacity={1}>
            <Ionicons style={styles.backButton} name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
        </View> */}

        <View>
          <Text style={styles.title}>Login</Text>
          <View style={styles.input}>
            <Ionicons name="mail-outline" size={24} color="grey" />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
            />
          </View>
          <View style={styles.input}>
            <Ionicons name="lock-closed-outline" size={24} color="grey" />
            <Text></Text>
            <TextInput
              style={styles.textInput}
              // secureTextEntry={secureEntry}
              placeholder="Password..."
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

          <TouchableOpacity onPress={() => navigation.navigate(route.FORGET_PASSWORD)}>
            <Text style={styles.forgetPassText}>Forget Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(route.HOMEPAGE)}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonLogIn}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.midButtonText}>or continue with</Text>

          <TouchableOpacity
            style={styles.buttonGoogle}
            activeOpacity={0.8}
            onPress={() => navigation.navigate(route.HOMEPAGE)}
          >
            <Image
              style={styles.googleIcon}
              source={images.googleIcon}
            />
            {/* <Text style={styles.googleLogin}>Google</Text> */}
          </TouchableOpacity>

          <View style={styles.footerText}>
            <Text style={styles.accountText}>Don't have an account?</Text>
            <Text
              style={styles.signupText}
              onPress={() => navigation.navigate(route.SIGNUP)}
            >
              SignUp
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#f8f9fa",
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
  buttonLogIn: {
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
    color: "#0064E1",
    padding: 15,
  },
  googleLogin: {
    color: "#0064E1",
    fontSize: 24,
    marginLeft: 5,
    fontWeight: "bold",
  },
  forgetPassText: {
    textAlign: "right",
    marginVertical: 5,
    fontWeight: "bold",
  },
  midButtonText: {
    textAlign: "center",
    marginTop: 20,
  },
  footerText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 2,
  },
  signupText: {
    fontWeight: "bold",
  },
});
