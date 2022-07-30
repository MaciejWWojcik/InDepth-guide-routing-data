import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../../models/profile';
import { filter, map, Observable } from 'rxjs';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: Person | null = null;
  lastVisited$?: Observable<Person | null>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profiles: ProfilesService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.has('id')) {
        const id = params.get('id');
        this.profile = this.profiles.getPerson(+id!);
      }
    });

    this.lastVisited$ = this.route.queryParamMap.pipe(
      filter(params => params.has('lastVisited')),
      map(params => params.get('lastVisited')),
      map(id => this.profiles.getPerson(+id!)),
    );
  }

}
