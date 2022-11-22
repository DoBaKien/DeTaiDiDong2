import { Text } from "@react-native-material/core";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { HStack } from "react-native-flex-layout";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconA from "react-native-vector-icons/AntDesign";
import { Divider } from "@react-native-material/core";
import payment from "../data/Pay";
import { ModalPay } from "../component/ModalPay";

const CheckOut = ({ navigation }) => {
  const WIDTH = Dimensions.get("window").width;
  const [choose, setChoose] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ModalPay visible={visible} setVisible={setVisible} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-circle-left" size={30} />
        </TouchableOpacity>
        <Text variant="h5" style={{ fontWeight: "bold" }}>
          Checkout
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="shopping-cart" size={30} />
        </TouchableOpacity>
      </View>

      <HStack
        style={{ height: 100, alignItems: "center", justifyContent: "center" }}
      >
        <View style={styles.bgIcon}>
          <Icon name="shopping-cart" size={20} color="white" />
        </View>
        <Divider style={{ width: WIDTH - 280, height: 3 }} />
        <View style={styles.bgIcon}>
          <Icon name="money-check" size={20} color="white" />
        </View>
        <Divider style={{ width: WIDTH - 280, height: 3 }} />
        <View style={styles.bgIcon2}>
          <IconA name="checkcircleo" size={20} color="#965E2C" />
        </View>
      </HStack>

      <View
        style={{
          height: 150,
          justifyContent: "center",
        }}
      >
        <Text variant="h6" style={{ marginBottom: 20 }}>
          Delivery Address
        </Text>
        <View flexDirection="row" style={styles.input}>
          <Icon name="search-location" size={30} color="#C0C0C0" />
          <TextInput
            placeholder="Delivery *"
            variant="outlined"
            style={styles.textinput}
          />
        </View>
      </View>
      <View style={{ minHeight: 350, flex: 1 }}>
        <Text variant="h6">Payment method</Text>
        {payment.map((pay) => (
          <View key={pay.key} style={styles.radio}>
            <View flexDirection="row">
              <Image source={{ uri: pay.image }} style={styles.imgpay} />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.feeling}>{pay.name}</Text>
                <Text style={styles.feeling}>{pay.number}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.outter}
              onPress={() => setChoose(pay)}
            >
              {choose === pay && <View style={styles.inner} />}
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={{ height: 150, justifyContent: "center" }}>
        <View
          flexDirection="row"
          style={{
            justifyContent: "space-between",
            marginBottom: 20,
            alignItems: "center",
          }}
        >
          <Text variant="h6">Total</Text>
          <Text variant="h4">123234 đ</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setVisible(true)}
        >
          <Text style={{ color: "white", marginLeft: 10 }} variant="h6">
            Pay Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#965E2C",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 30,
  },
  imgpay: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
  inner: {
    width: 15,
    height: 15,
    backgroundColor: "#965E2C",
    borderRadius: 10,
  },
  outter: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#965E2C",
    alignItems: "center",
    justifyContent: "center",
  },
  radio: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 80,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
  },
  feeling: {
    fontSize: 20,
    textTransform: "capitalize",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
  },
  container: {
    flex: 1,
    paddingTop: 30,
    marginHorizontal: 10,
  },
  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bgIcon: {
    backgroundColor: "#965E2C",
    padding: 10,
    borderRadius: 20,
  },
  bgIcon2: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#965E2C",
  },
  textinput: {
    width: "80%",
    marginLeft: 10,
    fontSize: 20,
  },
  input: {
    height: 60,
    width: "99%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 20,
    backgroundColor: "white",
    alignItems: "center",
  },
});

export default CheckOut;
