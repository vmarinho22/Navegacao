import React from 'react'
import {View, Text, Button} from 'react-native'

export default props => (
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
            {props.voltar ? 
                <Button title="Voltar" 
                onPress={()=> {
                    props.navigation.goBack()
                }}/> 
            : false}
            {props.avancar ? 
                <Button title="Avançar" 
                onPress={()=> {
                    // Método Navegate (Nao recarrega a mesma página)
                    // props.navigation.navigate(props.avancar)
                    // Método Push (É possível recarregar a mesma tela)
                    props.navigation.push(props.avancar, props.avancarParams)
                }}/> 
            : false}
        </View>
        <View style={{flex: 1}}>
            {props.children}
        </View>
    </View>
)