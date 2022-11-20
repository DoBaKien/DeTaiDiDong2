import { Text } from "@react-native-material/core";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import data from "../data/Data";
import Icon from "react-native-vector-icons/FontAwesome5";
const WIDTH = Dimensions.get("window").width;

export default function Intro({ navigation }) {
  const [imgActive, setImgActive] = useState(0);

  const onChage = (e) => {
    if (e) {
      const slide = Math.ceil(
        e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width
      );
      if (slide !== imgActive) {
        setImgActive(slide);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={(e) => onChage(e)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {data
            .filter((word) => word.key < 6)
            .map((e) => (
              <Image
                key={e.key}
                resizeMode="stretch"
                style={styles.wrap}
                source={{
                  uri: e.image,
                }}
              />
            ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {data
            .filter((word) => word.key < 6)
            .map((e, i) => (
              <Text
                key={e.key}
                style={imgActive === i ? styles.dotActive : styles.dot}
              >
                ●
              </Text>
            ))}
        </View>
      </View>
      <View style={styles.bot}>
        <Text
          style={{ zIndex: 2, fontSize: 40, fontWeight: "bold", marginTop: 10 }}
        >
          Discover Trends
        </Text>
        <Text
          style={{ zIndex: 2, width: 250, textAlign: "center" }}
          variant="subtitle1"
        >
          Express your self through the art of the fashionism
        </Text>
        <TouchableOpacity
          style={{ paddingTop: 30 }}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="arrow-circle-right" size={70} color="#965E2C" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
  },
  wrap: {
    width: WIDTH,
    height: WIDTH + 100,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
    zIndex: 2,
  },
  dotActive: {
    margin: 3,
    color: "#965E2C",
  },
  dot: {
    margin: 3,
    color: "#888",
  },
  bot: {
    backgroundColor: "white",
    position: "absolute",
    width: 700,
    height: 370,
    bottom: 0,
    zIndex: 1,
    borderTopLeftRadius: 400,
    borderTopRightRadius: 400,
    justifyContent: "center",
    alignItems: "center",
  },
});
