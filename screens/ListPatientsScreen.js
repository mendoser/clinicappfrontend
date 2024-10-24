import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default function ListPatientsScreen() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:3000/patients/critical');
        setPatients(response.data);
      } catch (error) {
        console.error('Failed to fetch patients');
      }
    };
    fetchPatients();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>All Critical Patients</Text>
      {patients.map((patient) => (
        <View key={patient._id} style={{ marginBottom: 10 }}>
          <Text>Name: {patient.name}</Text>
          <Text>Age: {patient.age}</Text>
          <Text>Critical Condition: {patient.criticalCondition ? 'Yes' : 'No'}</Text>
        </View>
      ))}
    </View>
  );
}
