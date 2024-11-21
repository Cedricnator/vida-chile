import { InjectionToken, Provider } from "@angular/core";
import { FormRepository } from "../domain/form.repository";
import { environment } from "../../../../environments/environment";
import { FormMockService } from "./form-mock.service";
import { FormApiService } from "./form-api.service";

export const FORM_TOKEN = new InjectionToken<FormRepository>("");
export const FORM_REPOSITORY: Provider = {
   provide: FORM_TOKEN,
   useClass: (environment.env === 'development') 
      ? FormMockService : FormApiService
}