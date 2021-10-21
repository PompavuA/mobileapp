import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import GoalItem  from './Components/GoalItem';

export default function App() {


  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoal, setCourseGoal] = useState ([]); 
  
  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoal => {
      return
    });
  }

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText)

  }

  const addGoalHandler = () => {
    setCourseGoal(currentGoal => [...currentGoal, 
      {key: Math.random().toString(),value: enteredGoal}]);
  };
  return (
    <View style={styles.okraj}>
      <View style = {styles.vkladanie} >
      <TextInput 
      style={styles.input}
      placeholder = "Meno"
      onChangeText = {goalInputHandler}
      value = {enteredGoal}
      />
      
      <Button title="Pridaj" 
      onPress = {addGoalHandler}
      />
    </View>
    <FlatList
    keyExtractor= {(item,index) => item.id}
    data={courseGoal}
    renderItem={itemData => (
      <GoalItem title={itemData.item.value} />


    )}/>

  </View>
  )
    }  
    
  

const styles = StyleSheet.create({
 okraj: {
   padding:50
    
  },
  vkladanie:{
     FlexDirection: 'row',
     justifyContent: 'space-between',
     alignitems: 'center'
  },
  input: {
    bordeColor: 'black',
    borderwidth:1,
    padding:10
  },
  report : {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    bordeColor: 'black',
    borderWidth: 1
  }
});