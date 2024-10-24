import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

export default function UpdatePatientScreen() {
  const [id, setId] = useState('');
  const [type, setType] = useState('');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdatePatient = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/patients/${id}/clinical-data`, {
        type,
        value
      });
      setMessage('Clinical data updated successfully!');
    } catch (error) {
      setMessage('Failed to update clinical data');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Update Patient Clinical Data</Text>
      <TextInput
        placeholder="Patient ID"
        value={id}
        onChangeText={setId}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <TextInput
        placeholder="Data Type (e.g. Blood Pressure)"
        value={type}
        onChangeText={setType}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <TextInput
        placeholder="Value (e.g. 120/80 mmHg)"
        value={value}
        onChangeText={setValue}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Update Data" onPress={handleUpdatePatient} />
      {message && <Text>{message}</Text>}
    </View>
  );
}
