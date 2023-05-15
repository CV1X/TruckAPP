import { View, Text } from "react-native";
import React from "react";

const Description = ({ data, desc, loc1, loc2, price }) => {
  return (
    <View>
      <View className="items-center ">
        <Text className="font-bold text-[22px] text-white">Cursa {data}</Text>
        <Text className="text-[15px] mt-3 mx-3  text-white">{desc}</Text>
        <Text className="top-[110px] left-4 absolute text-[16px] mt-3 text-white">
          From {loc1} to {loc2}
        </Text>
        <Text className=" text-white top-[140px] left-4 absolute top font-bold mt-4">
          Price : {price}
        </Text>
      </View>
    </View>
  );
};

export default Description;
