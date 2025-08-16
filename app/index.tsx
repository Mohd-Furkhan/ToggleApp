import { FontAwesome } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React, { useState } from "react";
import { Text, View } from "react-native";

function ToggleApp() 
{
  const [toggle, setToggle] = useState(true);
  return (
    <>
      {toggle ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>
          <Feather name="sun" size={22} color="black" /> Light mode</Text>
          <FontAwesome
            name="toggle-off"
            size={40}
            color="black"
            onPress={() => setToggle(false)}
          />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <Text style={{ fontSize: 18, color: "white" }}>
          <FontAwesome6 name="moon" size={22} color="white" /> Dark mode</Text>
          <FontAwesome
            name="toggle-on"
            size={40}
            color="white"
            onPress={() => setToggle(true)}
          />
        </View>
      )}
    </>
  );
}

export default ToggleApp;
