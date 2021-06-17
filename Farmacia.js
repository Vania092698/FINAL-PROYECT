import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';

import AddMedicamentoScreen from './screens/AddMedicamentoScreen';
import MedicamentoScreen from './screens/MedicamentoScreen';
import MedicamentoDetailScreen from './screens/MedicamentoDetailScreen';

import AddHigieneYBellezaScreen from './screens/AddHigieneYBellezaScreen';
import HigieneYBellezaScreen from './screens/HigieneYBellezasScreen';
import HigieneYBellezaDetailScreen from './screens/HigieneYBellezaDetailScreen';

import AddVitaminasYSuplementoscreen from './screens/AddVitaminasYSuplementosScreen';
importVitaminasYSuplementosScreen from './screens/VitaminasYSuplementosScreen';
import VitaminasYSuplementosDetailScreen from './screens/VitaminasYSuplementosDetailScreen';

const Stack = createStackNavigator();
//
function MyStack() {
    return ( <
        Stack.Navigator initialRouteName = "Signup"
        screenOptions = {
            {
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#3740FE',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }
        } >
        <
        Stack.Screen name = "Signup"
        component = { Signup }
        options = {
            { title: 'Signup' } }
        />        <
        Stack.Screen name = "Login"
        component = { Login }
        options = {
            { title: 'Login' },
            { headerLeft: null }
        }
        /> <
        Stack.Screen name = "Dashboard"
        component = { Dashboard }
        options = {
            { title: 'Dashboard' },
            { headerLeft: null }
        }
        /> <
        Stack.Screen name = "AddMedicamentoScreen"
        component = { AddMedicamentoScreen }
        options = {
            { title: 'Add Medicamento' } }
        /> <
        Stack.Screen name = "MedicamentoScreen"
        component = { MedicamentoScreen }
        options = {
            { title: 'Medicamento List' } }
        /> <
        Stack.Screen name = "MedicamentoDetailScreen"
        component = { MedicamentoDetailScreen }
        options = {
            { title: 'Medicamento Detail' } }
        /> <
        Stack.Screen name = "AddHigieneYBellezaScreen"
        component = { AddHigieneYBellezaScreen }
        options = {
            { title: 'Add HigieneYBelleza' } }
        /> <
        Stack.Screen name = "HigieneYBellezaScreen"
        component = { HigieneYBellezaScreen }
        options = {
            { title: 'HigieneYBelleza List' } }
        /> <
        Stack.Screen name = "HigieneYBellezaDetailScreen"
        component = { HigieneYBellezaDetailScreen }
        options = {
            { title: 'HigieneYBelleza Detail' } }
        /> <
        Stack.Screen name = "AddVitaminasYSuplementosScreen"
        component = { AddVitaminasYSuplementosScreen }
        options = {
            { title: 'Add VitaminasYSuplementos' } }
        /> <
        Stack.Screen name = "VitaminasYSuplementosScreen"
        component = { VitaminasYSuplementosScreen }
        options = {
            { title: 'VitaminasYSuplementos List' } }
        /> <
        Stack.Screen name = "VitaminasYSuplementosDetailScreen"
        component = { VitaminasYSuplementosDetailScreen }
        options = {
            { title: 'VitaminasYSuplementos Detail' } }
        /> <
        /Stack.Navigator>



    );
}

export default function App() {
    return ( <
        NavigationContainer >
        <
        MyStack / >
        <
        /NavigationContainer>
    );
}