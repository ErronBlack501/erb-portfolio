import { z } from 'zod'

export const TechnologySchema = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  category: z.enum([
    'frontend',
    'backend',
    'database',
    'devops',
    'languages',
    'other',
  ]),
  icon: z.string().nullable(),
  proficiency: z.enum(['beginner', 'intermediate', 'advanced', 'expert']),
  url: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string().nullable(),
})

export type Technology = z.infer<typeof TechnologySchema>

export const TechnologyResponseSchema = z.object({
  data: z.array(TechnologySchema),
  meta: z.object({
    pagination: z.object({
      page: z.number(),
      pageSize: z.number(),
      pageCount: z.number(),
      total: z.number(),
    }),
  }),
})

export type TechnologyResponse = z.infer<typeof TechnologyResponseSchema>
