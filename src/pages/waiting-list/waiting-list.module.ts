import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaitingListPage } from './waiting-list';

@NgModule({
  declarations: [
    WaitingListPage,
  ],
  imports: [
    IonicPageModule.forChild(WaitingListPage),
  ],
})
export class WaitingListPageModule {}
