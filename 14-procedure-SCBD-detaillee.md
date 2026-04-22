---
procedure: "Sélection dans le Cadre d'un Budget Déterminé (SCBD)"
code: "SCBD"
famille: "Prestations Intellectuelles (PI)"
source: "Manuel ARMP Bénin, juin 2023, §3.2.1.4, pp. 135-137"
base_legale: "Loi n°2020-26 du 29/09/2020 article 37 point 1(b) ; Décret n°2020-602 (documents-types) ; Décret n°2020-600 (délais) ; Décret n°2020-599 (seuils)"
nb_etapes: 21
categorie: "Méthode PI dérivée de la SFQC — attribution à la meilleure proposition technique sous contrainte budgétaire"
cible: "Cabinets d'études et firmes pour missions simples à budget pré-défini"
procedure_parente: "SFQC (§3.2.1.1) — identique à 95% avec substitution du critère d'attribution"
---

# Procédure SCBD — Sélection dans le Cadre d'un Budget Déterminé

## ⚠️ Avertissement : procédure dérivée de la SFQC

Comme la SFQ et la SMC, la SCBD est une **variante de la SFQC**. **95 % des règles procédurales sont identiques** — la différence fondamentale se joue à nouveau sur **le critère d'attribution** : on retient la **meilleure proposition technique parmi celles qui rentrent dans le budget pré-défini**.

**Règle de lecture** : cette fiche doit être lue **en parallèle avec la fiche SFQC (n° 11)**. Toute étape non détaillée ici est **strictement identique à la SFQC**. Seules les différences sont documentées.

## Principe

> **La SCBD consiste à mettre en concurrence des consultants figurant sur une liste restreinte élaborée à la suite d'une demande de manifestation d'intérêt en fixant une note technique minimale de qualification et en invitant les consultants à soumettre leurs propositions techniques et financières sous deux enveloppes cachetées distinctes placées dans une troisième enveloppe. Les propositions techniques sont ouvertes en premier lieu et sont évaluées. Les propositions techniques qui n'obtiennent pas une note au moins égale à la note technique minimale de qualification requise sont éliminées et les propositions financières des consultants restants sont retenues pour être ouvertes en séance publique après invitation à l'ouverture des Consultants concernés. La proposition financière qui rentre dans le budget déterminé ou approche étroitement le budget déterminé et dont la proposition technique a obtenu la note la plus élevée est retenue et le Consultant sera invité à la négociation du contrat.**

### Base légale

**Article 37, point 1(b) de la loi n°2020-26** du 29 septembre 2020 portant code des marchés publics en République du Bénin.

### Règle centrale

> **« Aucune pondération n'est effectuée entre les notes techniques et les notes financières. »**

### Le mécanisme en quatre temps

1. **Fixation du budget déterminé** dans la DP (étape amont critique)
2. **Filtre technique** : élimination des candidats n'atteignant pas la note minimum
3. **Filtre budgétaire** : identification des propositions qui **rentrent dans le budget ou l'approchent étroitement**
4. **Attribution sur qualité** : parmi les propositions qui passent les deux filtres, celle avec **la note technique la plus élevée** est retenue

### Logique : inverse de la SMC

Mathématiquement, la SCBD est **l'inverse de la SMC** :

| Méthode | Formulation |
|---|---|
| **SMC** | `argmin(F) pour St ≥ St_min` — prix minimum sous contrainte de qualité |
| **SCBD** | `argmax(St) pour F ≤ Budget (± marge)` — qualité maximale sous contrainte de budget |

La SCBD est une logique **« le meilleur que je peux obtenir avec mon enveloppe »** :
- Le **budget est fixé en amont** (non négociable ou peu négociable)
- La **qualité est variable** — on prend la meilleure disponible dans l'enveloppe
- Le **prix final** n'est pas minimisé — il peut être proche du budget

### ⚠️ Ambiguïté textuelle du manuel : « étroitement » vs « strictement »

Le manuel utilise **deux adverbes différents** pour qualifier l'approche du budget :

