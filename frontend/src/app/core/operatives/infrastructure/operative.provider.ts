import { InjectionToken, Provider } from "@angular/core";
import { OperativeRepository } from '../domain/operative.repository';
import { environment } from "../../../../environments/environment";
import { OperativeMockService } from "./operative-mock.service";
import { OperativeApiService } from "./operative-api.service";

export const OPERATIVE_TOKEN = new InjectionToken<OperativeRepository>("OperativeRepository");
export const OPERATIVE_REPOSITORY: Provider = {
   provide: OPERATIVE_TOKEN,
   useClass: (environment.env === 'development') ? OperativeMockService : OperativeApiService 
}