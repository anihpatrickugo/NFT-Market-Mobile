import { StyleSheet, ScrollView } from 'react-native';

import * as UI from '@/components/common/index';


export default function HomeScreen() {
  return (
    <UI.ContainnerView>
      <UI.ThemedView style={styles.titleContainer}>
        <UI.ThemedText type="title">Welcome!</UI.ThemedText>
      </UI.ThemedView>
    </UI.ContainnerView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
