import React from "react";
import {View, TouchableOpacity,Text } from "react-native";

const Screen5 = ({navigation,route}) => {
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
                onPress={()=>navigation.navigate('Screen6')}>
                <Text style={{color:'black'}}>Go to Screen 6</Text>
            </TouchableOpacity>
        </View>
    );

}

export default Screen5;