import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
        query(':leave', style({ position: 'absolute', left: 0, right: 0 ,transform: 'translate3d(0%,0,0)', overflow: 'hidden' }), {optional:true}),
        query(':enter', style({ position: 'absolute', left: '15px', right: '15px', transform: 'translate3d(-100%,0,0)', overflow: 'hidden' }), {optional:true}),
        group([
          query(':leave', group([
            animate('0s ease-in-out', style({ transform: 'translate3d(100%,0,0)' })), // y: '-100%'
          ]), {optional:true}),
          query(':enter', group([
            animate('300ms ease-in-out', style({ transform: 'translate3d(0%,0,0)' })),
          ]), {optional:true})
        ])
      ]),
  ]);