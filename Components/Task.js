import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'

export default function Task(props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.squire}></View>
                <Text style={styles.itemText}>{props.text}</Text>
                {/* <Button  title="Edit" onPress={props.edit}/> */}
                <Icon name='edit' onPress={props.edit}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

        

    },
    squire: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: '80%',
        fontSize:20,

    },
    btn:{
        fontSize:60
    }
    // else if (task && !togle) {
    //     console.log('task', task);
    //     let newArr = [...tastitem]
    //     newArr[editData] = task
    //     console.log('newArr', newArr);
    // const myeditData=(edit)=>{
    //     let newArr = [...tastitem]
    //     const todoIndex=tastitem.findIndex(todx=>todx===editData);
    //     newArr.splice(todoIndex,1,edit)
    //     setTaskItem(newArr);
    //     console.log(setTaskItem(newArr));
        
    //   }
})