| Passage du manuel | Formulation utilisée |
|---|---|
| Principe | « approche **étroitement** le budget déterminé » |
| Principales étapes | « approche **strictement** le budget » |
| Description de la procédure | « approche **strictement** le budget » |

**Ces deux adverbes n'ont pas exactement la même signification** :
- **Étroitement** = proche de, dans une marge raisonnable (peut être légèrement au-dessus ou en dessous)
- **Strictement** = dans la limite exacte, sans dépasser

**Interprétation recommandée** : la formulation la plus large (« étroitement ») l'emporte en pratique, car elle apparaît dans le **Principe** qui fait foi. Une marge de ± 5 à 10 % du budget semble raisonnable et conforme aux pratiques internationales.

**Implication pour le SaaS** : la **marge d'approximation du budget** doit être **définie explicitement dans la DP** pour éviter toute contestation. Par exemple : « Seront considérées comme rentrant dans le budget déterminé les propositions dont le montant ne dépasse pas [X] % du budget ».

### Différences fondamentales avec les 3 autres méthodes principales

| Dimension | SFQC | SFQ | SMC | **SCBD** |
|---|---|---|---|---|
| **Critère d'attribution** | Note combinée | Classement technique | Moins disant qualifié | **Meilleur technique sous budget** |
| **Formule** | argmax(S = St×T + Sf×P) | argmax(St) | argmin(F) pour St ≥ seuil | **argmax(St) pour F ≤ budget** |
| **Budget** | Indicatif (estimation) | Indicatif | Variable (compétition prix) | **FIXE (impératif)** |
| **Logique** | Équilibre qualité/prix | Qualité prime | Prix minimum sous qualité min | **Qualité max sous budget** |
| **Risque principal** | Contestation pondération | Suspicion favoritisme | OAB / prix plancher | **Offres alignées sur budget (effet de convergence)** |

## Champ d'application

### Principe du manuel

> **La méthode SCBD est utilisée dans le cadre de la sélection de consultants pour des missions simples qui peuvent être définies de manière précise et dont les budgets sont prédéfinis.**

### Les 2 conditions d'application

1. **Missions simples pouvant être définies de manière précise** → les TdR sont précis et la prestation attendue est claire
2. **Budget prédéfini** → l'enveloppe est fixée en amont et non modifiable (ou peu modifiable)

### D'où vient le « budget déterminé » ?

C'est la question structurante de la SCBD. Le budget peut provenir de plusieurs sources :

| Source du budget | Exemple |
|---|---|
| **Financement externe plafonné** | Don d'un bailleur avec enveloppe fixe (50M FCFA pour une étude) |
| **Crédit délégué** | Crédit de l'État transféré à une AC avec enveloppe précise |
| **Ligne budgétaire fixe** | Ligne 2-11 « Études » inscrite au budget pour un montant précis |
| **Décision politique** | L'AC décide de plafonner l'étude à un certain montant |
| **Accord de financement** | Convention avec partenaire financier fixant l'enveloppe |
| **Subvention ciblée** | Subvention d'une ONG ou fondation pour une étude spécifique |

Cette diversité de sources influence la rigidité du budget :
- **Très rigide** (financement externe, convention) : aucune négociation possible
- **Moyennement rigide** (décision politique) : marginalement négociable
- **Peu rigide** (estimation interne) : peut être révisé si insuffisant

### Exemples typiques au Bénin

| Type de mission | Contexte budgétaire |
|---|---|
| **Études financées par bailleurs** (BM, AFD, BAD, FED) | Enveloppe fixée par la convention de financement |
| **Études de réforme sur crédits délégués** | Budget exact issu du programme |
| **Évaluations à mi-parcours de projets** | Budget inscrit au document de projet |
| **Études sur subventions ciblées** (ONG, fondations) | Enveloppe de la subvention |
| **Audits de conformité réglementaire** | Budget fixé à la ligne budgétaire « audits » |
| **Études de faisabilité sur crédits sectoriels** | Budget programmé dans le PTA |
| **Missions d'appui ponctuel** avec enveloppe fixée par décret | Budget approuvé par texte |

