import { NgModule } from '@angular/core';

import { PhotoListModule } from './photos-list/photo-list.module';
import { PhotoFormModule } from './photos-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';

@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule
    ]
})

export class PhotosModule {}