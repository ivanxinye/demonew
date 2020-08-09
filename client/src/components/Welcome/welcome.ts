import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from './../../service';

@Component({
    selector: 'welcome',
    templateUrl: 'welcome.html',
    styleUrls: ['welcome.scss'],
})

export class WelcomePage implements OnInit{

    public selectedCard
    public increaseTo
    savedNum
    amountError = false
    canSubmit = true
    current = 90;
    max = 100;
    public cards

    constructor(private http: HttpClient,
                private route: ActivatedRoute,
                private user: UserService,
                private router: Router) {
    }
    getCardInfo(){
        this.user.isLoading(true);
        return this.http.get('/users/showAllCards').toPromise()
    }
    success(res){
        var percent
        this.cards = res
        this.selectedCard = this.cards[0]
        percent = this.selectedCard.availiableLimit/this.selectedCard.maxIncreaseAmount*100
        this.savedNum = this.selectedCard.availiableLimit
        this.startRingData(percent);
        this.user.isLoading(false);
    }
    fail(err){
        this.router.navigate(['/error'])
        this.user.isLoading(false);
    }
    cardChange(){
        var percent = this.selectedCard.availiableLimit/this.selectedCard.maxIncreaseAmount*100
        this.startRingData(percent)
    }
    increaseLimit(){
        this.syncInvolk().then(
            res => this.success(res),
            err => this.fail(err)
        )
    }
    async syncInvolk(){
        await this.increase()
        let data = await this.getCardInfo()
        return data
    }
    increase(){
        this.user.isLoading(true);
        this.selectedCard.availiableLimit = parseFloat(this.selectedCard.availiableLimit)
        var data = this.selectedCard
        this.http.post('/users/updateCard', data).subscribe(
            res => {
                this.user.setter('cardId', data.id)
                this.router.navigate(['/success'])
                this.user.isLoading(false);
            },
            err => {
                this.router.navigate(['/error'])
                this.user.isLoading(false);
            }
        )
    }
    checkError(){
        this.selectedCard.availiableLimit = this.increaseTo
        if(this.increaseTo > this.savedNum && this.increaseTo < this.selectedCard.maxIncreaseAmount){
            this.cardChange()
            this.amountError = true;
            this.canSubmit = false
        }
        else {
            this.amountError = false;
            this.canSubmit = true
        }
    }
    startRingData(percent){
        this.current = percent
    }
    
    ngOnInit() {
        this.user.isLoading(false)
        this.getCardInfo().then(    
            res => this.success(res),
            err => this.fail(err)
        )  
    }
}
