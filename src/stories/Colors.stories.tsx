import React from "react";
import { ColorPalette, ColorItem } from "@storybook/addon-docs";

export default {
  title: "Colors",
};

const Template = () => (
  <ColorPalette>
    <ColorItem
      title="theme.color.greyscale"
      subtitle="Some of the greys"
      colors={{ White: "#FFFFFF", Alabaster: "#F8F8F8", Concrete: "#F3F3F3" }}
    />
  </ColorPalette>
);

export const Default = Template.bind({});
