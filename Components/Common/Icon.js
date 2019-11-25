import React from "react";
import {
  Dimensions,
  Image,
  Slider,
  Text,
  TouchableHighlight,
  View
} from "react-native";

class Icon {
  constructor(module, width, height) {
    this.module = module;
    this.width = width;
    this.height = height;
    Asset.fromModule(this.module).downloadAsync();
  }
}

export default Icon;
