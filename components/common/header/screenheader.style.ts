import { ImageStyle, StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: ((dimension: number | string) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  })) as any,
});

export default styles;
