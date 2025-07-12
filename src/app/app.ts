import {Component, inject, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MPageService, MpageLogComponent} from '@clinicaloffice/mpage-developer';
import {CUSTOM_DATE_FORMATS} from './app.config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MpageLogComponent],
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
