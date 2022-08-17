import React from "react";
import {View, TouchableOpacity,Text,Button } from "react-native";

const Screen14 = ({navigation,route}) => {
    return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity 
                style={{
                    alignItems: "center",
                    backgroundColor: "#DDDDDD",
                    padding: 10,
                    width:300,
                    marginTop:150
                }}
                onPress={()=>navigation.navigate('Screen1')}>
                <Text style={{color:'black'}}>all done go back to 1st</Text>
            </TouchableOpacity>
        </View>
    );

}

export default Screen14;