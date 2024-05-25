import * as React from 'react';
import { View, Text, Button, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "./style";

// NÃO ESTOU CONSEGUINDO FAZER USO NO NAVIGATION, ESTÁ APONTANDO ERROR NESSA LINHA 9 (TESTA!!)
function HomeScreen({ navigation }) { 
    return (

        <View style={styles.home}>
            <View style={styles.container}>
                <Text style={styles.text}>Sorteado de Equipes</Text>
                <Image
                    source={require('@/assets/images/Codigo.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.containerBtn}>
                <View style={styles.botao}>
                    <Button
                        color={'#000'}
                        onPress={() => navigation.navigate('Details')}
                        title="Vamos Começar!!"
                    />

                </View>
            </View>
        </View>
    );
}

function DetailsScreen() {
    return (
        <View>
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

 export function Home() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

