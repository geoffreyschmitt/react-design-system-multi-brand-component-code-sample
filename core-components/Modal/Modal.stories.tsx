import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import styled from "styled-components";

import {
  Modal,
  ModalProps,
  modalTransitionEndOptions,
} from "link-to-core-component";

export default {
  title: "core/components/Modal",
  component: Modal,
  argTypes: {
    isOpen: {
      type: { name: "string", required: true },
      control: "boolean",
      description: "Modal is open",
      table: {
        category: "Data",
        type: { summary: "boolean" },
      },
    },
    handleClose: {
      type: { name: "function", required: true },
      action: "handleClose",
      description: "Function to handle close modal",
      table: {
        category: "Events",
        type: { summary: "() => void" },
      },
    },
    handleTransitionEnd: {
      action: "handleTransitionEnd",
      description:
        "Triggered after the closing animation. Useful to control conditionally the modal component (with an isModalInDOM state for instance)",
      table: {
        category: "Events",
        type: { summary: "() => void" },
        defaultValue: { summary: "() => {}" },
      },
    },
    triggerHandleTransitionEnd: {
      options: modalTransitionEndOptions,
      defaultValue: { summary: "close" },
      control: { type: "radio" },
      description: "When to trigger the handleTransitionEnd function.",
      table: {
        category: "Styles",
        type: { summary: modalTransitionEndOptions },
        defaultValue: { summary: "close" },
      },
    },
    children: {
      type: { name: "string", required: true },
      control: "text",
      description: "Modal content",
      table: {
        category: "Slots",
        type: { summary: "ReactNode" },
      },
    },
    modalIdentifier: {
      control: "text",
      description:
        "Modal identifier. Used for accessibility modal description and events callbacks.",
      table: {
        category: "Data",
        type: { summary: "string" },
        defaultValue: { summary: "modal" },
      },
    },
    modalDescription: {
      control: "text",
      description: "Modal description for accessibility",
      table: {
        category: "Data",
        type: { summary: "string" },
        defaultValue: {
          summary:
            "This is a dialog window which overlays the main content of the page.\\n Pressing the Close Modal button will close the modal \n and bring you back to where you were on the page.",
        },
      },
    },
    modalLabel: {
      control: "text",
      description: "Modal label for accessibility",
      table: {
        category: "Data",
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    hasModalOverlay: {
      control: "boolean",
      description: "Modal has a body overlay when open",
      table: {
        category: "Data",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    canOverlayClickCloseModal: {
      control: "boolean",
      description: "Click on modal overlay cause the clause of modal",
      table: {
        category: "Data",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    hasButtonClose: {
      control: "boolean",
      description: "Modal content has button close",
      table: {
        category: "Data",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    buttonCloseContent: {
      control: "text",
      description: "Modal button close content",
      table: {
        category: "Slots",
        type: { summary: "ReactNode" },
        defaultValue: { summary: "X" },
      },
    },
    focusedElementOnOpen: {
      description:
        "On open, focus this element. If no element is set for this prop, focus close button if hasButtonClose is true.",
      table: {
        category: "Data",
        type: { summary: "HTMLElement" },
      },
    },
    transitionSpeed: {
      control: "number",
      description: "transition speed in ms. E.g 300 === 0.3s",
      table: {
        category: "Styles",
        type: { summary: "number" },
        defaultValue: { summary: "300" },
      },
    },
    componentClassname: {
      control: "text",
      description: "Component classname",
      table: {
        category: "Styles",
        type: { summary: "string" },
        defaultValue: { summary: "modal" },
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
    modalContentCustomClassnames: {
      control: "text",
      description: "Modal content custom classnames to add",
      table: {
        category: "Styles",
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    customStyle: {
      control: "text",
      description: "inherited style from concrete implementation",
      table: {
        category: "Styles",
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
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

  .modal__overlay {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Template: Story<ModalProps> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalInDOM, setIsModalInDOM] = useState(false);

  const handleModalOpen = () => {
    setIsModalInDOM(true);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Triggered after the closing animation
  const handleTransitionEnd = () => {
    setIsModalInDOM(false);
  };

  return (
    <StyledStorybookModal>
      <button onClick={handleModalOpen}>Open Modal</button>

      {/* If you wanna use the Modal in a condition like below, 
      you will need to use 2 different states, the classic isOpen for the modal, and another to control its DOM presence, 
      otherwise animation will not work while closing the modal (but component will still work don't worry) */}
      {isModalInDOM && (
        <Modal
          {...args}
          transitionSpeed={300}
          isOpen={isModalOpen}
          handleClose={handleModalClose}
          handleTransitionEnd={handleTransitionEnd}
        >
          {args.children}
        </Modal>
      )}
    </StyledStorybookModal>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "Modal content",
};
