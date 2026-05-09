import { z } from 'zod'

export const ProjectSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  longDescription: z.string().nullable(),
  githubUrl: z.string().nullable(),
  liveUrl: z.string().nullable(),
  featured: z.boolean(),
  technologies: z.array(z.string()),
  keyFeatures: z.array(z.string()),
  technicalChallenges: z.array(z.string()).optional(),
  image: z.object({
    url: z.string(),
    alternativeText: z.string().nullable(),
  }).nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string().nullable(),
})

export type Project = z.infer<typeof ProjectSchema>

export const ProjectResponseSchema = z.object({
  data: z.array(ProjectSchema),
  meta: z.object({
    pagination: z.object({
      page: z.number(),
      pageSize: z.number(),
      pageCount: z.number(),
      total: z.number(),
    }),
  }),
})

export type ProjectResponse = z.infer<typeof ProjectResponseSchema>
