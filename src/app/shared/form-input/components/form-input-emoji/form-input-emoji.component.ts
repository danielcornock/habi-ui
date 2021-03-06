import { Component, OnInit } from '@angular/core';
import { NgxFormInputComponent } from 'ngx-form-trooper';

@Component({
  selector: 'habi-form-input-emoji',
  templateUrl: './form-input-emoji.component.html',
  styleUrls: ['./form-input-emoji.component.scss']
})
export class FormInputEmojiComponent extends NgxFormInputComponent
  implements OnInit {
  public showEmojis = false;
  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();

    /* Lazy way of closing the overlay without using a library */
    document.addEventListener('click', (e: MouseEvent) => {
      const isOnEmojiPicker = (e as any).path.find(
        (path) => path.tagName === 'EMOJI-MART'
      );

      if (!isOnEmojiPicker && this.showEmojis === true) {
        this.showEmojis = false;
      }
    });
  }

  public addEmoji(event): void {
    this.control.setValue(event.emoji.native);
    this.showEmojis = false;
  }

  public openEmojis(): void {
    /* To prevent the overlay from closing instantly */
    setTimeout(() => {
      this.showEmojis = true;
    }, 0);
  }
}
