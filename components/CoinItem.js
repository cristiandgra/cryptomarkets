import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const coinItem = ({ coin }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.coinName}>
        <Image style={styles.image} source={{ uri: coin.image }} />
        <View style={styles.containerName}>
          <Text style={styles.text}>{coin.name}</Text>
          <Text style={styles.textSymbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textPrice}>${coin.current_price}</Text>
        <Text
          style={[
            styles.pricePercentage,
            coin.price_change_percentage_24h > 0
              ? styles.pricePositive
              : styles.priceNegative,
          ]}
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerName: {
    marginLeft: 10,
  },
  text: {
    color: "#ffffff",
  },
  image: {
    width: 30,
    height: 30,
  },
  coinName: {
    flexDirection: "row",
  },
  textSymbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
  textPrice: {
    color: "#fff",
    textAlign: "right",
  },
  pricePercentage: {
    textAlign: "right",
  },
  pricePositive: {
    color: "#2b961f",
  },
  priceNegative: {
    color: "#fc4422",
  },
});

export default coinItem;
