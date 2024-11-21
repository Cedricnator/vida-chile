

export interface LoginApiResponse {
   success: boolean;
   data:    Data;
   message: string;
}

export interface Data {
   id:       number;
   username: string;
}

export interface LogoutApiResponse {
   success: boolean;
   data:    DataLogout;
   message: string;
}

export interface DataLogout {
   response: string;
}
