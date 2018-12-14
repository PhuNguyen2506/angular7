import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
	imports:[MatButtonModule,
			MatCheckboxModule,
			MatGridListModule,
			MatDialogModule,
			MatInputModule,
			FormsModule,
			MatFormFieldModule],
	exports: [MatButtonModule,
				MatCheckboxModule,
				MatGridListModule,
				MatDialogModule,
				MatInputModule,
				FormsModule,
				MatFormFieldModule],
})
export class MaterialModule{}