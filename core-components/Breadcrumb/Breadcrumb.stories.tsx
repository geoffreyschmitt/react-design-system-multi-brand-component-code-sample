import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Breadcrumb, BreadcrumbProps } from "link-to-core-component";

//Out of code sample
import {renderLink as renderLinkArgTypes} from '../utils';

export default {
  title: 'core/components/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    breadcrumbItemList: {
      type: {name: 'string', required: true},
      control: 'text',
      description: 'Breadcrumb item list',
      table: {
        category: 'Data',
        type: { summary: '{ name: string; href: string; }[]' },
      },
    },
    breadcrumbItemSeparator: {
      control: 'text',
      description: 'Breadcrumb item separator',
      table: {
        category: 'Slots',
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '>' },
      },
    },
    activeIndexBreadcrumbIndex: {
      control: 'number',
      description: 'Index of the active breadcrumb index',
      table: {
        category: 'Data',
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    renderLink: renderLinkArgTypes,
    componentClassname: {
      control: 'text',
      description: 'Component classname',
      table: {
        category: 'Styles',
        type: { summary: 'string' },
        defaultValue: { summary: 'breadcrumb' },
      },
    },
    customClassnames: {
      control: 'text',
      description: 'Custom classnames to add',
      table: {
        category: 'Styles',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    customStyle: {
      control: 'text',
      description:
        'Inherited style from concrete implementation. Use & character as a root selector to use the styled component dynamic class.',
      table: {
        category: 'Styles',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  }
} as Meta;

const Template: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  breadcrumbItemList: [
    { name: 'Cart', href: '#' },
    { name: 'Shipping information', href: '#' },
    { name: 'Payment', href: '#' },
  ],
};

export const WithCustomRenderLink = Template.bind({});
WithCustomRenderLink.args = {
  ...Default.args,
  renderLink: ( {href, children}) => `${href} => ${children}`
};
