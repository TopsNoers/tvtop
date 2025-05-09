import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'This screen doesn’t exist',
        }}
      />
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          This screen doesn’t exist.
        </Text>
        <Link href="/" style={styles.link}>
          Go to home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
