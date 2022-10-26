import { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Linking } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";

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
          <Text style={styles.headingApp}>The Orignal Solar Flag Lamps</Text>
        </View>

        {/* ------------------------------------------GREEN WALA DABBA-------------------------------------------------------------------------- */}

        <View style={styles.submit}>
          <Text style={styles.submitText}>Color</Text>
        </View>

        {/* -----------------------------------------------COLOR WHEEL------------------------------------------------------------------------ */}

        <View style={styles.top}>
          {/* <View style={styles.left}> */}
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
            discrete={this.state.disc}
          />         
        </View>

      </View>
    );
  }
}

// --------------------------------------------------------------------------------------------------------?

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  top: {
    flex: 1,
    flexDirection: "row",
    padding: 0,
    borderWidth: 1,
    // marginTop: 0,
    height: 300,
    borderColor: "green",
  },
  headingApp: {
    fontSize: 26,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginBottom: 15,
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  logo: {
    width: 90,
    height: 50,
    marginTop: 20,
  },
  navbar: {
    backgroundColor: "#feffcb",
  },

  submit: {
    position: "relative",
    top: 8,
    // marginTop: 10,
    marginRight: 140,
    marginLeft: 140,
    height: 30,
    backgroundColor: "green",
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },

});

export default App;
