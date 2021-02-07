import { Component, Input, NgModule } from '@angular/core';

import * as ɵngcc0 from '@angular/core';
class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 24, vars: 0, consts: [[1, "col-10", "offset-1"], [1, "row"], [1, "row", "break"], [1, "col-8", "offset-2", "text-center"], ["src", "assets/cross_everything_cover.jpg", "alt", "Cover for Cross Everthing", 1, "img-fluid"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "blockquote", "mb-0"], [1, "blockquote-footer"], ["title", "Source Title"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "h2");
        ɵngcc0.ɵɵtext(3, "Cross Everything");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 2);
        ɵngcc0.ɵɵelementStart(5, "p");
        ɵngcc0.ɵɵtext(6, "Publishes 18th February 2021 on Bloomsbury/Green Tree");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div", 2);
        ɵngcc0.ɵɵelementStart(8, "p");
        ɵngcc0.ɵɵtext(9, "Henry Scowcroft is an experienced, award-winning science writer, with degrees in Biochemistry and Science Communication.");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "div", 2);
        ɵngcc0.ɵɵelementStart(11, "div", 3);
        ɵngcc0.ɵɵelement(12, "img", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "div", 2);
        ɵngcc0.ɵɵelementStart(14, "div", 5);
        ɵngcc0.ɵɵelementStart(15, "div", 6);
        ɵngcc0.ɵɵelementStart(16, "div", 7);
        ɵngcc0.ɵɵelementStart(17, "blockquote", 8);
        ɵngcc0.ɵɵelementStart(18, "p");
        ɵngcc0.ɵɵtext(19, "\"A moving, compelling and vital book, that sheds much needed light on the very latest understanding of cancer.\"");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(20, "footer", 9);
        ɵngcc0.ɵɵelementStart(21, "cite", 10);
        ɵngcc0.ɵɵtext(22, " Siddhartha Mukherjee");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtext(23, ", author of The Emperor of All Maladies");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [".break[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]{padding-bottom:30px}"] });
HomepageComponent.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(HomepageComponent, [{
        type: Component,
        args: [{
                selector: 'app-homepage',
                template: "<div class=\"col-10 offset-1\">\n    <div class=\"row\">\n      <h2>Cross Everything</h2>\n    </div>\n    <div class=\"row break\"> \n    <p>Publishes 18th February 2021 on Bloomsbury/Green Tree</p>\n    </div>\n    <div class=\"row break\">\n      <p>Henry Scowcroft is an experienced, award-winning science writer, with degrees in Biochemistry and Science Communication.</p>\n    </div>\n    <div class=\"row break\">\n      <div class=\"col-8 offset-2 text-center\">\n        <img src=\"assets/cross_everything_cover.jpg\" class=\"img-fluid\" alt=\"Cover for Cross Everthing\">\n      </div>\n    </div>\n    <div class=\"row break\">\n      <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <blockquote class=\"blockquote mb-0\">\n            <p>\"A moving, compelling and vital book, that sheds much needed light on the very latest understanding of cancer.\"</p>\n            <footer class=\"blockquote-footer\"><cite title=\"Source Title\"> Siddhartha Mukherjee</cite>, author of The Emperor of All Maladies</footer>\n          </blockquote>\n        </div>\n      </div>\n    </div>\n    </div>    \n  </div> ",
                styles: [".break,.card{padding-bottom:30px}"]
            }]
    }], function () { return []; }, null); })();

class QuoteBlockComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuoteBlockComponent.ɵfac = function QuoteBlockComponent_Factory(t) { return new (t || QuoteBlockComponent)(); };
QuoteBlockComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: QuoteBlockComponent, selectors: [["app-quote-block"]], inputs: { content: "content" }, decls: 11, vars: 3, consts: [[1, "row", "break"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "blockquote", "mb-0"], [1, "blockquote-footer"], ["title", "Source Title"]], template: function QuoteBlockComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "blockquote", 4);
        ɵngcc0.ɵɵelementStart(5, "p");
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "footer", 5);
        ɵngcc0.ɵɵelementStart(8, "cite", 6);
        ɵngcc0.ɵɵtext(9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtext(10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵtextInterpolate(ctx.content.quoteText);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.content.source);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(", ", ctx.content.qualification, "");
    } }, styles: [""] });
QuoteBlockComponent.ctorParameters = () => [];
QuoteBlockComponent.propDecorators = {
    content: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(QuoteBlockComponent, [{
        type: Component,
        args: [{
                selector: 'app-quote-block',
                template: "<div class=\"row break\">\n    <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <blockquote class=\"blockquote mb-0\">\n          <p>{{ content.quoteText }}</p>\n          <footer class=\"blockquote-footer\"><cite title=\"Source Title\">{{ content.source }}</cite>, {{ content.qualification }}</footer>\n       </blockquote>\n      </div>\n    </div>\n    </div>\n  </div>",
                styles: [""]
            }]
    }], function () { return []; }, { content: [{
            type: Input
        }] }); })();

class ServerlessCmsModule {
}
ServerlessCmsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ServerlessCmsModule });
ServerlessCmsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ServerlessCmsModule_Factory(t) { return new (t || ServerlessCmsModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ServerlessCmsModule, { declarations: [HomepageComponent, QuoteBlockComponent], exports: [HomepageComponent, QuoteBlockComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ServerlessCmsModule, [{
        type: NgModule,
        args: [{
                declarations: [HomepageComponent, QuoteBlockComponent],
                exports: [HomepageComponent, QuoteBlockComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { HomepageComponent, QuoteBlockComponent, ServerlessCmsModule };

//# sourceMappingURL=serverless-cms-lib.js.map