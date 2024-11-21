import { InjectionToken, Provider } from "@angular/core";
import { UserRepository } from "../domain/user.repository";
import { environment } from "../../../../environments/environment";
import { UserMockService } from "./user-mock.service";
import { UserApiService } from "./user-api.service";

export const USER_TOKEN = new InjectionToken<UserRepository>("UserRepository")
export const USER_REPOSITORY: Provider = { 
   provide: USER_TOKEN,
   useClass: (environment.env === "development") ? UserMockService : UserApiService
}