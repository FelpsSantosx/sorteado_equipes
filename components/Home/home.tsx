import * as React from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from "react-native";

import { styles } from "./style";


// NÃO ESTOU CONSEGUINDO FAZER USO NO NAVIGATION, ESTÁ APONTANDO ERROR NESSA LINHA 9 (TESTA!!)
export function Home() { 
    return (
        
            <View style={styles.home}>
            
                <View style={styles.boxText}>
                    <Text style={styles.text}>Sorteado de Equipe</Text>
                </View>
                
                <SafeAreaView style={styles.boxImput}>
                <TextInput style={styles.imput}
                    placeholder='Participantes'

                />
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textBtn}>+</Text>
                </TouchableOpacity>
                </SafeAreaView>
                
            </View>
        
    );
}


