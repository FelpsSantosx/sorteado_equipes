import { Text, TouchableOpacity, View } from "react-native";
import { styleHome, styleSorteio } from "./style";
import { arrMembros } from "./home"; 
import React from "react";


export function Sorteio(){
    const [nome, setNome] = React.useState(0);
    const [equipe1, setEquipe1] = React.useState<string[]>([]);
    const [equipe2, setEquipe2] = React.useState<string[]>([]);

    
    function arrayParaString(arr: any[]): string {
        return arr.join(" - ");
    }

    function getRandomInt(min:number, max:number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    function sortear(){
        let eq1 = Array()
        let eq2 = Array()
        for(let num = 0; num < arrMembros.length; num++){
            let randon = getRandomInt(0,arrMembros.length)
            if(!eq1.includes(arrMembros[randon]) && eq1.length < arrMembros.length/2){
                eq1.push(arrMembros[randon]) 
            }
        }
        for(let num = 0; num < 100; num++){
            let randon2 = getRandomInt(0,arrMembros.length)
            if(!eq1.includes(arrMembros[randon2])){
                if(!eq2.includes(arrMembros[randon2])){
                    if (eq2.length<arrMembros.length/2) {
                        eq2.push(arrMembros[randon2])
                    }
                }
            }
        }
        setEquipe1(eq1)
        setEquipe2(eq2)

    }

    return (
        <View style={styleSorteio.conteiner}>
            {/* Titulo */}
            <Text style={styleSorteio.titulo}> Deseja fazer o sorteio de {arrMembros.length} nomes ?</Text>
            
            {/* Botao Sortear */}
            <View style={styleSorteio.boxBtnSort}>
                <TouchableOpacity style={styleSorteio.BtnSort} onPress={sortear}>
                    <Text style={styleSorteio.txtBtn}>Dividir em 2</Text>
                </TouchableOpacity>
            </View>

             {/* Quadro de Equipes */}
            <View style={styleSorteio.boxEquipe}>

                <View style={styleSorteio.Equipe} >
                    <Text style={styleSorteio.TextEquipe}>EQUIPE 1</Text>
                    <Text>
                        {arrayParaString(equipe1)}
                    </Text>
                </View>
                
                <View style={styleSorteio.Equipe}>
                    <Text style={styleSorteio.TextEquipe}>EQUIPE 2 </Text>
                    <Text>
                        {arrayParaString(equipe2)}
                    </Text>
                    
                </View>
                
            </View>
        </View>
    )

}