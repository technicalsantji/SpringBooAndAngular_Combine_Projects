import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {

arry:any=[
  {
 
    name:''
  }
]

add(val:any){
  

    this.arry.push({name:val.value})
  

  for (let i = 0; i <9; i++) {
    console.log(this.arry[i].name);
    
  }
}

}
