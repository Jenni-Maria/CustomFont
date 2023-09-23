import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    //LatoRegular: require('./assets/fonts/Lato-Regular.ttf'),
    LatoItalic: require('./assets/fonts/Lato-Italic.ttf')
  })

if(!loaded) {
  return null;
}

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My heading</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    //fontFamily: 'Latoregular',
    fontFamily: 'LatoItalic',
    fontSize: 40,
  }
});
