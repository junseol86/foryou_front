/**
 * Created by Hyeonmin on 2017-04-10.
 */

import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {ComponentWithAccount} from '../component_with_account';
import {ConsultingApplyService} from '../../Services/consulting_apply.service';
import {ListAndTotal} from '../../Models/List';
import {FormsService} from '../../Services/forms.service';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-forms',
  templateUrl: 'forms.comp.html',
  styleUrls: ['../../Styles/1_6_forms.css', '../../Styles/0_accessories.css'],
})

export class FormsComponent extends ComponentWithAccount implements OnInit {

  forms: Object[];
  fileToUpload = '';
  title = '';

  constructor(
    private formService: FormsService
  ) {
    super();
  }

  setFileToUpload(url: string): void {
    this.fileToUpload = url;
  }
  setTitle(title: string): void {
    this.title = title;
  }

  ngOnInit(): void {
    this.getForms();
  }

  getForms(): void {
    this.formService.getForms()
      .then(result => this.afterGettingForms(result));
  }
  afterGettingForms(result: Object[]): void {
    this.forms = result;
  }

  refresh() {
    location.reload();
  }

  upload() {
    if (this.title === '') {
      alert('문서의 제목을 입력하세요.');
      return;
    }
    const formFile = $('#file_input').prop('files')[0];
    const formData = new FormData();
    formData.append('file', formFile);
    const comp = this;
    $.ajax({
      url: 'http://115.68.110.118:9000/foryou_tax/file',
      type: 'POST',
      data: formData,
      cache: false,
      dataType: 'json',
      processData: false, // Don't process the files
      contentType: false, // Set content type to false as jQuery will tell the server its a query string request
      success: function(data, textStatus, jqXHR)
      {
        if (typeof data.error === 'undefined') {
          comp.uploadForm(data['fileUrl']);
        } else {
          // Handle errors here
          alert('오류가 발생했습니다.  다시 시도해 주세요.');
        }
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        // Handle errors here
        console.log('ERRORS: ' + textStatus);
      }
    });
  }

  uploadForm(fileUrl: string): void {
    this.formService.uploadForm(this.title, fileUrl, this.login_result.selector, this.login_result.validator)
      .then(result => this.afterUploadingForm(result));
  }
  afterUploadingForm(result: Object): void {
    if (result['success'] === true) {
      alert('문서가 업로드되었습니다.');
      this.refresh();
    } else {
      alert('오류가 발생했습니다.  다시 시도해 주세요.');
    }
  }

  deleteForm(id: number): void {
    if (confirm('이 문서를 삭제하시겠습니까?')) {
      this.formService.deleteForm(id, this.login_result.selector, this.login_result.validator)
        .then(result => this.afterDeletingForm(result));
    }
  }
  afterDeletingForm(result: Object): void {
    if (result['success'] === true) {
      alert('문서가 삭제되었습니다.');
      this.refresh();
    } else {
      alert('오류가 발생했습니다.  다시 시도해 주세요.');
    }
  }

}
