/**
 * App component script
 */
import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { BryntumSchedulerComponent } from '@bryntum/schedulerpro-angular';
import { Scheduler } from '@bryntum/schedulerpro';
import { schedulerProps } from './app.config';

@Component({
    selector      : 'app-root',
    templateUrl   : './app.component.html',
    styleUrls     : ['./app.component.scss'],
    encapsulation : ViewEncapsulation.ShadowDom
})
export class AppComponent implements AfterViewInit {

    public schedulerProps: any = schedulerProps;
    private scheduler!: Scheduler;

    columnLinesFeature = { disabled : false };
    stripeFeature = { disabled : true };

    @ViewChild(BryntumSchedulerComponent, { static : true }) schedulerComponent!: BryntumSchedulerComponent;

    ngAfterViewInit(): void {
        // Store Scheduler instance
        this.scheduler = this.schedulerComponent.instance;
        // // The following lines are only needed for ViewEncapsulation.ShadowDom
        document.fonts.add(new FontFace('FontAwesome6Free', `url(assets/fonts/fa-solid-900.woff2)`));
        document.fonts.add(new FontFace('Roboto', `url(assets/fonts/Roboto-Regular.woff2)`));

    }

    toggleColumnLinesFeature(event : any): void {
        this.columnLinesFeature = { disabled : !event.checked };
    }

    toggleStripeFeature(event : any): void {
        this.stripeFeature = { disabled : !event.checked };
    }

}
