import React from "react";
import { Story, Meta } from "@storybook/react";

import { ReadMore, ReadMoreProps } from "link-to-core-component";

export default {
  title: "core/components/ReadMore",
  component: ReadMore,
  argTypes: {
    defaultIsTruncated: {
      control: "boolean",
      description:
        "Is the default display truncate?",
      table: {
        category: 'Data',
        type: { summary: "boolean" },
      },
    },
    seeMoreButtonContent: {
      type: { name: "string", required: true },
      control: "text",
      description: "Text/node to display for the read more",
      table: {
        category: 'Slots',
        type: { summary: "ReactNode" },
      },
    },
    seeLessButtonContent: {
      type: { name: "string", required: true },
      control: "text",
      description: "Text/node to display for the read less",
      table: {
        category: 'Slots',
        type: { summary: "ReactNode" },
      },
    },
    content: {
      type: { name: "string", required: true },
      control: "text",
      description: "The full content",
      table: {
        category: 'Data',
        type: { summary: "string" },
      },
    },
    truncatedContent: {
      control: "text",
      description:
        "Truncated content if user don't want the truncate to be done at component level",
      table: {
        category: 'Data',
        type: { summary: "string" },
      },
    },
    truncateContentMaxLines: {
      control: "number",
      description: "Truncate content Max lines",
      table: {
        category: 'Data',
        type: { summary: 'number' },
        defaultValue: { summary: "3" },
      },
    },
    truncateContentLength: {
      control: "number",
      description: "Truncate content length",
      table: {
        category: 'Data',
        type: { summary: 'number' },
      },
    },
    truncateEndContent: {
      control: "text",
      description: "Truncate content end",
      table: {
        category: 'Slots',
        type: { summary: "ReactNode" },
      },
    },
    contentLineHeight: {
      control: "number",
      description: "Content line height",
      table: {
        category: 'Styles',
        type: { summary: 'number' },
        defaultValue: { summary: "1" },
      },
    },
    componentClassname: {
      control: "text",
      description: "Component classname",
      table: {
        category: 'Styles',
        type: { summary: "string" },
        defaultValue: { summary: "read-more" },
      },
    },
    customClassnames: {
      control: "text",
      description: "Custom classnames to add",
      table: {
        category: 'Styles',
        type: { summary: "string" },
      },
    },
    customStyle: {
      control: "text",
      description: "inherited style from concrete implementation",
      table: {
        category: 'Styles',
        type: { summary: "string" },
      },
    },
  },
} as Meta;

const Template: Story<ReadMoreProps> = (args) => <ReadMore {...args} />;

export const Default = Template.bind({});
Default.args = {
  seeMoreButtonContent: "Read more",
  seeLessButtonContent: "Read less",
  content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni doloremque iusto obcaecati dignissimos debitis nemo dicta dolor qui, doloribus iste voluptate, eligendi recusandae tempora ipsam facere minima quod consequuntur odio.
    A nisi provident voluptas ab rem cupiditate quo, qui placeat saepe aspernatur non dolorem. Tempore quos ex esse reprehenderit, illum repellendus blanditiis repellat consequuntur, reiciendis sint tenetur corrupti, vel pariatur.
    Iste quaerat ipsam minus eum quae quis tenetur veniam itaque, debitis exercitationem autem dicta maiores reprehenderit ullam. Numquam porro quis repudiandae. Animi quos repellat fugiat, aut hic quaerat molestiae ut?
    Mollitia sit neque, quae quia commodi itaque labore at nisi architecto, praesentium corrupti! Eveniet culpa soluta laboriosam id ea beatae quibusdam, rem, perferendis tenetur natus odit vel doloremque commodi quasi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni doloremque iusto obcaecati dignissimos debitis nemo dicta dolor qui, doloribus iste voluptate, eligendi recusandae tempora ipsam facere minima quod consequuntur odio.
    A nisi provident voluptas ab rem cupiditate quo, qui placeat saepe aspernatur non dolorem. Tempore quos ex esse reprehenderit, illum repellendus blanditiis repellat consequuntur, reiciendis sint tenetur corrupti, vel pariatur.
    Iste quaerat ipsam minus eum quae quis tenetur veniam itaque, debitis exercitationem autem dicta maiores reprehenderit ullam. Numquam porro quis repudiandae. Animi quos repellat fugiat, aut hic quaerat molestiae ut?
    Mollitia sit neque, quae quia commodi itaque labore at nisi architecto, praesentium corrupti! Eveniet culpa soluta laboriosam id ea beatae quibusdam, rem, perferendis tenetur natus odit vel doloremque commodi quasi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni doloremque iusto obcaecati dignissimos debitis nemo dicta dolor qui, doloribus iste voluptate, eligendi recusandae tempora ipsam facere minima quod consequuntur odio.
    A nisi provident voluptas ab rem cupiditate quo, qui placeat saepe aspernatur non dolorem. Tempore quos ex esse reprehenderit, illum repellendus blanditiis repellat consequuntur, reiciendis sint tenetur corrupti, vel pariatur.
    Iste quaerat ipsam minus eum quae quis tenetur veniam itaque, debitis exercitationem autem dicta maiores reprehenderit ullam. Numquam porro quis repudiandae. Animi quos repellat fugiat, aut hic quaerat molestiae ut?
    Mollitia sit neque, quae quia commodi itaque labore at nisi architecto, praesentium corrupti! Eveniet culpa soluta laboriosam id ea beatae quibusdam, rem, perferendis tenetur natus odit vel doloremque commodi quasi?`,
};

export const WithCustomTruncatedContent = Template.bind({});
WithCustomTruncatedContent.args = {
  ...Default.args,
  truncatedContent: `Custom truncated content =>`,
};

export const WithMaxCharLength = Template.bind({});
WithMaxCharLength.args = {
  ...Default.args,
  truncateContentLength: 100,
};

export const WithMaxOneLine = Template.bind({});
WithMaxOneLine.args = {
  ...Default.args,
  truncateContentMaxLines: 1,
};
