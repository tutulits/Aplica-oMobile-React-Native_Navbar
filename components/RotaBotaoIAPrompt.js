import { createStackNavigator } from "@react-navigation/stack";

import ChatGpt from './IAPromptChatGpt';
import DeepSeek from './IAPromptDeepSeek';
import Llama from './IAPromptIlama31';
import IAPrompt from './IAPrompt';

const Stack = createStackNavigator();

export default function RotaButtonIAImagem() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="IAPrompt" component={IAPrompt} options/>
            <Stack.Screen name="ChatGpt" component={ChatGpt} options/>
            <Stack.Screen name="DeepSeek" component={DeepSeek} options={{title: "DeepSeek 3.5"}} />
            <Stack.Screen name="Llama" component={Llama} options={{title: "Llama 3.5"}}/>
        </Stack.Navigator>
    );
}