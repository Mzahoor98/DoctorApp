import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
  Platform
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AppointmentScreen() {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    const formattedDate = date.toLocaleDateString();
    const formattedTime = time.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    Alert.alert(
      'Appointment Requested',
      `Date: ${formattedDate}\nTime: ${formattedTime}\nReason: ${reason || '(none)'}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📅 Book an Appointment</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Select a Date</Text>
        <TouchableOpacity style={styles.selectBox} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.selectText}>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setDate(selectedDate);
            }}
          />
        )}

        <Text style={[styles.label, { marginTop: 20 }]}>Select a Time</Text>
        <TouchableOpacity style={styles.selectBox} onPress={() => setShowTimePicker(true)}>
          <Text style={styles.selectText}>
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </TouchableOpacity>
        {showTimePicker && (
          <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={(event, selectedTime) => {
              setShowTimePicker(false);
              if (selectedTime) setTime(selectedTime);
            }}
          />
        )}

        <Text style={[styles.label, { marginTop: 20 }]}>Reason (optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Describe your symptoms..."
          value={reason}
          onChangeText={setReason}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f4f7', padding: 20 },
  header: {
    fontSize: 26,
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
    marginBottom: 6,
    color: '#555'
  },
  selectBox: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8
  },
  selectText: {
    fontSize: 16,
    color: '#333'
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    textAlignVertical: 'top',
    minHeight: 80,
    marginTop: 5
  },
  button: {
    marginTop: 30,
    backgroundColor: '#0066cc',
    paddingVertical: 14,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  }
});
