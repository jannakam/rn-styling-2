import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const Profile = ({ name, basedIn, followers, likes, photos }) => {
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image
          style={{ width: 100, height: 100, marginBottom: 10 }}
          source={{
            uri: "https://camo.githubusercontent.com/bbae56a51a390ade750a0d520cf43edd1866afe86e85aeb6199a5d40abe44383/68747470733a2f2f6176617461722e6972616e2e6c696172612e72756e2f7075626c69632f6769726c3f757365726e616d653d416e67656c61",
          }}
        />
        <View style={styles.nameAndLocation}>
          <Text style={styles.bolded}>{name}</Text>
          <Text>{basedIn}</Text>
        </View>
      </View>

      <View style={styles.lineStyle} />

      <View style={styles.stats}>
        <View style={styles.center}>
          <Text style={styles.bolded}>{followers}</Text>
          <Text style={styles.muted}>Followers</Text>
        </View>

        <View>
          <Text style={styles.bolded}>{likes}</Text>
          <Text style={styles.muted}>Likes</Text>
        </View>

        <View>
          <Text style={styles.bolded}>{photos}</Text>
          <Text style={styles.muted}>Photos</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 20,
    width: "70%",
    height: "40%",
  },
  photoContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    flex: 1,
  },
  nameAndLocation: {
    alignItems: "center",
  },
  lineStyle: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
    margin: 10,
    width: "90%",
  },
  bolded: {
    fontWeight: "bold",
  },
  center: {
    alignItems: "center",
  },
  muted: {
    color: "grey",
  },
});
