import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { StyleSheet } from 'react-native';

function Details({route}) {
  
    let user_post = route.params.user_post;
    const [user, setUser] = useState([]);
  
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${user_post.userId}`)
        .then((response) => response.json())
        .then((json) => { setUser(json); })
        .catch((error) => { console.error(error); })
    }, []);
  
    return (
      <SafeAreaView style={styles.item} >
        <Text style={styles.user_post}>Id: {user_post.id}</Text>
        <Text style={styles.user_post}>Title: {user_post.title}</Text>
        <Text style={styles.user_post}>Username: {user.username}</Text>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'pink',
        padding: 20,
        marginHorizontal: 16,
        marginVertical: 8,
        borderWidth:2,
        borderRadius:10,
       
    },

    user_post: {
        fontSize: 20,
        color: '#000000',
        margin:10,
        fontFamily:'GillSans-SemiBold'
        },
    });

export default Details;