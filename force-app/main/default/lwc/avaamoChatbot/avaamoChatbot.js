import { LightningElement,api } from 'lwc';
export default class AvaamoChatbot extends LightningElement {
    @api avaamobotIconURL = "";
    @api avaamobotURL = "";
    @api botHeight = "";
    @api botWidth = "";
    @api backgroundColor = "";
    openLink = false;
    websiteLabel = true;

    renderedCallback(){
        this.initCSSVariables();
    }

    gotowebsite(event) {
        this.openLink = true;   
        this.websiteLabel = !this.websiteLabel
        if(this.websiteLabel){
            this.openLink = false; 
        }
        
    } 
    
    initCSSVariables() {
        var css = document.body.style;
        css.setProperty('--popupWidth', `calc(${this.botWidth})%`);
        css.setProperty('--popupHeight', `calc(${this.botHeight})%`);
    }
}

