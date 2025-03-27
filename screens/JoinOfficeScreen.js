import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function JoinOfficeScreen() {
  const [officeId, setOfficeId] = useState('');

  const handleJoin = () => {
    if (!officeId.trim()) {
      Alert.alert('Missing Info', 'Please enter an office ID.');
      return;
    }

    // Placeholder logic — replace with Firebase check later
    Alert.alert('Request Sent', `You’ve requested to join office: ${officeId}`);
    setOfficeId('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🏢 Join a Doctor’s Office</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Enter Office ID:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. office123"
          value={officeId}
          onChangeText={setOfficeId}
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={handleJoin}>
          <Text style={styles.buttonText}>Join Office</Text>
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
