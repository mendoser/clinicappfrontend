import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddPatientScreen from './screens/AddPatientScreen';
import UpdatePatientScreen from './screens/UpdatePatientScreen';
import PatientDetailsScreen from './screens/PatientDetailsScreen';
import ListPatientsScreen from './screens/ListPatientsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add Patient" component={AddPatientScreen} />
        <Stack.Screen name="Update Patient" component={UpdatePatientScreen} />
        <Stack.Screen name="Patient Details" component={PatientDetailsScreen} />
        <Stack.Screen name="List Patients" component={ListPatientsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
