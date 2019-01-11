//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

// create a component
class BarraNavegacao extends Component {
    render() {
        return (
            <View style ={styles.barraTitulo}>
                <Text style ={styles.titulo}>ATM Consultoria </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#ccc',
        padding: 10,
        height: 60
    },

    titulo:{
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        color: '#000'
    }
})


//make this component available to the app
export default BarraNavegacao;
