import {Component, Input, forwardRef} from '@angular/core';
import {FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

type ValueType = string | number | boolean;
@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true,
    },
  ],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.css'
})
export class RadioButtonComponent {
  @Input({ required: true }) value!: ValueType;
  @Input({ required: true }) name!: string;
  @Input() label!: string;
  @Input() disabled = false;
  @Input() size: 'small' | 'large' | 'medium' = 'medium';
  @Input() type: 'accent' | 'warn' | 'primary' = 'primary';
  @Input() labelPosition: 'left' | 'right' = 'right';

  model!: ValueType;

  touched = false;

  onChange = (value: ValueType): void => {
    this.value = value;
  };

  onTouched = (): void => {};

  // eslint-disable-next-line
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // eslint-disable-next-line
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: ValueType): void {
    this.model = value;
  }

  select(): void {
    this.model = this.value;
    this.onChange(this.model);
    this.markAsTouched();
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}
