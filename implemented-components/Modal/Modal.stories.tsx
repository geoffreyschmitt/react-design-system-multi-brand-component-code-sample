import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import styled from "styled-components";

import { Modal, ModalProps } from "link-to-implemented-component";
//Out of code sample
import { withGlobalStyle } from "link-to-the-export";

import CoreStory from "../../core-components/Modal/Modal.stories";

export default {
  title: "implemented/components/Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `The "Open Modal" button is purely for Storybook demonstration purpose.`,
      },
    },
  },
  argTypes: {
    ...CoreStory.argTypes,
    customStyle: {
      control: "text",
      description:
        "Additional CSS on top the current implementation. Use & character as a root selector to use the styled component dynamic class.",
    },
  },
} as Meta;

const StyledStorybookModal = styled.div`
  .storybook__container {
    max-width: 80%;
    margin: 0 auto;
  }

  .storybook__modal-content {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: red;
    font-weight: bold;
    padding: 50px 0;
  }
`;

const Template: Story<ModalProps> = (args) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return withGlobalStyle(
    <StyledStorybookModal>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal {...args} isOpen={modalIsOpen} handleClose={handleModalClose}>
        {args.children}
      </Modal>
    </StyledStorybookModal>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: <div className="storybook__modal-content">Content for modal</div>,
};

export const WithContainerAsCustomClassnamesForModalContent = Template.bind({});
WithContainerAsCustomClassnamesForModalContent.args = {
  ...Default.args,
  modalContentCustomClassnames: "storybook__container",
};
WithContainerAsCustomClassnamesForModalContent.story = {
  parameters: {
    docs: {
      storyDescription: `The container class is purely for Storybook purpose.`,
    },
  },
};

export const WithCustomCloseButtonContent = Template.bind({});
WithCustomCloseButtonContent.args = {
  ...Default.args,
  buttonCloseContent: "Close",
};
