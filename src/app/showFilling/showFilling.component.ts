import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
    selector: 'showFilling-root',
    templateUrl: './showFilling.component.html',
    styleUrls: ['./showFilling.component.css']
})
export class showFillingComponent {
    transactionLink;
    validate;
    studentData;
    fillingData;
    transactionData;


    constructor(private httpClient: HttpClient, private routes: Router) { }


    ngOnInit() {
        this.validate = false;

        this.httpClient.get(environment.getDataFromDB)
            .subscribe(
                response => {
                    console.log(response);
                    this.fillingData = response;
                },
                err => {
                    console.log("Error Ocurred" + err);
                }
            )
    }

    validateButton(transactionId) {
        this.httpClient.get(environment.getTransactionDetails + transactionId)
            .subscribe(
                response => {
                    this.transactionData = JSON.stringify(response, null, "\t");
                    alert(this.transactionData);
                    console.log(this.transactionData);
                    // this.validate = true;
                }
            )
    }
}