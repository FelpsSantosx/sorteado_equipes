import { View, Text, ViewBase, Button, Image } from "react-native";


import { styles } from "./style";
import { Header } from "react-native/Libraries/NewAppScreen";

export function Home() {
    return (
        <>
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
                            onPress={Header}
                            title="Vamos Começar!!"
                        />
                    </View>
                </View>
            </View>
        </>
    )
}
