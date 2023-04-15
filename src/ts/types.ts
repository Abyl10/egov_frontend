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
