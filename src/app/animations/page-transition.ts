import { trigger, transition, style, animate, state } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  state('in', style({ transform: 'translateX(0)' })),
  transition('void => *', [
    style({ transform: 'translateX(-100%)' }),
    animate(100)
  ]),
  transition('* => void', [
    animate(100, style({ transform: 'translateX(100%)' }))
  ])
]);
