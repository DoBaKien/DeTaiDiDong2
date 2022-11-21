import { Text } from "@react-native-material/core";

import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { VStack } from "@react-native-material/core";

export const ModalWarn = ({ visible, setVisible }) => {
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
          <Text variant="h4">Need to login</Text>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={styles.exit}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Exit</Text>
          </TouchableOpacity>
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
});
