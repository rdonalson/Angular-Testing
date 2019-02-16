/**======================================================================
 * Utility Interface for Scheduling
 ======================================================================*/
export interface IScheduling {
    roomId: number;
    startTime: string;
    endTime: string;
    procedureDate: string;
    endDateMax: Date;
    startDateMin: Date;
    createFullDateTime(date: string, time: string, offset?: number): Date;
}
