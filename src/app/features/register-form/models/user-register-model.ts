export interface Register {
    name: string;
    email: string;
    password: string;
    passwordRepeat: string;
    gender?: 'Male' | 'Female' | 'Other';
}
