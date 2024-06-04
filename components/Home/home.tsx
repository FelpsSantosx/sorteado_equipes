import * as React from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from "react-native";

import { styleHome } from "./style";



export const arrMembros = Array();

// NÃO ESTOU CONSEGUINDO FAZER USO NO NAVIGATION, ESTÁ APONTANDO ERROR NESSA LINHA 9 (TESTA!!)
export function Home() { 
    const [inputText, setInputText] = React.useState('');
    
    const handleCapture = () => {
        let palavra = inputText
        if (palavra != '') {
            arrMembros.push(palavra)
        }
        setInputText('')
    };
   
    
    
    return (
        <>
        
            <View style={styleHome.home}>
            
                <View style={styleHome.boxText}>
                    <Text style={styleHome.text}>Sorteado de Equipe</Text>
                </View>
                
                <View style={styleHome.boxImput}>
                <TextInput style={styleHome.imput}
                    placeholder='Participantes'
                    value={inputText}
                    onChangeText={setInputText}
                />


                <TouchableOpacity style={styleHome.botao} onPress={handleCapture}>
                    <Text style={styleHome.textBtn}>+</Text>
                </TouchableOpacity>
                </View>

                <View style={styleHome.boxMembros}>
                    {arrMembros.map((name, index) => (
                        <Text key={index} style={styleHome.membros}>{name}</Text>
                    ))}
                    <Text style={styleHome.qntMembros} >{arrMembros.length}</Text>
                    
                </View>

        
 
            </View>
        </>
    );
}


