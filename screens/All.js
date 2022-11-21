import { Text } from "@react-native-material/core";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import ListPopular from "../component/ListPopular";
import data from "../data/Data";

const All = ({ navigation, route }) => {
  const type = route.params.data;
  const [typeFilter, setTypeFilter] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (type !== "All") {
      setTypeFilter(data.filter((word) => word.type === type).filter(ser));
    } else {
      setTypeFilter(data.filter(ser));
    }
  }, [type, search]);

  const ser = (val) => {
    if (search === "") {
      return val;
    } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
      return val;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-circle-left" size={30} />
        </TouchableOpacity>
        <Text variant="h5" style={{ fontWeight: "bold" }}>
          {type}
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="shopping-cart" size={30} />
        </TouchableOpacity>
      </View>
      <View style={{ height: 70 }}>
        <View style={styles.boxinput}>
          <TextInput
            placeholder="Search"
            variant="outlined"
            style={styles.input}
            onChangeText={(e) => setSearch(e)}
          />
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <Text style={{ marginLeft: 20 }} variant="h6">
          {typeFilter.length} items
        </Text>
        <FlatList
          data={typeFilter}
          numColumns={2}
          renderItem={(data) => (
            <ListPopular a={data.item} navigation={navigation} />
          )}
          keyExtractor={(data) => data.key}
        />
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
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonadd: {
    width: 50,
    backgroundColor: "purple",
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
    backgroundColor: "purple",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 30,
  },
});

export default All;
