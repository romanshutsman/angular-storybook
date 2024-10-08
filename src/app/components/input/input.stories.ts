import {InputComponent} from "./input.component";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CommonModule} from "@angular/common";


const meta: Meta<InputComponent> = {
  title: 'Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule]
    })
  ],
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text'
    },
    type: {
      control: { type: 'radio' },
      options: ['ok', 'error'],
      defaultValue: 'ok',
    }
  }
}
export default meta;

const InputTemplate: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
  template: `<app-input [label]="label" [type]="type"></app-input>`
});


export const Default = InputTemplate.bind({});
Default.args = {
  label: 'Name',
  type: 'ok'
}

export const ErrorInput = InputTemplate.bind({});
ErrorInput.args = {
  label: 'Email Error',
  type: 'error'
}
