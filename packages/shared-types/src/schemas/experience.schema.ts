import { z } from 'zod'

export const ExperienceSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  title: z.string(),
  company: z.string(),
  location: z.string().nullable(),
  startDate: z.string(),
  endDate: z.string().nullable(),
  current: z.boolean(),
  description: z.string().nullable(),
  type: z.enum(['work', 'project']),
  technologies: z.array(z.string()).optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string().nullable(),
})

export type Experience = z.infer<typeof ExperienceSchema>

export const ExperienceResponseSchema = z.object({
  data: z.array(ExperienceSchema),
  meta: z.object({
    pagination: z.object({
      page: z.number(),
      pageSize: z.number(),
      pageCount: z.number(),
      total: z.number(),
    }),
  }),
})

export type ExperienceResponse = z.infer<typeof ExperienceResponseSchema>
