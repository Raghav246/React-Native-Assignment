import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import tw from "twrnc";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

export default function RegisterScreen(props) {
  const [user, setUser] = useState({ username: "", email: "", password: "",address:'' });
  const {setUserData}=useContext(UserContext);

  const changeHandler = (name, value) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handlePress=()=>{
  setUserData(user)
  props.navigation.navigate('Home');
  }

  console.log(user);

  return (
    <View style={tw`bg-white h-full w-full`}>
      <Image
        style={tw`h-full w-full absolute`}
        source={require("../assets/background.png")}
      />
    {/* Lights */}
      <View style={tw`flex-row justify-around w-full absolute`}>
        <Image style={tw`h-56 w-24`} source={require("../assets/light.png")} />
        <Image style={tw`h-40 w-16`} source={require("../assets/light.png")} />
      </View>
     {/* Title Forms */}
      <View style={tw`flex-1 justify-center items-center pt-10 pb-10`}>
        <Text style={tw`text-white font-bold mt-10 text-4xl`}>SignUp</Text>  
      </View>

      {/* Forms */}
      <View style={tw`flex-1 items-center  mx-4`}>
        <View style={tw`bg-black/5 p-5 rounded-2xl w-full`}>
          <TextInput
            placeholder="Name"
            placeholderTextColor={"gray"}
            style={tw`text-black`}
            value={user.username}
            onChangeText={(value) => changeHandler("username", value)} // Correct usage
          />
        </View>
        <View style={tw`bg-black/5 p-5 mt-3 rounded-2xl w-full`}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={"gray"}
            style={tw`text-black`}
            value={user.email}
            onChangeText={(value) => changeHandler("email", value)} // Correct usage
          />
        </View>
        <View style={tw`bg-black/5 p-5 mt-3 rounded-2xl w-full mb-3`}>
          <TextInput
            placeholder="Address"
            placeholderTextColor={"gray"}
            style={tw`text-black`}
            value={user.address}
            onChangeText={(value) => changeHandler("address", value)} 
          />
        </View>
        <View style={tw`w-full`}>
          <TouchableOpacity style={tw`w-full bg-red-400 p-3 rounded-2xl mb-3`} onPress={handlePress}>
            <Text style={tw`text-xl font-bold text-white text-center`}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