### Exemples qui ne justifient PAS la SCBD

| Type de mission | Méthode recommandée | Pourquoi pas SCBD |
|---|---|---|
| Mission standard sans budget fixe | **SMC** | Pas de contrainte budgétaire stricte |
| Mission complexe avec budget ouvert | **SFQC** | La qualité doit être pondérée avec le coût |
| Mission hautement spécialisée | **SFQ** | Les approches varient trop pour un budget déterminé unique |

### Seuils applicables

Identiques à la SFQC (voir fiche SFQC §Champ d'application et décret 2020-599).

## Arbre de décision complet : SFQC / SFQ / SMC / SCBD

```
Question 1 : Mission de prestations intellectuelles ? 
  → OUI

Question 2 : Y a-t-il un budget impératif (financement externe, crédit délégué) ?
├─ OUI → Question 2a
└─ NON → Question 3

Question 2a : Les TdR peuvent-ils être précis (mission simple) ?
├─ OUI → SCBD (budget déterminé + qualité max)
└─ NON → SFQC (même avec budget à respecter, la comparaison pondérée reste utile)

Question 3 : La mission est-elle standard/courante avec pratiques établies ?
├─ NON → Question 4
└─ OUI → Question 3a

Question 3a : La qualité au-delà du minimum apporte-t-elle une valeur significative ?
├─ OUI → SFQC (pondération qualité/coût)
└─ NON → SMC (prix minimum sous contrainte qualité)

Question 4 : La mission est-elle hautement spécialisée ?
├─ OUI → SFQ
└─ NON → SFQC par défaut
```

### Règle de partage usuelle en volume

Estimation affinée (intégrant la SCBD) :

| Méthode | Part estimée des PI | Cas d'usage dominant |
|---|---|---|
| **SFQC** | 50-60 % | Missions standards à valeur intellectuelle variable |
| **SMC** | 25-30 % | Missions standards normalisées (audits, études techniques) |
| **SCBD** | **5-10 %** | Missions sur financements externes plafonnés |
| **SFQ** | 5-10 % | Missions hautement spécialisées |
| Autres (SQC, SCI, SED) | < 5 % | Cas particuliers |

La SCBD est **moins fréquente** que la SMC mais **plus importante en valeur unitaire** (souvent des études financées par bailleurs, avec des montants conséquents).

## Les 21 étapes : qu'est-ce qui change par rapport à la SFQC ?

### Vue d'ensemble des différences

| Étape | SFQC | SCBD |
|---|---|---|
| E1 — Rédaction des TdR | Idem | **Identique** (TdR précis) |
| E2 — Préparation et publication AMI | Idem | **Identique** |
| E3 — Réception/évaluation AMI + liste restreinte | Idem | **Identique** |
| E4 — Validation liste + notifications + recours | Idem | **Identique** |
| E5 — Préparation DP + invitations | Idem | **DP à adapter** : méthode SCBD + note min + **budget déterminé + marge d'approche** |
| E6 — Réception et ouverture propositions | 2 enveloppes (tech + fin scellée) | **Identique** (double enveloppe dans une 3ème) |
| E7 — Évaluation propositions techniques | Idem | **Identique** |
| E8 — Validation rapport technique par contrôle | Idem | **Identique** |
| E9 — Notification résultats technique | Idem | **Identique** |
| E10 — Délai d'attente (5-10 j) | Idem | **Identique** |
| E11 — Invitation ouverture financière | Tous qualifiés | **Identique** (tous qualifiés techniquement) |
| E12 — Ouverture publique + évaluation financière | Note Sf + formule combinée | **Vérification budget + sélection sur note technique max** |
| E13-E21 — Négociation, attribution, signature, etc. | Idem | **Identique** |

**Deux étapes modifiées** (E5, E12) et **19 étapes identiques** à la SFQC. Structure identique à la SMC.

---

## Détail des étapes modifiées

---

## E5 (modifiée) — Préparation de la DP : paramétrage SCBD

### Décisions à documenter dans la DP

L'AC doit **spécifier clairement** dans la DP :

| Élément | Indication dans la DP |
|---|---|
| **Méthode de sélection** | « La méthode de sélection utilisée est la Sélection dans le Cadre d'un Budget Déterminé (SCBD). » |
| **Critère d'attribution** | « Le marché sera attribué au consultant ayant obtenu la **note technique la plus élevée** parmi les consultants dont : (i) la note technique atteint au moins la note minimum de qualification ET (ii) le montant de la proposition financière rentre dans le budget déterminé ou l'approche étroitement. » |
| **Note technique minimum** | Valeur précise dans la **fourchette 60-75 points** |
| **Budget déterminé** | **Montant précis** en FCFA HT (critère fondamental) |
| **Marge d'approche du budget** | **Pourcentage précis** (recommandation : 5 à 10 %) — à expliciter pour lever l'ambiguïté « étroitement »/« strictement » |
| **Sort des offres hors budget** | Explicitation : « Les propositions dont le montant dépasse [budget + X %] seront écartées. » |

### Section "Données particulières" spécifique à la SCBD

Éléments à **adapter** par rapport à la SFQC :

| Élément | SFQC | SCBD |
|---|---|---|
| **Poids T / P** | Indication obligatoire | **Omettre** (pas applicable) |
| **Formule note financière (Sf)** | Indication de la formule | **Omettre** (pas applicable) |
| **Budget de référence** | Estimation indicative | **Budget déterminé + marge d'approche** |
| **Note technique minimum** | 60-75 (critère d'éligibilité à l'ouverture financière) | **60-75 (critère d'éligibilité à l'évaluation budgétaire)** |
| **Modalité d'attribution** | « Note combinée la plus élevée » | **« Note technique la plus élevée parmi les propositions dans le budget »** |

### Point crucial : publicité du budget déterminé

**Différence majeure avec toutes les autres méthodes** : en SCBD, le budget déterminé **doit être explicitement communiqué aux candidats** dans la DP. Ce n'est pas une estimation confidentielle, c'est **une contrainte affichée**.

**Conséquences attendues** :
- Les candidats **calibrent leurs offres** sur le budget affiché
- **Peu d'offres bien en dessous** du budget (les candidats n'ont pas intérêt à proposer un prix trop bas)
- **Peu d'offres très au-dessus** (elles seraient éliminées)
- **Risque de convergence des offres** autour du budget affiché

