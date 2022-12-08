import { StyleSheet,View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import React, { useState, useEffect } from 'react';

const Row = ({ item, onPress }) => {

    const [user_post] = useState(item);

    return (
      <TouchableOpacity style={styles.item} onPress={() => onPress(user_post)}>
        <Text style={styles.title}>Title: {item.title}</Text>
      </TouchableOpacity>
    )
  };
  
function Home({ navigation}) {
    
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => response.json())
        .then((json) => { setData(json); })
        .catch((err) => { setData([]); console.error(err); })
    }, []);
  
  
    const renderItem = ({ item }) => 
    
    <Row
        item={item}
        onPress={(item) => navigation.navigate(
            {
            name: 'Details',
            params: { user_post: item },
            merge: true,
            })}>
    </Row>
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.about}>
            <Text style={styles.about}> Comp3074 - LabTest - 2</Text>
            <Text style={styles.about}> Ahmet Buyukbas - 101304595</Text>
        </View>
        <View style={styles.stretch}>
            <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id}></FlatList>
        </View>
      </SafeAreaView>
    );
  }

export default Home;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
      backgroundColor: '#EAB5EB',
      padding: 20,
      marginHorizontal: 16,
      marginVertical: 8,
    },
    title: {
      fontSize: 16,
      fontFamily:'Menlo-BoldItalic'
    },
    stretch: {
      height: 580,
      resizeMode: 'stretch',
    },
    about: {
        fontSize: 22,
        color: '#0D4960',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontFamily:'Optima-ExtraBlack'
    }
  });