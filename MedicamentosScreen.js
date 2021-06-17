import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Button } from 'react-native';
import firebase from '../components/firebase';

class MedicamentosScreen extends Component {

    constructor() {
        super();
        this.firestoreRef = firebase.firestore().collection('Medicamentos');
        this.state = {
            isLoading: true,
            userArr: []
        };
    }

    componentDidMount() {
        this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    getCollection = (querySnapshot) => {
        const userArr = ([]);
        querySnapshot.forEach((res) => {
            const { nombre, precio, stock, } = res.data();
            userArr.push({
                key: res.id,
                res,
                nombre,
                precio,
                stock,
            });
        });
        this.setState({
            userArr,
            isLoading: false,
        });
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
            Button onPress = {
                () => this.props.navigation.navigate("AddMedicamentosScreen") }
            title = "Create Medicine Name" /
            > {
                this.state.userArr.map((item) => {
                    return ( <
                        ListItem key = { item.id }
                        bottomDivider onPress = {
                            () => {
                                this.props.navigation.navigate("MedicamentosDetailScreen", {
                                    userkey: item.key,
                                });
                            }
                        } >
                        <
                        ListItem.Content >
                        <
                        ListItem.Title > { item.nombre } < /ListItem.Title> <
                        ListItem.Subtitle > { item.precio } < /ListItem.Subtitle> <
                        /ListItem.Content> <
                        /ListItem>
                    );
                })
            } <
            /ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 22
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

export default MedicamentosScreen;