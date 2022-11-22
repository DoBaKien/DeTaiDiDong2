import { Text } from "@react-native-material/core";

import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { HStack } from "@react-native-material/core";
export const ModalPay = ({ visible, setVisible }) => {
  const [showModal, setShowModal] = useState(visible);

  useEffect(() => {
    toggle();
  }, [visible]);
  const toggle = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBg}>
        <View style={styles.modalContainer}>
          <Text variant="h4">Failed payment</Text>
          <HStack spacing={6} m={10}>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.exit}
            >
              <Text style={{ color: "white", textAlign: "center" }}>Exit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.try}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Try Again
              </Text>
            </TouchableOpacity>
          </HStack>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBg: {
    height: 800,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
    alignItems: "center",
  },
  exit: {
    backgroundColor: "red",
    padding: 10,
    width: "50%",
    borderRadius: 20,
  },
  try: {
    backgroundColor: "#965E2C",
    padding: 10,
    width: "50%",
    borderRadius: 20,
  },
});
