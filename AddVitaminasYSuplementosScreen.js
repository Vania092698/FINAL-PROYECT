import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../components/firebase';
import VitaminasYSuplementosScreen from './VitaminasYSuplementosScreen';

class AddVitaminasYSuplementosScreen extends Component {
    constructor() {
        super();
        this.dbRef = firebase.firestore().collection('VitaminasYSuplementos');
        this.state = {
            nombre: '',
            precio: '',
            stock: '',
            isLoading: false
        };
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    storeUser() {
        if (this.state.nombre === '' || this.state.precio === '' || this.state.stock === '') {
            alert('Name of product!')
        } else {
            this.setState({
                isLoading: true,
            });
            this.dbRef.add({
                    nombre: this.state.nombre,
                    calle: this.state.precio,
                    colonia: this.state.stock,
                }).then((res) => {
                    this.setState({
                        nombre: '',
                        precio: '',
                        stock: '',
                        isLoading: false,
                    });
                    this.props.navigation.navigate('VitaminasYSuplementosScreen')
                })
                .catch((err) => {
                    console.error("Error found: ", err);
                    this.setState({
                        isLoading: false,
                    });
                });
        }
    }

    render() {
        if (this.state.isLoading) {
            return ( <
                View style = { styles.preloader } >
                <
                ActivityIndicator size = "large"
                color = "#9E9E9E" / >
                <
                /View>
            )
        }
        return ( <
            ScrollView style = { styles.container } >
            <
            View style = { styles.inputGroup } >
            <
            TextInput placeholder = { 'Nombre' }
            value = { this.state.nombre }
            onChangeText = {
                (val) => this.inputValueUpdate(val, 'nombre')
            }
            /> < /
            View > <
            View style = { styles.inputGroup } >
            <
            TextInput multiline = { true }
            numberOfLines = { 4 }
            placeholder = { 'Precio' }
            value = { this.state.precio }
            onChangeText = {
                (val) => this.inputValueUpdate(val, 'precio')
            }
            /> < /
            View > <
            View style = { styles.inputGroup } >
            <
            TextInput placeholder = { 'stock' }
            value = { this.state.stock }
            onChangeText = {
                (val) => this.inputValueUpdate(val, 'stock')
            }
            /> < /
            View > <
            View style = { styles.button } >
            <
            Button title = 'Add VitaminasYSuplementos'
            onPress = {
                () => this.storeUser()
            }
            color = "#19AC52" /
            >
            <
            /View> < /
            ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AddVitaminasYSuplementosScreen;