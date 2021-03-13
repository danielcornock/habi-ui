import {
  animate,
  group,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';

export const routerOverlayAnimation = trigger('routeAnimations', [
  transition('* => overlay', [
    style({ position: 'relative' }),
    group([
      query(':leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 500
        }),
        animate(
          '300ms ease-out',
          style({
            opacity: 0
          })
        )
      ]),
      query(':enter', [
        style({
          position: 'fixed',
          top: 0,
          left: '100%',
          width: '100%',
          zIndex: '1000'
        }),
        animate(
          '300ms ease-out',
          style({
            left: '0%'
          })
        )
      ])
    ])
  ]),
  transition('overlay => *', [
    style({ position: 'relative' }),
    group([
      query(':leave', [
        style({
          position: 'fixed',
          top: 0,
          left: '0%',
          width: '100%',
          zIndex: '1000'
        }),
        animate('300ms ease-out', style({ left: '100%' }))
      ]),
      query(':enter', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 500,
          opacity: 0
        }),
        animate(
          '300ms ease-out',
          style({
            opacity: 1
          })
        )
      ])
    ])
  ])
]);
