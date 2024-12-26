import { StyleSheet,Button, Text, View, FlatList,TextInput } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const foodItems = [
  { label: 'Pizza', cal: 75, brand: 'Dominos' },
  { label: 'Apple', cal: 50, brand: 'Generic' },
  { label: 'Coffee', cal: 50, brand: 'Generic' }
];

const PerformSearch =()=>{
  console.log("pressed");
}
// Import FoodListItem component (assuming it's in a separate file)
import FoodListItem from "../components/FoodListitem";
import { useState } from "react";

export default function Page() {
  const [search,setSearch] = useState('');
  return (
    <View style={styles.container}>
      <TextInput value = {search} onChangeText={setSearch} placeholder="Search..." style={styles.input}/>
{search && <Button title = "Search" onPress={PerformSearch}/>}
      <FlatList
        data={foodItems} 
        renderItem={({ item }) => <FoodListItem item={item} />}
        keyExtractor={(item) => item.label} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 20, 
    justifyContent:"center",
    gap:10,
  },
  input:{
    backgroundColor:'#f6f6f8',
    padding:10,
    borderRadius:5,
    gap:5,

  }
});

console.log("Page component rendered");