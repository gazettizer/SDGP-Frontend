import { async, TestBed } from '@angular/core/testing';
import { DashboardLayoutComponent } from './dashboard-layout.component';
describe('DashboardLayoutComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DashboardLayoutComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DashboardLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dashboard-layout.component.spec.js.map