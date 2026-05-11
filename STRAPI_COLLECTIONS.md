# Strapi Collections for Portfolio

## Collections principales

### 1. Portfolio (Singleton)
Collection singleton pour les informations globales du portfolio.

**Champs:**
- `name` (text) - Nom complet
- `hero_title` (text) - Titre principal
- `hero_intro` (text) - Introduction
- `hero_role` (text) - Rôle (ex: "Fullstack Developer")
- `github_url` (text) - URL du repository GitHub
- `cv_file` (media) - Fichier CV PDF

---

### 2. Projects
Collection pour les projets du portfolio.

**Champs:**
- `title` (text) - Titre du projet
- `description` (richtext) - Description détaillée
- `image` (media) - Image du projet
- `github_url` (text) - URL du repository GitHub
- `live_url` (text) - URL de la démo en ligne
- `technologies` (relation avec Technologies) - Technologies utilisées
- `featured` (boolean) - Projet mis en avant
- `order` (number) - Ordre d'affichage
- `created_at` (datetime) - Date de création

---

### 3. Experience
Collection pour les expériences professionnelles.

**Champs:**
- `company` (text) - Nom de l'entreprise
- `position` (text) - Poste occupé
- `description` (richtext) - Description des responsabilités
- `start_date` (date) - Date de début
- `end_date` (date) - Date de fin
- `current` (boolean) - Poste actuel
- `order` (number) - Ordre d'affichage

---

### 4. Technologies
Collection pour les technologies/compétences techniques.

**Champs:**
- `name` (text) - Nom de la technologie
- `icon` (text) - Emoji ou SVG de l'icône
- `category` (enum) - Catégorie:
  - `frontend`
  - `backend`
  - `devops`
  - `tools`
- `order` (number) - Ordre d'affichage

---

### 5. Education
Collection pour la formation académique.

**Champs:**
- `institution` (text) - Nom de l'institution
- `degree` (text) - Diplôme obtenu
- `field_of_study` (text) - Domaine d'études
- `start_date` (date) - Date de début
- `end_date` (date) - Date de fin
- `description` (richtext) - Description

---

## Collections optionnelles

### 6. Certificates
Collection pour les certifications professionnelles.

**Champs:**
- `name` (text) - Nom de la certification
- `issuer` (text) - Organisme émetteur
- `issue_date` (date) - Date d'obtention
- `expiry_date` (date) - Date d'expiration
- `credential_url` (text) - URL du certificat
- `order` (number) - Ordre d'affichage

---

### 7. Testimonials
Collection pour les témoignages de clients/collègues.

**Champs:**
- `author_name` (text) - Nom de l'auteur
- `author_role` (text) - Rôle de l'auteur
- `author_company` (text) - Entreprise de l'auteur
- `content` (richtext) - Contenu du témoignage
- `avatar` (media) - Photo de l'auteur
- `order` (number) - Ordre d'affichage

---

### 8. Skills
Collection pour les compétences détaillées.

**Champs:**
- `name` (text) - Nom de la compétence
- `level` (enum) - Niveau:
  - `beginner`
  - `intermediate`
  - `advanced`
  - `expert`
- `category` (relation avec Technologies) - Catégorie
- `order` (number) - Ordre d'affichage

---

## Configuration i18n

Toutes les collections doivent avoir le plugin i18n activé pour supporter:
- Anglais (en) - langue par défaut
- Français (fr)

Activer le plugin dans Strapi Admin:
1. Settings → Internationalization
2. Activer "Enable localization for content types"
3. Sélectionner les collections à localiser

---

## Configuration des permissions

**Public API:**
- Portfolio: find, findOne
- Projects: find, findOne
- Experience: find, findOne
- Technologies: find, findOne
- Education: find, findOne
- Certificates: find, findOne
- Testimonials: find, findOne
- Skills: find, findOne

**Admin:**
- Full access pour le rôle admin
