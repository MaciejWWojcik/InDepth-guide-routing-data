import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProfileType } from '../../../models/profile';

@Component({
  selector: 'app-profile-type',
  templateUrl: './profile-type.component.html',
  styleUrls: ['./profile-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileTypeComponent {
  readonly ProfileType = ProfileType;
}
