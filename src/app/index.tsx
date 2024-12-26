import { StyleSheet, Text, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

import FoodListItem from "../components/FoodListitem";
export default function Page() {
  return (
    <View style={styles.container}>
      <FoodListItem item={{ label: "Pizza", cal: 75, brand: "Dominos" }} />
      <FoodListItem item={{ label: "Pizza", cal: 75, brand: "Dominos" }} />
      {/* You can add more items here with different data */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  foodItem: {
    backgroundColor: 'gainsboro',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 400,
    marginBottom: 10,
  },
  foodTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  foodName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  foodDetails: {
    color: 'dimgray',
    fontSize: 14,
  },
});

console.log("Page component rendered");

