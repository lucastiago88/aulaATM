//import liraries
import React, { Component } from 'react';
import {TouchableOpacity,View, StatusBar, Image, StyleSheet} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo = require('../images/logo.png');
const menuCliente = require('../images/menu_cliente.png');
const menuContato = require('../images/menu_contato.png');
const menuEmpresa = require('../images/menu_empresa.png');
const menuServico = require('../images/menu_servico.png');


// create a component
class CenaPrincipalScreen extends Component {
    static navigationOptions ={
        header: null
    };


    render() {
        return (
            <View>
                <StatusBar 
                barStyle = "dark-content" 
                //hidden = {true}
                backgroundColor = "#CCC" 
                />
                <BarraNavegacao/>

                <View style={styles.logo}>
                    <Image source={logo} />
                </View>
                <View style={styles.menu}>
                    <View style={styles.menuGrupo}>
                        <TouchableOpacity onPress ={() => this.props.navigation.navigate('Clientes')}>
                            <Image style={styles.imgMenu} source={menuCliente} />
                        </TouchableOpacity>
                        <Image style={styles.imgMenu} source={menuContato} />
                    </View>

                    <View style={styles.menuGrupo}>
                         <Image style={styles.imgMenu}  source={menuEmpresa} />
                         <Image style={styles.imgMenu} source={menuServico} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles  = StyleSheet.create({
logo:{
    marginTop: 30,
    alignItems: 'center'
},
menu:{
    alignItems: 'center',

},
menuGrupo:{
    flexDirection: 'row',

},
imgMenu:{
margin: 15
}

});


//make this component available to the app
export default CenaPrincipalScreen;
