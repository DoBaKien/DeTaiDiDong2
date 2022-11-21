import { Text } from "@react-native-material/core";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import ListDiscover from "../component/ListDiscover";
import { ModalWarn } from "../component/ModalWarn";
import data from "../data/Data";
import typeclo from "../data/Type";

export default function Home({ navigation }) {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ModalWarn visible={visible} setVisible={setVisible} />
      <ScrollView>
        <View style={styles.top}>
          <View>
            <Text>Hi, User</Text>
            <TextInput
              style={styles.input}
              placeholder=" What is your outfit Today?"
            />
          </View>
          <View style={styles.search}>
            <TouchableOpacity style={styles.btnsearch}>
              <Icon name="search1" size={30} color="#965E2C" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listicon}>
          {typeclo.map((e) => (
            <TouchableOpacity
              key={e.key}
              style={styles.viewicon}
              onPress={() => navigation.navigate("All", { data: e.name })}
            >
              <Image source={{ uri: e.image }} style={styles.icontype} />
              <Text>{e.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ height: 380 }}>
          <TouchableOpacity>
            <Text
              variant="h5"
              style={{
                marginLeft: 20,
                fontWeight: "bold",
                marginVertical: 10,
              }}
            >
              Discover
            </Text>
          </TouchableOpacity>
          <FlatList
            data={data}
            horizontal={true}
            renderItem={(data) => (
              <ListDiscover a={data.item} navigation={navigation} />
            )}
          />
        </View>
        <View style={{ height: 380 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Popular")}>
            <Text
              variant="h5"
              style={{
                marginLeft: 20,
                fontWeight: "bold",
                marginVertical: 10,
              }}
            >
              Most Popular
            </Text>
          </TouchableOpacity>
          <FlatList
            data={data}
            nestedScrollEnabled
            horizontal={true}
            renderItem={(data) => (
              <ListDiscover a={data.item} navigation={navigation} />
            )}
          />
        </View>
      </ScrollView>
      <View style={styles.bot}>
        <TouchableOpacity style={styles.viewbtn}>
          <Icon name="home" size={30} color="#965E2C" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewbtn}
          onPress={() => navigation.navigate("Cart")}
        >
          <Icon name="shoppingcart" size={30} />
          <Text>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewbtn}
          onPress={() => setVisible(true)}
        >
          <Icon name="wechat" size={30} />
          <Text>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewbtn}
          onPress={() => setVisible(true)}
        >
          <Icon name="hearto" size={30} />
          <Text>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewbtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Icon name="user" size={30} />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    flexDirection: "column",
  },
  viewbtn: {
    alignItems: "center",
    width: 80,
  },
  top: {
    height: 80,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    flex: 1,
    alignItems: "flex-end",
  },
  btnsearch: {
    backgroundColor: "lightgray",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  input: {
    fontSize: 22,
    color: "black",
  },
  icontype: {
    resizeMode: "contain",
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  listicon: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  viewicon: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  bot: {
    height: 60,
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
