import { Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Welcome to the Expo Router!
      </Text>
    </View>
  );
}