---
procedure: "Sélection au Moindre Coût (SMC)"
code: "SMC"
famille: "Prestations Intellectuelles (PI)"
source: "Manuel ARMP Bénin, juin 2023, §3.2.1.3, pp. 135-136"
base_legale: "Loi n°2020-26 du 29/09/2020 ; Décret n°2020-602 (documents-types) ; Décret n°2020-600 (délais) ; Décret n°2020-599 (seuils)"
nb_etapes: 21
categorie: "Méthode PI dérivée de la SFQC — attribution au moins disant au-dessus d'une note technique minimum"
cible: "Cabinets d'études et firmes pour missions standards ou courantes (audits, études techniques non complexes)"
procedure_parente: "SFQC (§3.2.1.1) — identique à 95% avec modification de l'évaluation financière et du critère d'attribution"
---

# Procédure SMC — Sélection au Moindre Coût

## ⚠️ Avertissement : procédure dérivée de la SFQC

Comme la SFQ, la SMC est une **variante de la SFQC**. **95 % des règles procédurales sont identiques** — la différence fondamentale se joue sur **le critère d'attribution** : au lieu d'une note combinée pondérée (SFQC) ou d'un classement technique pur (SFQ), la SMC attribue au **moins disant parmi les qualifiés techniquement**.

**Règle de lecture** : cette fiche doit être lue **en parallèle avec la fiche SFQC (n° 11)**. Toute étape non détaillée ici est **strictement identique à la SFQC**. Seules les différences sont documentées.

## Principe

> **La SMC consiste à mettre en concurrence des consultants figurant sur une liste restreinte élaborée à la suite d'une demande de manifestation d'intérêt en fixant une note technique minimale de qualification et en invitant les consultants à soumettre leurs propositions techniques et financières sous deux enveloppes cachetées distinctes placées dans une troisième enveloppe. Les propositions techniques sont ouvertes en premier lieu et sont évaluées. Les propositions techniques qui n'obtiennent pas une note au moins égale à la note technique minimale de qualification requise fixée dans les Données particulières de la Demande de Propositions sont éliminées et les propositions financières des consultants restants sont retenues pour être ouvertes en séance publique après invitation à l'ouverture des Consultants concernés. La proposition financière évaluée au plus bas prix est automatiquement retenue et le Consultant sera invité à la négociation du contrat.**

### Règle centrale

> **« Aucune pondération n'est effectuée entre les notes techniques et les notes financières. »**

### Le mécanisme en trois temps

1. **Filtre technique** : on élimine les consultants qui n'atteignent pas la note technique minimum
2. **Comparaison financière** : on ouvre les propositions financières de tous les qualifiés techniquement
3. **Attribution au moins disant** : le consultant avec le **prix le plus bas** parmi les qualifiés est retenu

### Différences fondamentales avec la SFQC et la SFQ

| Dimension | SFQC | SFQ | **SMC** |
|---|---|---|---|
| **Critère d'attribution** | Note combinée pondérée | Classement technique | **Moins disant parmi qualifiés** |
| **Formule** | S = St × T% + Sf × P% | Rang St | **Min(F) pour St ≥ seuil** |
| **Évaluation financière** | Comparative (Sf calculée) | Une seule offre | **Comparative (prix absolus)** |
| **Pondération T/P** | Oui (dans DP) | Non | **Aucune** (pas de pondération) |
| **Note technique min** | Oui (60-75) | Oui (60-75) | **Oui (60-75) — critère déterminant de qualification** |
| **Logique** | Équilibre qualité/prix | Qualité prime | **Qualité atteinte + prix minimum** |
| **Ouverture propositions financières** | Publique, pour tous les qualifiés | Uniquement celle du 1er classé | **Publique, pour tous les qualifiés** |
| **Cas d'usage typique** | Missions standards avec variations qualité | Missions hautement spécialisées | **Missions standards normalisées** |

### La triple enveloppe : particularité procédurale

Le manuel précise un détail technique important : les propositions sont soumises **dans deux enveloppes cachetées distinctes placées dans une troisième enveloppe**. Ce système à 3 niveaux :
- **Enveloppe externe** : identification du candidat + nom du marché
- **Enveloppe interne 1** : proposition technique
- **Enveloppe interne 2** : proposition financière (scellée)

