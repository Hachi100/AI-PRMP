# PRMP-Pro — Plateforme Intelligente de Gestion des Marchés Publics (Bénin)

> **Usage exclusif PRMP · République du Bénin · DNCMP**
> Conformité : Code des Marchés Publics n°2020-26 · Documents types DNCMP version juin 2023
> Statut actuel : Phase 0 — initialisation du repo, aucun code existant.

---

## 1. Vision produit

PRMP-Pro est une plateforme web conçue **exclusivement** pour la Personne Responsable des Marchés Publics (PRMP) et ses équipes dans les ministères, EPIC, EPA et collectivités locales du Bénin. **Une instance = une entité adjudicatrice.**

Elle automatise l'intégralité du cycle de passation des marchés publics : planification (PTAB/PPM), choix et conduite des procédures, génération des actes officiels, évaluation des offres, suivi d'exécution et reddition de comptes.

**Principes fondateurs :**
- IA embarquée partout — chaque action répétitive, chaque vérification réglementaire, chaque rédaction est assistée par un agent IA spécialisé.
- L'utilisateur reste maître — l'IA propose, la PRMP valide. Aucun document n'est finalisé sans approbation humaine.
- Conformité garantie — le système ne peut pas générer un document non conforme au CMP sans alerte explicite.
- Apprentissage continu — la plateforme ingère les anciens documents de l'entité (RAG Entité) pour affiner le style et les clauses futures.
- Expérience bureautique native — **Mini Word** et **Mini Excel** intégrés au navigateur (lecture + édition sans installation).
- Mobile first & PWA — accessible smartphone/tablette avec notifications web push natives.

---

## 2. Stack technologique

### Frontend
- **Framework** : Next.js 14 (App Router) + TypeScript strict
- **UI** : Tailwind CSS + shadcn/ui
- **Éditeur Word intégré (Mini Word)** : TipTap (ProseMirror) + Mammoth.js (import/export .docx)
- **Éditeur Excel intégré (Mini Excel)** : Handsontable Community + SheetJS (xlsx) + Formulas.js
- **État global** : Zustand
- **Serveur state** : TanStack Query (React Query)
- **Formulaires** : React Hook Form + Zod
- **PWA** : next-pwa (Service Worker, manifest, offline)
- **Notifications push** : Web Push API + VAPID keys

### Backend
- **API** : FastAPI (Python 3.11+) + Uvicorn
- **ORM** : SQLAlchemy 2.0 async + Alembic (migrations)
- **Auth** : Supabase Auth (JWT) + middleware FastAPI + RLS PostgreSQL
- **Tâches async** : Celery + Redis (ingestion docs, notifications, cron délais)
- **Export PDF** : Puppeteer (serveur) via pyppeteer ou WeasyPrint
- **Notifications** : Resend (email) + Twilio (SMS/WhatsApp) + Web Push

### IA & RAG
- **LLM** : Claude Sonnet (`claude-sonnet-4-5`) via Anthropic Python SDK — streaming SSE
- **Orchestration agents** : LangChain + LangGraph
- **Embeddings** : `text-embedding-3-small` (OpenAI) — dimension 1536
- **Base vectorielle** : pgvector (extension PostgreSQL via Supabase) — index IVFFlat cosinus
- **Chunking** : LangChain RecursiveCharacterTextSplitter (chunk_size=1000, overlap=200)
- **RAG à deux niveaux** :
  - `RAG_JURIDIQUE_GLOBAL` : corpus légal partagé, géré par Super Admin uniquement
  - `RAG_ENTITE` : anciens documents de l'entité, isolé par organisation via RLS

### Infrastructure
- **BDD** : Supabase (PostgreSQL 15 + pgvector + Storage + Auth + RLS)
- **Cache** : Redis (sessions, résultats RAG fréquents, queues Celery)
- **Stockage fichiers** : Supabase Storage (PDFs, DOCX, documents marchés)
- **Frontend** : Vercel
- **Backend** : Railway ou Render
- **CI/CD** : GitHub Actions

---

## 3. Profils utilisateurs et permissions

| Profil | Qui | Accès |
|--------|-----|-------|
| `SUPER_ADMIN` | DSI / prestataire technique | Total — configuration, comptes, seuils, RAG global |
| `PRMP` | PRMP + chargés de marchés | Opérationnel complet — création, génération, évaluation, suivi |
| `DG` | Directeur Général | Lecture + validation hiérarchique, approbation PPM, rapport évaluation |
| `CF` | Contrôleur Financier | Visa décomptes uniquement |
| `AUDITEUR` | Auditeur interne/externe, DNCMP | Lecture seule, export rapports |

> Le profil `Autres` est configurable par le Super Admin en sous-profils (DG, CF, Auditeur, DNCMP).

---

## 4. Modules fonctionnels

### Module M0 — Import PPM & Aiguillage automatique

**Import PTAB/PPM :**
- Formats : Excel (.xlsx, .xls), CSV, ODS, copier-coller SIGFIP
- Détection automatique des colonnes même si format non standard
- Deux onglets PPM : « Fournitures, travaux, services » (23 colonnes) + « Prestations Intellectuelles » (37 colonnes)
- Visualisation dans le Mini Excel avant import

**Structure PPM — Onglet Fournitures, Travaux & Services (23 colonnes) :**

| N° | Colonne | Description |
|----|---------|-------------|
| 1 | N° | Numéro d'ordre |
| 2 | Réf N° | Référence du marché |
| 3 | Description | Libellé du besoin |
| 4 | Type de marché (T, F et S) | Travaux, Fournitures ou Services |
| 5 | Mode de Passation | AOI, AON, AOR, DC, DRP, ED, Concours… |
| 6 | Montant Estimatif (FCFA) | Montant prévisionnel |
| 7 | Source de financement | BN, BA, FE, Don |
| 8 | Ligne d'imputation budgétaire | Code budgétaire |
| 9 | Organe de contrôle compétent | DNCMP, DDCMP, CCMP |
| 10 | Autorisation d'engagement | 1 (annuel) ou 3 (mensuel) |
| 11 | Date de réception du Dossier par l'Organe de contrôle | Envoi au contrôle |
| 12 | Date de réception de l'avis de non-objection de l'Organe de contrôle | Non-objection dossier |
| 13 | Date de l'avis de non-objection du PTF | Si applicable |
| 14 | Date de réception du dossier corrigé pour le BON À LANCER | Dossier final |
| 15 | Date d'autorisation du lancement du DAO | Autorisation interne |
| 16 | Date de publication de l'avis par la PRMP | Publication |
| 17 | Date d'ouverture des plis | Ouverture des offres |
| 18 | Date de réception des rapports d'évaluation par l'organe de contrôle | Transmission rapport |
| 19 | Date de réception de l'avis de non-objection de l'organe de contrôle | Non-objection post-éval. |
| 20 | Date de réception de l'avis de non-objection du PTF | PTF post-éval. |
| 21 | Date d'examen juridique du contrat par l'organe de contrôle | Contrôle du contrat |
| 22 | Date d'approbation du contrat | Approbation interne |
| 23 | Date de notification du contrat | Notification au titulaire |

**Structure PPM — Onglet Prestations Intellectuelles (37 colonnes) :**

