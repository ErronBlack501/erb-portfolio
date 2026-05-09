import { useQuery } from '@tanstack/react-query'
import { fetchStrapi } from '#/lib/strapi-client'
import { TechnologySchema, type Technology } from '@erb-portfolio/shared-types'

export function useTechnologies() {
  return useQuery({
    queryKey: ['technologies'],
    queryFn: async () => {
      const response = await fetchStrapi('/technologies')
      const validatedData = response.data.map((item) => TechnologySchema.parse(item))
      return validatedData
    },
  })
}

export function useTechnologiesByCategory(category: string) {
  return useQuery({
    queryKey: ['technologies', category],
    queryFn: async () => {
      const response = await fetchStrapi(`/technologies?filters[category]=${category}`)
      const validatedData = response.data.map((item) => TechnologySchema.parse(item))
      return validatedData
    },
    enabled: !!category,
  })
}
