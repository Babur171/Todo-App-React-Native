import { StyleSheet } from 'react-native'
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED'
    },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    items: {
      marginTop: 30
    },
    writeTextWrape: {},
    input: {},
    writeTextWrape: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      borderRadius: 60,
      backgroundColor: '#FFF',
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
      fontSize: 20
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText: {
      fontSize: 40
    },
    item1: {
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 20
    },
    itemLeft1: {
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
    itemText1: {
      maxWidth: '80%',
      fontSize: 20,
  
    },
  })
  export default styles
  