### Fixation de la note technique minimum

Comme en SMC, la note minimum est un paramètre structurant :

| Note min fixée | Conséquence |
|---|---|
| **60 points** | Large éligibilité → plus de candidats entrent dans le jeu → possiblement plus de qualité in fine |
| **75 points** | Qualification exigeante → peu de candidats entrent dans le jeu → risque de n'avoir personne dans le budget |

**Particularité SCBD** : avec un budget restrictif, une note min élevée peut créer une **double contrainte** difficile à satisfaire. Il faut ajuster la note min au niveau de qualité réellement disponible sur le marché pour le budget affiché.

### Implications pour l'Agent Rédacteur DP

Un **template SCBD distinct** doit être disponible, avec :
- Champ obligatoire « Budget déterminé »
- Champ obligatoire « Marge d'approche » (pourcentage)
- Alerte obligatoire sur la cohérence budget/qualité attendue
- Rappel du principe de publicité du budget
- Validation explicite par le PRMP avant génération

### Points de vigilance (Agent Juriste-Conformité PI)

| Risque | Contrôle |
|---|---|
| Budget déterminé non communiqué dans la DP | Blocage : obligation de publicité |
| Marge d'approche non définie | Alerte : ambiguïté « étroitement » à lever |
| Budget incohérent avec l'ampleur de la mission | Alerte : risque d'aucune offre conforme |
| Note technique minimum trop élevée | Alerte : risque de double contrainte insatisfiable |

---

## E12 (modifiée) — Ouverture et évaluation financière : sélection par qualité sous contrainte budgétaire

### Principe : identification de la meilleure proposition technique parmi celles dans le budget

Contrairement à la SFQC qui calcule une note combinée, et à la SMC qui identifie le moins disant, la SCBD applique **deux filtres successifs** :

