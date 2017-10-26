import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KaraokePage } from './karaoke';

@NgModule({
  declarations: [
    KaraokePage,
  ],
  imports: [
    IonicPageModule.forChild(KaraokePage),
  ],
})
export class KaraokePageModule {}
