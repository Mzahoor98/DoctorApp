import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Alert
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const GOOGLE_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'; // 🔐 Replace this

export default function MapScreen() {
  const [location, setLocation] = useState({
    latitude: 40.73061,
    longitude: -73.935242,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      Alert.alert('Empty Search', 'Please enter an address or location.');
      return;
    }

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          searchQuery
        )}&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();

      if (data.status === 'OK') {
        const { lat, lng } = data.results[0].geometry.location;
        setLocation({
          ...location,
          latitude: lat,
          longitude: lng
        });
      } else {
        Alert.alert('Location Not Found', 'Try a different address or name.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Unable to fetch location.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📍 Office Location</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search doctor or address..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
      />

      <View style={styles.card}>
        <MapView style={styles.map} region={location}>
          <Marker coordinate={location} title="Selected Location" />
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f4f7', padding: 20 },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333'
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    elevation: 2
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4
  },
  map: {
    width: Dimensions.get('window').width - 40,
    height: 400
  }
});
