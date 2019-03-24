import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ModalModule, ButtonsModule, CollapseModule } from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot()
  ],
  exports: [ModalModule, ButtonsModule, CollapseModule]
})
export class AppBootstrapModule {}
