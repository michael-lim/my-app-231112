import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// const HomeScreen = () => {
function NoSmokingScreen() {
  const navigation = useNavigation();

  const startSmokingCessation = () => {
    navigation.navigate('SmokingCessation');
  };

  const chooseQuitDate = () => {
    navigation.navigate('QuitDate');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="smoking" type="font-awesome" size={100} color="#000" />
      </View>
      <View style={styles.footer}>
        <Button
          title="지금부터 금연 시작"
          onPress={startSmokingCessation}
          buttonStyle={styles.button}
        />
        <Button
          title="금연 시작 날짜 정하기"
          onPress={chooseQuitDate}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
});

export default NoSmokingScreen;
