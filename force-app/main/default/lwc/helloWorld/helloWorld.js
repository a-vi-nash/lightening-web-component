import { LightningElement,api } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'World';
  @api string = "";
  @api boolean = "";
  @api integer = "";
  @api picklist = "";
  @api backgroundColor = "";
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}