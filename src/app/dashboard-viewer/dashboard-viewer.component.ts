import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-dashboard-viewer',
  templateUrl: './dashboard-viewer.component.html',
  styleUrls: ['./dashboard-viewer.component.scss']
})
export class DashboardViewerComponent implements AfterViewInit {

@ViewChild('revealView') el!: ElementRef;
private revealView: any;

constructor(private route: ActivatedRoute)
{}

ngAfterViewInit(): void {

  // let id = this.route.snapshot.paramMap.get('id');
   
   // You can hard-code a dashboard id here, Sales, Marketing, Campaigns, or Manufacturing.
    let id = 'Sales';

    // Set the Locaion of the Reveal Server
    $.ig.RevealSdkSettings.setBaseUrl('https://samples.revealbi.io/upmedia-backend/reveal-api/');
 
     // Load Dashboard from Server
    $.ig.RVDashboard.loadDashboard("Sales").then((dashboard: any) => {

      // Create a New Instance of a RevealView
      this.revealView = new $.ig.RevealView(this.el.nativeElement);

      // Assign the Dashboard to the RevealView
      this.revealView.dashboard = dashboard;
    });
  }
}
