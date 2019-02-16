import { IConsent } from './consent.interface';

export class Consent implements IConsent {
    public id: number;
    public firstName: string;
    public lastName: string;
    public fullName: string;
    constructor(id: number, firstName: string, lastName: string) {
        this.id =  id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.concatenateFullName(firstName, lastName);
    }

    private concatenateFullName(firstName: string, lastName: string): string {
        return `${lastName}, ${firstName}`;
    }
}
