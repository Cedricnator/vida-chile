import { InjectionToken, Provider } from "@angular/core";
import { BloodBankRepository } from "../domain/bloodbank.repository";
import { environment } from "../../../../environments/environment";
import { BloodBankMockService } from "./bloodbank-mock.service";
import { BloodBankApiService } from "./bloodbank-api.service";

export const BLOODBANK_TOKEN = new InjectionToken<BloodBankRepository>("BloodBankRepository");
export const BLOODBANK_REPOSITORY: Provider = { 
   provide: BLOODBANK_TOKEN, 
   useClass: (environment.env === 'development') 
   ? BloodBankMockService : BloodBankApiService 
}