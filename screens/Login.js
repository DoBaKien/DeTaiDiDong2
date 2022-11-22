import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TextInput,
  } from "react-native";
  import Icon from "react-native-vector-icons/FontAwesome5";
  import { Stack, Text } from "@react-native-material/core";
  
  function Login({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-circle-left" size={30} />
          </TouchableOpacity>
          <Image style={styles.tinyLogo} source={require("../data/image.png")} />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="home" size={30} />
          </TouchableOpacity>
        </View>
  
        <View style={styles.form}>
          <Stack spacing={30}>
            <View style={{ alignItems: "center" }}>
              <Text variant="h3">Log In</Text>
            </View>
            <View flexDirection="row" style={styles.input}>
              <Icon name="user-alt" size={30} color="#C0C0C0" />
              <TextInput
                placeholder="Phone Number *"
                variant="outlined"
                keyboardType="number-pad"
                style={styles.textinput}
              />
            </View>
            <View flexDirection="row" style={styles.input}>
              <Icon name="key" size={30} color="#C0C0C0" />
              <TextInput
                placeholder="Password *"
                secureTextEntry
                variant="outlined"
                style={styles.textinput}
              />
            </View>
  
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity style={styles.login}>
                <Text style={{ color: "white", fontSize: 20 }}>Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.forget}>
                <View flexDirection="row" style={{ alignItems: "center" }}>
                  <Text style={styles.text1}>Forgot Password</Text>
                </View>
              </TouchableOpacity>
  
              <View style={{ flexDirection: "row", marginTop: 50 }}>
                <Text> Don't have an account? </Text>
  
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Register");
                  }}
                >
                  <Text style={styles.text1}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Stack>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    text1: {
      textDecorationLine: "underline",
      color: "#965E2C",
      fontWeight: "bold",
    },
    header: {
      height: 100,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    forget: {
      marginTop: 50,
    },
    textinput: {
      width: "80%",
      marginLeft: 10,
      fontSize: 20,
    },
    input: {
      height: 60,
      width: "100%",
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 50,
      paddingLeft: 20,
      backgroundColor: "white",
      alignItems: "center",
    },
    login: {
      backgroundColor: "#965E2C",
      padding: 10,
      alignItems: "center",
      borderRadius: 30,
      width: "50%",
    },
  
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 30,
    },
  
    form: {
      width: "100%",
      justifyContent: "center",
    },
    tinyLogo: {
      resizeMode: "contain",
      width: 100,
      height: 100,
    },
  });
  
  export default Login;
  