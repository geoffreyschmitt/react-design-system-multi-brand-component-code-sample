import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StarRatings, StarRatingsProps } from 'link-to-implemented-component';

import CoreStory, {Default as CoreDefault} from "../../core-components/StarRatings/StarRatings.stories";

export default {
	title: 'implemented/components/StarRatings',
	component: StarRatings,
	argTypes: {
    ...CoreStory.argTypes,
    customStyle: {
      ...CoreStory.argTypes?.customStyle,
      description:
        "Additional CSS on top the current implementation. Use & character as a root selector to use the styled component dynamic class.",
    },
		whiteBg: {
      type: { name: "boolean", required: false },
      control: "boolean",
      description: "star white background",
      table: {
          category: 'Styles',
          type: { summary: 'boolean' },
      },
		},
	},
} as Meta;

const Template: Story<StarRatingsProps> = (args) => <StarRatings {...args} />;

export const Default = Template.bind({});
Default.args = {
	...CoreDefault.args,
	whiteBg: false,
};
