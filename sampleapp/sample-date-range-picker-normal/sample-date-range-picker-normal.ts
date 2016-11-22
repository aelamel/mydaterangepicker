import {Component, OnInit} from '@angular/core';

declare var require:any;
const sampleDrpNormalTemplate: string = require('./sample-date-range-picker-normal.html');

@Component({
    selector: 'sample-date-range-picker-normal',
    template: sampleDrpNormalTemplate
})

export class SampleDateRangePickerNormal implements OnInit {

    private myDateRangePickerOptionsNormal = {
        clearBtnTxt: 'Clear',
        beginDateBtnTxt: 'Begin Date',
        endDateBtnTxt: 'End Date',
        acceptBtnTxt: 'OK',
        dateFormat: 'dd mmm yyyy',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '34px',
        width: '260px',
        inline: false,
        selectionTxtFontSize: '14px',
        alignSelectorRight: false,
        indicateInvalidDateRange: true,
        showDateRangeFormatPlaceholder: true,
        minYear: 2000,
        maxYear: 2099,
        componentDisabled: false
    };

    selectedDateRangeNormal:string = '04 Nov 2016 - 26 Nov 2016';

    selectedTextNormal: string = '';
    border: string = 'none';

    constructor() {
        console.log('constructor(): SampleDateRangePickerNormal');
    }

    clearDate() {
        this.selectedDateRangeNormal = '';
    }

    enableDisable() {
        let copy = JSON.parse(JSON.stringify(this.myDateRangePickerOptionsNormal));
        copy.componentDisabled = !this.myDateRangePickerOptionsNormal.componentDisabled;
        this.myDateRangePickerOptionsNormal = copy;
    }

    ngOnInit() {
        console.log('onInit(): SampleDateRangePickerNormal');
    }

    onDateRangeChanged(event:any) {
        console.log('onDateRangeChanged(): Begin: ', event.beginDate, ' End: ', event.endDate, ' - formatted: ', event.formatted, ' - beginEpoc timestamp: ', event.beginEpoc, ' - endEpoc timestamp: ', event.endEpoc);
        if(event.formatted !== '') {
            this.selectedTextNormal = 'Formatted: ' + event.formatted;
            this.border = '1px solid #CCC';

            this.selectedDateRangeNormal = event.formatted;
        }
        else {
            this.selectedTextNormal = '';
            this.border = 'none';
        }
    }

    onInputFieldChanged(event:any) {
        console.log('onInputFieldChanged(): Value: ', event.value, ' - dateRangeFormat: ', event.dateRangeFormat, ' - valid: ', event.valid);
    }
}