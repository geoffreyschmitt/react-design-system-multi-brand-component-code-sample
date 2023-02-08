import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  Title,
  TitleAvailableVariantList,
  TitleProps,
} from "link-to-implemented-component";
import { withGlobalStyle } from "link-to-export";

import CoreStory, {
  Default as CoreDefault,
} from "../../core-components/Title/Title.stories";

export default {
  title: "implemented/components/Title",
  component: Title,
  argTypes: {
    ...CoreStory.argTypes,
    variantList: {
      options: TitleAvailableVariantList,
      control: { type: "check" },
      description: "Available variants for the component",
      table: {
        category: "Styles",
        type: { summary: `Array of ${TitleAvailableVariantList}` },
        defaultValue: { summary: "['primary']" },
      },
    },
    customStyle: {
      ...CoreStory?.argTypes?.customStyle,
      description:
        "Additional CSS on top the current implementation. Use & character as a root selector to use the styled component dynamic class.",
    },
  },
} as Meta;

const Template: Story<TitleProps> = (args) =>
  withGlobalStyle(<Title {...args} />);

export const Default = Template.bind({});
Default.args = {
  ...CoreDefault.args,
};
