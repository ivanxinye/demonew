import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from './../../service';

@Component({
    selector: 'success',
    templateUrl: 'success.html',
    styleUrls: ['success.scss'],
})

export class SuccessPage implements OnInit{
    public cards
    public selectedCard
    public date = new Date;
    constructor(private http: HttpClient,
        private route: ActivatedRoute,
        private user: UserService,
        private router: Router) {
}
 
    getCardInfo(){
        this.user.isLoading(true);
        this.http.get('/users/showAllCards').subscribe(    
            res => {
                this.cards = res
                this.cards.map((card, i)=>{
                    if(card.id == this.user.getter('cardId')) this.selectedCard = this.cards[i]
                })
                this.user.isLoading(false);
            },
            err => {
                this.router.navigate(['/error'])
                this.user.isLoading(false);
            }
        )
    }
    ngOnInit() {
        this.user.isLoading(false)
        this.getCardInfo() 
      
    }
}
