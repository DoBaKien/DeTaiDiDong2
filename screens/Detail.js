import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icona from "react-native-vector-icons/FontAwesome";
import { Text } from "@react-native-material/core";
import IconF from "react-native-vector-icons/Feather";
const Detail = ({ route, navigation }) => {
  const detail = route.params.id;
  const [size, setSize] = useState("");
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);
  const onPress1 = () => setCount((prevCount) => prevCount - 1);
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
      <View
        style={{
          height: Dimensions.get("window").height / 2,
          backgroundColor: "red",
        }}
      >
        <Image style={styles.imageclo} source={{ uri: detail.image }} />
        <TouchableOpacity
          style={styles.backicon}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-circle-left" size={40} color="white" />
        </TouchableOpacity>

        <Pressable
          style={{ position: "absolute", right: 10 }}
          onPress={handlePress}
        >
          <Animated.View
            style={[styles.btn, { transform: [{ scale: animatedScale }] }]}
          >
            <Icona name="heart" size={25} color="red" />
          </Animated.View>
        </Pressable>
      </View>
      <View style={{ flex: 1, padding: 30 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text variant="h4">{detail.name}</Text>
          <Text variant="h4">{detail.price} đ</Text>
        </View>
        <Text style={{ fontSize: 20, marginTop: 30 }}>Size</Text>
        <View style={styles.wrapper}>
          {["S", "M", "L", "XL"].map((feeling) => (
            <View key={feeling} style={styles.radio}>
              <Text style={styles.feeling}>{feeling}</Text>
              <TouchableOpacity
                style={styles.outter}
                onPress={() => setSize(feeling)}
              >
                {size === feeling && <View style={styles.inner} />}
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.quanti}>
          <Text variant="h6">Quantity</Text>
          <IconF name="minus-circle" size={30} onPress={onPress1} />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {count}
          </Text>
          <IconF name="plus-circle" size={30} onPress={onPress} />
        </View>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <TouchableOpacity
            style={styles.addcart}
            onPress={() =>
              Alert.alert("Success", "Add Item Success", [{ text: "OK" }])
            }
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 20,
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  addcart: {
    backgroundColor: "#965E2C",
    justifyContent: "center",
    paddingVertical: 10,
    width: "90%",
    borderRadius: 40,
  },
  inner: {
    width: 15,
    height: 15,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  quanti: {
    marginTop: 30,
    alignItems: "center",
    flexDirection: "row",
    height: 80,
    justifyContent: "space-between",
  },
  outter: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  radio: {
    alignItems: "center",
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
  },
  imageclo: {
    resizeMode: "stretch",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
  backicon: {
    position: "absolute",
    top: 15,
    left: 15,
  },
  hearticon: {
    position: "absolute",
    top: 20,
    right: 15,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 30,
  },
});

export default Detail;
