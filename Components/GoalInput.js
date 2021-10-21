import React, {useState} from 'react'
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'

const GoalInput = props => {
const [enteredGoal, setEnteredGoal] = useState('');

function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText)
  }
return(
    <View>
        <TextInput 
        style={styles.input}
        placeholder = "Meno"
        onChangeText = {goalInputHandler}
        value = {enteredGoal}
        />
  
  <Button title="Pridaj" 
  onPress = {props.onAddGoal.bind(this,enteredGoal)}
  />

    </View>

);
};

const styles=StyleSheet.create({
Vonkajsie:{
FlexDirection: 'row',
justifyContent: 'space-between',
alignitems: 'center'
},
Text:{
borderColor: 'black',
borderwidth:1,
padding:10
}

});

export default GoalInput;