Cette précision, non reproduite explicitement pour la SFQC dans le manuel, vaut pour toutes les méthodes PI à double enveloppe (SFQC, SMC, SCBD).

### La logique "prix minimum sous contrainte technique"

Mathématiquement, la SMC peut s'écrire :

```
Attributaire = argmin(F_i) pour i ∈ {candidats qualifiés}
Où qualifiés = {candidats tels que St_i ≥ St_min}
Avec St_min = 60 à 75 points
```

C'est un problème d'optimisation sous contrainte : on cherche le **prix le plus bas**, **sous réserve que la qualité atteigne un niveau minimum acceptable**. La note technique n'est **pas un critère discriminant au-delà du seuil** — un consultant avec 75 points et un autre avec 95 points sont traités de la même manière si leurs notes sont toutes deux ≥ St_min.

## Champ d'application

### Principe du manuel

> **La méthode SMC est utilisée dans le cadre de la sélection de consultants pour des missions standards ou courantes (audits, préparation de dossiers techniques de travaux non complexes, etc.), pour lesquelles il existe des pratiques et des normes bien établies.**

### Les 2 conditions d'application

1. **Missions standards ou courantes** (activités récurrentes, bien connues)
2. **Pratiques et normes bien établies** (la qualité attendue est largement normalisée)

### Logique de la condition 2

Quand les pratiques sont normalisées, **tous les cabinets qualifiés produisent substantiellement la même qualité**. Au-delà d'un seuil minimum de qualification, la différence de valeur ajoutée entre un cabinet à 80 points et un autre à 95 points devient **marginale**. Dans ce cas, il est **économiquement rationnel** de choisir le moins cher.

### Exemples typiques au Bénin

Cas d'usage concrets qui justifient la SMC :

| Type de mission | Justification SMC |
|---|---|
| **Audit comptable annuel (Commissariat aux Comptes)** | Normes IFRS/OHADA strictes, méthodologie d'audit standardisée |
| **Audits de projets** (bailleurs, FED, Banque Mondiale) | Procédures d'audit définies par les bailleurs |
| **Études techniques de travaux courants** (bâtiments standards, voirie classique) | Normes techniques établies (BAEL, Eurocode, normes nationales) |
| **Traductions et services linguistiques** | Qualité normalisée, tarifs au mot standardisés |
| **Formations standards** (informatique bureautique, gestion de projet, langues) | Programmes largement similaires entre cabinets |
| **Cabinets de recrutement** pour postes techniques standards | Méthodes de sourcing et évaluation similaires |
| **Études de marché classiques** | Méthodologies quantitatives standards (échantillonnage, enquêtes) |
| **Services juridiques courants** (rédaction de contrats types, conseil fiscal standard) | Jurisprudence et pratiques établies |
| **Maintenance applicative niveau 1-2** | SLA et méthodes standardisées |
| **Audits qualité (ISO 9001, 14001)** | Normes ISO strictement encadrées |

### Exemples qui ne justifient PAS la SMC

Cas où la SMC est **inadaptée** — SFQC ou SFQ préférable :

| Type de mission | Méthode recommandée | Pourquoi pas SMC |
|---|---|---|
| Stratégie de transformation organisationnelle | SFQC ou SFQ | Valeur ajoutée intellectuelle variable selon le cabinet |
| Conception de SI complexe | SFQC ou SFQ | Approches techniques très différentes |
| Étude de faisabilité stratégique | SFQC | Qualité de l'analyse détermine la qualité de la décision |
| Audit de performance / diagnostic | SFQC | Profondeur de l'analyse varie selon le cabinet |
| Maîtrise d'œuvre sur ouvrage complexe | SFQC | La créativité et l'expérience spécifique comptent |

### Seuils applicables

