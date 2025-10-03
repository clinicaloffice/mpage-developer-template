import {Component, inject, OnInit} from '@angular/core';
import {CUSTOM_DATE_FORMATS} from './app.config';
import {
  MPageService,
  MpageLogComponent
} from '@clinicaloffice/mpage-developer';

@Component({
  selector: 'app-root',
  imports: [MpageLogComponent],
  templateUrl: './app.html',
  standalone: true
})
export class App implements OnInit {
  public MPage = inject(MPageService);

  ngOnInit() {
    this.MPage.setMaxInstances(2, true, 'CHART', false);
    this.MPage.defaultDateFormats = CUSTOM_DATE_FORMATS;
  }
}