**Filtre 1 — Budget** : on élimine les propositions dont le prix dépasse le budget déterminé + marge d'approche.

**Filtre 2 — Qualité technique** : parmi les propositions qui passent le filtre 1 et qui ont atteint la note technique minimum (filtre appliqué en amont en E7), on retient **celle avec la note technique la plus élevée**.

### Déroulement

#### 1. Ouverture publique

Identique à la SFQC et SMC :
- Séance publique
- Vérification des scellés intacts
- Présence du représentant de l'organe de contrôle
- Présence des consultants qui souhaitent assister

#### 2. Lecture à haute voix

Pour chaque proposition technique qualifiée, sont lus à haute voix :
- **Nom du consultant**
- **Score technique obtenu** (rappel)
- **Montant de la proposition financière**

**PV d'ouverture** signé par tous les membres + représentant contrôle.

#### 3. Corrections arithmétiques

**Règles identiques à la SFQC et SMC** :
- Montants partiels vs montant total → les premiers prévalent
- Lettres vs chiffres → les lettres prévalent
- Marché au temps passé vs forfaitaire → règles spécifiques

Les corrections aboutissent à un **prix corrigé** pour chaque proposition.

#### 4. Application des préférences

Les préférences s'appliquent comme en SFQC/SMC :
- **Préférence communautaire UEMOA** : jusqu'à 15 %
- **Préférence MPME** : selon DP
- **Préférence collectivités locales** : selon DP

**Attention en SCBD** : les préférences affectent le **prix comparatif** pour évaluer le respect du budget. Une proposition d'un cabinet UEMOA avec 15 % de préférence peut être considérée comme « rentrant dans le budget » même si son prix nominal le dépasse de quelques pour cents.

#### 5. Application du filtre budgétaire

Pour chaque proposition, vérifier si **Prix corrigé ≤ Budget déterminé + Marge**.

**Exemple** :
- Budget déterminé : 50 000 000 FCFA HT
- Marge d'approche : 10 %
- Seuil effectif : 55 000 000 FCFA HT

| Consultant | Prix proposé | Dans le budget ? |
|---|---|---|
| A | 48M | ✅ Oui |
| B | 52M | ✅ Oui |
| C | 54M | ✅ Oui (marge) |
| D | 56M | ❌ Non (dépasse marge) |
| E | 60M | ❌ Non |

#### 6. Identification de la meilleure proposition technique parmi les qualifiés budget

Parmi {A, B, C} (qui ont passé le filtre budget et ont tous atteint St_min) :

| Consultant | Note technique St | Dans le budget ? |
|---|---|---|
| A | 78 | ✅ |
| B | **85** | ✅ |
| C | 72 | ✅ |

→ **Attributaire provisoire : consultant B** (meilleure note technique parmi ceux qui passent les deux filtres).

### Cas particulier : aucune proposition ne rentre dans le budget

Le manuel **ne traite pas explicitement ce cas**. Deux interprétations possibles :

**Interprétation A (stricte)** : si aucune proposition ne rentre dans le budget, la procédure est **infructueuse** et doit être relancée (avec budget révisé ou TdR ajustés).

**Interprétation B (pragmatique)** : l'AC peut retenir la proposition qui **approche le plus étroitement** le budget (même si elle le dépasse légèrement) et négocier.

**Recommandation produit** : le SaaS doit déclencher une **alerte explicite** au PRMP dans ce cas et demander une décision documentée (relance ou retenue avec justification). **Ne jamais automatiser** cette décision.

### Cas particulier : une seule proposition rentre dans le budget

Dans ce cas, il n'y a pas de vraie compétition. L'attributaire est automatiquement identifié. Cela interroge sur :
- La **qualité** de la DP (budget trop restrictif ? note min trop élevée ?)
- La **pertinence** de la procédure (équivaut presque à une négociation directe)

**Recommandation produit** : alerte au PRMP si moins de 2 propositions passent les filtres. Documentation du choix obligatoire.

### Livrables

