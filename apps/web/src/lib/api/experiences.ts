import { useQuery } from '@tanstack/react-query'
import { fetchStrapi } from '#/lib/strapi-client'
import { ExperienceSchema, type Experience } from '@erb-portfolio/shared-types'

export function useExperiences() {
  return useQuery({
    queryKey: ['experiences'],
    queryFn: async () => {
      const response = await fetchStrapi('/experiences?populate=*&sort=startDate:desc')
      const validatedData = response.data.map((item) => ExperienceSchema.parse(item))
      return validatedData
    },
  })
}

export function useWorkExperience() {
  return useQuery({
    queryKey: ['experiences', 'work'],
    queryFn: async () => {
      const response = await fetchStrapi('/experiences?filters[type]=work&populate=*&sort=startDate:desc')
      const validatedData = response.data.map((item) => ExperienceSchema.parse(item))
      return validatedData
    },
  })
}

export function useExperience(id: number) {
  return useQuery({
    queryKey: ['experience', id],
    queryFn: async () => {
      const response = await fetchStrapi(`/experiences/${id}?populate=*`)
      return ExperienceSchema.parse(response.data)
    },
    enabled: !!id,
  })
}
