export class Customer {
    id: string;
    gender: string;
    title: string;
    givenName: string;
    middleInitial: string;
    surname: string;
    streetAddress: string;
    city: string;
    zipCode: number;
    country: string;
    countryFull: string;
    emailAddress: string;
    username: string;
    password: string;
    telephoneNumber: string;
    telephoneCountryCode: string;
    birthday: string;
    age: number;
    occupation: string;
    company: string;
    vehicle: string;
    kilograms: number;
    centimeters: number;
    location: {
        type: string;
        coordinate: [
            number
        ]
    }
}
