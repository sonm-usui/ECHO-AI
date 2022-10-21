import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'POCO';
 showBox: boolean = false;

  ngOnInit() {


}
close(status: any){
   this.showBox = status;
}

}
