import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Login, Signup, ResetPassword, NewPassword } from './screens';



export default function App() {

  const [display, setDisplay] = useState(4)
  const displayComponent = (value) => {
    if (value == 1) {
      setDisplay(1)
    }
    else if (value == 2) {
      setDisplay(2)

    }
    else if (value == 3) {
      setDisplay(3)

    }
    else if (value == 4) {
      setDisplay(4)
    }
    else {
      alert('error occured')
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {

        display == 1 ? <Login /> :
          display == 2 ? <Signup /> :
            display == 3 ? <ResetPassword /> :
              display == 4 ? <NewPassword /> :
                alert('error come')

      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    marginTop: '25%'
    // justifyContent: 'center',
  }
});
