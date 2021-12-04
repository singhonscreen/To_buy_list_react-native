import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const Home = () => {
    const[text, setText] = useState("")

    const[data, setData] = useState(
          
             [ {
                  name:"Milk",
              },
              {
                name:"Coffee",
            },
            {
                name:"Orange",
            },
            {
                name:"Bread",
            },]
            )
            const addItems = ()=>{
                
            }
         
            let [fontsLoaded] = useFonts({
                "Inter_SemiBoldItalic": 'https://rsms.me/inter/font-files/cursive.otf?v=3.12',
              });
              if (!fontsLoaded) {
                return <AppLoading />;
              } else {
    return (
        <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
        <View style={{flex:4}}>
        <TextInput placeholder="Search" style={styles.textInput}
        onChangeText={(txt)=>{setText(txt)}}
        />
        </View>
        <TouchableOpacity style={styles.add_icon_container} onPress = {()=>{setData([...data, {name:text}])}} >
        <Ionicons style={styles.add_icon} name="add-sharp" size={24} color="black" />
        </TouchableOpacity>
        </View>
        <View>
        <FlatList style={styles.listItem}
        keyExtractor={(elem)=>elem.name+Math.random()*100}
        data ={data}
        renderItem={(({item})=>{
            return <Text  style={styles.listItem_name}>{item.name}</Text>
        })}
          />
        </View>
        </View>
    )
}}

export default Home

const styles = StyleSheet.create({
    mainContainer:{
        marginTop:25,
        padding:2
    },
    inputContainer:{
        
        padding:10,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        borderWidth:1,
        borderColor:"grey",
        height:75,
        borderRadius:4,
    },
    textInput:{
        flex:1,
         backgroundColor:"rgba(241, 243, 244, 1)",
         borderWidth:1,
         borderColor:"grey",
        fontSize:20,
        borderRadius:2,
        padding:10,
        margin:2  
    },
    add_icon_container:{
        marginLeft:5,
        flex:1,
        borderLeftWidth:3,
        borderColor:"grey",
        height:75,
        justifyContent:"center"
    },
    add_icon:{
        fontSize:40,
        padding:20,
        fontWeight:"bold",
    },
    listItem:{
        marginLeft:4,
        marginRight:4,
        paddingTop:20,
    },
    listItem_name:{
        fontSize:40,
        fontWeight:"700",
        fontStyle:"italic",
        fontFamily: 'Inter_SemiBoldItalic'
    }
})
