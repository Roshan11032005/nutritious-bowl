import { StyleSheet, Text, View, FlatList } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const foodItems = [
  { label: 'Pizza', cal: 75, brand: 'Dominos' },
  { label: 'Apple', cal: 50, brand: 'Generic' },
  { label: 'Coffee', cal: 50, brand: 'Generic' }
];

// Import FoodListItem component (assuming it's in a separate file)
import FoodListItem from "../components/FoodListitem";

export default function Page() {
  return (
    <View style={styles.container}>
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
  }
});

console.log("Page component rendered");