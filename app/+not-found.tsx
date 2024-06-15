import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import * as UI from '@/components/common/index'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <UI.ThemedView style={styles.container}>
        <UI.ThemedText type="title">This screen doesn't exist.</UI.ThemedText>
        <Link href="/" style={styles.link}>
          <UI.ThemedText type="link">Go to home screen!</UI.ThemedText>
        </Link>
      </UI.ThemedView>
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
