import { View, Text, ViewBase, Button } from "react-native";


import { styles } from "./style";
import { Header } from "react-native/Libraries/NewAppScreen";

export function Home(){
    return (
        <>
            <View style={styles.container}>
                <Text>Teste</Text>
                    
            </View>

            <View style={styles.botao}>
                <Button 
                    color={'#000'}
                    onPress={Header}
                    title="Click me!" 
                />
            </View>
        </>
    )
}