import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './Home';
import IAImagem from './RotaBotaoIAImagem';
import IAPrompt from './RotaBotaoIAPrompt';

const Tab = createBottomTabNavigator();

export default function RotaTab() {
    return (
        <Tab.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: "#00ff00", }}>
            <Tab.Screen name="IAImage" component={IAImagem} options={{
                tabBarLabel: 'IAImagem',
                tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />)
            }} />
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />)
            }} />
            <Tab.Screen name="IAPrompt" component={IAPrompt} options={{
                tabBarLabel: 'IAPrompt',
                tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />)
            }} />
        </Tab.Navigator>
    );
}