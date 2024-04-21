import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

function App(): JSX.Element {
  const [name, setName] = useState('');

  const handleChangeInput = (text: string) => {
    console.log(text);
    setName(text);
  };
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <Text>이름</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={handleChangeInput}
          />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'red' },
});

export default App;
