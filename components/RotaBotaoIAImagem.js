import { createStackNavigator } from "@react-navigation/stack";

import Dalle3 from './IAImagemDalle3';
import Gemini from './IAImagemGemini';
import IAImage from './IAImagem';

const Stack = createStackNavigator();

export default function RotaButtonIAImagem() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="IAImage" component={IAImage}/>
            <Stack.Screen name="Dalle3" component={Dalle3} options/>
            <Stack.Screen name="Gemini" component={Gemini} options={{title: "Gemini 3.5"}}/>
        </Stack.Navigator>
    );
}