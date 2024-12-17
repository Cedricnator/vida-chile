export interface OperativeModel {
   id            : number;
   name          : string;
   startDate     : Date;
   endDate       : Date;
   image         : string|null;
   description   : string;
   workerId      : number;
   address       : string;
   bloodBankName : string;
}

export interface CreateOperativeParams{
   name        : string;
   startDate   : Date;
   endDate     : Date;
   image       : string|null;
   description : string;
   addressId   : number;
   workerId    : number;
   bloodBankId : number;
}