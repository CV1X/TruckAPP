import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { logo } from "../assets";
import Card from "../components/Card";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="w-full h-full bg-[#374755] ">
      <View className="w-full h-[180px] bg-[#374755] items-center justify-center ">
        <SafeAreaView className=" w-[360px] h-[120px] top-5 bg-white justify-center items-center rounded-[50px] flex-row">
          <Text className="text-black text-[24px] mx-4 right-[55px] font-medium ">
            Hello , Raul 👋
          </Text>
          <View className="w-10 h-10  left-6 ">
            <Image source={logo} className="w-full h-full rounded-xl" />
          </View>
        </SafeAreaView>
      </View>
      <ScrollView>
        <Card
          cardId={"1"}
          data={"1"}
          desc={
            "The food truck delivery: A delicious assortment of gourmet treats delivered right to your doorstep, satisfying your culinary cravings."
          }
          loc1={"Paris"}
          loc2={"Romania"}
          price={"2200$"}
          onPressDetails={() =>
            navigation.navigate("Details", {
              cardId: "1",
              data: "1",
              desc: "The food truck delivery: A delicious assortment of gourmet treats delivered right to your doorstep, satisfying your culinary cravings.",
              loc1: "Paris",
              loc2: "Romania",
              price: "2200$",
            })
          }
        />
        <Card
          cardId={"2"}
          data={"2"}
          desc={
            "The package delivery truck: Prompt and reliable, this truck ensures your parcels reach their destination safely and on time."
          }
          loc1={"Romania"}
          loc2={"Germany"}
          price={"2800$"}
          onPressDetails={() =>
            navigation.navigate("Details", {
              cardId: "2",
              data: "2",
              desc: "The package delivery truck: Prompt and reliable, this truck ensures your parcels reach their destination safely and on time.",
              loc1: "Romania",
              loc2: "Germany",
              price: "2800$",
            })
          }
        />
        <Card
          cardId={"3"}
          data={"3"}
          desc={
            "The furniture delivery truck: Experience seamless relocation as this truck transports your new furnishings, making your house feel like home."
          }
          loc1={"Germany"}
          loc2={"England"}
          price={"1800$"}
          onPressDetails={() =>
            navigation.navigate("Details", {
              cardId: "3",
              data: "3",
              loc1: "Germany",
              desc: "The furniture delivery truck: Experience seamless relocation as this truck transports your new furnishings, making your house feel ",
              loc2: "England",
              price: "1800$",
            })
          }
        />
        <Card
          cardId={"4"}
          data={"4"}
          desc={
            "The construction materials delivery truck: From bricks to lumber, this heavy-duty truck delivers the essential supplies for your building projects."
          }
          loc1={"England"}
          loc2={"Romania"}
          price={"3000$"}
          onPressDetails={() =>
            navigation.navigate("Details", {
              cardId: "4",
              data: "3",
              loc1: "Romania",
              desc: "The construction materials delivery truck: From bricks to lumber, this heavy-duty truck delivers the essential supplies for your building projects.",
              loc2: "England",
              price: "1800$",
            })
          }
        />
      </ScrollView>
      <View className="bg-[#374755] w-10 h-5"></View>
    </View>
  );
};

export default HomeScreen;
