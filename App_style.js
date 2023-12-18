import { View, Text, StyleSheet } from 'react-native'

const s = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor:'#12c234',
    },
    titleTxt: {
        fontSize: 16, 
        padding: 16, 
        textAlign: 'center',
    },
    contentWr: {
        flex:1, 
        backgroundColor: '#fff',
    },
    flex1: {
        flex: 1,
    },
    pos: {
        position: "absolute",
        right: 30,
        bottom: 30,
        zIndex: 999,
    },
    sun: {
        width: 100,
        height: 100,
        backgroundColor:'red',
        borderRadius:100,
        alignItems: 'center',
        justifyContent: 'center',
        
    }, 
    txtWht: {
        color : 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    renderTxt: {
        marginRight : 10,
    },
    renderView: {
        padding: 15,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    container2: {
        flex:1, 
        backgroundColor:'red',
    },
    wmb: {  
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    padding16: {
        padding: 16,
    },
    btn1: {
        fontSize: 18,
        color: '#ffff',
    }, 
    textInput: {
        backgroundColor: '#eee',
        flex: 1,
        padding: 10,
        fontSize: 18,
    },

});
export default s;