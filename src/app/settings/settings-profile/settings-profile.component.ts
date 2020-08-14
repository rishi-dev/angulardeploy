import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { map, switchMap } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings-profile',
  templateUrl: './settings-profile.component.html',
  styleUrls: ['./settings-profile.component.css']
})
export class SettingsProfileComponent implements OnInit {
  posts: any = [];
  constructor(public route: ActivatedRoute,
              private postservice: PostService,
              private router: Router) {
    console.log('Init');
    this.route.paramMap.subscribe(params => {
      console.log(params);
      console.log(params.get('username'));
    });
    // if navigation to same component is not happening in app
    console.log(this.route.snapshot.paramMap.get('username'));
    this.route.queryParamMap.subscribe(queryparams => {
       console.log(queryparams);
    });
    // if navigation to same component is not happening in app
    console.log(this.route.snapshot.queryParamMap.get('first'));

  // to get both combined
  // example http://localhost:4200/settings/set-profile/john/1234?first=1000&second=secondparam
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
  ])
  .subscribe(combparams => {
    console.log('**** Combined observable *****');
    const usern = combparams[0].get('username');
    const first = combparams[1].get('first');
    console.log(usern);
    console.log(first);
    // call service here using subscribe
    this.postservice.getPosts()
            .subscribe(response => {
              this.posts = response;
              console.log(response);
          }
        );
    // call service here using subscribe
  });

// using switchmap to avoid subscribe inside another subscribe
    combineLatest([
  this.route.paramMap,
  this.route.queryParamMap
])
.pipe(
 switchMap(combparams => {
  const usern = combparams[0].get('username');
  const first = combparams[1].get('first');
// call service here using subscribe and above parameters
  return this.postservice.getPosts();
// call service here using subscribe
 })
)
.subscribe(response => {
  this.posts = response;
  console.log(response);
});

   }// constructor

  ngOnInit(): void {
  }

  btnClick(): void {
    this.router.navigate(['settings/set-contact'], {
      queryParams: {phone: 122344, email: 'testemail.com'}
    });
  }

}