| Livrable | Format | Destinataire | Signature |
|---|---|---|---|
| **PV d'ouverture des propositions financières** | Document formel | Dossier + candidats | Tous les membres COE + représentant contrôle |
| **Tableau des prix corrigés + vérification budget** | Annexé au PV | – | – |
| **Rapport d'évaluation SCBD** | Document motivé | PRMP + organe de contrôle | COE |
| **Proposition d'attribution** (= meilleur St parmi les dans le budget) | Recommandation claire | PRMP | COE |

### Pas de « rapport d'évaluation combinée »

Comme en SMC, il n'y a pas de rapport combiné. On a :
- Le **rapport d'évaluation technique** (signé en E7)
- Le **rapport d'évaluation SCBD** (signé en E12) : combinaison filtre budget + classement technique
- Le **PV d'attribution provisoire** (à l'issue de E12)

### Délai

**2 jours après la date d'ouverture** des propositions financières (identique SFQC/SMC).

### Points de vigilance (Agent Juriste-Conformité PI + Agent Analyste Propositions Financières PI)

| Risque | Contrôle |
|---|---|
| Interprétation différente de « étroitement » par la COE | Vérification de la marge spécifiée dans la DP |
| Oubli des préférences | Vérification systématique |
| Aucune proposition dans le budget | Alerte + demande décision documentée |
| Une seule proposition dans le budget | Alerte + documentation du choix |
| Délibération COE pour écarter le meilleur technique qualifié | Interdit — attribution mécanique |

---

## E13 à E21 : identiques à la SFQC

Toutes les étapes suivantes sont **strictement identiques à la SFQC** : négociation, validation PV, notification, examen juridique, signature, approbation, authentification, enregistrement, notification définitive, entrée en vigueur, publication.

### Particularité de la négociation (E13) en SCBD

