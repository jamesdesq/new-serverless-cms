import { Component, Input, NgModule } from '@angular/core';

class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-homepage',
                template: "<div class=\"col-10 offset-1\">\n    <div class=\"row\">\n      <h2>Cross Everything</h2>\n    </div>\n    <div class=\"row break\"> \n    <p>Publishes 18th February 2021 on Bloomsbury/Green Tree</p>\n    </div>\n    <div class=\"row break\">\n      <p>Henry Scowcroft is an experienced, award-winning science writer, with degrees in Biochemistry and Science Communication.</p>\n    </div>\n    <div class=\"row break\">\n      <div class=\"col-8 offset-2 text-center\">\n        <img src=\"assets/cross_everything_cover.jpg\" class=\"img-fluid\" alt=\"Cover for Cross Everthing\">\n      </div>\n    </div>\n    <div class=\"row break\">\n      <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <blockquote class=\"blockquote mb-0\">\n            <p>\"A moving, compelling and vital book, that sheds much needed light on the very latest understanding of cancer.\"</p>\n            <footer class=\"blockquote-footer\"><cite title=\"Source Title\"> Siddhartha Mukherjee</cite>, author of The Emperor of All Maladies</footer>\n          </blockquote>\n        </div>\n      </div>\n    </div>\n    </div>    \n  </div> ",
                styles: [".break,.card{padding-bottom:30px}"]
            },] }
];
HomepageComponent.ctorParameters = () => [];

class QuoteBlockComponent {
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

class ServerlessCmsModule {
}
ServerlessCmsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [HomepageComponent, QuoteBlockComponent],
                exports: [HomepageComponent, QuoteBlockComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { HomepageComponent, QuoteBlockComponent, ServerlessCmsModule };
//# sourceMappingURL=serverless-cms-lib.js.map
