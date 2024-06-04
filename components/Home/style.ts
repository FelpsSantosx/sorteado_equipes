import { StyleSheet} from "react-native"

export const styleHome = StyleSheet.create({
    boxImput:{
        flexDirection: 'row',
        borderColor: '#000',
        gap: 10,

    },
    imput:{
        width: '60%',
        color:'#000',
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 10,
    },
    home: {
        flex: 1,
        alignItems:'center',
        gap: 50
    },
    
    boxText: {
        width:"100%",
        padding:10,
        backgroundColor: 'rgba(0, 103, 0, 0.3)',
        
        marginTop: 70,
    },
    
    botao: {
        backgroundColor: '#295700',
        borderRadius: 5,
        fontWeight: 'bold',
    },
    
    textBtn: {  
        textAlign:"center",
        color:"#46C001",
        fontSize: 30,
        paddingHorizontal:10,
        paddingVertical:0.5,
    },
    text: {
        textAlign: "center",
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
    },
    boxMembros:{
        backgroundColor: 'rgba(255,255,255,0.5)',
        width: "60%",
        gap: 8,
        borderRadius: 5,
        padding: 20,
       
    },
    membros: {
        backgroundColor: 'rgba(255,255,255,1)',
        color:'#000',
        padding: 10,
        borderRadius: 5,
    },
    qntMembros:{
      textAlign: 'center' 
    }

})

export const styleSorteio = StyleSheet.create({
    conteiner:{
        marginVertical: 50,
        gap:20
    },
    titulo: {
        textAlign:'center',
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    txtBtn:{
        textAlign:'center',
        
    },
    BtnSort:{
        padding: 10,
        width: "15%",
        backgroundColor: "rgba(255,255,255,0.9)", 
        minWidth:100,
        borderRadius:5
    },
    boxBtnSort:{
        alignItems:'center',

    },
    boxEquipe:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection: 'row',
        gap: 10,
        textAlign: "center"
    },
    Equipe:{
        alignItems:"center",
        backgroundColor: "rgba(255,255,255,0.9)",
        width: "40%",
        height:"100%",
        fontSize:16,
        fontWeight:'400',
        padding:10,
        borderRadius:5
        
    },
    TextEquipe:{
        fontSize:18,
        fontWeight:'600'

    }
})