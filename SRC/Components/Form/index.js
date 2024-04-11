import React from "react";
import {View, Text } from "react-native";
import { TextInput } from "react-native-web";

export default function Title(){
    return(
     <View>
        <View>
        <Text>Altura</Text>
        <TextInput
        placeholder="Ex.1.69"
        keyboardType="numeric"
        />

     <Text>Peso</Text>
        <TextInput
        placeholder="Ex.69.766"
        keyboardType="numeric"
        />
        </View>
     </View>
    );
}
