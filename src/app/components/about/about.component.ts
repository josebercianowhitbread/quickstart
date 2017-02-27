import { Component } from '@angular/core';

@Component({
    selector: 'about-component',
    templateUrl: 'app/components/about/about.component.html'
})

export class AboutComponent {
    aboutText: string;
    constructor() {
        this.aboutText = "Some text";
    }
}

