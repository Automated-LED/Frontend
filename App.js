import { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { Linking } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";
import { Divider } from "@rneui/themed";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        {/* ------------------------------- NAVBAR----------------------------------------------------------- */}
        <View style={styles.navbar}>
          {/* LOGO IMAGE */}
          <TouchableOpacity
            onPress={() => Linking.openURL("https://flaglamps.com/")}
            activeOpacity={1}
          >
            <Image
              source={{
                uri: "https://cdn.shopify.com/s/files/1/0532/3522/0641/files/L_M_Logo_Original_180x.jpg?v=1613004952",
              }}
              style={styles.logo}
            />
          </TouchableOpacity>
          {/* HEADING */}
          <Text style={styles.headingApp}>The Original Solar Flag Lamps</Text>
        </View>

        {/* ------------------------------------------GREEN BOX-------------------------------------------------------------------------- */}

        <View style={styles.box}>
          <Text style={styles.text}>Color</Text>
        </View>

        {/* -----------------------------------------------COLOR WHEEL------------------------------------------------------------------------ */}

        <View style={styles.top}>
          <ColorPicker
            ref={(r) => {
              this.picker = r;
            }}
            color={this.state.currentColor}
            swatchesOnly={this.state.swatchesOnly}
            onColorChange={this.onColorChange}
            onColorChangeComplete={this.onColorChangeComplete}
            thumbSize={40}
            sliderSize={30}
            noSnap={true}
            row={false}
            swatchesLast={this.state.swatchesLast}
            swatches={this.state.swatchesEnabled}
            discrete={5}
          />
          <Divider
            width={2}
            orientation="vertical"
            marginTop={10}
            marginBottom={10}
          />
          <ColorPicker
            ref={(r) => {
              this.picker = r;
            }}
            color={this.state.currentColor}
            swatchesOnly={this.state.swatchesOnly}
            onColorChange={this.onColorChange}
            onColorChangeComplete={this.onColorChangeComplete}
            thumbSize={40}
            sliderSize={30}
            noSnap={true}
            row={false}
            swatchesLast={this.state.swatchesLast}
            swatches={this.state.swatchesEnabled}
            discrete={5}
          />
        </View>

        {/* -----------------------------------------------Features------------------------------------------------------------------------ */}

        <View style={styles.box}>
          <Text style={styles.text}>Features</Text>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            }
            activeOpacity={0.7}
          >
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/Automated-LED/Frontend/master/assets/FlameF.jpg",
              }}
              style={styles.img}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            }
            activeOpacity={0.7}
          >
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/Automated-LED/Frontend/master/assets/RainbowF.jpg",
              }}
              style={styles.img}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonView}>
          <Button
            onPress={() => {
              Alert.alert("You tapped the button!");
            }}
            title="UPDATE"
            color="green"
          />
        </View>
      </View>
    );
  }
}

// --------------------------------------------------------------------------------------------------------?

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
    width: "100%",
  },

  //----------------  NAVBAR STYLING ---------
  navbar: {
    width: "100%",
    backgroundColor: "#feffcb",
  },
  logo: {
    width: 90,
    height: 50,
    marginTop: 20,
  },
  headingApp: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginBottom: 15,
  },

  //----------------  GREEN BOX STYLING ---------

  box: {
    width: "auto",
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    margin: 5,
  },

  //----------------  COLOR WHEEL STYLING ---------

  top: {
    borderWidth: 1,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    height: "auto",
    width: "95%",
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "green",
  },

  //----------------  FEATURES STYLING ---------

  box2: {
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    marginTop: 20,
  },
  bottom: {
    borderWidth: 1,
    flexDirection: "row",
    height: "auto",
    width: "95%",
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "green",
    justifyContent: "space-between",
  },
  buttonView: {
    marginTop: 20,
    marginLeft: 130,
    marginRight: 130,
  },
  img: {
    marginLeft: "10%",
    marginRight: "10%",
    width: 120,
    height: 120,
  },
});

export default App;
