import { FlatList, Text, View } from "react-native";
import React from "react";
import { SIZES, COLORS } from "../../../../constants";
import CardView from "../../../../components/CardView";
import styles from "./styles";
const list = [
  {
    id: 1,
    imageUrl:
      "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427",
    title: "VINPEARL",
    cityStart: "Ha noi",
    cityEnd: "HO Chi Minh City",
    date: "17-9-2022",
  },
  {
    id: 2,
    imageUrl:
      "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427",
    title: "VINPEARL",
    cityStart: "Ha noi",
    cityEnd: "HO Chi Minh City",
    date: "17-9-2022",
  },
  {
    id: 3,
    imageUrl:
      "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427",
    title: "VINPEARL",
    cityStart: "Ha noi",
    cityEnd: "HO Chi Minh City",
    date: "17-9-2022",
  },
  {
    id: 4,
    imageUrl:
      "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427",
    title: "VINPEARL",
    cityStart: "Ha noi",
    cityEnd: "HO Chi Minh City",
    date: "17-9-2022",
  },
  {
    id: 5,
    imageUrl:
      "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427",
    title: "VINPEARL",
    cityStart: "Ha noi",
    cityEnd: "HO Chi Minh City",
    date: "17-9-2022",
  },
];

const ProductRow = () => {
  return (
    <View style={styles.container}>
      {/* {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : ( */}
      <FlatList
        data={list}
        key={(item) => item.id}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardView item={item} />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.small - 10 }}
      />
      {/* )} */}
    </View>
  );
};
export default ProductRow;
