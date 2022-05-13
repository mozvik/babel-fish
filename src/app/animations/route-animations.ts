import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const routeSlideIn =
  trigger('triggerName', [
    transition('translatePage => registerPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
        position: 'absolute',
				top: 0,
				right: 0,
				width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ right: '-100%', opacity: 0 })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ right: '100%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ right: '0%', opacity: 1 }))
        ], { optional: true }),
      ]),
    ]),
    transition('registerPage => translatePage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%', opacity: 0 })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%', opacity: 1 }))
        ], { optional: true }),
        query(':enter', animateChild(), { optional: true })
      ]),
    ])
  ]);