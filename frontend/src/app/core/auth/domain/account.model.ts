import { BloodBankModel } from "../../bloodbank/domain/bloodbank.model";


export interface LoginApiResponse {
   success: boolean;
   data:    Data;
   message: string;
}

export interface Data {
   id:       number;
   username: string;
   worker:   Worker | null;
}

export interface Worker {
   id:        number;
   name:      string;
   lastName:  string;
   email:     string;
   bloodBank: null | BloodBankModel;
}

export interface LogoutApiResponse {
   success: boolean;
   data:    DataLogout;
   message: string;
}

export interface DataLogout {
   response: string;
}
