import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  @Input() text: string = ''; // look at the header html to see it
  @Input() color: string = '';
  constructor() { }

  ngOnInit(): void {

  }
  onClick() {
    console.log('Add');
  }

}
