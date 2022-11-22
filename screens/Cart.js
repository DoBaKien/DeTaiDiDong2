import { Text } from "@react-native-material/core";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import ListCart from "../component/ListCart";
import data from "../data/Data";
import { Divider } from "@react-native-material/core";
const Cart = ({ navigation }) => {
  const animatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedScale.setValue(1);
  }, []);
  const handlePress = () => {
    animatedScale.setValue(0.8);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 24,
      speed: 20,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-circle-left" size={30} />
        </TouchableOpacity>
        <Text variant="h5" style={{ fontWeight: "bold" }}>
          My Cart
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="shopping-cart" size={30} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={(data) => (
            <ListCart a={data.item} navigation={navigation} />
          )}
          keyExtractor={(data) => data.key}
        />
      </View>
      <View
        style={{
          height: 250,
          justifyContent: "center",
        }}
      >
        <View style={styles.boxinput}>
          <TextInput
            placeholder="Voucher code"
            variant="outlined"
            style={styles.input}
          />
          <Pressable onPress={handlePress}>
            <Animated.View
              style={[styles.btn, { transform: [{ scale: animatedScale }] }]}
            >
              <Text style={{ color: "white" }}>Apply</Text>
            </Animated.View>
          </Pressable>
        </View>
        <View style={styles.viewPrice}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text variant="h6">Item total </Text>
            <Text variant="h6">100000 đ</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text variant="h6">Discount</Text>
            <Text variant="h6">0 đ</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text variant="h6">Shipping fee</Text>
            <Text variant="h6">30000 đ</Text>
          </View>
          <Divider style={{ width: 330, height: 3, marginTop: 10 }} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text variant="h6">Total</Text>
            <Text variant="h6">130000 đ</Text>
          </View>
        </View>
      </View>
      <View style={{ height: 60 }}>
        <TouchableOpacity onPress={() => navigation.navigate("CheckOut")}>
          <View style={styles.button}>
            <Text style={{ color: "white", marginLeft: 10 }} variant="h6">
              Check out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    width: 60,
    backgroundColor: "#965E2C",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    marginLeft: 10,
  },
  boxinput: {
    flexDirection: "row",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  input: {
    height: 60,
    width: "75%",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 20,
    fontSize: 18,
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#965E2C",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 30,
  },
  viewPrice: {
    marginTop: 10,
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    height: 150,
  },
});

export default Cart;
