import { Injectable, Type } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Observable } from 'rxjs';

@Injectable()
export class ModalService {
  constructor(private matBottomSheet: MatBottomSheet) {}

  public openFullScreenModal<TData extends object, TReturn>(
    component: Type<any>,
    data?: TData
  ): Observable<TReturn> {
    const ref = this.matBottomSheet.open(component, {
      panelClass: 'modal-full-screen-panel',
      data: data || {}
    });

    return ref.afterDismissed();
  }
}
