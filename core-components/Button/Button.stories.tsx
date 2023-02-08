import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "link-to-core-component";
//Out of code sample
import {renderLink as renderLinkArgTypes} from '../utils';

export default {
  title: "core/components/Button",
  component: Button,
  argTypes: {
    children: {
      type: { name: "string", required: true },
      control: "text",
      description: "Button contents",
      table: {
        category: "Slots",
        type: { summary: "ReactNode" },
      },
    },
    linkHref: {
      control: "text",
      description: "href when component is a link",
      table: {
        category: "Data",
        type: { summary: "string" },
      },
    },
    buttonType: {
      options: ["button", "submit", "reset"],
      control: { type: "radio" },
      description: "button type when component is a button",
      table: {
        category: "Data",
        type: { summary: ["button", "submit", "reset"] },
        defaultValue: { summary: "button" },
      },
    },
    handleClick: {
      action: "handleClick",
      description: "Method the handle the onClick event",
      table: {
        category: "Events",
        type: {
          summary: "MouseEventHandler<HTMLButtonElement>",
        },
        defaultValue: { summary: "() => {}" },
      },
    },
    isDisabled: {
      control: "boolean",
      description: "Should the button be disabled?",
      table: {
        category: "Data",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    renderLink: renderLinkArgTypes,
    componentClassname: {
      control: "text",
      description: "Component classname",
      table: {
        category: "Styles",
        type: { summary: "string" },
        defaultValue: { summary: "btn" },
      },
    },
    customClassnames: {
      control: "text",
      description: "Custom classnames to add",
      table: {
        category: "Styles",
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    customStyle: {
      control: "text",
      description:
        "Inherited style from concrete implementation. Use & character as a root selector to use the styled component dynamic class.",
      table: {
        category: "Styles",
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const WithCustomRenderLink = Template.bind({});
WithCustomRenderLink.args = {
  ...Default.args,
  linkHref: "#",
  renderLink: ( {href, children}) => <>{`${href} =>`} {children}</>
};
