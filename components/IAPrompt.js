import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function IAPrompt(props) {
  return (
    <View style={styles.container}>
      <Text>Estas são as Inteligências Artificiais de Prompt</Text>

      <Button
title="ChatGpt"
onPress={() => props.navigation.navigate('ChatGpt')}/>

<Button
title="DeepSeek"
onPress={() => props.navigation.navigate('DeepSeek')}/>

<Button
title="Llama"
onPress={() => props.navigation.navigate('Llama')}/>

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
