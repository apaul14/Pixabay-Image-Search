import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { ImageContext } from "./Main";

const SingleImageView = ({ navigation, id }) => {
  const item = useContext(ImageContext)
  console.log(item)
  return (
    <View>
      <Text>Sup</Text>
    </View>
  )
}

export default SingleImageView