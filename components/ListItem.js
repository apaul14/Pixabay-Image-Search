import React, { useContext } from 'react'
import ImageContext from './Main'

import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'



const ListItem = ({ navigation, url, id }) => {
  const pressHandler = (event) => {
    //console.log(id)
    navigation.navigate('Image Details', { id: id })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={(e) => pressHandler(e)}
      >
        <Image
          style={styles.image}
          source={ {uri:url} }
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  image: {
    width: 100,
    height: 100,
    // padding: 15
  },
})

export default ListItem