Identiques à la SFQC (voir fiche SFQC §Champ d'application et décret 2020-599).

## Arbre de décision : choisir entre SFQC, SFQ et SMC

```
Question 1 : Mission de prestations intellectuelles ? 
  → OUI

Question 2 : La mission est-elle standard/courante avec pratiques établies ?
├─ NON → Question 3
└─ OUI → SMC peut être envisagée → Question 2bis

Question 2bis : La qualité au-delà du minimum apporte-t-elle une valeur significative ?
├─ OUI → SFQC (pondération qualité/coût pertinente)
└─ NON → SMC (prix minimum sous contrainte qualité)

Question 3 : La mission est-elle hautement spécialisée ?
├─ OUI (approches varient, TdR imprécis) → SFQ
└─ NON → SFQC par défaut
```

### Règle de partage usuelle en volume

En pratique internationale (avec des données réelles à confirmer pour le Bénin) :

| Méthode | Part estimée des PI | Cas d'usage dominant |
|---|---|---|
| **SFQC** | 50-60 % | Missions standards à haute valeur intellectuelle |
| **SMC** | 25-35 % | Audits récurrents, missions normalisées |
| **SFQ** | 5-10 % | Missions hautement spécialisées |
| **SCBD** | 5-10 % | Missions à budget contraint |
| Autres (SQC, SCI, SED) | < 5 % | Cas particuliers |

La **SMC est la 2ème méthode la plus utilisée**, ce qui en fait un cas d'usage important pour ton SaaS.

## Les 21 étapes : qu'est-ce qui change par rapport à la SFQC ?

### Vue d'ensemble des différences

| Étape | SFQC | SMC |
|---|---|---|
| E1 — Rédaction des TdR | Idem | **Identique** (TdR précis et normalisés, favorisés par les pratiques établies) |
| E2 — Préparation et publication AMI | Idem | **Identique** |
| E3 — Réception/évaluation AMI + liste restreinte | Idem | **Identique** |
| E4 — Validation liste + notifications + recours | Idem | **Identique** |
| E5 — Préparation DP + invitations | Idem | **DP à adapter** : indiquer méthode SMC + note technique minimum précise |
| E6 — Réception et ouverture propositions | 2 enveloppes (tech + fin scellée) | **Identique** (double enveloppe dans une 3ème) |
| E7 — Évaluation propositions techniques | Idem | **Identique** (grille 3 critères, note min 60-75) |
| E8 — Validation rapport technique par contrôle | Idem | **Identique** |
| E9 — Notification résultats technique | Idem | **Identique** |
| E10 — Délai d'attente (5-10 j) | Idem | **Identique** |
| E11 — Invitation ouverture financière | Tous qualifiés | **Identique** (tous qualifiés techniquement) |
| E12 — Ouverture publique + évaluation financière | **Note Sf + formule combinée** | **Prix absolus, identification du moins disant** |
| E13 — Négociation + projet de marché | Idem (avec 1er classé combiné) | **Identique** (mais avec le moins disant parmi qualifiés) |
| E14 — Validation PV d'attribution provisoire | Idem | **Identique** |
| E15 — Notification + délai d'attente (10 j) | Idem | **Identique** |
| E16 — Examen juridique et technique | Idem | **Identique** |
| E17 — Signature et approbation | Idem | **Identique** |
| E18 — Authentification DNCMP | Idem | **Identique** |
| E19 — Enregistrement | Idem | **Identique** |
| E20 — Notification attribution définitive | Idem | **Identique** |
| E21 — Entrée en vigueur | Idem | **Identique** |

**Deux étapes modifiées** (E5, E12) et **19 étapes identiques** à la SFQC.

---

## Détail des étapes modifiées

---

## E5 (modifiée) — Préparation de la DP : paramétrage SMC

### Décision à documenter dans la DP

L'AC doit **spécifier clairement** dans la DP :

| Élément | Indication dans la DP |
|---|---|
| **Méthode de sélection** | « La méthode de sélection utilisée est la Sélection au Moindre Coût (SMC). » |
| **Critère d'attribution** | « Le marché sera attribué au consultant ayant proposé le **prix le plus bas** parmi les consultants ayant obtenu une note technique au moins égale à la note minimum de qualification. » |
| **Note technique minimum** | Valeur précise dans la **fourchette 60-75 points** (critère fondamental) |

### Section "Données particulières" spécifique à la SMC

Éléments à **adapter** par rapport à la SFQC :

| Élément | SFQC | SMC |
|---|---|---|
| **Poids T / P** | Indication obligatoire | **Omettre** (pas applicable) |
| **Formule note financière (Sf)** | Indication de la formule | **Omettre** (pas applicable) |
| **Note technique minimum** | 60-75 (critère d'éligibilité à l'ouverture financière) | **60-75 (critère d'éligibilité ET seuil discriminant)** |
| **Modalité d'attribution** | « Note combinée la plus élevée » | **« Prix le plus bas parmi les qualifiés »** |
| **Traitement de l'OAB** | Application art. 81 loi 2020-26 | **Application art. 81 — critique en SMC** |

### Point crucial : fixation de la note technique minimum

En SMC, la note technique minimum **devient le critère de qualification déterminant**. C'est une décision structurante :

| Note min fixée | Conséquence |
|---|---|
| **60 points (bas de fourchette)** | Large éligibilité à la compétition financière → forte concurrence sur le prix → risque de prix planchers et de qualité juste au seuil |
| **65 points (milieu)** | Équilibre — compromis entre ouverture et qualité |
| **75 points (haut de fourchette)** | Qualification exigeante → moins de concurrence mais qualité assurée → possible absence de candidats qualifiés |

**Recommandation produit** : le SaaS doit aider le PRMP à choisir la note minimum en fonction de la nature de la mission et du niveau de normalisation. Un **calculateur d'impact** (simulation : combien de cabinets sont qualifiés à 60, 65, 70, 75 ?) serait pertinent.

### Implications pour l'Agent Rédacteur DP

Un **template SMC distinct** doit être disponible, avec :
- Adaptations ci-dessus
- Alerte obligatoire sur le choix de la note minimum
- Rappel du principe anti-OAB (art. 81 loi 2020-26)
- Validation explicite par le PRMP avant génération

---

## E12 (modifiée) — Ouverture et évaluation financière : attribution au moins disant

### Principe : identification du moins disant parmi les qualifiés

Contrairement à la SFQC qui calcule **Sf = 100 × Fm / F** et une note combinée, la SMC se contente d'identifier **le prix absolu le plus bas** parmi les propositions techniquement qualifiées.

### Déroulement

#### 1. Ouverture publique

Identique à la SFQC :
- Séance publique
- Vérification des scellés intacts
- Présence du représentant de l'organe de contrôle
- Présence des consultants qui souhaitent assister

#### 2. Lecture à haute voix

Pour chaque proposition technique qualifiée, sont lus à haute voix :
- **Nom du consultant**
- **Score technique obtenu** (rappel, pour information)
- **Montant de la proposition financière**

**PV d'ouverture** signé par tous les membres + représentant contrôle.

#### 3. Corrections arithmétiques

**Règles identiques à la SFQC** :
- Montants partiels vs montant total → les premiers prévalent
- Lettres vs chiffres → les lettres prévalent
- Marché au temps passé vs forfaitaire → règles de cohérence spécifiques

Les corrections aboutissent à un **prix corrigé** pour chaque proposition.

#### 4. Application des préférences

Les préférences s'appliquent comme en SFQC :
- **Préférence communautaire UEMOA** : jusqu'à 15 % (si prévue dans la DP)
- **Préférence MPME** : selon DP
- **Préférence collectivités locales** : selon DP

Les préférences sont appliquées au **prix comparatif** (pas au prix contractuel).

#### 5. Identification du moins disant

Le consultant avec le **prix corrigé le plus bas** (après application des préférences) est désigné **attributaire provisoire**.

> **« La proposition financière évaluée au plus bas prix est automatiquement retenue et le Consultant sera invité à la négociation du contrat. »**

Le mot **« automatiquement »** est important : il n'y a **pas de délibération** de la COE sur le choix. Le moins disant est désigné mécaniquement.

### Traitement de l'offre anormalement basse (OAB)

La SMC **augmente le risque d'OAB** car :
- Les consultants savent que le prix est le critère discriminant
- La course au prix bas peut pousser à des tarifs insoutenables
- Le risque de sous-exécution ou d'abandon en cours de mission augmente

L'article 81 de la loi 2020-26 reste **pleinement applicable** :
- Détermination d'un **montant référentiel M** en dessous duquel toute offre est présumée anormalement basse
- **Demande de justifications** au soumissionnaire concerné
- Possibilité de **rejet de l'offre** si les justifications sont insuffisantes

**Recommandation produit** : l'Agent Analyste Propositions Financières PI doit systématiquement contrôler les OAB en SMC. Un seuil de vigilance (ex. : prix < 70 % de l'estimation ou < 80 % du 2ème prix) peut déclencher une demande de justifications automatique.

### Livrables

| Livrable | Format | Destinataire | Signature |
|---|---|---|---|
| **PV d'ouverture des propositions financières** | Document formel | Dossier + candidats | Tous les membres COE + représentant contrôle |
| **Tableau comparatif des prix corrigés** | Annexé au PV | – | – |
| **Rapport d'évaluation financière** | Document motivé | PRMP + organe de contrôle | COE |
| **Proposition d'attribution** (= moins disant qualifié) | Recommandation claire | PRMP | COE |

### Pas de « rapport d'évaluation combinée »

Contrairement à la SFQC, il n'y a pas de rapport combiné (pas de formule S = St × T% + Sf × P%). On a :
- Le **rapport d'évaluation technique** (signé en E7)
- Le **rapport d'évaluation financière** (signé en E12)
- Le **PV d'attribution provisoire** (directement à l'issue de E12)

