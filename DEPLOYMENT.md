# Deployment Guide

## Monorepo Architecture

Ce projet utilise une approche hybride pour la gestion des paquets:
- **pnpm**: Pour `apps/web` (frontend) et `packages/shared-types` (types partagés)
- **npm**: Pour `apps/cms` (Strapi CMS) - requis pour le déploiement Strapi Cloud

## Local Development

### Démarrer tout le projet (frontend + CMS)
```bash
pnpm dev:all
```

### Démarrer uniquement le frontend
```bash
pnpm dev
```

### Démarrer uniquement le CMS
```bash
pnpm cms:dev
# ou
cd apps/cms && npm run dev
```

## Strapi Cloud Deployment

Le CMS Strapi est configuré pour être déployé sur Strapi Cloud avec npm.

### Prérequis
- Compte Strapi Cloud
- Git repository connecté à Strapi Cloud

### Configuration

1. **Variables d'environnement** dans Strapi Cloud:
```
HOST=0.0.0.0
PORT=1337
APP_KEYS=vos_clés_app
API_TOKEN_SALT=votre_salt
ADMIN_JWT_SECRET=votre_secret
TRANSFER_TOKEN_SALT=votre_salt
JWT_SECRET=votre_secret
ENCRYPTION_KEY=votre_clé
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
```

2. **Package Manager**: Sélectionner npm dans les settings Strapi Cloud

3. **Build Command**: `npm run build`

4. **Start Command**: `npm run start`

### Déploiement manuel

```bash
cd apps/cms
npm install
npm run build
# Le déploiement se fait automatiquement via Git
```

## Frontend Deployment

Le frontend utilise pnpm et peut être déployé sur Vercel, Netlify, ou n'importe quelle plateforme supportant Node.js.

### Variables d'environnement
```
VITE_STRAPI_URL=votre_url_strapi_cloud
VITE_STRAPI_API_TOKEN=votre_token_api
```

### Build
```bash
cd apps/web
pnpm install
pnpm build
```

## Workflow de développement

1. **Frontend**: Utiliser pnpm pour installer et gérer les dépendances
2. **Shared Types**: Utiliser pnpm (workspace)
3. **CMS**: Utiliser npm pour installer et gérer les dépendances

### Exemple de workflow

```bash
# Installer les dépendances frontend
pnpm install

# Installer les dépendances CMS
cd apps/cms && npm install

# Démarrer tout
cd ../.. && pnpm dev:all
```