| N° | Colonne | Description |
|----|---------|-------------|
| 1–3 | N°, Réf N°, Description | Idem F/T/S |
| 4 | Mode de Passation | AMI, AMII, DC, DRP |
| 5 | Méthode de sélection | SFQC, SPBP, SFBD, QT, CI, DP |
| 6–10 | Montant, Source, Imputation, Organe contrôle, Auth. engagement | Idem F/T/S |
| 11–15 | AMI : envoi organe → BAL | Dates jalons phase AMI |
| 16–17 | Publication AMI + ouverture plis AMI | — |
| 18–20 | Rapport AMI → non-objection organe + PTF | — |
| 21–25 | DP : envoi organe → BAL → autorisation lancement DP | Dates jalons phase DP |
| 26 | Date d'invitation à la soumission | — |
| 27 | Date d'ouverture des offres techniques | — |
| 28–30 | Rapport technique → non-objection organe + PTF | — |
| 31 | Date d'ouverture des offres financières | — |
| 32–34 | Rapport financier → non-objection organe + PTF | — |
| 35–37 | Examen juridique → Approbation → Notification contrat | — |

**Aiguillage automatique — Matrice de seuils COMPLÈTE (Décrets n°2020-599 et 2020-605) :**

#### Autorités contractantes hors communes sans statut particulier

| Type marché | Montant HT (FCFA) | Procédure | Contrôle a priori | Module |
|-------------|-------------------|-----------|-------------------|--------|
| Travaux | ≤ 4M | Comparaison factures | A posteriori | — |
| Travaux | > 4M – 10M | DC | A posteriori (CCMP) | M6 |
| Travaux | > 10M – 100M | DRP | CCMP | M6 |
| Travaux | 100M – 500M | Appel d'offres | CCMP | M1 |
| Travaux | ≥ 500M | Appel d'offres | DNCMP | M1 |
| Fournitures/Services | ≤ 4M | Comparaison factures | A posteriori | — |
| Fournitures/Services | > 4M – 10M | DC | A posteriori (CCMP) | M6 |
| Fournitures/Services | > 10M – 70M | DRP | CCMP | M6 |
| Fournitures/Services | 70M – 300M | Appel d'offres | CCMP | M2/M3 |
| Fournitures/Services | ≥ 300M | Appel d'offres | DNCMP | M2/M3 |
| PI cabinets | ≤ 4M | Comparaison factures | A posteriori | — |
| PI cabinets | > 4M – 10M | DC (SQC) | A posteriori | M6 |
| PI cabinets | > 10M – 50M | DRP (SFQC, SFQ, SMC…) | CCMP | M6 |
| PI cabinets | 50M – 200M | Sélection PI | CCMP | M5 |
| PI cabinets | ≥ 200M | Sélection PI | DNCMP | M5 |
| PI consultants ind. | ≤ 4M | Comparaison factures | A posteriori | — |
| PI consultants ind. | > 4M – 10M | DC (CI) | A posteriori | M6 |
| PI consultants ind. | > 10M – 20M | DRP | CCMP | M6 |
| PI consultants ind. | 20M – 100M | Sélection CI | CCMP | M5 |
| PI consultants ind. | ≥ 100M | Sélection CI | DNCMP | M5 |

#### Communes sans statut particulier

| Type marché | Montant HT (FCFA) | Procédure | Contrôle a priori | Module |
|-------------|-------------------|-----------|-------------------|--------|
| Travaux | ≤ 4M | Comparaison factures | A posteriori | — |
| Travaux | > 4M – 10M | DC | A posteriori | M6 |
| Travaux | > 10M – 35M | DRP | CCMP | M6 |
| Travaux | 35M – 150M | Appel d'offres | CCMP | M1 |
| Travaux | 150M – 300M | Appel d'offres | DDCMP | M1 |
| Travaux | ≥ 300M | Appel d'offres | DNCMP | M1 |
| Fournitures/Services | ≤ 4M | Comparaison factures | A posteriori | — |
| Fournitures/Services | > 4M – 10M | DC | A posteriori | M6 |
| Fournitures/Services | > 10M – 25M | DRP | CCMP | M6 |
| Fournitures/Services | 25M – 50M | Appel d'offres | CCMP | M2/M3 |
| Fournitures/Services | 50M – 150M | Appel d'offres | DDCMP | M2/M3 |
| Fournitures/Services | ≥ 150M | Appel d'offres | DNCMP | M2/M3 |
| PI cabinets | ≤ 4M | Comparaison factures | A posteriori | — |
| PI cabinets | > 4M – 10M | DC (SQC) | A posteriori | M6 |
| PI cabinets | > 10M – 20M | DRP | CCMP | M6 |
| PI cabinets | 20M – 50M | Sélection PI | CCMP | M5 |
| PI cabinets | 50M – 120M | Sélection PI | DDCMP | M5 |
| PI cabinets | ≥ 120M | Sélection PI | DNCMP | M5 |
| PI consultants ind. | ≤ 4M | Comparaison factures | A posteriori | — |
| PI consultants ind. | > 4M – 10M | DC (CI) | A posteriori | M6 |
| PI consultants ind. | > 10M – 15M | DRP | CCMP | M6 |
| PI consultants ind. | 15M – 30M | Sélection CI | CCMP | M5 |
| PI consultants ind. | 30M – 80M | Sélection CI | DDCMP | M5 |
| PI consultants ind. | ≥ 80M | Sélection CI | DNCMP | M5 |

