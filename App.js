import { Component } from "react";
import { View } from "react-native";

import ColorPicker from "react-native-wheel-color-picker";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={[]}>
        <ColorPicker
          ref={(r) => {
            this.picker = r;
          }}
          color={this.state.currentColor}
          swatchesOnly={this.state.swatchesOnly}
          onColorChange={this.onColorChange}
          onColorChangeComplete={this.onColorChangeComplete}
          thumbSize={40}
          sliderSize={40}
          noSnap={true}
          row={false}
          swatchesLast={this.state.swatchesLast}
          swatches={this.state.swatchesEnabled}
          discrete={this.state.disc}
        />

      </View>
    );
  }
}

export default App;