import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  pointsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  questionArr = [
      "fill in the blanks", "True or False"
  ];

  answerList = [];
  posArr = [];
  
  @ViewChild('answerField') answerField: ElementRef;
  @ViewChild('PositionField') PositionField: ElementRef;

  constructor(
      private formBuilder: FormBuilder) {
   
  }

  ngOnInit() {
  }


  onAddAnswer(ans, position, numberOfspaces): void {
  
      if (ans && position && numberOfspaces) {

          this.posArr.push({ "answer": ans, "position": position });

          if (this.posArr.length == numberOfspaces) {

              this.answerField.nativeElement.value = "";
              this.PositionField.nativeElement.value = "";

               var i=0;
              while(this.posArr[i+1]){
                  this.answerList.push({ "answer": this.posArr[i]['answer'] + " , " + this.posArr[i + 1]['answer'], "position": this.posArr[i]['position'] + "  , " + this.posArr[i + 1]['position'] });
                  i++;
              }
              this.posArr = [];
          }else{
              

          }

      }
  }

  onEditAnswer(): void {

  }

  onDeleteAnswer(): void {

  }
}
