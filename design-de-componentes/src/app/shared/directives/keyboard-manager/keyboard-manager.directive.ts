import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';
import { ContentChildren, Directive, HostListener, QueryList } from '@angular/core';

enum ArrrowDirection {
  LEFT = -1,
  RIGHT = 1
}

@Directive({
  selector: '[appKm]'
})
export class KeyboardManagerDirective {
  //public arrowDirection = ArrrowDirection;

  // @ts-ignore
  @ContentChildren(KeyboardManagedItemDirective) public items: QueryList<KeyboardManagedItemDirective>;

  @HostListener('keyup',['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case "ArrowUp":
        console.log('up');
        this.moveFocus(ArrrowDirection.RIGHT);
        break;
      case "ArrowDown":
        console.log('down');
        this.moveFocus(ArrrowDirection.LEFT).focus();
        break;
      case "ArrowLeft":
        console.log('left');
        this.moveFocus(ArrrowDirection.LEFT).focus();
        break;
      case "ArrowRight":
        console.log('right');
        this.moveFocus(ArrrowDirection.RIGHT).focus();
        break;
      default:
        break;
    }
  }


  public moveFocus(direction: ArrrowDirection): KeyboardManagedItemDirective {
    const items = this.items.toArray();
    const curentSelectedIndex = items.findIndex(item => item.isFocused());
    const targetElementFocus = items[curentSelectedIndex + direction];

    if (targetElementFocus){
      return targetElementFocus;
    }

    return direction === ArrrowDirection.LEFT
    ? items[items.length - 1]
    : items[0];
  }
}
