import { Component, OnInit } from '@angular/core';
import { SolutionService } from '../test2/solution.service';
import { Solution, GoogleObj } from '../test2/model';
import { GoogletranslateService } from '../googletranslate.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  lang = new FormControl('en');

  data: Solution = {
    title: '',
    description: '',
    detail: ''
  };

  private translateBtn: any;

  constructor( private solution: SolutionService,private google: GoogletranslateService) {
  }

  ngOnInit() {
    this.solution.getSolution().subscribe(res => this.data = res);
    this.translateBtn = document.getElementById('translatebtn');
  }

   send() {
    const googleObj: GoogleObj = {
      q: [this.data.title, this.data.description, this.data.detail],
      target: this.lang.value
    };

    this.translateBtn.disabled = true;

    this.google.translate(googleObj).subscribe(
      (res: any) => {
        this.translateBtn.disabled = false;
        this.data = {
          title: res.data.translations[0].translatedText,
          description: res.data.translations[1].translatedText,
          detail: res.data.translations[2].translatedText
        };
        console.log(this.data);
      },
      err => {
        console.log(err);
      }
    );
  }

  //phase 2



}
