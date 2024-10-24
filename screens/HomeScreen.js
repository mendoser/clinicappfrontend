import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Clinical Data App</Text>
      <Button title="Register New Patient" onPress={() => navigation.navigate('Add Patient')} />
      <Button title="Update Patient Data" onPress={() => navigation.navigate('Update Patient')} />
      <Button title="Get Patient Details" onPress={() => navigation.navigate('Patient Details')} />
      <Button title="List All Patients" onPress={() => navigation.navigate('List Patients')} />
    </View>
  );
}
