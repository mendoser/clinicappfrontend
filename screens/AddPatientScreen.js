import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

export default function AddPatientScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const handleAddPatient = async () => {
    try {
      const response = await axios.post('http://localhost:3000/patients', {
        name,
        age: parseInt(age)
      });
      setMessage('Patient added successfully!');
    } catch (error) {
      setMessage('Failed to add patient');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Register New Patient</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Add Patient" onPress={handleAddPatient} />
      {message && <Text>{message}</Text>}
    </View>
  );
}
