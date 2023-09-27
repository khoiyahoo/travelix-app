import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import React, { memo } from "react";
import { SIZES, COLORS } from "../../../constants";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export enum BtnType {
  Primary = "Primary",
  Secondary = "Secondary",
  Outlined = "Outlined",
}

interface Props extends TouchableOpacityProps {
  title: string;
  styleButton: any;
  styleText: any;
  btnType: BtnType;
}

const ButtonComponent = memo((props: Props) => {
  const { styleButton, styleText, btnType, title, ...rest } = props;

  return (
    <TouchableOpacity
      style={[
        styles.appButtonContainer,
        styleButton,
        btnType === BtnType.Primary && styles.btnPrimary,
        btnType === BtnType.Secondary && styles.btnSecondary,
        btnType === BtnType.Outlined && styles.btnOutlined,
      ]}
    >
      <Text
        style={[
          styles.appButtonText,
          styleText,
          btnType === BtnType.Primary && styles.textPrimary,
          btnType === BtnType.Secondary && styles.textSecondary,
          btnType === BtnType.Outlined && styles.textOutlined,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
});
export default ButtonComponent;
