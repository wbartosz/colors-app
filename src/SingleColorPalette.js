import React, { Component } from "react";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);

    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    console.log('this.props', this.props)
    console.log('this._shades', this._shades)
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      console.log('key', key)
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    // Return all shades of given color
    return shades.slice(1);
  }

  render() {
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    ));

    return (
      <div className="Palette">
        <h1>Single Color Palette</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
