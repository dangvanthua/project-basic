import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') click() {
      const dropdownMenu = this.elementRef.nativeElement.nextElementSibling;

    if (dropdownMenu.classList.contains('show')) {
      this.renderer.removeClass(dropdownMenu, 'show');
    } else {
      this.renderer.addClass(dropdownMenu, 'show');
    }
  }

}
