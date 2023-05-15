import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { TextInput } from "react-native";
import { useState } from "react";
import { logo } from "../assets";
import HomeScreen from "./HomeScreen";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-[#374755] w-full h-full items-center justify-center relative ">
      <View className="bg-slate-100 w-[350px] h-[650px] rounded-3xl shadow-3xl drop-shadow-2xl items-center justify-center">
        <View className="w-[50px] h-[50px] rounded-md items-center bottom-[80px] right-[110px]">
          <Image
            source={logo}
            className="w-full h-full rounded-xl object-cover"
          />
        </View>

        <Text className="bottom-[50px] font-semibold text-[30px]  ">
          Welcome
        </Text>

        <View className="my-7 bottom-8">
          <Text className="font-semibold text-lg left-2">Email</Text>

          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            className="bg-white py-[15px] rounded-xl w-[290px]"
          />

          <Text className="font-semibold text-lg left-2 mt-8">Password</Text>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            className="bg-white py-[15px] rounded-xl w-[290px]"
            secureTextEntry
          />
        </View>

        <View className="items-center justify-center mt-2 w-[180px]  rounded-xl ">
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
            className=" w-full bg-blue-600 py-4 items-center rounded-3xl "
          >
            <Text className="font-semibold  text-white text-[20px]">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
