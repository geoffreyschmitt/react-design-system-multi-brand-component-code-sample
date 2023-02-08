import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Title, TitleProps } from 'link-to-core-component';

export default {
  title: 'core/components/Title',
  component: Title,
  argTypes: {
    children: {
      type: {name: 'string', required: true},
      control: 'text',
      description: 'Title content',
      table: {
        category: 'Slots',
        type: { summary: "ReactNode" },
        defaultValue: { summary: "" },
      },
    },
    titleTag: {
      control: 'text',
      description: 'Title tag',
      table: {
        category: 'Data',
        type: { summary: "string" },
        defaultValue: { summary: "h2" },
      },
    },
    componentClassname: {
      control: 'text',
      description: 'Component classname',
      table: {
        category: 'Styles',
        type: { summary: "string" },
        defaultValue: { summary: "modal" },
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

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Title',
};
