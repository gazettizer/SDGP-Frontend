import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var FilterTitlePipe = /** @class */ (function () {
    function FilterTitlePipe() {
    }
    FilterTitlePipe.prototype.transform = function (items, value, label) {
        if (!items)
            return [];
        if (!value)
            return items;
        if (value == '' || value == null || value == undefined)
            return [];
        return items.filter(function (e) { return e[label].toLowerCase().indexOf(value) > -1; });
    };
    FilterTitlePipe = tslib_1.__decorate([
        Pipe({
            name: 'filterTitle'
        })
    ], FilterTitlePipe);
    return FilterTitlePipe;
}());
export { FilterTitlePipe };
//# sourceMappingURL=filter-title.pipe.js.map