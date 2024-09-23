import type { Meta } from '@storybook/angular';
import {BtnComponent} from "./btn.component";
import {StoryObj} from "@storybook/angular";
import {action} from "@storybook/addon-actions";

export const actionsData = {
  onBtnClick: action('onBtnClick'),
};

const meta: Meta<BtnComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Shared Primary Button',
  component: BtnComponent,

  render: (args: BtnComponent) => ({
    props: {
      ...args,
      onBtnClick: actionsData.onBtnClick
    }
  })

};

export default meta;


type Story = StoryObj<BtnComponent>;

export const Primary: Story = {
  args: {
    title: 'Save',
    type: 'primary',
  }
};
export const PrimaryDisabled: Story = {
  args: {
    title: 'Save',
    type: 'primary',
    disabled: true
  }
};

export const Delete: Story = {
  args: {
    title: 'Delete',
    type: 'delete'
  }
};

export const Success: Story = {
  args: {
    title: 'Success',
    type: 'success'
  }
};

export const Warn: Story = {
  args: {
    title: 'Warn',
    type: 'warn'
  }
};
export const Secondary: Story = {
  args: {
    title: 'Secondary',
    type: 'secondary'
  }
};
