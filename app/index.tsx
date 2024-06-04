import * as React from 'react';
import { Home } from '@/components/Home/home';
import { ScrollView } from 'react-native';
import { Sorteio } from '@/components/Home/Sorteio';
import { StyleSheet} from "react-native"


const App = () => {
  return (
    <>
    <ScrollView style={styleindex.fundo}>
     <Home></Home>
     <Sorteio></Sorteio>
    </ScrollView>
    </>

  )
};

export const styleindex = StyleSheet.create({
  fundo: {
    backgroundColor: "#46C001"
  }
})

export default App;
