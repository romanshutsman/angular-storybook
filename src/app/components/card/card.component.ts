import {ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() cardTitle: string | undefined; // Title for the card

  @Input() cardContent: string | undefined; // Content for the card

  @ContentChild('cardAction', { static: false }) cardAction!: TemplateRef<unknown>;
}
