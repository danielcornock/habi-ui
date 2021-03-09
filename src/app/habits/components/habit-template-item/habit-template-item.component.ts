import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'habi-habit-template-item',
  templateUrl: './habit-template-item.component.html',
  styleUrls: ['./habit-template-item.component.scss']
})
export class HabitTemplateItemComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  flair: string;

  @Input()
  color: string;

  @Output()
  public deleteTemplate = new EventEmitter<void>();

  @Output()
  public hideTemplate = new EventEmitter<void>();

  @Output()
  public editTemplate = new EventEmitter<void>();

  public actions: Array<{ icon: string; action(): void }>;

  public ngOnInit(): void {
    this.actions = [
      {
        icon: 'x',
        action: () => this.hideTemplate.emit()
      },
      {
        icon: 'edit',
        action: () => this.editTemplate.emit()
      },
      {
        icon: 'trash',
        action: () => this.deleteTemplate.emit()
      }
    ];
  }
}
