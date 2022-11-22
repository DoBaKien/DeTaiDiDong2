import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { HStack, VStack } from "react-native-flex-layout";
import { Text } from "@react-native-material/core";
import IconF from "react-native-vector-icons/Feather";
import { useState } from "react";
const ListCart = ({ a, navigation }) => {
  const [count, setCount] = useState(1);
  const onPress = () => setCount((prevCount) => prevCount + 1);
  const onPress1 = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Detail", { id: a });
        }}
      >
        <Image style={styles.tinyLogo} source={{ uri: a.image }} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <VStack m={4} spacing={10} divider={true}>
          <Text variant="h6">{a.name}</Text>
          <Text>Size: M</Text>
          <Text>{a.price * count} đ</Text>
        </VStack>
        <VStack
          m={4}
          spacing={20}
          divider={true}
          style={{ alignItems: "flex-end" }}
        >
          <Text>X</Text>
          <HStack spacing={10} style={styles.viewcount}>
            <IconF name="minus-circle" size={20} onPress={onPress1} />
            <Text>{count}</Text>
            <IconF name="plus-circle" size={20} onPress={onPress} />
          </HStack>
        </VStack>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewcount: {
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    borderRadius: 10,
  },
  container: {
    marginTop: 5,
    marginLeft: 10,
    height: 150,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 10,
  },
  tinyLogo: {
    width: 130,
    resizeMode: "contain",
    height: 140,
    borderRadius: 10,
  },
});
export default ListCart;
