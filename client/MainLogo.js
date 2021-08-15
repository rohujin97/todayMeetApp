import React from 'react';
import { View, Text, StyleSheet}  from 'react-native';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TodayMeet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    paddingTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Title;