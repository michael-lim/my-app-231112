import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

// const SettingsScreen = () => {
function SettingsScreen() {
  const navigation = useNavigation();

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <ListItem bottomDivider onPress={() => navigateTo('Reset')}>
        <ListItem.Content>
          <ListItem.Title>초기화</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem bottomDivider onPress={() => navigateTo('MyInfo')}>
        <ListItem.Content>
          <ListItem.Title>내 정보</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem bottomDivider onPress={() => navigateTo('Contact')}>
        <ListItem.Content>
          <ListItem.Title>문의 및 개선사항</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem bottomDivider onPress={() => navigateTo('Review')}>
        <ListItem.Content>
          <ListItem.Title>리뷰</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem bottomDivider onPress={() => navigateTo('AppInfo')}>
        <ListItem.Content>
          <ListItem.Title>앱 정보</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default SettingsScreen;