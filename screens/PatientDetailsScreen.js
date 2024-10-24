import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

export default function PatientDetailsScreen() {
  const [id, setId] = useState('');
  const [patient, setPatient] = useState(null);
  const [message, setMessage] = useState('');

  const handleGetPatient = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/patients/${id}`);
      setPatient(response.data);
    } catch (error) {
      setMessage('Failed to fetch patient details');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Get Patient Details</Text>
      <TextInput
        placeholder="Patient ID"
        value={id}
        onChangeText={setId}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Get Patient" onPress={handleGetPatient} />
      {patient ? (
        <View>
          <Text>Name: {patient.name}</Text>
          <Text>Age: {patient.age}</Text>
          <Text>Clinical Data: {JSON.stringify(patient.clinicalData)}</Text>
        </View>
      ) : (
        <Text>{message}</Text>
      )}
    </View>
  );
}
