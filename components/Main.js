import React, { useEffect, useState, useContext } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import axios from 'axios'

import { getImages, ImageContext } from '../context'

import ListItem from './ListItem'

if (process.env.NODE_ENV !== 'production') {
  require('../secrets')
}

// const ImageContext = React.createContext()
// const ImageProvider = ({children}) => {
//   let value = data

//   return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
// }

const Main = ({ navigation }) => {
  //const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  //const [page, setPage] = useState(1)
  //const [offset, setOffset] = useState(0)


  const API_KEY = process.env.API_KEY
  
  // const getImages = async () => {
  //   try {
  //     const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&category=backgrounds&page=${page}&per_page=20`)
  //     //data.length ? setData(data.concat(response.data.hits)) : setData(response.data.hits)
  //     setData(data.concat(response.data.hits))

  //     setPage(page + 1)
  //     //setOffset(offset + 20)
  //     setLoading(false)
  //   } catch (error) {
  //     console.error(error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  useEffect(() => {
    getImages()
  }, [])

  const context = useContext(ImageContext)
  console.log(context)

  // return (
  //   <View style={{ flex: 1 }}>
  //     {/* {isLoading ? <ActivityIndicator/> : ( */}
  //       <FlatList
  //         data={data}
  //         horizontal={false}
  //         numColumns={3}
  //         onEndReached={() => getImages()}
  //         onEndReachedThreshold={0.7}
  //         keyExtractor={({ id }, index) => id}
  //         renderItem={({ item }) => (
  //           // <Text>{item.previewURL}</Text>
  //           <ListItem 
  //           url={item.previewURL}
  //           id={item.id}
  //           navigation={navigation}
  //           />
  //         )}
  //       />
  //     )}
  //   </View>
  // )

  return (<View><Text>Sup</Text></View>)
}

//export { Main, ImageProvider }
export default Main
