/**
 * Created by Hyeonmin on 2017-03-30.
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var component_with_account_1 = require("../component_with_account");
var FieldsWriteComponent = (function (_super) {
    __extends(FieldsWriteComponent, _super);
    function FieldsWriteComponent(activatedRoute, fieldsService, router) {
        var _this = _super.call(this) || this;
        _this.activatedRoute = activatedRoute;
        _this.fieldsService = fieldsService;
        _this.router = router;
        return _this;
    }
    FieldsWriteComponent.prototype.setTitle = function (title) {
        this.title = title;
    };
    FieldsWriteComponent.prototype.setTags = function (tags) {
        this.tags = tags;
    };
    FieldsWriteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.submenu = params['submenu'];
        });
    };
    FieldsWriteComponent.prototype.ngAfterViewInit = function () {
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
    };
    FieldsWriteComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    FieldsWriteComponent.prototype.sendImage = function () {
        var imageFile = $('#image-upload').prop('files')[0];
        var formData = new FormData();
        formData.append('picture', imageFile);
        $.ajax({
            url: 'http://115.68.110.118:9000/foryou_tax/image',
            type: 'POST',
            data: formData,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (data, textStatus, jqXHR) {
                if (typeof data.error === 'undefined') {
                    var imageElement = "\n<img src=\"http://" + data.imageUrl + "\" />\n";
                    tinymce.activeEditor.execCommand('mceInsertContent', false, imageElement);
                }
                else {
                    // Handle errors here
                    alert('오류가 발생했습니다.  다시 시도해 주세요.');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // Handle errors here
                console.log('ERRORS: ' + textStatus);
            }
        });
    };
    FieldsWriteComponent.prototype.sendFile = function () {
        var imageFile = $('#file-upload').prop('files')[0];
        var formData = new FormData();
        formData.append('file', imageFile);
        $.ajax({
            url: 'http://115.68.110.118:9000/foryou_tax/file',
            type: 'POST',
            data: formData,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (data, textStatus, jqXHR) {
                if (typeof data.error === 'undefined') {
                    var imageElement = "\n<a href=\"http://" + data.fileUrl + "\" download><button>\uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC</button></a>\n";
                    tinymce.activeEditor.execCommand('mceInsertContent', false, imageElement);
                }
                else {
                    // Handle errors here
                    alert('오류가 발생했습니다.  다시 시도해 주세요.');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // Handle errors here
                console.log('ERRORS: ' + textStatus);
            }
        });
    };
    FieldsWriteComponent.prototype.submit = function () {
        var _this = this;
        var content = tinymce.activeEditor.getContent({ format: 'raw' });
        this.fieldsService.writeFields(this.submenu, this.title, this.tags, encodeURIComponent(content), this.login_result.selector, this.login_result.validator)
            .then(function (result) { return _this.afterSubmit(result); });
    };
    FieldsWriteComponent.prototype.afterSubmit = function (result) {
        if (result['success'] === true) {
            alert('글이 게시되었습니다.');
            this.router.navigate(['/fields/' + this.submenu + '/@/0']);
        }
        else {
            alert('오류가 발생했습니다.  다시 시도해주세요.');
        }
    };
    return FieldsWriteComponent;
}(component_with_account_1.ComponentWithAccount));
FieldsWriteComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-field-write',
        templateUrl: 'field_write.comp.html',
        styleUrls: ['../../Styles/1_2_fields.css'],
    })
], FieldsWriteComponent);
exports.FieldsWriteComponent = FieldsWriteComponent;
