/// <reference path="../../headers/backbone/backbone.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * The BaseView class is a base class for all other views used in the app,
 * including primary views (DashBoardView, ProjectsView, etc) and other views
 * (MenuView, BreadcrumbView, etc).
 * It has useful methods like working with templates, fading in, etc.
 */
var BaseView = (function (_super) {
    __extends(BaseView, _super);
    function BaseView() {
        _super.apply(this, arguments);
    }
    return BaseView;
})(Backbone.View);
