import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RestaurantDetail({ route }) {
  const [result, setResult] = useState(null);

  const id = route.params.id;
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  }

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>Tel : {result.display_phone}</Text>
      {result.is_closed ?(
      <AntDesign style={styles.icon} name="closecircleo" size={24} color="black" />
      ):(
        <MaterialIcons style={styles.icon} name="delivery-dining" size={24} color="black" />
      )}
      <FlatList
        data={result.image_url}
        renderItem={({ item }) => {
          return <Image style={styles.image}
            source={{ uri: result.image_url}} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title:{
    alignSelf:'center',
    fontSize:30,
    margin:10,
    fontWeight:'bold'
  },
  phone:{
    alignSelf:'center',
    fontSize:18
  },
  image:{
    height: 180,
    margin:10,
    borderRadius:20
  },
  icon:{
    alignSelf:'center'
  }
});