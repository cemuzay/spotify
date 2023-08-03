import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (value) => {
    setSearchTerm(value);
    // Perform your search logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Friday, 15 Dec"
          value={searchTerm}
          onChangeText={handleInputChange}
        />
        <Icon name="search" size={20} color="#ccc" style={styles.searchIcon} />
      </View>
      <View style={styles.Learn}>
        <Text style={styles.dim}>Learn</Text>
        <Text style={styles.Choose}>Choose the part of the body</Text>
      </View>
      
      <TouchableOpacity style={[styles.boxcont, styles.tomato]}>
        <View style={styles.infoContainer}>
          <Text style={styles.tom}>Head & Face</Text>
          <Text style={styles.dis}>11 diseases</Text>
        </View>
        <Image 
          source={{
            uri: '/Users/cemuzay/Desktop/image',
          }}
          style={styles.image}
        />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.boxcont, styles.green]}>
        <View style={styles.infoContainer}>
          <Text style={styles.tom}>Head & Face</Text>
          <Text style={styles.dis}>11 diseases</Text>
        </View>
        <Image 
          source={{
            uri: '/Users/cemuzay/Desktop/image2',
          }}
          style={styles.image}
        />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.boxcont, styles.sandy]}>
        <View style={styles.infoContainer}>
          <Text style={styles.tom}>Head & Face</Text>
          <Text style={styles.dis}>11 diseases</Text>
        </View>
        <Image 
          source={{
            uri: '/Users/cemuzay/Desktop/image3',
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.boxcont, styles.blue]}>
        <View style={styles.infoContainer}>
          <Text style={styles.tom}>Head & Face</Text>
          <Text style={styles.dis}>11 diseases</Text>
        </View>
        <Image 
          source={{
            uri: '/Users/cemuzay/Desktop/image4',
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  searchIcon: {
    marginRight: 10,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    height: 45,
  },
  Learn: {
    marginHorizontal: 25,
  },
  dim: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  Choose: {
    fontSize: 20,
    marginVertical: 2,
  },
  tom: {
    color: '#fff',
    paddingLeft: 20,
  },
  boxcont: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'space-between', // Space evenly along the horizontal axis
    marginHorizontal: 12,
    paddingBottom: 5,
    fontSize: 20,
    marginVertical: 10,
  },
  dis: {
    paddingLeft: 20,
    color: 'gainsboro',
  },
  green: {
    backgroundColor: '#8dc4bb',
  },
  sandy: {
    backgroundColor: '#f2982f',
  },
  blue: {
    backgroundColor: '#327389',
  },
  tomato: {
    backgroundColor: '#eb7662',
  },
  infoContainer: {
    flex: 1,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius:10,
    marginHorizontal:20,
    marginTop:10,
  },
});

