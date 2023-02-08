import React from "react";
import { Story, Meta } from "@storybook/react";

//Out of code sample
import { buttonVariants } from "../../utils";

import {
  Button,
  ButtonProps,
  ButtonSizeVariants,
} from "link-to-implemented-component";

//Out of code sample
import { withGlobalStyle } from "link-to-the-export";

import CoreStory, { Default } from "../../core-components/Button/Button.stories";

export default {
  title: "implemented/components/Button",
  component: Button,
  argTypes: {
    ...CoreStory.argTypes,
    variantList: buttonVariants,
    size: {
      options: ButtonSizeVariants,
      control: { type: "radio" },
      description: "Available sizes for the component",
      table: {
        category: "Styles",
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = ({ children, ...args }) =>
  withGlobalStyle(<Button {...args}>{children}</Button>);

export const Primary = Template.bind({});
Primary.args = {
  children: "Button primary",
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  ...Primary.args,
  isDisabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button secondary",
  variantList: ["secondary"],
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  ...Secondary.args,
  isDisabled: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: "Button tertiary",
  variantList: ["tertiary"],
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  ...Tertiary.args,
  isDisabled: true,
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: "Button ghost",
  variantList: ["ghost"],
};

export const GhostSecondary = Template.bind({});
GhostSecondary.args = {
  children: "Button ghost",
  variantList: ["secondary", "ghost"],
};
export const GhostTertiary = Template.bind({});
GhostTertiary.args = {
  children: "Button ghost",
  variantList: ["tertiary", "ghost"],
};

export const GhostDisabled = Template.bind({});
GhostDisabled.args = {
  ...Ghost.args,
  isDisabled: true,
};

export const Smaller = Template.bind({});
Smaller.args = {
  children: "Size S button",
  size: "s",
};

export const Bigger = Template.bind({});
Bigger.args = {
  children: "Size L button",
  size: "l",
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  children: "Highlighted button",
  variantList: ["primary", "highlighted"],
};

export const WithCustomRenderLink = Template.bind({});
WithCustomRenderLink.args = {
  ...Default.args,
  linkHref: "#",
  renderLink: ({ href, children }) => (
    <>
      {`${href} =>`} {children}
    </>
  ),
};
