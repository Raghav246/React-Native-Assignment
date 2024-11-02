import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "../UserContext";
import UserAvatar from "react-native-user-avatar";
import tw from "twrnc";

export default function ProfileScreen() {
  const { userData = {} } = useContext(UserContext);
  return (
    <View style={tw`bg-white h-full p-5`}>
      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <UserAvatar size={100} name={userData.username ||''} />
      </View>

      {/* User Info */}
      <View style={tw`mt-5`}>
        <Text style={tw`text-2xl font-bold text-gray-800`}>
          {userData.username}
        </Text>
        <Text style={tw`text-lg text-gray-600`}>{userData.email}</Text>
        <Text style={tw`text-lg text-gray-600`}>{userData.address}</Text>
      </View>

      {/* Additional Info Section */}
      <View style={tw`mt-10 bg-gray-100 p-4 rounded-lg shadow`}>
        <Text style={tw`text-lg font-semibold text-gray-800`}>About Me</Text>
        <Text style={tw`text-gray-600 mt-2`}>
          Passionate about technology and design. Always eager to learn new
          things and explore the world.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profilePictureContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ff6347", // Custom border color
  },
});
