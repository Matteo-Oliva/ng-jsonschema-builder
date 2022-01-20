import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModuleWithProviders, NgModule, forwardRef } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FieldJsonSchemaComponent } from './field/field.component';
import { JsonSchemaComponent } from './jsonschema/jsonschema.component';
import { MainJsonSchemaComponent } from './main/main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { SelectSchemaJsonSchemaComponent } from './field/selectschema.component';
import { StateService } from './state.service';

export const CustomDirectives = [
  JsonSchemaComponent,
  MainJsonSchemaComponent,
  FieldJsonSchemaComponent,
  SelectSchemaJsonSchemaComponent,
];

export const NgBrDirectives = {
  JsonSchemaComponent,
  MainJsonSchemaComponent,
  FieldJsonSchemaComponent,
  SelectSchemaJsonSchemaComponent,
};

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,

  ],
  declarations: [CustomDirectives],
  exports: [CustomDirectives],
  providers: [
    StateService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => JsonSchemaComponent),
      multi: true,
    },
  ],
})
class NgJsonSchemaBuilder {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgJsonSchemaBuilder,
    };
  }
}
export { NgJsonSchemaBuilder };
