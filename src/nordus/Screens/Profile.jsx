import React from "react";
import Colors from "../assets/util/Colors";
import {View, TextInput, SafeAreaView,Text,TouchableOpacity,StyleSheet} from "react-native";


export default function Profile(){
    return(
        
<SafeAreaView style={styles.container}>

   
<Text style={styles.text}>Meus Dados</Text>
 
 
<Text style={styles.textInput}>Nome*</Text>

<View style={styles.inputContainer}>
<TextInput 
style={styles.input} 
placeholder="Felipe Champs"
placeholderTextColor={Colors.SILVER}
></TextInput> 
</View>
    
<Text style={styles.textInput}>Telefone*</Text>    

<View style={styles.inputContainer}> 
<TextInput 
style={styles.input} 
placeholder="(31) 98451-1512"
placeholderTextColor={Colors.SILVER}
></TextInput> 
</View>
    
<Text style={styles.textInput}>Email</Text>

<View style={styles.inputContainer}>
<TextInput 
style={styles.input} 
placeholder="felipechamp@gmail.com"
placeholderTextColor={Colors.SILVER}
></TextInput> 
</View>
    
<Text style={styles.textInput}>Senha*</Text>

<View style={styles.inputContainer}>
<TextInput 
style={styles.input} 
placeholder="21/11/1998"
placeholderTextColor={Colors.SILVER}
></TextInput> 
</View>
    
<View style={styles.containerButton}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
 
</SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:"100%", 
        backgroundColor: Colors.BLACK,
    },
    text: {
        fontSize: 32,
        textAlign: "left",
        paddingLeft: 18,
        fontWeight: "400",
        color: Colors.WHITE
    },
    textInput: {
        fontSize: 16,
        textAlign: "left",
        paddingLeft: 35,
        paddingTop:12,
        paddingBottom: 6,
        fontWeight: "300",
        color: Colors.SILVER
    },
    input: {
        width: "85%",
        height: 54,
        borderRadius: 18,
        fontSize: 16,
        backgroundColor: Colors.DARKER_GRAY,
        paddingLeft: 25,
        marginBottom: 3,
        
      },
    inputContainer: {
        alignItems: "center",
    },
    containerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: "12%",
      },
      button: {
        backgroundColor: Colors.TANGERINE,
        width: '50%',
        padding: 20,
        borderRadius: 25,
      },
      textButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "500",
      },
   
})
