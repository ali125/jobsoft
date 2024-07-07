import React from "react";
import { TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import styles from "./screenheader.style";

type Props = {
  iconUrl: ImageSourcePropType;
  dimension: number | string;
  handlePress?: () => void;
};

const ScreenHeaderBtn: React.FC<Props> = ({
  iconUrl,
  dimension,
  handlePress,
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