> **Organes de contrôle a priori** : DNCMP (national) · DDCMP (Directions Départementales — communes à statut particulier et EPA sans délégué) · CCMP (Commission de Contrôle des Marchés Publics de l'entité). Les seuils sont **paramétrables** par le Super Admin.

#### Seuils de publication communautaire UEMOA

| Nature du marché | Collectivités territoriales / EP | Organismes publics / SN / SAPPM |
|-----------------|-----------------------------------|---------------------------------|
| Travaux | ≥ 1 000 000 000 FCFA | ≥ 1 500 000 000 FCFA |
| Fournitures/Services | Cf. directives UEMOA | Cf. directives UEMOA |

> Lorsque le seuil communautaire est atteint, l'avis doit également être publié sur le portail UEMOA. L'agent le détecte automatiquement et génère une version bilingue de l'AAO si nécessaire.

**Détection du fractionnement illégal :**
- Analyse sémantique par embeddings vectoriels (similarité cosinus entre libellés)
- Cumul des montants par famille d'achats sur la même période
- Niveaux d'alerte : FAIBLE · MOYEN · ÉLEVÉ · CRITIQUE
- Proposition de fusion avec justification réglementaire + export Word/PDF

### Modules de procédures (M1–M7)

| Module | Type de dossier | Procédures |
|--------|----------------|------------|
| M1 | DAO Travaux | AOO (AOOI/AOON), AOR (AORI/AORN), Préqualification |
| M2 | DAO Fournitures | AOO (AOOI/AOON), AOR, Préqualification |
| M3 | DAO Services | AOO (AOOI/AOON), AOR, Préqualification |
| M4 | Dossier de Préqualification (DTPQ) | Préqualification T/F/S |
| M5 | Prestations Intellectuelles (PI) | SFQC, SFQ, SMC, SCBD, SQC, CI, Concours |
| M6 | DRP / DC | DRP et DC pour T/F/S et PI (toutes tranches intermédiaires) |
| M7 | Entente Directe | Gré à gré — tous types (autorisation DNCMP obligatoire) |

**Glossaire des modes de passation :**
- **AOO** : Appel d'Offres Ouvert (AOOI = International, AOON = National)
- **AOR** : Appel d'Offres Restreint (liste restreinte de candidats présélectionnés)
- **DRP** : Demande de Renseignements et de Prix (procédure simplifiée, ≥ 3 candidats)
- **DC** : Demande de Cotation (procédure simplifiée, ≥ 3 cotations comparées)
- **ED** : Entente Directe / Gré à gré (exceptionnel, autorisation DNCMP obligatoire)
- **SFQC** : Sélection Fondée sur la Qualité et le Coût (pondération technique/financier)
- **SFQ** : Sélection Fondée sur la Qualité seule (technique prépondérant)
- **SMC** : Sélection au Moindre Coût (seuil technique minimal + moins-disant)
- **SCBD** : Sélection par Comparaison de Budgets Définis (budget fixé par l'AC)
- **SQC** : Sélection par Qualification du Consultant (missions simples, DC PI)
- **CI** : Consultant Individuel (missions courtes, CV + proposition technique)
- **Concours** : Procédure pour missions créatives (architecture, urbanisme) avec jury

### Structure DAO Travaux (M1) — Identifiants de champs (par clause, pas par page)

**Page de garde (G1–G9)** : type procédure, date lancement, identification travaux, numéro SIGMaP, source financement, année budgétaire, imputation, accord prêt PTF, mois élaboration.

**Avis AAO (A1–A18)** : nom projet, co-financeur, description travaux, capacité technique (A4) / financière (A5), délai exécution (A7), contacts PRMP (A8), site web, date mise à disposition DAO (A10), adresse retrait (A11), montant garantie soumission = 1% HT auto-calculé (A12), validité offres 90–120j (A13), date/heure limite dépôt ≥ 21j national / 30j international (A14), adresse dépôt (A15), date/heure ouverture plis (A16), adresse ouverture (A17), signataire PRMP (A18).

**DPAO (D1–D29)** : autorité contractante, lots, financement, préqualification, adresse éclaircissements (D6), visites site groupées (D7), réunion préparatoire (D8), variantes autorisées (D10), prix fermes/révisables (D13), monnaie FCFA (D14), garantie soumission = 1% auto (D16), nombre copies 1 original + 1 copie + 1 clé USB (D17), préférence communautaire max 15% (D24), préférence collectivités max 10% (D25), préférence MPME max 5% (D26).

**Critères qualification (Q1–Q13)** : antécédents (3–5 ans), CA annuel moyen (1 à 1,25× coût estimé annuel), groupements (25%/50% min), liquidités (2 mois facturation), expérience générale/spécifique, personnel clé (tableau postes/années), matériel (type/nombre min), plan de charge, lots multiples.

**CCAP (C1–C34)** : pénalités (1/2000ème/jour), garanties, avances, révision des prix, réception.

### Seuils et pourcentages réglementaires (appliqués automatiquement)

| Paramètre | Valeur T/S | Valeur F | Base légale |
|-----------|-----------|----------|-------------|
| Garantie de soumission | 1% du HT | 1% du HT | Art. 68 CMP — priorité loi |
| Sous-traitance max | 40% | 40% | Art. 101 CMP |
| Préférence communautaire UEMOA | Max 15% | Max 15% | Art. 75 CMP |
| Préférence collectivités locales | Max 10% | Max 10% | Art. 75 CMP |
| Préférence MPME | Max 5% | Max 5% | Art. 75 CMP (cumul max 20%) |
| Avance de démarrage | Max 20% | Max 30% | Art. 98 (T/S) / Art. 111 (F) — LOI prévaut |
| Garantie de bonne exécution | Max 5% | Max 5% | Art. 91 CMP |
| Retenue de garantie | Max 5% | Max 5% | Art. 95 CMP |
| Pénalité journalière | 1/2000ème | 1/2000ème | Pratique usuelle |
| Délai minimum dépôt (national) | 21 jours cal. | 21 jours cal. | CMP |
| Délai minimum dépôt (international) | 30 jours cal. | 30 jours cal. | CMP + UEMOA |

> **Règle de priorité absolue** : Lorsque le document type CCAG diverge de la loi, l'agent applique la loi et affiche un avertissement explicatif. Ex : CCAG Services prévoit 30% d'avance → Art. 98 limite à 20% pour les services → l'agent applique 20% et avertit.

---

## 5. Architecture des 8 agents IA (Claude Sonnet)

| Agent | Rôle | Déclenchement | Base RAG |
|-------|------|---------------|----------|
| `AgentJuristeMp` | Conseiller juridique permanent, conformité CMP | À la demande + automatique (étapes clés) | RAG Juridique Global |
| `AgentPtabAnalyzer` | Lecture et structuration du PTAB importé | À l'import d'un fichier PTAB | RAG Juridique Global |
| `AgentAntiFractionnement` | Détection des risques de fractionnement illégal | À la validation du PTAB, à la maj du PPM | RAG Juridique Global |
| `AgentRedacteur` | Génération de tous les documents officiels | À la demande sur chaque étape | RAG Juridique + RAG Entité |
| `AgentDelaiVigilant` | Calcul et surveillance des délais réglementaires | En continu (cron jobs) | RAG Juridique Global |
| `AgentEvaluateur` | Assistance à l'évaluation et rapport automatique | À l'ouverture des offres | RAG Entité (anciens rapports) |
| `AgentControleurExecution` | Vérification décomptes, garanties, pénalités | À la saisie de chaque décompte | RAG Entité + BPU marché |
| `AgentDashboard` | Synthèse narrative et alertes décisionnelles | Hebdomadaire + à la demande | Données base + RAG Juridique |

### Classe de base Python

```python
class BaseAgent:
    SYSTEM_PROMPT: str = ""

    def __init__(self, model: str = "claude-sonnet-4-5"):
        self.client = anthropic.AsyncAnthropic()
        self.model = model
        self.rag_juridique = RAGRetriever(index="juridique_global")
        self.rag_entite = RAGRetriever(index="entite")

    async def run(
        self,
        query: str,
        context: dict,
        use_entite_rag: bool = False,
    ) -> AsyncGenerator[str, None]:
        chunks = await self.rag_juridique.search(query, k=5)
        if use_entite_rag:
            chunks += await self.rag_entite.search(query, k=3, org_id=context["org_id"])
        messages = self.build_messages(query, chunks, context)
        async with self.client.messages.stream(
            model=self.model,
            max_tokens=4096,
            system=self.SYSTEM_PROMPT,
            messages=messages
        ) as s:
            async for text in s.text_stream:
                yield text
```

### System prompt — AgentJuristeMp

```
Tu es Maître PRMP-Lex, expert juridique spécialisé dans les marchés publics du Bénin.
Tu maîtrises le Code des Marchés Publics (CMP n°2020-26), le Manuel de Procédures DNCMP,
les décrets d'application et les circulaires.

Règles absolues :
- Cite TOUJOURS l'article précis du CMP ou du Manuel qui justifie ta réponse
- Termine TOUJOURS par un badge : [CONFORME] / [ATTENTION] / [NON CONFORME]
- Si tu n'es pas certain, dis-le et recommande de consulter la DNCMP
- Structure : [Analyse] → [Articles applicables] → [Recommandation] → [Niveau]
- Utilise uniquement les documents de ta base RAG
- Langue : français formel de l'administration béninoise
```

### Logique AgentRedacteur — Apprentissage entité

1. Chercher dans RAG Entité des documents similaires (même type, même mode)
2. Extraire les formulations spécifiques et le style de l'entité
3. Charger le template normatif DNCMP (sections fixes verrouillées)
4. Pré-remplir les sections variables depuis la BDD du marché
5. Identifier les champs restants → signaler `[À COMPLÉTER]`
6. Soumettre à AgentJuristeMp pour vérification de conformité
7. Retourner le document dans le Mini Word pour validation PRMP

---

## 6. Catalogue complet des documents générés

| Document | Mode(s) | Format |
|----------|---------|--------|
| Avis d'Appel d'Offres (AAO) | AOOI/AOON | Word + PDF |
| DAO complet AOO | AOOI/AOON | Word (.docx) |
| Lettre d'invitation AOR | AORI/AORN | Word |
| DAO Restreint AOR | AORI/AORN | Word (.docx) |
| Avis de Préqualification | PREQUAL | Word + PDF |
| DTPQ (Dossier Type de Préqualification) | PREQUAL | Word (.docx) |
| Rapport de préqualification + shortlist | PREQUAL | Word |
| Lettre de consultation (DC) | DC | Word |
| Bon de commande / Lettre de commande | DC / DRP | Word |
| Dossier DRP + lettre de consultation | DRP | Word |
| Rapport d'analyse comparative DRP | DRP | Word |
| Demande d'autorisation ED | ED | Word |
| PV de négociation | ED / SFQC / SFQ / CI | Word |
| Avis à Manifestation d'Intérêt (AMI) | SFQC/SFQ/SMC/SCBD | Word + PDF |
| Demande de Proposition (DP) | SFQC/SFQ/SMC/SCBD | Word (.docx) |
| Avis de Concours | CONCOURS | Word + PDF |
| Règlement du Concours | CONCOURS | Word |
| PV de délibération du jury | CONCOURS | Word |
| Palmarès du concours | CONCOURS | Word + PDF |
| Termes de Référence (TDR) | PI / CI | Word |
| Lettre de sollicitation CV | CI | Word |
| Grille comparative CV consultants | CI | Excel |
| Contrat consultant individuel | CI | Word |
| Avis concours / de résultats | Concours | Word + PDF |
| CCAP + CCTP | Tous AO | Word |
| Bordereau de Prix Unitaire (BPU) | Travaux/Fourn. AO | Excel |
| PV d'ouverture des plis | AOO/AOR/DRP/PI | Word |
| Grille d'évaluation administrative | Tous AO | Excel |
| Grille d'évaluation technique | Tous AO/PI | Excel |
| Grille d'évaluation financière | SFQC/SMC/AOO | Excel |
| Rapport d'évaluation complet | Tous modes | Word |
| Décision d'attribution | Tous modes | Word |
| Lettre de notification attributaire | Tous modes | Word |
| Lettres aux candidats non retenus | Tous modes | Word (par candidat) |
| Projet de contrat / marché | Tous modes | Word |
| Ordres de Service (démarrage, suspension, reprise) | Tous | Word |
| Avenant (limite 15% montant marché) | Tous | Word |
| Décompte provisoire / définitif | Travaux/Services | Excel + Word |
| PV de réception provisoire / levée réserves / définitive | Tous | Word |
| Rapport statistique PPM (trimestriel) | — | Excel + Word |
| Rapport annuel PRMP (format DNCMP) | — | Word + Excel |

---

## 7. Workflows complets par mode de passation

### 7.1 Workflow AOO — Appel d'Offres Ouvert (21 étapes)

> Applicable à M1 (Travaux), M2 (Fournitures), M3 (Services). AOOI = délais internationaux (30j dépôt), AOON = délais nationaux (21j dépôt).

| # | Étape | Délai | Documents générés | Agent IA |
|---|-------|-------|-------------------|----------|
| 1 | Décision de lancer la procédure | J0 | Note de lancement | Juriste (vérification seuils) |
| 2 | Élaboration DAO complet | J0–J15 | DAO (AAO + DPAO + IC + CCAP + CCTP + BPU + Formulaires) | Rédacteur + Juriste |
| 3 | Validation interne DAO | J15–J20 | Fiche de conformité [CONFORME/ATTENTION/NON CONFORME] | Juriste |
| 4 | Approbation DG + transmission organe contrôle | J20–J25 | Bordereau de transmission | — |
| 5 | Non-objection organe de contrôle (CCMP/DNCMP) | J25–J35 | — | Délai-Vigilant |
| 6 | Publication AAO (SIGMAP + presse + UEMOA si seuil atteint) | J35 | Avis AAO publié | Rédacteur |
| 7 | Questions/réponses soumissionnaires + addendas | J35–J65 (AOOI) / J35–J56 (AOON) | Addenda numérotés | Rédacteur |
| 8 | Réception & ouverture des plis — PV | Jour limite dépôt | PV ouverture des plis | Rédacteur (auto) |
| 9 | Évaluation administrative | J+5 | Tableau conformité administrative | Évaluateur |
| 10 | Évaluation technique | J+15 | Grille technique pondérée | Évaluateur |
| 11 | Évaluation financière + corrections arithmétiques | J+20 | Grille financière, détection offres anormalement basses | Évaluateur |
| 12 | Rapport d'évaluation complet | J+25 | Rapport d'évaluation Word | Évaluateur + Juriste |
| 13 | Transmission rapport à l'organe de contrôle | J+25 | Bordereau de transmission | Délai-Vigilant |
| 14 | Non-objection organe de contrôle sur rapport | J+35 | — | Délai-Vigilant |
| 15 | Publication résultats provisoires | J+35 | Avis résultats provisoires (SIGMAP) | Rédacteur |
| 16 | Délai de recours (10 jours ouvrables) | J+35 à J+45 | Accusé recours si applicable | Juriste |
| 17 | Décision d'attribution définitive | J+45 | Décision d'attribution | Rédacteur |
| 18 | Notification attributaire + lettres non retenus | J+48 | Lettre de notification + Lettres de rejet (par candidat) | Rédacteur |
| 19 | Examen juridique contrat par organe contrôle | J+50 | — | Délai-Vigilant |
| 20 | Signature contrat + approbation | J+55–J+70 | Contrat signé | Rédacteur |
| 21 | OS démarrage + publication attribution SIGMAP | J+70 | OS démarrage, publication SIGMAP | Rédacteur |

---

### 7.2 Workflow AOR — Appel d'Offres Restreint (14 étapes)

> Procédure avec liste restreinte de candidats présélectionnés (art. 34 CMP). Le DAO est envoyé uniquement aux candidats de la liste. Délai dépôt ≥ 21 jours.

| # | Étape | Délai | Documents générés | Agent IA |
|---|-------|-------|-------------------|----------|
| 1 | Décision de recourir à l'AOR + justification | J0 | Note de justification AOR (art. 34 CMP) | Juriste |
| 2 | Constitution de la liste restreinte (min. 3 candidats) | J0–J10 | Liste restreinte validée | Juriste |
| 3 | Élaboration DAO restreint | J0–J15 | DAO adapté AOR + lettre d'invitation | Rédacteur + Juriste |
| 4 | Validation interne + approbation DG | J15–J22 | — | Juriste |
| 5 | Non-objection organe de contrôle | J22–J32 | — | Délai-Vigilant |
| 6 | Envoi lettre d'invitation aux candidats retenus | J32 | Lettre d'invitation + DAO joint | Rédacteur |
| 7 | Délai de dépôt des offres (≥ 21 jours) | J32–J53 | — | Délai-Vigilant |
| 8 | Réception & ouverture plis — PV | J53 | PV ouverture | Rédacteur (auto) |
| 9 | Évaluation administrative, technique, financière | J53–J68 | Grilles d'évaluation | Évaluateur |
| 10 | Rapport d'évaluation | J68 | Rapport d'évaluation Word | Évaluateur + Juriste |
| 11 | Non-objection organe de contrôle | J68–J78 | — | Délai-Vigilant |
| 12 | Attribution + notification | J78–J83 | Décision d'attribution, lettres notification/rejet | Rédacteur |
| 13 | Examen juridique + approbation contrat | J83–J90 | Contrat | Rédacteur |
| 14 | Signature contrat + OS démarrage | J90–J100 | Contrat signé, OS démarrage | Rédacteur |

---

### 7.3 Workflow Préqualification — DTPQ (M4 — 12 étapes)

> Utilisé pour marchés complexes ou de grande envergure. Précède un AOO ou AOR et produit une liste de candidats qualifiés. La liste qualifiée alimente ensuite directement un AOR.

| # | Étape | Délai | Documents générés | Agent IA |
|---|-------|-------|-------------------|----------|
| 1 | Décision de préqualifier | J0 | Décision de lancement | Juriste |
| 2 | Élaboration DTPQ (Dossier Type de Préqualification) | J0–J10 | DTPQ complet | Rédacteur + Juriste |
| 3 | Validation interne + approbation DG | J10–J15 | — | Juriste |
| 4 | Non-objection organe de contrôle | J15–J25 | — | Délai-Vigilant |
| 5 | Publication Avis de Préqualification (SIGMAP + presse) | J25 | Avis de préqualification | Rédacteur |
| 6 | Délai de dépôt des dossiers (≥ 30 jours) | J25–J55 | — | Délai-Vigilant |
| 7 | Ouverture & vérification des dossiers — PV | J55 | PV ouverture | Rédacteur (auto) |
| 8 | Évaluation des candidatures (critères DTPQ) | J55–J70 | Grille évaluation qualifications | Évaluateur |
| 9 | Rapport de préqualification | J70 | Rapport préqualification | Évaluateur + Juriste |
| 10 | Non-objection organe de contrôle | J70–J80 | — | Délai-Vigilant |
| 11 | Publication résultats + lettres aux candidats | J80 | Liste qualifiés publiée, lettres résultats | Rédacteur |
| 12 | Délai de recours (10 jours) + constitution liste AOR | J80–J90 | — | Juriste |
| → | **Suite** : lancement AOR avec liste restreinte qualifiée | J90+ | — | — |

---

### 7.4 Workflow DRP — Demande de Renseignements et de Prix (8 étapes)

> Applicable pour T/F/S entre >10M et seuil AO, PI cabinets >10M–50M hors communes (>10M–35M communes), PI consultants ind. >10M–20M hors communes (>10M–15M communes). Contrôle a priori CCMP. Minimum 3 candidats.

| # | Étape | Délai | Documents générés | Agent IA |
|---|-------|-------|-------------------|----------|
| 1 | Décision de lancer + validation seuil DRP | J0 | Fiche de lancement DRP | Juriste (vérification seuil) |
| 2 | Élaboration Dossier DRP (lettre + TDR ou devis descriptif) | J0–J5 | Dossier DRP complet | Rédacteur + Juriste |
| 3 | Sélection des candidats à consulter (min. 3) | J5 | Liste des candidats consultés | Juriste |
| 4 | Envoi Dossier DRP aux candidats | J5 | Lettres de consultation DRP | Rédacteur |
| 5 | Délai de remise des propositions (≥ 10 jours) | J5–J15 | — | Délai-Vigilant |
| 6 | Ouverture et dépouillement des offres — PV | J15 | PV d'ouverture + tableau comparatif | Rédacteur (auto) |
| 7 | Rapport d'analyse + non-objection CCMP | J15–J22 | Rapport d'analyse comparative | Évaluateur + Juriste |
| 8 | Attribution + notification + contrat | J22–J28 | Décision d'attribution, lettre notification, bon de commande / contrat | Rédacteur |

---

### 7.5 Workflow DC — Demande de Cotation (7 étapes)

> Applicable pour T/F/S entre >4M et ≤10M, et PI entre >4M et ≤10M (toutes AC). Contrôle a posteriori (CCMP vérifie après exécution). Minimum 3 cotations comparées.

| # | Étape | Délai | Documents générés | Agent IA |
|---|-------|-------|-------------------|----------|
| 1 | Décision de lancer + validation seuil DC | J0 | — | Juriste (vérification seuil) |
| 2 | Élaboration Lettre de cotation (description besoin + critères) | J0–J3 | Lettre de cotation | Rédacteur |
| 3 | Consultation d'au moins 3 fournisseurs / prestataires | J3 | Lettres de demande de cotation | Rédacteur |
| 4 | Délai de remise des cotations (≥ 7 jours) | J3–J10 | — | Délai-Vigilant |
| 5 | Dépouillement des cotations — tableau comparatif | J10 | Tableau comparatif des cotations | Évaluateur (auto) |
| 6 | Choix du moins-disant conforme | J10–J12 | Décision de choix motivée | Juriste |
| 7 | Bon de commande / lettre de commande + notification | J12–J15 | Bon de commande ou contrat simplifié | Rédacteur |

> ⚠ La DC n'exige pas de rapport formel ni de non-objection a priori, mais le dossier complet (cotations + tableau comparatif + bon de commande) est archivé pour le contrôle a posteriori du CCMP.

---

### 7.6 Workflow Entente Directe — ED (M7 — 6 étapes)

> Procédure exceptionnelle. Autorisée uniquement dans les cas limitatifs de l'art. 36 CMP (urgence impérieuse, secret défense, prestataire unique, reconduction). Autorisation préalable DNCMP **obligatoire**.

| # | Étape | Délai | Documents générés | Agent IA |
|---|-------|-------|-------------------|----------|
| 1 | Justification du recours à l'ED (cas légal art. 36 CMP précis) | J0 | Note de justification ED | Juriste (citation art. 36 obligatoire) |
| 2 | Demande d'autorisation à la DNCMP | J0–J3 | Demande d'autorisation ED | Rédacteur |
| 3 | Obtention de l'autorisation DNCMP | J3–J15 | — (délai DNCMP) | Délai-Vigilant |
| 4 | Négociation avec le prestataire désigné | J15–J25 | Procès-verbal de négociation | Rédacteur |
| 5 | Élaboration et examen juridique du contrat | J25–J35 | Contrat négocié | Rédacteur + Juriste |
| 6 | Approbation + signature + OS de démarrage | J35–J45 | Contrat signé, OS démarrage | Rédacteur |

> ⚠ **Blocage automatique** : si un utilisateur tente de créer une ED sans sélectionner un cas légal valide de l'art. 36, l'agent affiche [NON CONFORME] et bloque la génération du dossier jusqu'à justification conforme.

---

### 7.7 Workflow PI Cabinets — SFQC / SFQ / SMC / SCBD (M5 — 16 étapes)

> Applicable pour PI cabinets au-dessus des seuils AO. La méthode de sélection est choisie par l'AC selon la nature de la mission (deux enveloppes : technique puis financière).

| # | Étape | Délai | Documents générés | Agent IA |
|---|-------|-------|-------------------|----------|
| 1 | Choix de la méthode de sélection + validation | J0 | Note de choix de méthode | Juriste |
| 2 | Élaboration TDR (Termes de Référence) | J0–J10 | TDR complet | Rédacteur + Juriste |
| 3 | Élaboration de l'AMI (Avis à Manifestation d'Intérêt) | J10 | AMI complet | Rédacteur |
| 4 | Non-objection organe de contrôle sur AMI | J10–J20 | — | Délai-Vigilant |
| 5 | Publication AMI (SIGMAP + presse) | J20 | AMI publié | Rédacteur |
| 6 | Délai de réception des manifestations (≥ 21 jours) | J20–J41 | — | Délai-Vigilant |
| 7 | Ouverture + évaluation des manifestations — shortlist (6 firmes max) | J41–J55 | PV ouverture, rapport AMI, shortlist | Évaluateur + Juriste |
| 8 | Non-objection organe de contrôle sur shortlist | J55–J65 | — | Délai-Vigilant |
| 9 | Élaboration et envoi de la Demande de Proposition (DP) | J65 | DP complète (TDR + instructions + contrat-type) | Rédacteur |
| 10 | Délai de remise des propositions (≥ 30 jours) | J65–J95 | — | Délai-Vigilant |
| 11 | Ouverture & évaluation offres techniques (enveloppe 1) | J95–J110 | PV ouverture technique, grille technique | Évaluateur |
| 12 | Non-objection organe de contrôle sur éval. technique | J110–J120 | Rapport technique | Juriste |
| 13 | Ouverture offres financières des firmes qualifiées (enveloppe 2) | J120 | PV ouverture financière | Évaluateur (auto) |
| 14 | Évaluation combinée + classement final | J120–J130 | Grille financière + rapport final | Évaluateur + Juriste |
| 15 | Non-objection organe de contrôle sur rapport final | J130–J140 | — | Délai-Vigilant |
| 16 | Notification résultats provisoires + délai recours (10j) | J140–J150 | Avis résultats, lettres candidats | Rédacteur |
| 17 | Négociation avec la firme classée première | J150–J165 | PV de négociation | Rédacteur |
| 18 | Finalisation + signature contrat PI | J165–J180 | Contrat PI signé, OS de démarrage | Rédacteur |

**Spécificités par méthode :**

| Méthode | Logique de sélection | Note technique | Note financière |
|---------|---------------------|----------------|-----------------|
| **SFQC** | Score combiné pondéré | 70–80% | 20–30% |
| **SFQ** | Meilleure note technique → négociation budget | 100% | Négociée |
| **SMC** | Seuil technique min. (ex: 70/100) → moins-disant | Seuil requis | 100% parmi qualifiés |
| **SCBD** | Budget fixé par l'AC → meilleure proposition technique | 100% | Budget imposé |

---

### 7.8 Workflow CI — Consultant Individuel (M5 — 8 étapes)

> Pour missions courtes et spécialisées ne nécessitant pas une firme. Comparaison de CV + proposition technique simplifiée. Contrôle selon seuil (CCMP ou DNCMP).

| # | Étape | Délai | Documents générés | Agent IA |
|---|-------|-------|-------------------|----------|
| 1 | Définition du besoin + TDR simplifié | J0–J5 | TDR consultant individuel | Rédacteur + Juriste |
| 2 | Identification d'au moins 3 consultants (AMI ou base de données) | J5–J10 | Lettre de sollicitation CV | Rédacteur |
| 3 | Réception des CV + propositions techniques simplifiées | J10–J20 | — | Délai-Vigilant |
| 4 | Évaluation comparative des CV (grille critères) | J20–J25 | Grille comparative CV | Évaluateur |
| 5 | Rapport d'évaluation CI + non-objection organe contrôle | J25–J35 | Rapport d'évaluation CI | Juriste |
| 6 | Négociation avec le consultant retenu | J35–J40 | PV de négociation | Rédacteur |
| 7 | Signature contrat CI | J40–J45 | Contrat CI signé | Rédacteur |
| 8 | Ordre de service de démarrage | J45 | OS démarrage | Rédacteur |

---

### 7.9 Workflow Concours (M5 — 10 étapes)

> Procédure pour prestations créatives (architecture, urbanisme, design). Évaluation par un jury indépendant. Anonymat des propositions **obligatoire** tout au long du processus.

| # | Étape | Délai | Documents générés | Agent IA |
|---|-------|-------|-------------------|----------|
| 1 | Décision de recourir au concours + définition du programme | J0–J10 | Programme du concours | Juriste + Rédacteur |
| 2 | Composition du jury (min. 3 membres, ≥ 1/3 indépendants de l'AC) | J10 | Décision de composition du jury | Juriste |
| 3 | Élaboration du Règlement du Concours | J10–J20 | Règlement du concours | Rédacteur + Juriste |
| 4 | Non-objection organe de contrôle | J20–J30 | — | Délai-Vigilant |
| 5 | Publication de l'Avis de Concours (SIGMAP + presse) | J30 | Avis de concours publié | Rédacteur |
| 6 | Délai de réception des projets (≥ 30 jours) | J30–J60 | — | Délai-Vigilant |
| 7 | Ouverture anonyme des projets — PV (numérotation anonyme) | J60 | PV ouverture (projets numérotés) | Rédacteur (auto) |
| 8 | Délibération du jury (cotation critères du règlement) | J60–J75 | PV de délibération du jury | Rédacteur |
| 9 | Levée de l'anonymat + publication des résultats + palmarès | J75 | Palmarès du concours publié | Rédacteur |
| 10 | Négociation + signature contrat avec le lauréat | J75–J90 | PV de négociation, contrat signé, OS démarrage | Rédacteur |

---

## 8. Pipeline RAG

### Corpus — RAG Juridique Global

| Document | Priorité | Chunks estimés |
|----------|----------|----------------|
| Code des Marchés Publics n°2020-26 | CRITIQUE | ~800 |
| Manuel de Procédures DNCMP (complet) | CRITIQUE | ~600 |
| Décret fixant les seuils (n°2020-599, 2020-605) | CRITIQUE | ~80 |
| Textes d'application du CMP (décrets, arrêtés) | HAUTE | ~400 |
| Circulaires et notes de la DNCMP | HAUTE | ~300 |
| Guide d'évaluation des offres DNCMP | HAUTE | ~200 |
| Modèles standards DAO, contrats, TDR (DNCMP) | HAUTE | ~950 |
| Réglementation UEMOA marchés publics | MOYENNE | ~300 |
| Jurisprudence des recours (ARMP Bénin) | MOYENNE | ~200 |
| Loi de finances annuelle — nomenclature budgétaire | MOYENNE | ~150 |

### Schéma pgvector + RLS

```sql
CREATE TABLE document_chunks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    org_id UUID,                          -- NULL = RAG global, UUID = RAG entité
    document_id UUID REFERENCES documents(id),
    content TEXT NOT NULL,
    embedding vector(1536),               -- text-embedding-3-small
    metadata JSONB,                       -- source, reference, page, section, priorite
    rag_level VARCHAR(20) NOT NULL,       -- 'juridique_global' | 'entite'
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX ON document_chunks
USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);

ALTER TABLE document_chunks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "entite_isolation" ON document_chunks
    USING (org_id IS NULL OR org_id = current_setting('app.org_id')::UUID);
```

---

## 9. Modèle de données principal

```sql
-- Marchés
CREATE TABLE marches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    org_id UUID NOT NULL,
    reference VARCHAR(50) UNIQUE NOT NULL,        -- ex: MTFP/PRMP/2025/001
    objet TEXT NOT NULL,
    type_marche VARCHAR(20),                       -- TRAVAUX | FOURNITURES | SERVICES | PI
    mode_passation VARCHAR(30),                    -- AOOI|AOON|AORI|AORN|DRP|DC|ED|SFQC|SFQ|SMC|SCBD|SQC|CI|CONCOURS|PREQUAL
    statut VARCHAR(30),                            -- planifie | en_procedure | attribue | en_execution | cloture
    module VARCHAR(5),                             -- M1 à M7
    montant_estime DECIMAL(15,2),
    montant_attribue DECIMAL(15,2),
    organe_controle VARCHAR(10),                   -- DNCMP | DDCMP | CCMP
    source_financement TEXT,
    imputation_budgetaire TEXT,
    date_publication DATE,
    date_limite_offres TIMESTAMPTZ,
    prmp_id UUID REFERENCES utilisateurs(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Documents générés
CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    org_id UUID NOT NULL,
    marche_id UUID REFERENCES marches(id),
    type_document VARCHAR(50),
    version INTEGER DEFAULT 1,
    statut VARCHAR(20) DEFAULT 'brouillon',        -- brouillon | en_validation | valide | signe
    contenu_json JSONB,                            -- sections fixes + variables
    fichier_docx_url TEXT,
    fichier_pdf_url TEXT,
    genere_par_ia BOOLEAN DEFAULT TRUE,
    sections_fixes_hash TEXT,                      -- hash pour détecter modification illicite
    valide_par UUID REFERENCES utilisateurs(id),
    valide_le TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Offres
CREATE TABLE offres (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    marche_id UUID REFERENCES marches(id),
    soumissionnaire_nom TEXT NOT NULL,
    montant_offre DECIMAL(15,2),
    montant_offre_corrige DECIMAL(15,2),
    montant_avec_preference DECIMAL(15,2),
    score_technique DECIMAL(5,2),
    score_financier DECIMAL(5,2),
    score_total DECIMAL(5,2),
    statut VARCHAR(20),                            -- recu | conforme_admin | conforme_tech | retenu | rejete
    motif_rejet TEXT,
    est_anormalement_bas BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Garanties
CREATE TABLE garanties (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    marche_id UUID REFERENCES marches(id),
    type_garantie VARCHAR(30),                     -- SOUMISSION | BONNE_EXECUTION | RETENUE | AVANCE
    montant DECIMAL(15,2),
    date_expiration DATE,
    banque_caution TEXT,
    statut VARCHAR(20) DEFAULT 'active',
    alerte_j15_envoyee BOOLEAN DEFAULT FALSE,
    alerte_j30_envoyee BOOLEAN DEFAULT FALSE
);

-- Décomptes
CREATE TABLE decomptes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    marche_id UUID REFERENCES marches(id),
    numero INTEGER NOT NULL,
    type VARCHAR(20),                              -- PROVISOIRE | DEFINITIF
    montant_brut DECIMAL(15,2),
    retenue_garantie DECIMAL(15,2),
    remboursement_avance DECIMAL(15,2),
    penalites DECIMAL(15,2),
    montant_net DECIMAL(15,2),
    statut VARCHAR(20) DEFAULT 'en_saisie',        -- en_saisie | en_visa_cf | vise | paye
    vise_par UUID REFERENCES utilisateurs(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 10. Mini Word & Mini Excel

### Mini Word (TipTap + Mammoth.js)
- Rendu fidèle .docx dans le navigateur
- Sections fixes : verrouillées, modifiables par Super Admin uniquement lors d'une maj réglementaire
- Sections variables : éditables par PRMP (champs intelligents `[À COMPLÉTER]`)
- Suivi des modifications : PRMP en rouge, suggestions IA en bleu
- Commentaires collaboratifs persistés en base (non écrits dans le fichier)
- Export .docx + PDF Puppeteer côté serveur
- Autosave toutes les 30 secondes + historique des versions
- Comparaison côte à côte (v1 vs v2)

### Mini Excel (Handsontable + SheetJS)
- Rendu fidèle .xlsx, navigation multi-onglets
- Cellules verrouillées pour formules critiques (pondération, BPU, décomptes)
- Saisie des notes par membres de commission → calcul pondéré automatique
- Saisie quantités décompte → calcul net automatique (BPU pré-chargé)
- Mise en forme conditionnelle (rouge insuffisant, vert conforme)
- Export .xlsx natif + PDF

---

## 11. PWA & Notifications

| Canal | Technologie | Usage |
|-------|-------------|-------|
| Web Push (navigateur) | Web Push API + Service Worker + VAPID | Alertes temps réel |
| Email transactionnel | Resend API | Résumés, documents |
| SMS | Twilio / Vonage | Alertes urgentes si push non lu sous 1h |
| WhatsApp Business | WhatsApp Business API (Twilio) | Alertes CRITIQUES |
| Notification in-app | Badge, cloche interne | Toujours actif |

**Matrice alertes (exemples clés) :**
- Délai réglementaire J-0 → PRMP + DG → CRITIQUE → Push + Email + SMS + WhatsApp
- Alerte fractionnement → PRMP → HAUTE → Push + Email
- Garantie expirant J-15 → PRMP → MOYENNE → Push + Email
- Décompte en attente visa CF → CF → NORMALE → Push + Email

> Mode "Ne pas déranger" configurable avec bypass pour les alertes CRITIQUES. Accusé de réception obligatoire pour les alertes CRITIQUES.

---

## 12. Structure du projet

```
prmp-pro/
├── CLAUDE.md
├── README.md
├── .env.example
├── docker-compose.yml             # PostgreSQL+pgvector, Redis (dev local)
├── frontend/                      # Next.js 14
│   ├── app/
│   │   ├── (auth)/
│   │   └── (dashboard)/
│   │       ├── ppm/               # Module M0 — PPM/PTAB
│   │       ├── procedures/        # Modules M1–M7
│   │       │   └── [id]/          # Workflow d'une procédure
│   │       ├── documents/         # Mini Word
│   │       ├── evaluation/        # Grilles (Mini Excel)
│   │       ├── execution/         # Décomptes, garanties, réception
│   │       ├── juridique/         # Q&A Juriste IA
│   │       ├── reporting/         # Tableaux de bord, rapports
│   │       └── bibliotheque/      # RAG Entité — anciens documents
│   └── components/
│       ├── ui/                    # shadcn/ui
│       ├── mini-word/             # TipTap
│       ├── mini-excel/            # Handsontable
│       ├── agents/                # UI streaming SSE
│       └── notifications/         # Push, badge, cloche
├── backend/                       # FastAPI
│   ├── agents/                    # 8 agents Claude
│   │   ├── base.py
│   │   ├── juriste_mp.py
│   │   ├── ptab_analyzer.py
│   │   ├── anti_fractionnement.py
│   │   ├── redacteur.py
│   │   ├── delai_vigilant.py
│   │   ├── evaluateur.py
│   │   ├── controleur_execution.py
│   │   └── dashboard.py
│   ├── rag/                       # Pipeline RAG
│   │   ├── ingestion.py
│   │   ├── embeddings.py
│   │   ├── retriever.py           # Recherche pgvector + isolation RLS
│   │   └── pipeline.py
│   ├── api/                       # Routers FastAPI
│   ├── models/                    # SQLAlchemy ORM
│   ├── services/                  # Logique métier
│   └── tasks/                     # Celery (délais, rapports, ingestion)
├── corpus/                        # Docs légaux (ne pas commiter les PDFs réels)
│   ├── textes_legaux/
│   ├── manuels/
│   └── documents_types/
├── scripts/
│   ├── ingest_juridique.py        # Ingestion initiale corpus légal
│   └── seed_db.py
└── alembic/                       # Migrations BDD
```

---

## 13. Conventions et règles critiques

### Code
- Python 3.11+, type hints partout, async/await systématique
- Toujours streamer les réponses Claude via SSE (jamais d'attente 30s sans feedback)
- `'fr-FR'` locale par défaut, `Africa/Porto-Novo` (UTC+1)
- Montants FCFA : `Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' })`

### Règles produit non négociables
1. **Bandeau obligatoire** : tout document généré par IA affiche `⚠ Document généré par IA — validation PRMP requise avant utilisation officielle`.
2. **Sources obligatoires** : chaque réponse d'agent juridique cite l'article/décret exact. Ne jamais affirmer sans référence.
3. **RLS partout** : toutes les tables multi-entités ont Row Level Security activé via `app.org_id`. Les documents d'un ministère ne sont jamais accessibles à une autre entité.
4. **Sections fixes verrouillées** : le frontend bloque l'édition des sections normalisées DNCMP. Hash serveur pour détecter toute tentative de contournement.
5. **Juriste avant génération** : AgentJuristeMp valide chaque document avant de le remettre à la PRMP. Badge [CONFORME] / [ATTENTION] / [NON CONFORME] obligatoire.
6. **Loi > Document type** : en cas de divergence, la loi prévaut systématiquement, avec avertissement affiché à l'utilisateur.

---

## 14. Variables d'environnement

```bash
# Anthropic
ANTHROPIC_API_KEY=sk-ant-...

# Supabase
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

# OpenAI (embeddings)
OPENAI_API_KEY=sk-...

# Redis (Celery)
REDIS_URL=redis://localhost:6379

# Notifications
RESEND_API_KEY=re_...
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886

# Web Push (VAPID)
VAPID_PUBLIC_KEY=...
VAPID_PRIVATE_KEY=...
VAPID_SUBJECT=mailto:admin@prmp-pro.bj

# App
SECRET_KEY=...
ENVIRONMENT=development
APP_ORG_ID=...        # UUID entité adjudicatrice (injecté par middleware)
```

---

## 15. Phases de développement

### Phase 1 — Pipeline RAG + Agent Juriste (PRIORITÉ ABSOLUE)
- [ ] Setup Supabase (PostgreSQL + pgvector + Storage + Auth + RLS)
- [ ] `docker-compose.yml` local
- [ ] Script `ingest_juridique.py` : PDF/DOCX → chunking → embeddings → pgvector
- [ ] `RAGRetriever` avec isolation RLS
- [ ] `AgentJuristeMp` + streaming SSE
- [ ] Endpoint FastAPI `POST /api/agents/juriste` (SSE)
- [ ] Interface Next.js : chat juridique avec sources citées
- **Livrable** : Q&A sur le CMP avec citation article exact.

### Phase 2 — Génération de documents (Mini Word)
- [ ] Modèles SQLAlchemy `Marche` + `Document` + CRUD
- [ ] `AgentRedacteur` avec templates DAO et RAG Entité
- [ ] Génération .docx (python-docx backend)
- [ ] Composant `MiniWord` (TipTap + import/export .docx)
- [ ] `AgentAntiFractionnement` sur import PTAB
- [ ] Export PDF via Puppeteer
- **Livrable** : DAO Travaux complet généré et éditable dans le navigateur.

### Phase 3 — Workflow complet + Évaluation
- [ ] Machine à états (statuts marché) + `AgentDelaiVigilant` (cron)
- [ ] Module M0 complet (import PPM, aiguillage automatique, détection fractionnement)
- [ ] `AgentEvaluateur` + `MiniExcel` grilles pondérées
- [ ] Saisie offres + corrections arithmétiques + détection anormalement bas
- [ ] Rapport d'évaluation automatique
- **Livrable** : Cycle complet d'un AOO de A à Z.

### Phase 4 — Exécution, PWA, Notifications
- [ ] Décomptes + visa CF + `AgentControleurExecution`
- [ ] Gestion garanties + alertes automatiques
- [ ] PV réception provisoire/définitive
- [ ] PWA (next-pwa) + Web Push + SMS/WhatsApp (Twilio)
- [ ] `AgentDashboard` + tableaux de bord PRMP/DG
- [ ] Rapports automatiques DNCMP (mensuel, trimestriel, annuel)
- **Livrable** : Plateforme complète prête pour pilote.

---

## 16. Références

- **DNCMP Bénin** : https://www.dncmp.bj
- **ARMP Bénin** : https://www.armp.bj
- **Loi n°2020-26** du 29 septembre 2020 · Décrets n°2020-599, 2020-602, 2020-605
- **Anthropic API** : https://docs.anthropic.com
- **LangChain** : https://python.langchain.com
- **Supabase pgvector** : https://supabase.com/docs/guides/ai/vector-columns
- **TipTap** : https://tiptap.dev · **Handsontable** : https://handsontable.com · **SheetJS** : https://sheetjs.com

---

*Généré depuis : Cahier_de_charges_v2.docx + PRMP_Pro_CDC_v3.docx + Seuils_de_Passation_des_marchés_publics.docx + Structure_PPM.docx — Avril 2026*
