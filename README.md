# ERB Portfolio - Fullstack Monorepo

A fullstack portfolio application built with a monorepo architecture using pnpm workspaces, featuring a TanStack Start frontend and Strapi CMS backend.

## Architecture

This project uses a monorepo structure with pnpm workspaces:

```
erb-portfolio/
├── apps/
│   ├── web/              # TanStack Start frontend
│   └── cms/              # Strapi CMS backend
├── packages/
│   └── shared-types/     # Shared TypeScript types and Zod schemas
└── pnpm-workspace.yaml   # Workspace configuration
```

## Apps

### apps/web - Frontend

**Tech Stack:**
- TanStack Start (React Router + SSR)
- React 19
- TypeScript
- TailwindCSS
- ShadCN UI
- TanStack Query
- TanStack Form
- Zod
- Framer Motion (motion)
- Lucide React
- Paraglide (i18n)

**Features:**
- Responsive portfolio UI
- Hero/About/TechStack/Projects/Experience/Contact sections
- Internationalization (EN/FR)
- TanStack Query for data fetching from Strapi
- Type-safe API functions using shared Zod schemas
- Contact form with validation

### apps/cms - Strapi CMS

**Tech Stack:**
- Strapi v5
- PostgreSQL
- TypeScript

**Content Types:**
- **Projects**: Title, description, GitHub URL, live URL, featured flag, technologies, key features, image
- **Experiences**: Title, company, location, dates, type (work/project), description, technologies
- **Technologies**: Name, category (frontend/backend/database/devops/languages/other), proficiency, icon, URL

## Packages

### packages/shared-types

Shared TypeScript types and Zod schemas used by both frontend and backend.

**Schemas:**
- `ProjectSchema` - Project content type validation
- `ExperienceSchema` - Experience content type validation
- `TechnologySchema` - Technology content type validation

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- pnpm >= 9.0.0
- PostgreSQL database

### Installation

```bash
# Install dependencies
pnpm install

# Build shared types
pnpm shared-types:build
```

### Environment Variables

#### Frontend (apps/web/.env)

```env
VITE_STRAPI_URL=http://localhost:1337
VITE_STRAPI_API_TOKEN=your_api_token
```

#### CMS (apps/cms/.env)

```env
HOST=localhost
PORT=1337
APP_KEYS=modifyMeWithRandomString1,modifyMeWithRandomString2,modifyMeWithRandomString3,modifyMeWithRandomString4
API_TOKEN_SALT=modifyMeWithRandomString
ADMIN_JWT_SECRET=modifyMeWithRandomString
JWT_SECRET=modifyMeWithRandomString
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=portfolio_cms
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
```

### Development

```bash
# Start frontend (TanStack Start)
pnpm dev

# Start CMS (Strapi)
pnpm cms:dev

# Build shared types in watch mode
pnpm shared-types:dev
```

### Building

```bash
# Build frontend
pnpm build

# Build CMS
pnpm cms:build

# Build shared types
pnpm shared-types:build
```

### Production

```bash
# Start CMS in production
pnpm cms:start
```

## API Client

The frontend includes a type-safe API client for Strapi:

```typescript
import { fetchStrapi } from '#/lib/strapi-client'
import { useProjects } from '#/lib/api/projects'

// In components
const { data: projects } = useProjects()
```

## Content Types

### Projects

- `title` (string, required)
- `description` (text)
- `longDescription` (richtext)
- `githubUrl` (string)
- `liveUrl` (string)
- `featured` (boolean)
- `technologies` (json array)
- `keyFeatures` (json array)
- `technicalChallenges` (json array)
- `image` (media)

### Experiences

- `title` (string, required)
- `company` (string, required)
- `location` (string)
- `startDate` (date, required)
- `endDate` (date)
- `current` (boolean)
- `description` (richtext)
- `type` (enum: work, project)
- `technologies` (json array)

### Technologies

- `name` (string, required)
- `category` (enum: frontend, backend, database, devops, languages, other, required)
- `icon` (string)
- `proficiency` (enum: beginner, intermediate, advanced, expert)
- `url` (string)

## Deployment

### Frontend

The frontend can be deployed to any platform that supports Node.js:
- Vercel
- Netlify
- Cloudflare Pages
- AWS

### CMS

The Strapi CMS can be deployed to:
- Strapi Cloud
- DigitalOcean
- AWS
- Any VPS with Node.js and PostgreSQL

## License

MIT
