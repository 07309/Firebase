import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCategories } from '../db/config';
import CategoryCard from '../components/CategoryCard';

const HomeScreen = () => {
  //const [categories, setCategories] = useState([]);
  
  // useEffect(() => {
  //   //getCategories().then((data) => setCategories(data));
  // }, [])

  return (
    <Text>ok</Text>
    // <ScrollView>
    //   {categories?.map((category) => (
    //     <CategoryCardgoryCard
    //       key={category.id}
    //       imgUrl={category.image}
    //       title={category.name}
    //     />
    // ))}
    // </ScrollView>
  )
}

export default HomeScreen