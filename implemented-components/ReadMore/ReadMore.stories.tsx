import React from "react";
import { Story, Meta } from "@storybook/react";

import { ReadMore, ReadMoreProps } from "link-to-implemented-component";

//Out of code sample
import { withGlobalStyle } from "link-to-the-export";

import CoreStory, {
  Default as CoreDefault,
} from "../../core-components/ReadMore/ReadMore.stories";

export default {
  title: "implemented/components/ReadMore",
  component: ReadMore,
  argTypes: {
    ...CoreStory.argTypes,
    customStyle: {
      ...CoreStory.argTypes?.customStyle,
      description:
        "Additional CSS on top the current implementation. Use & character as a root selector to use the styled component dynamic class.",
    },
  },
} as Meta;

const Template: Story<ReadMoreProps> = (args) =>
  withGlobalStyle(<ReadMore {...args} />);

export const Default = Template.bind({});
Default.args = {
  ...CoreDefault.args,
};
