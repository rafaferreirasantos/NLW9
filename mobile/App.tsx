import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World! This is NLW9.</Text>
      <Button title="Button 1"></Button>
      <Button title="Button 2"></Button>
      <Button title="Button 3"></Button>
      <StatusBar style="auto" />
    </View>
  );
}
interface ButtonProps {
  title: string
}
function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text style={styles.button}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#271A45',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold'
  },
  button: {
    fontSize: 36,
    backgroundColor: '#FFF'
  }
});
