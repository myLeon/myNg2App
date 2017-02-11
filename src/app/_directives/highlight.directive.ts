import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }
  //输入参数
  @Input() defaultColor: string;
  @Input('myHighlight') highlightColor: string;

  //监听鼠标移入事件
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }
  //监听鼠标移出事件
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
