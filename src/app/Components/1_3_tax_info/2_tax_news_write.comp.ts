/**
 * Created by Hyeonmin on 2017-03-30.
 */

import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TaxNewsService} from '../../Services/tax_news.service';
import {ComponentWithAccount} from '../component_with_account';
import {CommonService} from '../../Services/common.service';


declare var tinymce: any;
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-field-write',
  templateUrl: '2_tax_news_write.comp.html',
  styleUrls: ['../../Styles/1_3_2_tax_news.css'],
})

export class TaxNewsWriteComponent extends ComponentWithAccount implements OnInit, AfterViewInit, OnDestroy {

  private title: string;
  private tags: string;
  private mode: string;
  id: number;
  detail: Object;
  content: string;
  editor;

  setTitle(title: string) {
    this.title = title;
  }
  setTags(tags: string) {
    this.tags = tags;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private tax_newsService: TaxNewsService,
    private router: Router,
    private commonService: CommonService
  ) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.mode = params['mode'];
      if (this.mode !== 'write') {
        this.id = Number(this.mode);
        this.getDetail();
      }
    });
  }

  getDetail(): void {
    this.commonService.getDetail('tax_news', this.id)
      .then(result => this.afterGettingDetail(result));
  }
  afterGettingDetail(detail: Object): void {
    this.detail = detail;
    this.detail['tagsArray'] = this.detail['tax_news.tags'].split(' ');
    this.content = detail['tax_news.content'];
    this.title = this.detail['tax_news.title'];
    this.tags = this.detail['tax_news.tags'];
    tinymce.activeEditor.setContent(this.content);
  }

  ngAfterViewInit(): void {
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
  }

  ngOnDestroy(): void {
    tinymce.remove(this.editor);
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

  submit() {
    const content = tinymce.activeEditor.getContent({format: 'raw'});
    if (encodeURIComponent(content).length > 65000) {
      alert('글자수가 너무 많습니다.  다른 사이트에서 복사해 온 글이라면 메모장 등 다른 곳에 붙여넣기한 후 다시 복사해서 붙여보세요.');
      return;
    }
    if (this.mode === 'write') {
      this.tax_newsService.writeTaxNews(
        this.title, this.tags, encodeURIComponent(content), this.login_result.selector, this.login_result.validator
      )
        .then(result => this.afterSubmit(result));
    } else {
      this.tax_newsService.modifyTaxNews(
        this.id, this.title, this.tags, encodeURIComponent(content), this.login_result.selector, this.login_result.validator
      )
        .then(result => this.afterSubmit(result));
    }
  }
  afterSubmit(result: Object) {
    if (this.mode === 'write') {
      if (result['success'] === true) {
        alert('글이 게시되었습니다.');
        this.router.navigate(['tax_info/tax_news/@/0']);
      } else {
        alert('오류가 발생했습니다.  다시 시도해주세요.');
      }
    } else {
      if (result['success'] === true) {
        alert('글이 수정되었습니다.');
        this.router.navigate([`tax_info/tax_news_detail/${this.id}`]);
      } else {
        alert('오류가 발생했습니다.  다시 시도해주세요.');
      }
    }
  }

}
