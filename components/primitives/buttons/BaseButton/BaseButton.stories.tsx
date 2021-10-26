import { ComponentStory, ComponentMeta } from "@storybook/react";

import BaseButton from "./BaseButton";

export default {
  title: "Button",
  component: BaseButton,
} as ComponentMeta<typeof BaseButton>;

const Template: ComponentStory<typeof BaseButton> = (args) => (
  <BaseButton {...args} />
);

export const Small = Template.bind({});

Small.args = {
  size: "small",
  children: "small",
  className: "bg-red-500",
};

export const Medium = Template.bind({});

Medium.args = {
  size: "medium",
  children: "medium",
  className: "bg-blue-500",
};

export const Large = Template.bind({});

Large.args = {
  size: "large",
  children: "large",
  className: "bg-green-500",
};
