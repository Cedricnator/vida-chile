
export interface CityModel {
   id:   number,
   name: string
}

export interface AddressModel {
   id:      number,
   street:  string,
   number:  number,
   city:    CityModel
}

export interface BloodBankModel {
   id:          number,
   name:        string,
   description: string,
   image:       string | null,
   address:     AddressModel
}

export interface getBloodBankResponse {
   name:        string,
   description: string,
   image:       string | null,
   fullAddress: string
}