La **négociation financière** en SCBD est **très limitée** :
- **Le prix total ne peut pas être négocié à la baisse significativement** (l'attributaire a déjà proposé un prix quasi aligné sur le budget)
- **Le prix total ne peut pas être négocié à la hausse** (le budget déterminé reste la contrainte)
- En pratique, le prix est **pratiquement fixé** à celui de la proposition

La négociation **technique** reste pleinement possible :
- Ajustement de la méthodologie
- Personnel clé (à qualification équivalente)
- Calendrier
- Modalités de reporting

### Règle de cascade en cas de refus

Si l'attributaire :
- Refuse les négociations
- Ne confirme pas son personnel clé
- Propose des ajustements non conformes

→ passage au **2ème meilleur technique parmi les dans le budget** (après avis de l'organe).

**Règle de non-réouverture** : identique SFQC — une fois les négociations entamées avec le 2ème, impossible de revenir au 1er.

---

## Récapitulatif des délais SCBD

Les délais sont **identiques à la SFQC** pour toutes les étapes. Pas de délai spécifique supplémentaire.

**Durée totale estimée** : **~ 5-7 mois** (identique SFQC).

---

## Implications pour les agents IA

### Agents dont le rôle est adapté en SCBD

| Agent | Rôle en SFQC | Rôle en SCBD |
|---|---|---|
| **Agent Calcul Note Combinée** | Central (formule S) | **Non activé** |
| **Agent Analyste Propositions Financières PI** | Calcul Sf + comparaison | **Mode budgétaire** : vérification du respect du budget (+marge), identification des qualifiés budgétairement |
| **Agent Gestion Enveloppes Scellées** | Sécurise les enveloppes financières | **Identique** à la SFQC |

### Nouveau comportement de l'Agent Analyste Propositions Financières PI

Cet agent a maintenant **4 modes opérationnels** :

1. **Mode désactivé** (SFQ) : pas de comparaison financière
2. **Mode pondéré** (SFQC) : calcule Sf, applique formule combinée S
3. **Mode prix absolu** (SMC) : identifie le minimum des prix corrigés, contrôle OAB renforcé
4. **Mode budgétaire** (SCBD) : vérifie respect du budget + marge, identifie les qualifiés budgétaires

### Agents inchangés (identiques SFQC)

Tous les autres agents opèrent comme en SFQC :
- Agent Orientation Procédure (avec extension à la détection SCBD)
- Agent Rédacteur TdR, AMI, DP (template SCBD distinct)
- Agent Analyste Manifestations d'Intérêt
- Agent Analyste Propositions Techniques PI
- Agent Juriste-Conformité PI (6 validations)
- Agent Facilitateur Réunions + Négociateur
- Agent Suivi-Exécution
- Agent Gestion Enveloppes Scellées

### Nouveaux points de contrôle spécifiques SCBD

L'**Agent Juriste-Conformité PI** doit ajouter en SCBD :
1. Vérification du **choix documenté de la méthode SCBD** + justification (mission simple + budget prédéfini)
2. Vérification de la **publicité du budget déterminé** dans la DP
3. Vérification de la **définition explicite de la marge d'approche**
4. Vérification que **aucune proposition hors budget n'a été retenue** (ou justification documentée dans les cas exceptionnels)
5. Vérification de **la cohérence budget/qualité attendue**

### Pas de nouveaux sous-agents

Comme pour la SFQ et la SMC, la SCBD **réutilise les agents existants** en adaptant leur comportement. **Architecture inchangée : 31 agents IA**.

---

## Points d'attention stratégiques pour le SaaS

### 1. La SCBD est un cas d'usage bailleur-centric

La SCBD est **particulièrement utilisée pour les marchés financés par des bailleurs externes** (BM, AFD, BAD, UE, FED, etc.). Ces financements viennent avec des conventions de financement qui **fixent l'enveloppe de chaque étude**.

Cible produit particulière : **les agences d'exécution de projets** (PADES, projets BM, etc.) qui font beaucoup de SCBD. Ces structures ont des exigences précises (reporting aux bailleurs, traçabilité, conformité aux procédures bailleur).

**Opportunité** : un module « **SCBD Conformité Bailleurs** » qui génère automatiquement les rapports aux bailleurs (format standard BM, AFD, BAD) en plus des rapports ARMP.

### 2. L'effet de convergence des offres autour du budget

Puisque le budget est **affiché publiquement** dans la DP, les candidats calibrent leurs offres en fonction. On observe typiquement :
- Peu d'offres bien en dessous du budget (pas d'intérêt)
- Peu d'offres au-dessus de la marge (exclusion)
- **Concentration autour du budget affiché ± quelques %**

**Implication** : la **compétition se joue sur la qualité** plutôt que sur le prix en SCBD. Les candidats cherchent à **maximiser leur note technique** dans l'enveloppe budgétaire.

### 3. Le risque de sur-qualification

Un candidat peut proposer une Rolls Royce (expertise senior, méthodologie très élaborée, équipe renforcée) en ajustant son prix pour rentrer dans le budget. Cela peut sembler attractif mais :
- L'AC n'a peut-être pas besoin d'une Rolls Royce
- Le risque est que le consultant **sous-investisse en cours d'exécution** pour ramener les coûts au budget

**Contre-mesure** : les TdR doivent définir précisément le niveau d'expertise requis (pas seulement minimum, mais aussi maximum utile) pour que l'AC obtienne ce dont elle a besoin, pas plus.

### 4. La marge d'approche : paramètre structurant

La définition de la marge (5 %, 10 %, 15 %) détermine la flexibilité de la procédure :
- **Marge 5 %** : très stricte, peu d'offres conformes
- **Marge 10 %** : équilibre raisonnable (recommandation produit par défaut)
- **Marge 15 %** : large, beaucoup d'offres conformes mais le budget perd de son caractère « déterminé »

**Recommandation produit** : le SaaS doit proposer une **marge par défaut de 10 %** mais laisser le PRMP ajuster selon la nature de la mission (par exemple, une marge plus restrictive pour des études financées par des bailleurs avec contrainte stricte).

### 5. Détection précoce des procédures infructueuses

La SCBD est particulièrement sujette à être **infructueuse** (aucune offre dans le budget). Le SaaS doit :
- Alerter sur le **risque d'infructuosité** en amont (budget incohérent avec l'ampleur de la mission)
- Détecter l'**infructuosité effective** au moment de E12
- Proposer des **scénarios de rebond** : relance avec budget révisé, basculement vers autre méthode (SMC par exemple)

