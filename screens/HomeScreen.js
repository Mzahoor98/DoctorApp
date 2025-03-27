import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const options = [
    { label: 'Join Office 🏢', screen: 'JoinOffice' },
    { label: 'Book Appointment 📅', screen: 'Appointment' },
    { label: 'Request Refill 💊', screen: 'Refill' },
    { label: 'View Notifications 🔔', screen: 'Notifications' },
    { label: 'Find Office on Map 📍', screen: 'Map' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🏠 Welcome</Text>

      <View style={styles.card}>
        <Text style={styles.title}>What would you like to do?</Text>

        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => navigation.navigate(option.screen)}
          >
            <Text style={styles.buttonText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f4f7', padding: 20 },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: '600',
    color: '#444',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
