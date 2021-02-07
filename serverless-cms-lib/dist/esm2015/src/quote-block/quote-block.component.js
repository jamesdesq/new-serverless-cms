import { Component, Input } from '@angular/core';
export class QuoteBlockComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuoteBlockComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-quote-block',
                template: "<div class=\"row break\">\n    <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <blockquote class=\"blockquote mb-0\">\n          <p>{{ content.quoteText }}</p>\n          <footer class=\"blockquote-footer\"><cite title=\"Source Title\">{{ content.source }}</cite>, {{ content.qualification }}</footer>\n       </blockquote>\n      </div>\n    </div>\n    </div>\n  </div>",
                styles: [""]
            },] }
];
QuoteBlockComponent.ctorParameters = () => [];
QuoteBlockComponent.propDecorators = {
    content: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGUtYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3F1b3RlLWJsb2NrL3F1b3RlLWJsb2NrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sbUJBQW1CO0lBUzlCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDBhQUEyQzs7YUFFNUM7Ozs7c0JBR0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcXVvdGUtYmxvY2snLFxuICB0ZW1wbGF0ZVVybDogJy4vcXVvdGUtYmxvY2suY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9xdW90ZS1ibG9jay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFF1b3RlQmxvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNvbnRlbnQ6IHsgXG4gICAgZW50cnlUeXBlOiBzdHJpbmcsXG4gICAgcXVvdGVUZXh0OiBzdHJpbmcsXG4gICAgc291cmNlOiBzdHJpbmcsIFxuICAgIHF1YWxpZmljYXRpb246IHN0cmluZyxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19