import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../models/profile';
import { PersonMock } from '../../mocks/profile-mock';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewProfileComponent implements OnInit {

  fullView!: boolean;
  profile!: Person;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.profile = PersonMock;
    this.fullView = this.route.snapshot.data['fullView'];
  }

}
