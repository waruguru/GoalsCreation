import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {

  faFileCode = faFileCode
  faCodeBranch = faCodeBranch
  faMapMarker = faMapMarker
  faUserAlt = faUserAlt
  faUserFriends = faUserFriends
  faClone = faClone
  faLaptopCode = faLaptopCode


  faReply = faReply
  @Output() goback = new EventEmitter<boolean>()
  hideRepo!: boolean;
  repos: any = []
  totalcount!: number


  reposearch:string = ''
  githubsearchService: GithubsearchService;

  constructor(githubsearchService:GithubsearchService) { 
    this.githubsearchService = githubsearchService
  }
  ngOnInit(): void {
    this.repos = this.githubsearchService.searchreps
    this.totalcount = this.githubsearchService.totalCount
    console.log(this.totalcount)
  }

  toback(){
    this.hideRepo = true
    this.goback.emit(this.hideRepo)
  }

  searchrepo(){
    this.githubsearchService.getRepos(this.reposearch)
    console.log(this.reposearch)
  }
  maxvalue(){
    let fun = Number.MIN_VALUE;
    let arr = this.repos

    for (let i=0; i<arr.length;i++){
      console.log(arr[i].forks)
      if(arr[i].forks>fun){
        fun = arr[i].forks
      }
    }
    console.log(fun)
    return fun;
  }

}