### Délai

**2 jours après la date d'ouverture** des propositions financières pour la rédaction du rapport d'évaluation (identique SFQC).

### Points de vigilance (Agent Juriste-Conformité PI + Agent Analyste Propositions Financières PI)

| Risque | Contrôle |
|---|---|
| Mauvais calcul des corrections arithmétiques | Application stricte des règles de priorité |
| Non-application des préférences | Vérification des préférences dans la DP |
| Oubli du contrôle OAB | Comparaison systématique prix/estimation et prix/autres offres |
| Délibération de la COE pour "écarter" le moins disant | Interdit — attribution automatique |
| Note technique minimum fixée trop bas | Alerte si St_min = 60 avec missions sensibles |

---

## E13 à E21 : identiques à la SFQC

Toutes les étapes suivantes sont **strictement identiques à la SFQC** :
- Négociation avec l'attributaire provisoire
- Validation du PV par l'organe
- Notification + délais d'attente
- Signature, approbation, authentification, enregistrement
- Notification définitive, entrée en vigueur, publication

### Particularité de la négociation (E13) en SMC

La **négociation financière** en SMC a une particularité :
- **Le prix total ne peut pas être négocié à la baisse** au-delà du prix proposé (ce serait déloyal envers les autres candidats)
- **Le prix total ne peut pas être négocié à la hausse** (le moins disant est retenu à ce prix)
- **En pratique, le prix est pratiquement fixe** après attribution SMC

