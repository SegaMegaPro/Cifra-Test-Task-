"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
var Tree = /** @class */ (function () {
    function Tree(data) {
        this.data = data;
    }
    Tree.prototype.straighten = function () {
        var out = [];
        var filteredValues = function (dataItems) {
            for (var _i = 0, dataItems_1 = dataItems; _i < dataItems_1.length; _i++) {
                var item = dataItems_1[_i];
                var values = {
                    id: item.id,
                    parentId: item.parentId,
                    name: item.name
                };
                out.push(values);
                if (item.children.length > 0) {
                    filteredValues(item.children);
                }
            }
        };
        filteredValues(this.data);
        return out;
    };
    return Tree;
}());
exports.Tree = Tree;
