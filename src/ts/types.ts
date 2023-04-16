export enum Role {
  CLIENT = 'CLIENT',
  ADMIN = 'ADMIN',
  COURIER = 'COURIER',
  TSON = 'TSON',
}

export interface ListResponse {
  data: IDeliveryInfo;
  status: string;
}

export interface IDeliveryInfo {
  requestId: string;
  resultCode: string;
  serviceType: IServiceType;
  organization: IOrganization;
  appStatus: IAppStatus;
  statusDate: string;
}

export interface IServiceType {
  code: string;
  nameRu: string;
  nameKz: string;
}

export interface IOrganization {
  code: string;
  nameRu: string;
  nameKz: string;
}

export interface IAppStatus {
  appState: string;
  statusInfo: string;
  statusInfoKz: string;
}

export interface IOrderData {
  orderNumber: string;
  serviceName: string;
  department: string;
  recipientInfo: {
    iin: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    deliveryAddress: {
      region: string;
      city: string;
      street: string;
      houseNumber: string;
      apartmentNumber: string;
      entranceNumber: string;
      floorNumber: string;
      buildingNumber: string;
      residentialComplexName: string;
      additionalInformation: string;
    };
  };
}

export interface IUser {
  first_name: string;
  last_name: string;
  role: number;
  token: string;
  id: number;
}
