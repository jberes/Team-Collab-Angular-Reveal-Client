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

    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    

    //var theme = new $.ig.MountainDarkTheme();
    //theme.visualizationBackgroundColor = '#212121';
    //theme.dashboardBackgroundColor = '#424242';
    //$.ig.RevealSdkSettings.theme = theme;

 // $.ig.RevealSdkSettings.overrideLocale(RevealApi.SupportedLocales.Ko);

    $.ig.RevealSdkSettings.setBaseUrl('https://samples.revealbi.io/upmedia-backend/reveal-api/');
    $.ig.RevealSdkSettings.enableNewCharts='true';
    $.ig.RevealSdkSettings.ensureFontsLoadedAsync().then(() => {
        $.ig.RVDashboard.loadDashboard(id, (dashboard: any) => {
        this.revealView = new $.ig.RevealView(this.el.nativeElement);

        // revealView Settings
        //this.revealView.canAddCalculatedFields = false;
        //this.revealView.canAddDashboardFilter = false;
        //this.revealView.canAddDateFilter = false;
        //this.revealView.canAddPostCalculatedFields = false;
        //this.revealView.canAddVisualization = false;
        //this.revealView.canChangeVisualizationBackgroundColor = false;
        //this.revealView.canCopyVisualization = false;
        //this.revealView.canDuplicateVisualization = false;
        //this.revealView.canEdit = false;
        //this.revealView.canMaximizeVisualization = false;
        //this.revealView.canSaveAs = false;
        //this.revealView.crosshairsEnabled = false;

        // this.revealView.hoverTooltipsEnabled = false;
        // this.revealView.maximizedVisualization = false;
        // this.revealView.serverSideSave = false;
        // this.revealView.showChangeDataSource = false;
        // this.revealView.showChangeVisualization = false;
        // this.revealView.showDataBlending = false;
        // this.revealView.showDataSourceSelectionDialogSearch = false;
        // this.revealView.showEditDataSource = false;
        // this.revealView.showExportImage = false;
        // this.revealView.showExportToExcel = false;
        // this.revealView.showExportToPDF = false;
        // this.revealView.showExportToPowerpoint = false;
        // this.revealView.showFilters = false;
        // this.revealView.showHeader = false;
        // this.revealView.showMachineLearningModelsIntegration = false;
        // this.revealView.showMenu = false;
        // this.revealView.showRefresh = false;
        // this.revealView.showStatisticalFunctions = false;
        // this.revealView.singleVisualizationMode = false;
        // this.revealView.startInEditMode = false;
        // this.revealView.startWithNewVisualization = false;

        this.revealView.dashboard = dashboard;
    });
  });
}


}
