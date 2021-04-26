
import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, ElementRef, Inject, Input, OnInit, Optional } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

@Component({
  selector: 'prc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent extends MatButton implements OnInit  {

  @Input() buttonText: string;

  constructor(elementRef: ElementRef,
    _focusMonitor: FocusMonitor,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) public _animationMode: string) {
    super(elementRef,
      _focusMonitor,
      _animationMode);
   }

  ngOnInit(): void {
  
  }

}
