import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoacaoDinheiroPage } from './doacao-dinheiro.page';

describe('DoacaoDinheiroPage', () => {
  let component: DoacaoDinheiroPage;
  let fixture: ComponentFixture<DoacaoDinheiroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DoacaoDinheiroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoacaoDinheiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
