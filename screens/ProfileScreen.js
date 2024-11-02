import { useContext } from "react";
import { Text, View } from "react-native";
import { UserContext } from "../UserContext";

export default function ProfileScreen() {
  const {userData}=useContext(UserContext)
  return (
    <View style={{ margin: 'auto', justifyContent: 'center', alignItems: 'center', width: 270, height: 250, borderRadius: 15, borderWidth: 5, borderColor: 'black' }}>
      <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold', marginRight: 5,color:'red' }}>Name:</Text>
        <Text>{userData.username}</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold', marginRight: 5,color:'red' }}>Email:</Text>
        <Text>{userData.email}</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold', marginRight: 5,color:'red' }}>Address:</Text>
        <Text>{userData.address}</Text>
      </View>
    </View>
  );
}
