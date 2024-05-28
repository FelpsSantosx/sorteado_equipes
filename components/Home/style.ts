import { StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    boxImput:{
        flexDirection: 'row',
        borderColor: '#000',
        gap: 10,

    },
    imput:{
        width: '70%',
        color:'#000',
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    home: {
        flex: 1,
        backgroundColor: '#01204E',
        alignItems:'center',
        gap: 50
    },
    
    boxText: {
        marginTop: 100,
    },
    
    botao: {
        backgroundColor: '#888',
        borderRadius: 8,
        fontWeight: 'bold',
    },
    
    textBtn: {  
        fontSize: 30,
        paddingHorizontal:15,
        paddingVertical:4,
    },
    text: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
    }
})