import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'habi-habit-template-item',
  templateUrl: './habit-template-item.component.html',
  styleUrls: ['./habit-template-item.component.scss']
})
export class HabitTemplateItemComponent implements OnChanges {
  @Input()
  public title: string;

  @Input()
  public flair: string;

  @Input()
  public color: string;

  @Input()
  public isPaused: boolean;

  @Output()
  public deleteTemplate = new EventEmitter<void>();

  @Output()
  public pauseTemplate = new EventEmitter<void>();

  @Output()
  public resumeTemplate = new EventEmitter<void>();

  @Output()
  public editTemplate = new EventEmitter<void>();

  public actions: Array<{ icon: string; action(): void }>;

  public ngOnChanges({ isPaused }: SimpleChanges): void {
    if (!isPaused) {
      return;
    }

    this.actions = [
      {
        icon: this.isPaused ? 'play' : 'pause',
        action: () => {
          if (this.isPaused) {
            this.resumeTemplate.emit();
          } else {
            this.pauseTemplate.emit();
          }
        }
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
