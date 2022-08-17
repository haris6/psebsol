import React from "react";
import {View, TouchableOpacity,Text } from "react-native";

const Screen10 = ({navigation,route}) => {
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
                onPress={()=>navigation.navigate('Screen11')}>
                <Text style={{color:'black'}}>Go to Screen 11</Text>
            </TouchableOpacity>
        </View>
    );

}

export default Screen10;