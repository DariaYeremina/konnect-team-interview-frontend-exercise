export const useClientPagination = () => {
  const clientPagination = (
    data: {
      array: any[],
      page: number,
      perPage: number
    }): any[] => {
    return data.array.slice(
      (data.page - 1) * data.perPage,
      data.page * data.perPage,
    )
  }

  return {
    clientPagination,
  }
}
