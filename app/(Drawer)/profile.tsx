import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, ScrollView } from 'react-native';


import * as UI from '@/components/common/index';


export default function TabTwoScreen() {
  return (
    <UI.ContainnerView>
      <UI.ThemedView style={styles.titleContainer}>
        <UI.ThemedText size="lg">Profile</UI.ThemedText>
      </UI.ThemedView>
      <UI.ThemedText>This app includes example code to help you get started.</UI.ThemedText>
    </UI.ContainnerView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
