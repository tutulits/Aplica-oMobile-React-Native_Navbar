import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function IAImagem(props) {
  return (
    <View style={styles.container}>
      <Text>Estas são as Inteligências Artificiais Das Imagens</Text>

      <Button
        title="Dalle3"
        onPress={() => props.navigation.navigate('Dalle3')} />

      <Button
        title="Gemini"
        onPress={() => props.navigation.navigate('Gemini')} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