La négociation **technique** reste possible :
- Ajustement de la méthodologie
- Personnel clé
- Calendrier
- Modalités de reporting

C'est une différence majeure avec la SFQC où la négociation peut porter sur davantage d'éléments.

### Règle de cascade en cas de refus

Si le moins disant :
- Refuse les négociations
- Ne confirme pas son personnel clé sans justification valable
- Propose des ajustements techniques incompatibles avec la mission

→ l'AC peut passer au **2ème moins disant qualifié techniquement** (après avis de l'organe).

**Règle de non-réouverture** : identique à SFQC — une fois les négociations entamées avec le 2ème, impossible de revenir au 1er.

---

## Récapitulatif des délais SMC

Les délais sont **identiques à la SFQC** pour toutes les étapes. Pas de délai spécifique supplémentaire.

**Durée totale estimée** : **~ 5-7 mois** (identique SFQC).

---

## Implications pour les agents IA

### Agents dont le rôle est adapté en SMC

| Agent | Rôle en SFQC | Rôle en SMC |
|---|---|---|
| **Agent Calcul Note Combinée** | Central (formule S) | **Non activé** |
| **Agent Analyste Propositions Financières PI** | Calcul Sf + comparaison | **Mode comparatif** : calcul des prix corrigés absolus, identification du minimum, contrôle OAB renforcé |
| **Agent Gestion Enveloppes Scellées** | Sécurise les enveloppes financières | **Identique** à la SFQC |

### Agents inchangés (identiques SFQC)

