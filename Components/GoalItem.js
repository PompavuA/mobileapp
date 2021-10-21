import React from "react";
import{View, Text, StyleSheet} from "react-native";

const GoalItem = props => {
return(
<View>
<Text> {props.title} </Text>

</View>
);
};
const styles = StyleSheet.create ({
    item:{
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    bordeColor: 'black',
    borderWidth: 1
    }


});



export default GoalItem;













