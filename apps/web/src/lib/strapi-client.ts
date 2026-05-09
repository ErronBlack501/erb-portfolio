import { env } from '#/env'
import { getLocale } from '#/paraglide/runtime'

const STRAPI_URL = env.VITE_STRAPI_URL
const STRAPI_API_TOKEN = env.VITE_STRAPI_API_TOKEN || ''

interface StrapiResponse<T> {
  data: T[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

interface StrapiSingleResponse<T> {
  data: T
  meta: {}
}

function getHeaders() {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  if (STRAPI_API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`
  }

  return headers
}

export async function fetchStrapi<T>(
  endpoint: string,
  options: RequestInit = {},
  locale?: string
): Promise<StrapiResponse<T>> {
  const url = `${STRAPI_URL}/api${endpoint}`
  const currentLocale = locale || getLocale()
  
  // Add locale parameter if not already present
  const urlWithLocale = url.includes('?') 
    ? `${url}&locale=${currentLocale}` 
    : `${url}?locale=${currentLocale}`

  const response = await fetch(urlWithLocale, {
    ...options,
    headers: {
      ...getHeaders(),
      ...options.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.statusText}`)
  }

  return response.json()
}

export async function fetchStrapiSingle<T>(
  endpoint: string,
  options: RequestInit = {},
  locale?: string
): Promise<StrapiSingleResponse<T>> {
  const url = `${STRAPI_URL}/api${endpoint}`
  const currentLocale = locale || getLocale()
  
  // Add locale parameter if not already present
  const urlWithLocale = url.includes('?') 
    ? `${url}&locale=${currentLocale}` 
    : `${url}?locale=${currentLocale}`

  const response = await fetch(urlWithLocale, {
    ...options,
    headers: {
      ...getHeaders(),
      ...options.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.statusText}`)
  }

  return response.json()
}

export { STRAPI_URL }