| Agent | Responsabilité |
|---|---|
| Agent Orientation Procédure | Détecte les cas SMC (2 conditions). Alerte si mission peu standard → recommander SFQC |
| Agent Rédacteur TdR | TdR précis et normalisés |
| Agent Rédacteur AMI | Identique SFQC |
| Agent Analyste Manifestations d'Intérêt | Liste restreinte 5-8, ≥ 2 nationaux |
| **Agent Rédacteur DP** | Template SMC distinct avec paramétrage fort de la note minimum |
| Agent Analyste Propositions Techniques PI | Identique SFQC (mais la note technique a un poids discriminant différent — qualification/non qualification, pas pondération) |
| Agent Juriste-Conformité PI | 6 validations (identiques SFQC) |
| Agent Facilitateur Réunions + Négociateur | Négociation à objet limité (technique surtout, prix quasi-fixe) |
| Agent Suivi-Exécution | Identique SFQC |

### Nouveaux points de contrôle spécifiques SMC

L'**Agent Juriste-Conformité PI** doit ajouter en SMC :
1. Vérification du **choix documenté de la méthode SMC** + justification (missions standards + normes établies)
2. Vérification de la **note technique minimum** (fourchette 60-75, cohérence avec la mission)
3. Contrôle **anti-OAB renforcé** (seuil de vigilance bas, demande de justifications systématique en cas de prix suspect)
4. Vérification que **le moins disant n'a pas été écarté** arbitrairement

### Fonctionnalité "calculateur de note minimum"

Un outil d'aide à la décision pour le PRMP, en phase de rédaction de la DP :

**Entrées** :
- Nature de la mission
- Niveau de normalisation (faible/moyen/élevé)
- Estimation budgétaire
- Taille de la liste restreinte

**Sortie** :
- Recommandation de note minimum (60, 65, 70 ou 75)
- Impact estimé (nombre de qualifiés probables, risque de prix plancher)
- Alertes éventuelles (ex. : note trop basse pour mission sensible)

Ce type de fonctionnalité **différencie** ton SaaS d'un simple outil de traitement documentaire.

---

## Points d'attention stratégiques pour le SaaS

### 1. La SMC est un cas d'usage à fort volume

Contrairement à la SFQ (rare, 5-10 % des PI), la **SMC est fréquente** (25-35 % des PI). Elle couvre tous les marchés courants :
- Audits récurrents (CAC, audits bailleurs)
- Études techniques BTP standards
- Formations et prestations linguistiques
- Recrutement standard
- Maintenance applicative

**Chaque ministère** fait probablement 10-30 SMC par an. C'est un **volume significatif** pour ton pack PI Premium.

### 2. Le piège de la course au prix plancher

La SMC **incite à la course au moins disant**, ce qui peut conduire à :
- **Sous-dimensionnement du personnel** (moins de jours/hommes que nécessaire)
- **Sous-dimensionnement de l'expertise** (juniors au lieu de seniors)
- **Qualité juste au seuil minimum** (tout ce qui dépasse 60 points est gaspillé)
- **Renégociations cachées en cours d'exécution** (avenants abusifs)

**Argument commercial fort** : ton SaaS peut **protéger le PRMP** en :
- Détectant automatiquement les OAB
- Proposant des critères techniques précis dans les TdR (pour que le seuil minimum soit pertinent)
- Suivant l'exécution pour détecter les dérives

### 3. L'articulation avec le contrôle des OAB

L'**OAB est beaucoup plus fréquente en SMC qu'en SFQC**. Ton Agent Analyste Propositions Financières PI doit :
- Calculer automatiquement le **seuil OAB** (art. 81 loi 2020-26)
- Comparer chaque offre aux **pratiques du marché** (si base de données disponible)
- **Déclencher automatiquement** une demande de justifications pour les offres suspectes
- Conserver la **traçabilité** des justifications fournies

Sans ce dispositif, le PRMP prend un risque juridique (choisir un OAB sans justification) ou économique (accepter un prix insoutenable).

### 4. La note technique minimum : sujet politique

Le choix de la note minimum (60, 65, 70, 75) est un **sujet politique interne à l'AC**. Trop bas = on ouvre aux prix planchers. Trop haut = on ferme le marché et on risque de pas avoir assez de candidats qualifiés.

**Recommandation produit** : fournir des **benchmarks** par type de mission (ex. : audit comptable → 70, études techniques → 65, formation → 60) basés sur les pratiques observées. Ces benchmarks peuvent être **enrichis par l'historique** des marchés traités par ton SaaS (effet réseau).