### 6. Pack PI Premium : SCBD complémentaire

La SCBD n'est pas un cas d'usage massif (5-10 % des PI), mais elle est **essentielle pour les AC travaillant avec des bailleurs**. Elle doit être dans le pack PI Premium comme fonctionnalité complète.

**Opportunité de tarification** : les marchés SCBD sont souvent **de gros montants** (études bailleurs), donc une tarification au marché peut être envisagée, ou une offre dédiée aux agences d'exécution de projets.

---

## Récapitulatif comparatif des 4 méthodes PI principales

| Dimension | SFQC | SFQ | SMC | **SCBD** |
|---|---|---|---|---|
| **Cas d'usage** | Missions standards à valeur variable | Missions hautement spécialisées | Missions standards normalisées | **Missions simples à budget fixe** |
| **Fréquence estimée** | 50-60 % des PI | 5-10 % | 25-30 % | **5-10 %** |
| **Critère d'attribution** | Note combinée S | Classement St | Min(F) qualifié | **Max(St) dans budget** |
| **Formule** | S = St×T + Sf×P | argmax(St) | argmin(F) pour St ≥ seuil | **argmax(St) pour F ≤ budget** |
| **Budget affiché** | Non | Non | Non | **OUI (publicité obligatoire)** |
| **Évaluation financière** | Comparative avec Sf | Une seule offre (1er classé) | Comparative (prix absolus) | **Filtre (respect budget)** |
| **Pondération T/P** | Oui | Non applicable | Non (aucune) | **Non (aucune)** |
| **Ouverture propositions financières** | Toutes qualifiées | Uniquement 1er classé | Toutes qualifiées | **Toutes qualifiées** |
| **Risque principal** | Contestation pondération | Suspicion favoritisme | OAB / prix plancher | **Infructuosité (aucune offre dans le budget)** |
| **Marge de négociation prix** | Limitée | Plus large | Quasi nulle (prix minimum) | **Quasi nulle (prix du budget)** |
| **Durée totale** | ~ 5-7 mois | ~ 5-6,5 / 5-7 mois | ~ 5-7 mois | **~ 5-7 mois** |
| **Cible bailleurs** | Oui (varié) | Rare | Oui (projets standards) | **Très forte** (conventions avec enveloppe) |

---

## État d'avancement après SCBD

| # | Procédure | Statut | Lignes |
|---|---|---|---|
| 1 | Corpus général | ✅ | 536 |
| 2-10 | Famille T/F/S complète | ✅ | 6 344 |
| 11 | SFQC | ✅ | 1 332 |
| 12 | SFQ | ✅ | 442 |
| 13 | SMC | ✅ | 541 |
| 14 | **SCBD** | ✅ | **~ 550 (estimé)** |

**Total : ~ 9 745 lignes** de corpus opérationnel.

### Méthodes PI restantes

| # | Procédure | Statut | Principe |
|---|---|---|---|
| 15 | **SQC** — Sélection sur Qualifications | À faire | Pas d'AMI, 3 cabinets consultés directement (procédure simplifiée) |
| 16 | **SCI** — Sélection Consultant Individuel | À faire | Personnes physiques uniquement |
| 17 | **SED** — Entente Directe PI | À faire | Renvoi au GaG avec adaptations |
| 18-20 | DRP-PI, DC-PI, pro forma PI | À faire | Adaptations des procédures simplifiées |

Les 4 méthodes principales de sélection par manifestation d'intérêt (SFQC, SFQ, SMC, SCBD) sont maintenant toutes couvertes. Les méthodes restantes sont structurellement différentes.

---

*Fin du document SCBD. Source : Manuel ARMP Bénin, juin 2023, §3.2.1.4, pages 135-137. Procédure dérivée de la SFQC (fiche 11) à laquelle cette fiche fait référence pour toutes les étapes non modifiées. Base légale : article 37, point 1(b) de la loi 2020-26.*
