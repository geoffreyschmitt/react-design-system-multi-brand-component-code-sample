import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StarRatings, StarRatingProps } from 'link-to-core-component';

export default {
	title: 'core/components/StarRatings',
	component: StarRatings,
	argTypes: {
    starNumber: {
      control: "number",
      description: "Rating number of star",
      table: {
          category: 'Data',
          type: { summary: 'number' },
      },
    },
		ratings: {
      type: { name: "number", required: true },
      control: "number",
      description: "rating count",
      table: {
          category: 'Data',
          type: { summary: 'number' },
      },
    },
		size: {
      type: { name: "number", required: false },
      control: "number",
      description: "star size",
      table: {
          category: 'Styles',
          type: { summary: 'number' },
      },
		},
    backgroundStarImageSrc: {
      control: 'text',
      description: 'Background star image src',
      table: {
        category: 'Styles',
        type: { summary: "string" },
        defaultValue: { summary: "star-image-src" },
      },
    },
    activeStarImageSrc: {
      control: 'text',
      description: 'Active star image src',
      table: {
        category: 'Styles',
        type: { summary: "string" },
        defaultValue: { summary: "active-star-image-src" },
      },
    },
    componentClassname: {
      control: 'text',
      description: 'Component classname',
      table: {
        category: 'Styles',
        type: { summary: "string" },
        defaultValue: { summary: "star-ratings" },
      },
    },
    customClassnames: {
      control: 'text',
      description: 'Custom classnames to add',
      table: {
        category: 'Styles',
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    customStyle: {
      control: 'text',
      description: 'inherited style from concrete implementation',
      table: {
        category: 'Styles',
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
	},
} as Meta;

const Template: Story<StarRatingProps> = (args) => <StarRatings {...args} />;

export const Default = Template.bind({});
Default.args = {
	ratings: 3,
	size: 40,
};
