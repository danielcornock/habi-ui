import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'habi-daily-habit',
  templateUrl: './daily-habit.component.html',
  styleUrls: ['./daily-habit.component.scss']
})
export class DailyHabitComponent {
  @Input()
  title: string;

  @Input()
  isCompleted: boolean;

  @Output()
  toggleCompleted = new EventEmitter<void>();

  public onClick(): void {
    this.toggleCompleted.emit();
    this.isCompleted = !this.isCompleted;
  }
}
