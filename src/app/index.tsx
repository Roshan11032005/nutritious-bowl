import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Link href="/dashboard" style={styles.link}>
          Tap me
        </Link>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "white", // Ensure contrast
  },
  main: {
    maxWidth: 960,
    alignItems: "center",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",
  },
  link: {
    fontSize: 18,
    color: "blue", // Ensure visibility
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 18,
    color: "#38434D",
    textAlign: "center",
  },
});
console.log("Page component rendered");