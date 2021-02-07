(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('serverless-cms-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['serverless-cms-lib'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var HomepageComponent = /** @class */ (function () {
        function HomepageComponent() {
        }
        HomepageComponent.prototype.ngOnInit = function () {
        };
        return HomepageComponent;
    }());
    HomepageComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-homepage',
                    template: "<div class=\"col-10 offset-1\">\n    <div class=\"row\">\n      <h2>Cross Everything</h2>\n    </div>\n    <div class=\"row break\"> \n    <p>Publishes 18th February 2021 on Bloomsbury/Green Tree</p>\n    </div>\n    <div class=\"row break\">\n      <p>Henry Scowcroft is an experienced, award-winning science writer, with degrees in Biochemistry and Science Communication.</p>\n    </div>\n    <div class=\"row break\">\n      <div class=\"col-8 offset-2 text-center\">\n        <img src=\"assets/cross_everything_cover.jpg\" class=\"img-fluid\" alt=\"Cover for Cross Everthing\">\n      </div>\n    </div>\n    <div class=\"row break\">\n      <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <blockquote class=\"blockquote mb-0\">\n            <p>\"A moving, compelling and vital book, that sheds much needed light on the very latest understanding of cancer.\"</p>\n            <footer class=\"blockquote-footer\"><cite title=\"Source Title\"> Siddhartha Mukherjee</cite>, author of The Emperor of All Maladies</footer>\n          </blockquote>\n        </div>\n      </div>\n    </div>\n    </div>    \n  </div> ",
                    styles: [".break,.card{padding-bottom:30px}"]
                },] }
    ];
    HomepageComponent.ctorParameters = function () { return []; };

    var QuoteBlockComponent = /** @class */ (function () {
        function QuoteBlockComponent() {
        }
        QuoteBlockComponent.prototype.ngOnInit = function () {
        };
        return QuoteBlockComponent;
    }());
    QuoteBlockComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-quote-block',
                    template: "<div class=\"row break\">\n    <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <blockquote class=\"blockquote mb-0\">\n          <p>{{ content.quoteText }}</p>\n          <footer class=\"blockquote-footer\"><cite title=\"Source Title\">{{ content.source }}</cite>, {{ content.qualification }}</footer>\n       </blockquote>\n      </div>\n    </div>\n    </div>\n  </div>",
                    styles: [""]
                },] }
    ];
    QuoteBlockComponent.ctorParameters = function () { return []; };
    QuoteBlockComponent.propDecorators = {
        content: [{ type: core.Input }]
    };

    var ServerlessCmsModule = /** @class */ (function () {
        function ServerlessCmsModule() {
        }
        return ServerlessCmsModule;
    }());
    ServerlessCmsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [HomepageComponent, QuoteBlockComponent],
                    exports: [HomepageComponent, QuoteBlockComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.HomepageComponent = HomepageComponent;
    exports.QuoteBlockComponent = QuoteBlockComponent;
    exports.ServerlessCmsModule = ServerlessCmsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=serverless-cms-lib.umd.js.map
