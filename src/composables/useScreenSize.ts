import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { computed } from 'vue'

export const useScreenSize = () => {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const mdAndSmaller = computed(() => breakpoints.smallerOrEqual('md'))
  const smAndSmaller = computed(() => breakpoints.smallerOrEqual('sm'))

  return {
    mdAndSmaller,
    smAndSmaller,
  }
}
