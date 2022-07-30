import { Directive ,ElementRef,HostListener} from '@angular/core';


@Directive({
  selector:'[highlight]'
})
export class HighLight{
  constructor (public eleRef : ElementRef){
    
  }
  @HostListener('mouseenter') mouse1(){
    this.eleRef.nativeElement.style.color='red';
  }
  @HostListener('mouseleave') mouse2(){
    this.eleRef.nativeElement.style.color='black';
  }
  

}