import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, finalize, of, switchMap } from 'rxjs';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
  sourceForm: FormGroup;
  targetForm: FormGroup;
  languages: any;
  detectedLanguage: any;
  isLoading: boolean = false;

  get translateCount(): number {
    return this.authService.translateCount;
  }
  get isRegistered(): boolean {
    return this.authService.user ? true : false;
  }

  
  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router,
    public modal: NzModalService,
    private message: NzMessageService
  ) {

    this.apiService
      .languages()
      .subscribe((languages) => (this.languages = languages));

    this.sourceForm = new FormGroup({
      language: new FormControl('auto', Validators.required),
      text: new FormControl('', Validators.required),
    });
    this.targetForm = new FormGroup({
      language: new FormControl('hu', Validators.required),
      text: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  translate() {
    this.increaseTranslateCount()
    
    if (this.sourceForm.value.language !== 'auto') {
      this.isLoading = true;
      this.apiService
        .translate(
          this.sourceForm.value.text,
          this.sourceForm.value.language,
          this.targetForm.value.language
        )
        .pipe(
          finalize(() => this.isLoading = false)
        )
        .subscribe({
          next: (response) => {
          this.targetForm.controls['text'].setValue(response.translatedText)
          },
          error: (error) => { 
            this.message.error(error.message, {
              nzDuration: 6000
            })
          }
      });
    } else {
      this.isLoading = true;
      this.apiService
        .detect(this.sourceForm.value.text)
        .pipe(
          switchMap((response) => {
            this.languages
            .filter((item: { code: any; }) => item.code === response[0].language)
            .map((item: { name: any; }) => this.detectedLanguage = item.name);
            
            return this.apiService.translate(
              this.sourceForm.value.text,
              response[0].language,
              this.targetForm.value.language
              );
            }),
            catchError(error => {
              this.message.error(error.message, {
                nzDuration: 6000
              })              
              return of([]);
            }),
            finalize(() => this.isLoading = false)
        )
        .subscribe(
          (response) => this.targetForm.controls['text'].setValue(response.translatedText)
        );
    }
  }

  increaseTranslateCount() {
    if (!this.isRegistered) {
      this.authService.translateCount++;
      if (this.translateCount === 3) {
        this.showModal();
      }
    }
   }

  swap() {
    const sourceLanguage = this.sourceForm.value.language;
    const sourceText = this.sourceForm.value.text;
    this.sourceForm.controls['language'].setValue(
      this.targetForm.value.language
    );
    this.sourceForm.controls['text'].setValue(
      this.targetForm.value.text
    );
    this.targetForm.controls['language'].setValue(sourceLanguage);
    this.targetForm.controls['text'].setValue(sourceText);
  }

  resetTextarea() {
    this.sourceForm.controls['text'].setValue('')
    this.detectedLanguage = undefined
  }

  showModal(): void {
    setTimeout(() => { 
      this.modal.warning({
      nzTitle: 'Az ingyenes szolgáltatás véget ért.',
      nzContent: 'A Babel Fish fordító további használatához regisztráció szükséges.',
      nzCancelText: 'Talán majd máskor.',
      nzOkText: 'Igen, regisztrálok!',
      nzStyle: { top: '20px' },
      nzOnOk: () => this.router.navigateByUrl('/register'),
      });
    }, 600);
  }

}
