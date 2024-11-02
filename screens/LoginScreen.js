import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';

export default function LoginScreen(props) {
  return (
    <View style={tw`bg-white h-full w-full`}>
     <Image style={tw`h-full w-full absolute`} source={require('../assets/background.png')} />
      
      {/* Lights */}
      <View style={tw`flex-row justify-around w-full absolute`}>
        <Image style={tw`h-56 w-24`} source={require('../assets/light.png')} />
        <Image style={tw`h-40 w-16`} source={require('../assets/light.png')} />
      </View>

      {/* Title Forms */}
      <View style={tw`flex-1 justify-center items-center pt-10 pb-10`}>
        <Text style={tw`text-white font-bold ml-5  text-4xl`}>
          Login
        </Text>
      </View>

      {/* Forms */}
      <View style={tw`flex-1 items-center mx-4`}>
        <View style={tw`bg-black/5 p-5 rounded-2xl w-full`}>
          <TextInput 
            placeholder="Email" 
            placeholderTextColor={'gray'} 
            style={tw`text-black`} 
          />
        </View>
        <View style={tw`bg-black/5 p-5 mt-3 rounded-2xl w-full mb-3`}>
          <TextInput 
            placeholder="Password" 
            placeholderTextColor={'gray'} 
            secureTextEntry 
            style={tw`text-black`} 
          />
        </View>
        <View style={tw`w-full`}>
          <TouchableOpacity style={tw`w-full bg-red-400 p-3 rounded-2xl mb-3`}>
            <Text style={tw`text-xl font-bold text-white text-center`}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center`}>
          <Text>Don't have an Account? </Text>
          <TouchableOpacity onPress={()=>props.navigation.navigate('Register')}>
            <Text style={tw`text-sky-600`}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
