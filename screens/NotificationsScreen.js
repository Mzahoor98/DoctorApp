import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const dummyNotifications = [
  { id: '1', message: 'Your appointment with Dr. Lee is confirmed.' },
  { id: '2', message: 'New refill available for Lipitor.' },
  { id: '3', message: 'Our office is closed on July 4th.' }
];

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔔 Notifications</Text>

      <View style={styles.card}>
        <FlatList
          data={dummyNotifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.notification}>
              <Text style={styles.text}>{item.message}</Text>
            </View>
          )}
        />
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
  notification: {
    paddingVertical: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  text: {
    fontSize: 16,
    color: '#333'
  }
});
