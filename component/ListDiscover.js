import { Text } from "@react-native-material/core";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const ListDiscover = ({ a, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Detail", { id: a })}
    >
      <Image style={styles.img} source={{ uri: a.image }} />
      <View style={styles.heart}>
        <Icon name="heart" size={20} color="red" />
      </View>
      <View style={styles.txt}>
        <Text>{a.name}</Text>
        <Text>{a.price}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 300,
    backgroundColor: "#D1D1D1",
    marginHorizontal: 10,
    borderRadius: 20,
  },
  img: {
    resizeMode: "stretch",
    width: 200,
    height: 220,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  txt: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heart: {
    position: "absolute",
    right: 20,
    top: 15,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 20,
  },
});
export default ListDiscover;
