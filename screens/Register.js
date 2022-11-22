import { Stack, Text } from "@react-native-material/core";

import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 130,

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image style={styles.tinyLogo} source={require("../data/image.png")} />
      </View>
      <View
        style={{
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text variant="h4">Sign up</Text>
      </View>
      <Stack spacing={20} style={styles.form}>
        <TextInput
          placeholder="Name *"
          variant="outlined"
          style={styles.input}
        />
        <TextInput
          placeholder="Email *"
          variant="outlined"
          style={styles.input}
        />
        <TextInput
          placeholder="Phone Number *"
          keyboardType="number-pad"
          variant="outlined"
          style={styles.input}
        />
        <TextInput
          placeholder="Password *"
          style={styles.input}
          variant="outlined"
          secureTextEntry
        />
        <TextInput
          placeholder="Comfirm Password *"
          style={styles.input}
          variant="outlined"
          secureTextEntry
        />

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity style={styles.register}>
            <Text style={{ color: "white", fontSize: 20 }}>Sign Up</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <Text>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.text1}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: "white",
  },
  text1: {
    textDecorationLine: "underline",
    color: "#965E2C",
    fontWeight: "bold",
  },
  login: {
    backgroundColor: "#965E2C",
    padding: 10,
    alignItems: "center",
    borderRadius: 20,
    width: "60%",
    minWidth: 200,
    marginTop: 20,
  },
  register: {
    backgroundColor: "#965E2C",
    padding: 10,
    alignItems: "center",
    borderRadius: 25,
    width: "50%",
  },
  input: {
    height: 60,
    width: "100%",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 50,
    fontSize: 18,
    paddingLeft: 20,
    backgroundColor: "white",
  },
  form: {
    height: 550,
    justifyContent: "center",
  },
  tinyLogo: {
    resizeMode: "contain",
    width: "100%",
    height: 120,
  },
});

export default Register;
