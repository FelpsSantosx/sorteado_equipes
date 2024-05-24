import { StyleSheet, Text } from "react-native"

export const styles = StyleSheet.create({

    home: {
        flex: 1,
        backgroundColor: '#01204E',

    },

    image: {
        width: 200,
        height: 200,
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 70,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },

    botao: {
        marginBottom: 50,
        backgroundColor: '#000'
    },

    containerBtn: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    text: {
        color: '#fff',
        fontSize: 30
    }
})