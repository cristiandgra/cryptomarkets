import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

const App = () => {
  const [coins, setCoins] = useState([]);

  const dataLoader = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    setCoins(data);
  };

  useEffect(() => {
    dataLoader();
  }, []);

  return (
    <View>
      <Text>Meow</Text>
    </View>
  );
};

export default App;