### 5. Agents : pas de nouveaux sous-agents

La SMC réutilise les agents existants en adaptant leur comportement :
- Calcul Note Combinée : désactivé (comme SFQ)
- Analyste Propositions Financières PI : mode comparatif actif (différent de SFQ)
- Gestion Enveloppes Scellées : identique SFQC

**Architecture d'agents inchangée** : toujours **31 agents IA** au total.

### 6. Pack PI Premium : SMC incontournable

La SMC est un **cas d'usage majeur** du pack PI Premium. Elle doit être pleinement supportée avec :
- Template de DP dédié
- Calculateur de note minimum
- Moteur OAB spécifique
- Rapport d'attribution automatique

### 7. Opportunité "benchmark automatique"

Avec l'accumulation de marchés SMC traités par le SaaS, tu peux construire une **base de benchmarks** :
- Prix moyens par type de mission
- Écarts-types des propositions
- Taux de succès des candidats
- Détection de patterns anormaux

C'est un **atout produit majeur** à moyen/long terme : plus le SaaS est utilisé, plus il devient précis sur la détection d'OAB et sur les recommandations. **Effet de réseau** classique.

---

## Récapitulatif comparatif SFQC / SFQ / SMC

| Dimension | SFQC | SFQ | **SMC** |
|---|---|---|---|
| **Cas d'usage** | Missions standards à valeur intellectuelle variable | Missions hautement spécialisées | **Missions standards normalisées** |
| **Fréquence estimée** | 50-60 % des PI | 5-10 % des PI | **25-35 % des PI** |
| **Enveloppes** | 2 (tech + fin scellée) | Variante A (2) ou B (1) | **2** (dans une 3ème) |
| **Critère d'attribution** | Note combinée S | Classement technique | **Prix le plus bas** parmi qualifiés |
| **Formule** | S = St × T% + Sf × P% | Rang St | **Min(F) pour St ≥ seuil** |
| **Pondération T/P** | Oui | Non applicable | **Non (aucune pondération)** |
| **Évaluation financière** | Comparative avec Sf | Une seule offre | **Comparative (prix absolus)** |
| **Ouverture propositions financières** | Toutes qualifiées | Uniquement celle du 1er | **Toutes qualifiées** |
| **Risque OAB** | Moyen | Faible | **Élevé** |
| **Préférences (UEMOA, MPME, collectivités)** | Oui | Oui | **Oui** |
| **Marge de négociation financière** | Limitée | Plus large | **Quasi nulle** (prix du moins disant) |
| **Risque contentieux** | Moyen | Élevé (suspicion favoritisme) | **Faible** (attribution mécanique) |
| **Durée totale** | ~ 5-7 mois | ~ 5-6,5 / 5-7 mois | **~ 5-7 mois** |
| **Validations organe de contrôle** | 6 | 5-6 | **6** |

---

## État d'avancement après SMC

| # | Procédure | Statut | Lignes |
|---|---|---|---|
| 1 | Corpus général | ✅ | 536 |
| 2-10 | Famille T/F/S complète | ✅ | 6 344 |
| 11 | SFQC | ✅ | 1 332 |
| 12 | SFQ | ✅ | 442 |
| 13 | **SMC** | ✅ | **~ 500 (estimé)** |

**Total : ~ 9 150 lignes** de corpus opérationnel.

### Méthodes PI restantes

| # | Procédure | Statut | Principe |
|---|---|---|---|
| 14 | **SCBD** — Sélection à Budget Déterminé | À faire | Budget fixe imposé — qualité max dans ce budget |
| 15 | **SQC** — Sélection sur Qualifications | À faire | Pas d'AMI, 3 cabinets consultés directement |
| 16 | **SCI** — Sélection Consultant Individuel | À faire | Personnes physiques |
| 17 | **SED** — Entente Directe PI | À faire | Renvoi au GaG |
| 18-20 | DRP-PI, DC-PI, pro forma PI | À faire | Adaptations procédures simplifiées |

---

*Fin du document SMC. Source : Manuel ARMP Bénin, juin 2023, §3.2.1.3, pages 135-136. Procédure dérivée de la SFQC (fiche 11) à laquelle cette fiche fait référence pour toutes les étapes non modifiées.*
