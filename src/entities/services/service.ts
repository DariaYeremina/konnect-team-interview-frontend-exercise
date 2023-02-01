import { IService, ServiceType, IServiceVersion, IServiceMetric } from '@/entities/services'

export class Service implements IService {
  id: string
  name: string
  description: string
  type: ServiceType
  published: boolean
  configured: boolean
  versions: IServiceVersion[]
  metrics: IServiceMetric

  constructor(data: IService) {
    this.id = data.id
    this.name = data.name
    this.description = data.description
    this.type = data.type
    this.published = data.published
    this.configured = data.configured
    this.versions = data.versions
    this.metrics = data.metrics
  }
}
