import {FieldsComponent} from './fields.comp';
import {MockService} from '../../Services/mock.service';
import {Component} from '@angular/core';
import {Router} from "@angular/router";

/**
 * Created by Hyeonmin on 2017-03-15.
 */

@Component({
  moduleId: module.id,
  selector: 'app-tax-protest',
  templateUrl: 'fields.comp.html',
  styleUrls: ['../../Styles/1_2_fields.css'],
})

export class TaxProtestComponent extends FieldsComponent {

  private menuIdx = 1;
  private subMenuIdx = 2;


  constructor(
    mockService: MockService,
    router: Router
  ) {
    super(mockService, router);
  }

}
