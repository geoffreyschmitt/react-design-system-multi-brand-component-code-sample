import React from "react";
import { Story, Meta } from "@storybook/react";

import { Breadcrumb, BreadcrumbProps } from "link-to-implemented-component";

//Out of code sample
import { withGlobalStyle } from "link-to-export";

import CoreStory, {
  Default as CoreDefault,
} from "../../core-components/Breadcrumb/Breadcrumb.stories";

export default {
  title: "implemented/components/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    ...CoreStory.argTypes,
    customStyle: {
      ...CoreStory?.argTypes?.customStyle,
      description:
        "Additional CSS on top the current implementation. Use & character as a root selector to use the styled component dynamic class.",
    },
    breadcrumbItemSeparator: {
      ...CoreStory?.argTypes?.breadcrumbItemSeparator,
      table: {
        ...CoreStory?.argTypes?.breadcrumbItemSeparator?.table,
        defaultValue: { summary: "" },
      },
    },
  },
} as Meta;

const Template: Story<BreadcrumbProps> = (args) =>
  withGlobalStyle(<Breadcrumb {...args} />);

export const Default = Template.bind({});
Default.args = {
  ...CoreDefault.args,
};

export const WithCustomRenderLink = Template.bind({});
WithCustomRenderLink.args = {
  ...Default.args,
  renderLink: ( {href, children}) => `${href} => ${children}`
};
