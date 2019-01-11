//import liraries
import React, { Component } from 'react';
import {View, StatusBar, Image, Text, StyleSheet} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheClientes = require('../images/detalhe_cliente.png');
const cliente1 = require('../images/cliente1.png');
const cliente2 = require('../images/cliente2.png');



// Criando Componente

class CenaClientesScreen extends Component {
    static navigationOptions = {
        title:'Nossos Clientes',

        headerStyle:{
            backgroundColor:'#b9c941'
        },
        headerTintColor: '#000',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
    };


    render() {
        return (
            <View>
                <StatusBar 
                barStyle = "dark-content" 
                //hidden = {true}
                backgroundColor = "#b9c941" 
                />

                <View style = {styles.detalhe}>
                    <Image source={cliente1}/>
                    <Text style={styles.txtDetalhe}>lorem ipsum</Text>
                </View>

                <View style = {styles.detalhe}> 
                    <Image source={cliente2}/>
                    <Text style={styles.txtDetalhe}>lorem ipsum</Text>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    cabecalho:{
    flexDirection: 'row',
    marginTop: 20
    },
    txtTitulo:{
        fontSize: 30,
        color: '#b9c941',
        marginLeft: 10,
        marginTop: 25,
        fontWeight: 'bold'
    },
    detalhe:{
        padding: 20,
        marginTop: 10
    },
    txtDetalhe:{
      fontSize: 18,
      marginLeft: 25  
    }   
});

//make this component available to the app
export default CenaClientesScreen;
