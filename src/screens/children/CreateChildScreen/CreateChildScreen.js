import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const CreateChildScreen = ({ route }) => {
  const userId = route.params?.id;
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const fetchChildrenData = async () => {
      try {
        const response = await fetch(`http://192.168.0.18:8080/api/user/${userId}/children`);
        if (response.ok) {
          const childrenData = await response.json();
          setChildren(childrenData);
        } else {
          console.error('Error fetching children. Server returned:', response.status, response.statusText);
          // If there's an error, mock data with at least two placeholder children
          setChildren([
            { id: 1, name: 'Placeholder Child 1' },
            { id: 2, name: 'Placeholder Child 2' },
          ]);
        }
      } catch (error) {
        console.error('Error fetching children:', error.message);
        // If there's an error, mock data with at least two placeholder children
        setChildren([
          { id: 1, name: 'Placeholder Child 1' },
          { id: 2, name: 'Placeholder Child 2' },
        ]);
      }
    };

    fetchChildrenData();
  }, [userId]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Children List</Text>
      <FlatList
        data={children}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.childItem}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  childItem: {
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
});

export default CreateChildScreen;
