import { Component } from "react";
import { View ,StyleSheet,Text} from "react-native";

import ColorPicker from "react-native-wheel-color-picker";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
     <View style={styles.container}>

            <View style={styles.top} >

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






    )
  }
}
const styles = StyleSheet.create({


  container: {

    flex: 1,
//        alignItems: 'center',
//        justifyContent: 'center',
    backgroundColor: "#fff",
    padding: 20,
//    margin: 10,
  },
  top: {

    backgroundColor: "grey",
    borderWidth: 5,
    marginTop:160,
    height:300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  //Do not remove
//  middle: {
//    flex: 0.3,
//    backgroundColor: "beige",
//    borderWidth: 5,
//  },
//  bottom: {
//    flex: 0.3,
//    backgroundColor: "pink",
//    borderWidth: 5,
//    borderBottomLeftRadius: 20,
//    borderBottomRightRadius: 20,
//  },
});

export default App;