import { StyleSheet, Text, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const FoodListItem = ({ item }) => {
  const styles = StyleSheet.create({
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
      justifyContent: "center"
      

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

  return (
    <View style={styles.foodItem}>
      {/* Food Item View */}
      <View style={styles.foodTextContainer}>
        <Text style={styles.foodName}>{item.label}</Text>
        <Text style={styles.foodDetails}>{item.cal} cal, {item.brand}</Text>
      </View>
      <AntDesign name="pluscircleo" size={24} color="royalblue" />
    </View>
  );
};

export default FoodListItem;