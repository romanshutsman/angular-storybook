import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Cards',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    cardTitle: {
      control: 'text',
    },
    cardContent: {
      control: 'text',
    },
  },
  parameters: {},
};
export default meta;
const CardTemplate: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
  template: `
  <app-card>
  <div cardTitle >
    <h2 >{{ cardTitle }}</h2>
  </div>
  <div cardContent >
    <div >{{ cardContent }}</div>
  </div>
</app-card>
  `,
});
export const Default = CardTemplate.bind({});
Default.args = {
  cardTitle: 'Custom Card Title',
  cardContent:
    ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam assumenda Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam assumendaLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam assumendaLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam assumenda',
};
