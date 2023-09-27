import React, { useState, memo } from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import CalendarPicker from "react-native-calendar-picker";
import { COLORS } from "../../../constants";
const ModalCalendar = memo(
  ({ isModalVisible, onToggleModal, onModalVisible, onSelect, selected }) => {
    const toggleModal = () => {
      onToggleModal();
    };

    return (
      <View style={styles.flexView}>
        <StatusBar />

        <Modal
          onBackdropPress={onModalVisible}
          onBackButtonPress={onModalVisible}
          isVisible={isModalVisible}
          swipeDirection="down"
          onSwipeComplete={toggleModal}
          animationIn="bounceInUp"
          animationOut="bounceOutDown"
          animationInTiming={900}
          animationOutTiming={500}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={500}
          style={styles.modal}
        >
          <View style={styles.modalContent}>
            <View style={styles.center}>
              <View style={styles.barIcon} />
              <View style={styles.boxCalendar}>
                <CalendarPicker
                  selectedDayColor={`${COLORS.primary}`}
                  selectedDayTextColor={"white"}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
);

export default ModalCalendar;

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: "white",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 500,
    paddingBottom: 20,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: "#bbb",
    borderRadius: 3,
  },
  text: {
    color: "#bbb",
    fontSize: 24,
    marginTop: 100,
  },
  boxCalendar: {
    marginTop: 32,
  },
});
