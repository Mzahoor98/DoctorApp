import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function RefillScreen() {
  const [medication, setMedication] = useState('');

  const handleRefill = () => {
    if (!medication.trim()) {
      Alert.alert('Missing Info', 'Please enter a medication name.');
      return;
    }

    Alert.alert('Refill Requested', `Medication: ${medication}`);
    setMedication('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>💊 Request a Refill</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Medication Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Lipitor 10mg"
          value={medication}
          onChangeText={setMedication}
        />

        <TouchableOpacity style={styles.button} onPress={handleRefill}>
          <Text style={styles.buttonText}>Submit Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f4f7', padding: 20 },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#555'
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 14,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  }
});
