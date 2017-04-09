/**
 * Created by Hyeonmin on 2017-04-07.
 */

import {AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {ComponentWithAccount} from '../component_with_account';
import {ConsultingApplyService} from '../../Services/consulting_apply.service';

declare var tinymce: any;
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-consulting-apply-detail',
  templateUrl: '1_consulting_apply_detail.comp.html',
  styleUrls: ['../../Styles/1_4_1_consulting_apply.css'],
})

export class ConsultingApplyDetailComponent extends ComponentWithAccount implements OnInit, OnDestroy, AfterViewChecked {
  private menuIdx = 3;
  private subMenuIdx = 0;

  ADMIN = 0;
  ASKER = 1;
  adminOrAsker: number;

  id: number;
  detail: Object;

  password: string;
  editor;
  tinyMceOn = false;

  // 비밀번호를 입력했거나 관리자이면 현 질문 상세페이지를 볼 수 있다
  authorized = false;

  setPassword(val: string, event: Event): void {
    if (event['key'] === 'Enter') {
      this.submitPassword();
    } else {
      this.password = val;
    }
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private consultingApplyService: ConsultingApplyService,
    private router: Router,
    private location: Location
  ) {
    super();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
    });
  }

  // ComponentWithAccounts의 함수를 상속 - 로그인 결과를 받아 관리자면 내용을 받아온다.
  getLoginStatus(loginStatus: number) {
    this.login_status = loginStatus;
    this.authorized = (this.login_status === 2);
    if (this.authorized) {
      this.readQuestion(this.login_result.selector, this.login_result.validator, '');
    }
  }

  // 관리자가 아닐 시 패스워드를 입력함으로 내용을 받아온다.
  submitPassword(): void {
    this.readQuestion('', '', this.password);
  }

  readQuestion(selector: string, validator: string, password: string): void {
    this.consultingApplyService.readQuestion(this.id, selector, validator, password)
      .then(result => this.afterReadingQuestion(result));
  }
  afterReadingQuestion(result: Object) {
    if (result['success'] === false) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    this.authorized = true;
    this.detail = result['detail'];
    this.adminOrAsker = this.login_status === 2 ? 0 : 1;
  }

  ngAfterViewChecked(): void {
    if (this.tinyMceOn) {
      return;
    }
    if (this.adminOrAsker === 0) {
      this.setTinyMCE();
    }
  }

  setTinyMCE(): void {
    this.tinyMceOn = true;
    tinymce.init({
      skin_url: 'assets/skins/lightgray',
      selector: '#content_editor',
      menubar: false,
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify ' +
      '| bullist numlist outdent indent | imageup | fileup',
      height: 500,
      setup: function (editor) {
        this.editor = editor;
        editor.addButton('imageup', {
          text: '이미지 업로드',
          icon: false,
          onclick: function () {
            $('#image-upload').trigger('click');
          }
        });
        editor.addButton('fileup', {
          text: '파일 업로드',
          icon: false,
          onclick: function () {
            $('#file-upload').trigger('click');
          }
        });
      }
    });
    if (this.detail['qna.answer'] !== null) {
      tinymce.activeEditor.setContent(this.detail['qna.answer']);
    }
  }

  ngOnDestroy(): void {
    tinymce.remove(this.editor);
    this.tinyMceOn = false;
  }

  sendImage(): void {
    const imageFile = $('#image-upload').prop('files')[0];
    const formData = new FormData();
    formData.append('picture', imageFile);
    $.ajax({
      url: 'http://115.68.110.118:9000/foryou_tax/image',
      type: 'POST',
      data: formData,
      cache: false,
      dataType: 'json',
      processData: false, // Don't process the files
      contentType: false, // Set content type to false as jQuery will tell the server its a query string request
      success: function(data, textStatus, jqXHR)
      {
        if (typeof data.error === 'undefined') {
          const imageUrl = data.imageUrl;
          const imageId = imageUrl.split('.')[0];
          const imageElement =
            `\n<img src="http://${imageUrl}" class="detail_image"/>\n`;
          tinymce.activeEditor.execCommand('mceInsertContent', false, imageElement);
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

  sendFile(): void {
    const imageFile = $('#file-upload').prop('files')[0];
    const formData = new FormData();
    formData.append('file', imageFile);
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
          const imageElement = `\n<a href="http://${data.fileUrl}" download><button>파일 다운로드</button></a>\n`;
          tinymce.activeEditor.execCommand('mceInsertContent', false, imageElement);
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

  submitAnswer(setNull: boolean) {
    let content: string = null;
    if (!setNull) {
      content = tinymce.activeEditor.getContent({format: 'raw'});
      if (encodeURIComponent(content).length > 65000) {
        alert('글자수가 너무 많습니다.  다른 사이트에서 복사해 온 글이라면 메모장 등 다른 곳에 붙여넣기한 후 다시 복사해서 붙여보세요.');
        return;
      }
    }
    this.consultingApplyService.answerQuestion(
      this.id, encodeURIComponent(content), this.login_result.selector, this.login_result.validator
    )
      .then(result => this.afterSubmittingAnswer(result));
  }
  afterSubmittingAnswer(result: Object) {
    if (result['success'] === true) {
      alert('답변이 게시되었습니다.');
      location.reload();
      } else {
        alert('오류가 발생했습니다.  다시 시도해주세요.');
      }
  }

  refresh() {
    location.reload();
  }

  goBack() {
    this.location.back();
  }

}
