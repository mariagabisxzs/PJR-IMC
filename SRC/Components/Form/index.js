import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";

import default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("informe seu peso e sua altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("IMC")

    function imcCalculator(){
      return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
      if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc(" SEU IMC É = ")
        setTextButton("CALCULAR NOVAMENTE")
        return
      }

      setImc(null)
      setTextButton("calcular")
      setMessageImc("preencha peso e altura")

    }

    


    return(
        <View>
          
          <View>
            <Text>Altura</Text>
            <TextInput
            onChangeText={setHeight}
            value={height}
             placeholder="Ex.1.75"
             keyboardType="numeric"
            />

            <Text>Peso</Text>
            <TextInput
            onChangeText={setWeight}
            value={weight}
             placeholder="Ex. 85.766"
             keyboardType="numeric"
            />

            <Button
            onPress={() => validationImc()}
            title={textButton}
            />
            

          </View>
<ResultImc
messageResultImc = {messageImc}
ResultImc = {imc}
/>
        </View>
    );
}