import * as React from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from "react-native";

import { styles } from "./style";



const arrMembros = Array();

// NÃO ESTOU CONSEGUINDO FAZER USO NO NAVIGATION, ESTÁ APONTANDO ERROR NESSA LINHA 9 (TESTA!!)
export function Home() { 
    const [capturedText, setCapturedText] = React.useState('');
    const [inputText, setInputText] = React.useState('Exemplo');
    
    const handleCapture = () => {
        setCapturedText(inputText);
        if (capturedText != '') {
            arrMembros.push(capturedText)
        }
        setInputText('')
    };
    
    return (
            <View style={styles.home}>
            
                <View style={styles.boxText}>
                    <Text style={styles.text}>Sorteado de Equipe</Text>
                </View>
                
                <SafeAreaView style={styles.boxImput}>
                <TextInput style={styles.imput}
                    placeholder='Participantes'
                    value={inputText}
                    onChangeText={setInputText}
                />


                <TouchableOpacity style={styles.botao} onPress={handleCapture}>
                    <Text style={styles.textBtn}>+</Text>
                </TouchableOpacity>
                </SafeAreaView>

                <View style={styles.boxMembros}>
                    {arrMembros.map((name, index) => (
                        <Text key={index} style={styles.membros}>{name}</Text>
                    ))}
                    <Text style={styles.qntMembros} >{arrMembros.length}</Text>
                    
                </View>

                
                
            </View>
        
    );
}


