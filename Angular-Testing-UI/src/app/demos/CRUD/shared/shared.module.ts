import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './components/star/star.component';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import { MessageComponent } from './components/messages/message.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'messages',
        component: MessageComponent,
        outlet: 'popup'
      }
    ])
  ],
  declarations: [
    StarComponent,
    ConvertToSpacesPipe,
    MessageComponent
  ],
  exports: [
    FormsModule,
    StarComponent,
    ConvertToSpacesPipe
  ]
})
export class SharedModule {}
