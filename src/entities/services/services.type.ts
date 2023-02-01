export enum ServiceType {
  REST = 'REST',
}

export enum ServiceStatus {
  Pending,
  Published,
  Unpublished
}

export interface IServiceDeveloper {
  id: string
  name: string
  email: string
  avatar: string

}

export interface IServiceVersion {
  id: string;
  name: string;
  description: string;
  updated_at: string;
  developer?: IServiceDeveloper
}

export interface IServiceMetric {
  latency: number;
  uptime: number;
  requests: number;
  errors: number;
}

export interface IService {
  id: string;
  name: string;
  description: string;
  type: ServiceType,
  published: boolean;
  configured: boolean;
  versions: IServiceVersion[];
  metrics: IServiceMetric;
}
