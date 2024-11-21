import { BloodBankModel } from "../../bloodbank/domain/bloodbank.model";

export interface UserModel {
   id:         number;
   name:       string;
   lastName:   string;
   email:      string;
   bloodBank?: BloodBankModel|null;
}