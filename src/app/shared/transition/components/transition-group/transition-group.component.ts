import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  QueryList
} from '@angular/core';

import { TransitionGroupItemDirective } from '../../directives/transition-group-item/transition-group-item.directive';

/* Directly copied from stack overflow */
@Component({
  // tslint:disable-next-line: component-selector
  selector: '[habi-transition-group]',
  template: '<ng-content></ng-content>'
})
export class TransitionGroupComponent implements AfterViewInit {
  // tslint:disable-next-line: no-input-rename
  @Input('habi-transition-group') class: string;

  @ContentChildren(TransitionGroupItemDirective) items: QueryList<
    TransitionGroupItemDirective
  >;

  public ngAfterViewInit(): void {
    setTimeout(() => this.refreshPosition('prevPos'), 0); // save init positions on next 'tick'

    this.items.changes.subscribe((items) => {
      items.forEach((item) => (item.prevPos = item.newPos || item.prevPos));
      items.forEach(this.runCallback);
      this.refreshPosition('newPos');
      items.forEach((item) => (item.prevPos = item.prevPos || item.newPos)); // for new items

      const animate = () => {
        items.forEach(this.applyTranslation);
        // tslint:disable-next-line: no-string-literal
        this['_forceReflow'] = document.body.offsetHeight; // force reflow to put everything in position
        this.items.forEach(this.runTransition.bind(this));
      };

      const willMoveSome = items.some((item) => {
        const dx = item.prevPos.left - item.newPos.left;
        const dy = item.prevPos.top - item.newPos.top;
        return dx || dy;
      });

      if (willMoveSome) {
        animate();
      } else {
        setTimeout(() => {
          // for removed items
          this.refreshPosition('newPos');
          animate();
        }, 0);
      }
    });
  }

  public runCallback(item: TransitionGroupItemDirective): void {
    if (item.moveCallback) {
      item.moveCallback();
    }
  }

  public runTransition(item: TransitionGroupItemDirective): void {
    if (!item.moved) {
      return;
    }
    const cssClass = this.class + '-move';
    const el = item.el;
    const style: any = el.style;
    el.classList.add(cssClass);
    style.transform = style.WebkitTransform = style.transitionDuration = '';
    el.addEventListener(
      'transitionend',
      (item.moveCallback = (e: any) => {
        if (!e || /transform$/.test(e.propertyName)) {
          el.removeEventListener('transitionend', item.moveCallback);
          item.moveCallback = null;
          el.classList.remove(cssClass);
        }
      })
    );
  }

  public refreshPosition(prop: string): void {
    this.items.forEach((item) => {
      item[prop] = item.el.getBoundingClientRect();
    });
  }

  public applyTranslation(item: TransitionGroupItemDirective): void {
    item.moved = false;
    const dx = item.prevPos.left - item.newPos.left;
    const dy = item.prevPos.top - item.newPos.top;
    if (dx || dy) {
      item.moved = true;
      const style: any = item.el.style;
      style.transform = style.WebkitTransform =
        'translate(' + dx + 'px,' + dy + 'px)';
      style.transitionDuration = '0s';
    }
  }
}
