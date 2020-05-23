import { IScheduling } from './scheduling.interface';
import * as moment from 'moment';

/**======================================================================
 * Utility Model for Scheduling
 ======================================================================*/
export class Scheduling implements IScheduling {
    /** Members */
    // Private
    private _startTime: string;
    private _endTime: string;
    private _procedureDate: string;
    // Public
    public roomId: number;
    public endDateMax: Date;
    public startDateMin: Date;

    /**-----------------------------------------------------------------
     * Constructor
     * -----------------------------------------------------------------
     * @param {number} roomId
     * @param {string} startTime
     * @param {string} endTime
     * @param {string} procedureDate
     -----------------------------------------------------------------*/
    constructor(
        roomId: number,
        startTime: string,
        endTime: string,
        procedureDate: string
    ) {
        this.roomId = roomId;
        this._startTime = startTime;
        this._endTime = endTime;
        this.procedureDate = procedureDate;
    }

    //#region Procedure Date
    /**-----------------------------------------------------------------
     * Get the Procedure Date
     * -----------------------------------------------------------------
     * @returns {string}
     -----------------------------------------------------------------*/
     public get procedureDate(): string {
        return this._procedureDate;
    }
    /**-----------------------------------------------------------------
     * Set Procedure Date, Calculate four hours back for "startDateMin"
     * and then Calculate four hours ahead for "endDateMax"
     * -----------------------------------------------------------------
     * @param {string} date
     -----------------------------------------------------------------*/
    public set procedureDate(date: string) {
        this._procedureDate = date;
        // 4 hours back for "startDateMin"
        this.startDateMin = this.createFullDateTime(
            this._procedureDate,
            this._startTime,
            -4
        );
        // 4 hours ahead for "endDateMax"
        this.endDateMax = this.createFullDateTime(
            this._procedureDate,
            this._endTime,
            4
        );
    }
    //#endregion Procedure Date

    //#region Start Time
    /**-----------------------------------------------------------------
     * Get the StartTime
     * -----------------------------------------------------------------
     * @returns {string}
     -----------------------------------------------------------------*/
    public get startTime(): string {
        return this._startTime;
    }
    /**-----------------------------------------------------------------
     * Set StartTime & Calculate four hours back for "startDateMin"
     * -----------------------------------------------------------------
     * @param {string} time
     -----------------------------------------------------------------*/
    public set startTime(time: string) {
        this._startTime = time;
        this.startDateMin = this.createFullDateTime(
            this._procedureDate,
            this._startTime,
            -4
        );
    }
    //#endregion Start Time

    //#region End Time
    /**-----------------------------------------------------------------
     * Get the End Time
     -----------------------------------------------------------------*/
    public get endTime(): string {
        return this._endTime;
    }
    /**-----------------------------------------------------------------
     * Set EndTime & Calculate four hours ahead for "endDateMax"
     * -----------------------------------------------------------------
     * @param {string} time
     -----------------------------------------------------------------*/
    public set endTime(time: string) {
        this._endTime = time;
        this.endDateMax = this.createFullDateTime(
            this._procedureDate,
            this._endTime,
            4
        );
    }
    //#endregion End Time

    //#region Utilities
    /**-----------------------------------------------------------------
     * Calculates a DateTime value from a string date and time
     * -----------------------------------------------------------------
     * @param {string} date
     * @param {string} time
     * @param {number} offset?
     * @returns Date
     -----------------------------------------------------------------*/
    public createFullDateTime(date: string, time: string, offset?: number): Date {
        const dte = new Date(`${date}T${time}`);
        if (offset) {
            return moment(dte).add(offset, 'hours').toDate();
        } else {
            return dte;
        }
    }
    //#endregion Utilities
}
