import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "@/constants";

type TabButtonProps = {
  name: string;
  activeTab: string;
  onPress: () => void;
};

const TabButton: React.FC<TabButtonProps> = ({ name, activeTab, onPress }) => (
  <TouchableOpacity style={styles.btn(name, activeTab)} onPress={onPress}>
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
);

type Props = {
  tabs: string[];
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
};

const Tabs: React.FC<Props> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={tabs}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.medium / 2 }}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onPress={() => setActiveTab(item)}
          />
        )}
      />
    </View>
  );
};

export default Tabs;
