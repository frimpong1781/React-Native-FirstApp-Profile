import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

function App() {
  return <View style={styles.container}>
      <Image source={require('./assets/kwame.jpg')} style={styles.image} />

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style={[styles.label, styles.info]}>James Frimpong</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={[styles.label, styles.info]}>frimpong1781@yahoo.com</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Gender</Text>
        <Text style={[styles.label, styles.info]}>Male</Text>
      </View>
  </View>
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "teal"
  },

  image:{
    marginTop: 100,
    height: 150,
    width: 150,
    marginBottom: 30,
    alignSelf: "center",
    borderRadius: 75
  },

  detailContainer:{
    flexDirection: "row",
    marginVertical: 3,
    backgroundColor: "#fff"
  },

  label:{
    borderWidth: 1,
    borderColor: "black",
    fontSize: 20,
    flex: 2.5,
    paddingHorizontal: 5
  },

  info:{
    flex: 7.5
  }

});

export default App;