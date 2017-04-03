/**
 * Created by Hyeonmin on 2017-03-30.
 */

import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FieldsService} from '../../Services/fields.service';
import {ComponentWithAccount} from '../component_with_account';


declare var tinymce: any;
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-field-write',
  templateUrl: 'field_write.comp.html',
  styleUrls: ['../../Styles/1_2_fields.css'],
})

export class FieldsWriteComponent extends ComponentWithAccount implements OnInit, AfterViewInit, OnDestroy {

  private submenu: string;
  private title: string;
  private tags: string;
  editor;

  setTitle(title: string) {
    this.title = title;
  }
  setTags(tags: string) {
    this.tags = tags;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private fieldsService: FieldsService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.submenu = params['submenu'];
    });
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
          const imageElement = `\n<img src="http://${data.imageUrl}" />\n`;
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
    this.fieldsService.writeFields(
      this.submenu, this.title, this.tags, encodeURIComponent(content), this.login_result.selector, this.login_result.validator
    )
      .then(result => this.afterSubmit(result));
  }
  afterSubmit(result: Object) {
    if (result['success'] === true) {
      alert('글이 게시되었습니다.');
      this.router.navigate(['/fields/' + this.submenu + '/@/0']);
    } else {
      alert('오류가 발생했습니다.  다시 시도해주세요.');
    }
  }

}
