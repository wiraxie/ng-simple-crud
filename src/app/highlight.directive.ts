import {Directive, Input, Renderer, ElementRef} from '@angular/core';

@Directive
({
    selector : '[myHighLight]',

})

export class HighlightDirective
{
    constructor(el: ElementRef, renderer: Renderer)
    {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
}