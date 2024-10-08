import type { Meta, StoryFn } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';

const meta: Meta<RadioButtonComponent> = {
  title: 'Radio Button',
  component: RadioButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the radio button',
      defaultValue: false,
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      defaultValue: 'medium',
    },
    labelPosition: {
      options: ['right', 'left'],
      control: { type: 'radio' },
      defaultValue: 'right',
    },
  },
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
};

export default meta;
type StoryTemplate = StoryFn<RadioButtonComponent>;

const PrimaryLargeTempalate: StoryTemplate = (args: RadioButtonComponent) => ({
  template: `<app-radio-button [value]="value" [type]="type" [disabled]="disabled" [size]="size" [labelPosition]="labelPosition" [label]="label"></app-radio-button>
             <app-radio-button [value]="'plane'" [type]="type" [disabled]="true" [size]="size" [labelPosition]="labelPosition" [label]="'Plane'"></app-radio-button>`,
  props: args,
});
export const Primary = PrimaryLargeTempalate.bind({});
Primary.args = {
  type: 'primary',
  labelPosition: 'right',
  size: 'medium',
  label: 'Car',
  value: 'car',
} as Partial<RadioButtonComponent>;
