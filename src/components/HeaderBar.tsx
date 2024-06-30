import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import ProfilePic from "./ProfilePic";
import Ionicons from "@expo/vector-icons/Ionicons";
interface HeaderBarProps {
  title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
  return (
    <View style={styles.HeaderContainer}>
      <Ionicons name="menu" size={35} color={COLORS.primaryLightGreyHex} />
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SPACING.space_30
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default HeaderBar;
