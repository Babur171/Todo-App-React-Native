import React, { useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native'
import Task from '../Task';
import styles from '../Screen/styles'
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { useDispatch,useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { addTodo,deleteTodo,updateTodo } from '../Redux/Action/action';

const todoApp=()=> {
  const [task, setTask] = useState('');
  const [tastitem, setTaskItem] = useState([]);
  const [togle, setTogle] = useState(true);
  const [editData, setEdit] = useState(null);
  const dispatch = useDispatch();

  const list=useSelector((state)=>state.todos)


  const addItems = () => {
    if (!task) {
      alert("Write something");
    }
    else if (task && !togle) {
      const update=list.map((todo)=>{
        if(todo.id===editData){
            return {...todo,taskName:task}
        }
        return todo;
    } )
     const ab= dispatch(updateTodo(update))
      setTask('');
      setTogle(true);
      setEdit(null);
    }
    else {
      Keyboard.dismiss();
      let ab=dispatch(addTodo(task));
      setTask('');
      setTogle(true);
    }
  }
  const editItem = (index) => {
    const editItem=list.find((elm)=>{
      return index===elm.id;
    })
    setTask(editItem.taskName);
    setEdit(index);
    setTogle(false);
  }

  const deleteItem = (index)   => {
    const filteredTasks = list.filter(task => task.id !== index);
    dispatch(deleteTodo(filteredTasks));
    
  }

  return (

    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>My First Todo App </Text>
        <ScrollView>
        <View style={styles.items}>
          <Task text={"EXample"} />
          {
            list.map((item) => {
              return (
                <TouchableOpacity key={item.id} onPress={() =>deleteItem(item.id)}>
                  <View style={styles.item1}>
                    <View style={styles.itemLeft1}>
                      <View style={styles.squire}></View>
                      <Text style={styles.itemText1}>{item.taskName}</Text>
                      <Icon name='edit' onPress={() => editItem(item.id)} />
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })
          } 
        </View>
        </ScrollView>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.writeTextWrape}>
        <TextInput style={styles.input} placeholder={'Write your list'} value={task} onChangeText={text => setTask(text)}></TextInput>
        {
          togle ? <TouchableOpacity>
            <View style={styles.addWrapper}>
              <Text style={styles.addText} onPress={addItems}>+</Text>
            </View>
          </TouchableOpacity> : <TouchableOpacity>
            <View style={styles.addWrapper}>
              <Text style={styles.addText} onPress={addItems}><Icon name='edit' /></Text>
            </View>
          </TouchableOpacity>
        }
      </KeyboardAvoidingView>
    </View>

  )}

// const mapStateToProps=(state,ownProps)=>{
//   return {todoData:state}
// }
// const mapDispatchToProps=dispatch=>({
//   addTodo:()=>dispatch(addTodo),
//   deleteTodo:()=>dispatch(deleteTodo)
// })


export default todoApp

