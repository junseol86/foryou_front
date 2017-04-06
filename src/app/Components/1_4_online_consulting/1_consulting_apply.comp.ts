/**
 * Created by Hyeonmin on 2017-03-28.
 */

import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MenuService} from '../../Services/menu.service';

import {ComponentWithAccount} from '../component_with_account';
import {ConsultingApplyService} from "../../Services/consulting_apply.service";

@Component({
  moduleId: module.id,
  selector: 'app-consulting-apply',
  templateUrl: '1_consulting_apply.comp.html',
  styleUrls: ['../../Styles/1_4_1_consulting_apply.css'],
})

export class ConsultingApplyComponent extends ComponentWithAccount implements OnInit {
  private menuIdx = 3;
  private subMenuIdx = 0;

  asking = false;

  asker: string;
  email: string;
  password: string;
  password_confirm: string;
  title: string;
  question: string;

  setAsker(val: string) {
    this.asker = val;
  }
  setEmail(val: string) {
    this.email = val;
  }
  setPassword(val: string) {
    this.password = val;
  }
  setPasswordConfirm(val: string) {
    this.password_confirm = val;
  }
  setTitle(val: string) {
    this.title = val;
  }
  setQuestion(val: string) {
    this.question = val;
  }

  constructor(
    private consultingApplyService: ConsultingApplyService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {

  }

  setAsking(val: boolean) {
    this.asking = val;
  }

  submitQuestion() {
    if (this.password !== this.password_confirm) {
      alert('비밀번호를 동일하게 입력하세요.');
      return;
    }
    this.consultingApplyService.writeQna(this.asker, this.email, this.password, this.title, this.question)
      .then(result => this.afterSubmittingQuestion(result));
  }
  afterSubmittingQuestion(result: Object) {
    if (result['success'] === true) {
      alert('질문이 등록되었습니다.');
      this.router.navigate(['online_consulting/consulting_apply/@/0']);
    } else {
      alert('오류가 발생했습니다.  다시 시도해 주세요.');
    }
  }
}
