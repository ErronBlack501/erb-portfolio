import { useQuery } from '@tanstack/react-query'
import { fetchStrapi } from '#/lib/strapi-client'
import { ProjectSchema, type Project } from '@erb-portfolio/shared-types'

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await fetchStrapi('/projects?populate=*')
      const validatedData = response.data.map((item) => ProjectSchema.parse(item))
      return validatedData
    },
  })
}

export function useFeaturedProjects() {
  return useQuery({
    queryKey: ['projects', 'featured'],
    queryFn: async () => {
      const response = await fetchStrapi('/projects?filters[featured]=true&populate=*')
      const validatedData = response.data.map((item) => ProjectSchema.parse(item))
      return validatedData
    },
  })
}

export function useProject(id: number) {
  return useQuery({
    queryKey: ['project', id],
    queryFn: async () => {
      const response = await fetchStrapi(`/projects/${id}?populate=*`)
      return ProjectSchema.parse(response.data)
    },
    enabled: !!id,
  })
}
