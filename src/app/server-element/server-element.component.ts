import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, 
  SimpleChanges, 
  ViewChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
 AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('Called constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('Called ngOnChanges');
      console.log(changes);
  }

  ngOnInit(): void {
    console.log('Called ngOnInit');
  }

  ngDoCheck(): void {
      console.log('Called ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('Called ngAfterContentInit');
    console.log('Text Content: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('Called ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Called ngAfterViewInit');
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('Called ngAfterViewChecked');
  }

  ngOnDestroy(): void {
      console.log('Called ngOnDestroy');
  }
}
