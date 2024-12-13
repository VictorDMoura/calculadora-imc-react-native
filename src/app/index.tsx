import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomImage from "@/components/CustomImage";
import { styles } from "./styles";
import { useState } from "react";

export default function Index() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  function handleCalcularIMC() {
    const numberHeight = Number(height);
    const numberWeight = Number(weight);

    if (numberHeight < 0 || numberWeight < 0) {
      Alert.alert("Erro", "Preencha os campos corretamente");
      return;
    }

    if (isNaN(numberHeight) || isNaN(numberWeight) || numberHeight === 0) {
      Alert.alert("Erro", "Preencha os campos corretamente");
      return;
    }

    const imc = numberWeight / (numberHeight * numberHeight);

    if (imc < 18.5) {
      Alert.alert("IMC", `Seu IMC é ${imc.toFixed(2)} - Abaixo do peso`);
    } else if (imc < 24.9) {
      Alert.alert("IMC", `Seu IMC é ${imc.toFixed(2)} - Peso normal`);
    } else if (imc < 29.9) {
      Alert.alert("IMC", `Seu IMC é ${imc.toFixed(2)} - Sobrepeso`);
    } else if (imc < 34.9) {
      Alert.alert("IMC", `Seu IMC é ${imc.toFixed(2)} - Obesidade grau 1`);
    } else if (imc < 39.9) {
      Alert.alert("IMC", `Seu IMC é ${imc.toFixed(2)} - Obesidade grau 2`);
    } else {
      Alert.alert("IMC", `Seu IMC é ${imc.toFixed(2)} - Obesidade grau 3`);
    }
  }

  function handleLimpar() {
    setHeight("");
    setWeight("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <CustomImage
        source={require("../../assets/balanca.png")}
        width={150}
        height={150}
      />
      <Text style={styles.title}>Calculador de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        onChangeText={(text) => setWeight(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        onChangeText={(text) => setHeight(text)}
      />
      <View>
        <TouchableOpacity style={styles.button} onPress={handleCalcularIMC}>
          <Text style={styles.buttonText}>Calcular IMC</Text>
          <CustomImage
            source={require("../../assets/medica.png")}
            width={200}
            height={213}
            style={{ objectFit: "contain", maxWidth: "100%", maxHeight: 200 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLimpar}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
