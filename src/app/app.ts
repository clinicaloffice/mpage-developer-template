import {Component, inject, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CUSTOM_DATE_FORMATS} from './app.config';
import {
  MPageService,
  MpageLogComponent,
  AddressService,
  AllergyService,
  CodeValueService,
  ConfigService,
  CustomService,
  DiagnosisService,
  EncounterService,
  ErrorHandlerService,
  OrganizationService, PersonService, PhoneService, ProblemService, ReferenceService
} from '@clinicaloffice/mpage-developer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MpageLogComponent],
  templateUrl: './app.html',
  standalone: true,
  providers: [MPageService, AddressService, AllergyService, CodeValueService, ConfigService, CustomService,
    DiagnosisService, EncounterService, ErrorHandlerService, OrganizationService, PersonService, PhoneService,
    ProblemService, ReferenceService]
})
export class App implements OnInit {
  public MPage = inject(MPageService);

  ngOnInit() {
    this.MPage.setMaxInstances(2, true, 'CHART', false);
    this.MPage.defaultDateFormats = CUSTOM_DATE_FORMATS;
  }
}
