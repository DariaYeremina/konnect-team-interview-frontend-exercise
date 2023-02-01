import { defineStore } from 'pinia'
import { IService, Service } from '@/entities/services'
import useServices from '@/composables/useServices'
import { useClientPagination } from '@/composables/useClientPagination'
import { RequestStatus } from '@/composables/composable.types'

const { getServices } = useServices()
const { clientPagination } = useClientPagination()

interface IServicesState {
  rawServices: Service[];
  displayedServices: Service[];
  fetchServicesStatus: RequestStatus | null;
  page: number;
  perPage: number;
  serviceDetails: Service | null;
}

export const useServicesStore = defineStore({
  id: 'services',
  state: (): IServicesState => ({
    rawServices: [],
    displayedServices: [],
    fetchServicesStatus: null,
    page: 1,
    perPage: 9,
    serviceDetails: null,
  }),
  getters: {
    totalServicesAmount: (state: IServicesState) => state.rawServices.length,
  },
  actions: {
    updatePagination() {
      this.displayedServices = clientPagination(
        { array: this.rawServices, page: this.page, perPage: this.perPage })
    },
    async fetchServices(query?: string) {
      this.fetchServicesStatus = RequestStatus.Pending

      try {
        const { data } = await getServices(query)
        this.rawServices = data.map((el: IService) => new Service(el))

        this.fetchServicesStatus = this.rawServices.length === 0
          ? RequestStatus.EmptyResponse
          : RequestStatus.Success

        this.page = 1
        this.updatePagination()
      } catch (e) {
        this.fetchServicesStatus = RequestStatus.Error
      }
    },
    getServiceDetails(id: string) {
      this.serviceDetails = this.rawServices.find(el => el.id === id) || null
    },
    clearServiceDetailsData() {
      this.serviceDetails = null
    },
  },
})
