import { DateTime } from 'luxon'

export const useDateFormatting = () => {
  const getTimeDifference = (dateStr: string): string => {
    const now = DateTime.now()
    const date = DateTime.fromISO(dateStr)
    const diff = Math.floor(now.diff(date, ['days']).days)
    return diff === 1 ? `${diff} day ago` : `${diff} days ago`
  }

  return {
    getTimeDifference,
  }
}
