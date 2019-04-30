import { async, TestBed } from '@angular/core/testing';
import { SearchHistoryComponent } from './search-history.component';
describe('SearchHistoryComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SearchHistoryComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SearchHistoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=search-history.component.spec.js.map