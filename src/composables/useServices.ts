import { ref, onBeforeMount } from 'vue'
import axios, { AxiosResponse } from 'axios'
import { Service, IService } from '@/entities/services'

// This composable is a simplified example for the exercise.
// Feel free to leave as-is, modify, or remove this file (and any others) as desired.
// https://vuejs.org/guide/reusability/composables.html

export default function useServices(): any {
  const getServices = async (query?: string): Promise<AxiosResponse> => {
    // Fetch data from the API
    return await axios.get<IService[]>('/api/services', {
      params: {
        q: query,
      },
    })
  }

  // Return stateful data
  return {
    getServices,
  }
}
