---
procedure: "Gré à Gré / Entente Directe (GaG/ED)"
code: "GaG"
source: "Manuel ARMP Bénin, juin 2023, §3.1.1.6, pp. 92-95"
base_legale: "Loi n°2020-26 du 29/09/2020, article 34 (motifs) ; Décret n°2020-600 (délais) ; Décret n°2020-602 (documents-types)"
nb_etapes: 15
caractere: "DÉROGATOIRE — procédure sans mise en concurrence, soumise à autorisation spéciale préalable"
risque_juridique: "ÉLEVÉ — procédure la plus surveillée par la DNCMP et l'ARMP"
---

# Procédure GaG — Gré à Gré / Entente Directe

## ⚠️ Avertissement liminaire

Le Gré à Gré est la **procédure dérogatoire par excellence** du code des marchés publics béninois. Elle s'écarte de tous les principes fondamentaux énoncés à l'article 7 de la loi 2020-26 :

- **Pas de liberté d'accès** à la commande publique (un seul candidat est sollicité)
- **Pas d'égalité de traitement** (un candidat est privilégié par rapport à d'autres)
- **Pas de transparence** des procédures au sens classique

Elle n'est donc **légalement utilisable que dans des cas limitativement énumérés** par la loi (article 34) et doit être **autorisée préalablement** par la DNCMP (ou le Conseil des Ministres selon les cas).

> **C'est la procédure la plus surveillée** par les autorités de contrôle (DNCMP) et de régulation (ARMP). Son usage abusif est un motif récurrent de contentieux, de sanctions disciplinaires des agents publics, et d'annulations de marché.

## Principe

> **« Un marché est dit de gré à gré ou marché par entente directe lorsqu'il est passé sans appel à la concurrence, après autorisation spéciale de l'organe compétent (DNCMP ou Conseil des Ministres). »**

Le Gré à Gré n'est **pas une procédure de dernier recours** utilisée quand aucune autre ne convient. C'est une procédure **exceptionnelle**, réservée à des **situations objectivement justifiées** et dont le recours doit être **motivé, documenté et autorisé** en amont.

### Caractéristiques essentielles

| Dimension | Règle |
|---|---|
| **Mise en concurrence** | **Aucune** — un seul candidat identifié |
| **Publication** | **Aucune** — pas d'avis public |
| **Autorisation préalable** | **Obligatoire** — DNCMP ou Conseil des Ministres |
| **Motivation écrite** | **Obligatoire** — rapport spécial de la PRMP |
| **Plafond annuel** | **10 % maximum** du montant total des marchés de l'AC |
| **Négociation** | **Autorisée et recommandée** (c'est l'une des rares procédures où elle l'est) |
| **Contrôle** | **Renforcé** — DNCMP examine avec vigilance, avis conforme |

### Les 2 niveaux d'autorisation

| Autorité compétente | Cas |
|---|---|
| **DNCMP** | Cas général |
| **Conseil des Ministres** | Cas particuliers prévus par la loi (à préciser avec l'article 34 de la loi 2020-26 et son décret d'application) |

## Base légale : l'article 34 de la loi 2020-26

Le recours au gré à gré est **limitativement encadré** par l'article 34 de la loi 2020-26 qui liste les **motifs objectifs** justifiant cette procédure.

> ⚠️ **Source à compléter** : Le texte précis de l'article 34 n'est pas reproduit dans le manuel ARMP. Il est essentiel pour tes agents IA de disposer du texte intégral de cet article. **Demande à fournir** la loi 2020-26 pour que l'Agent Juriste-Conformité puisse valider à coup sûr la conformité d'un motif invoqué.

### Motifs typiquement admis en droit des marchés publics (à valider sur le texte)

Dans la pratique internationale (et sous réserve de vérification sur le texte béninois précis), les motifs de gré à gré incluent généralement :

1. **Exclusivité technique** : le marché ne peut être exécuté que par un seul opérateur (brevet, droit d'auteur, savoir-faire unique)
2. **Urgence impérieuse** : nécessité absolue résultant d'événements imprévisibles et irrésistibles pour l'AC, incompatible avec les délais des procédures concurrentielles
3. **Complément de marché** : prestations accessoires indispensables à un marché principal
4. **Reconduction limitée** : poursuite d'un marché initial sous conditions strictes
5. **Secret défense / sécurité nationale** : protection des informations sensibles
6. **Échec de procédure** : aucune offre conforme reçue après appel d'offres répété
7. **Monopole de fait ou de droit** : un seul fournisseur possible sur le marché

**Ces motifs doivent être démontrés objectivement** — la seule commodité administrative, le retard de planification, ou la préférence pour un fournisseur identifié ne sont pas des motifs légaux.

## Plafond de 10 % : règle d'or

> **« Le montant cumulé des marchés passés par gré à gré d'une Autorité contractante ne doit pas dépasser dix pour cent (10%) du montant total des marchés passés par ladite Autorité contractante chaque année. »**

### Implications pratiques

- **Calcul annuel** : le plafond s'apprécie sur l'année civile
- **Cumul de tous les marchés** de gré à gré de l'AC
- **Rapport** : ÷ montant total de tous les marchés de l'AC (toutes procédures confondues)
- **Dépassement** : risque de **nullité** des marchés excédant le plafond

### Implication pour les agents IA

L'**Agent Planificateur** doit maintenir en permanence un **compteur dynamique** pour chaque AC :
```
ratio_GaG_annuel = Σ(montants marchés GaG année N) / Σ(montants tous marchés année N)
```

Si `ratio_GaG_annuel >= 10%`, l'Agent doit **bloquer toute nouvelle demande de GaG** et émettre une alerte.

## Champ d'application

Le gré à gré s'applique aux **marchés de travaux, fournitures et services** dans les conditions de l'article 34.

### Condition de seuil
Le gré à gré est **indépendant du seuil financier** — il peut concerner un marché au-dessus ou en dessous des seuils de passation, **dès lors que les conditions de l'article 34 sont remplies**.

En pratique :
- **Au-dessus du seuil de passation** : le gré à gré remplace un AO qui aurait normalement dû être utilisé
- **Entre les seuils de DRP/DC** : le gré à gré suit une procédure allégée (voir §3.2.2.3 du manuel)

### Cumul avec autres procédures

| Combinaison | Possible ? | Remarque |
|---|---|---|
| Gré à gré en mode simplifié (seuils DRP/DC) | Oui | §3.2.2.3 : procédure allégée |
| Gré à gré pour prestations intellectuelles | Oui | = **SED** (Sélection par Entente Directe), §3.2 du manuel |
| Gré à gré après échec d'AO | Oui (si motivé) | Motif à valider au titre de l'article 34 |
| Gré à gré avec publication | **Incompatible** | Principe même : pas de concurrence |

## Vue d'ensemble des 15 étapes

```
E1  Définition des spécifications techniques + motifs du GaG
E2  Demande d'offres auprès du candidat identifié
E3  Préparation et transmission de l'offre par le candidat
E4  Évaluation de l'offre soumise
E5  Négociations sur l'offre soumise
E6  Élaboration du rapport spécial PRMP + transmission DNCMP
E7  Obtention de l'autorisation de la DNCMP
E8  Élaboration et signature du marché
E9  Examen juridique et technique du projet de marché
E10 Approbation du marché
E11 Authentification et numérotation
E12 Enregistrement du marché
E13 Notification de l'attribution définitive
E14 Entrée en vigueur du marché
E15 Publication de l'avis d'attribution définitive
```

> **Caractéristique unique** : Ce qui distingue fondamentalement le GaG, c'est que **la négociation précède l'autorisation** (E5 précède E7). On négocie d'abord avec le candidat identifié, **puis** on demande l'autorisation à la DNCMP sur la base du rapport spécial et du projet de marché négocié. C'est une inversion de logique par rapport aux AO.

---

## E1 — Définition des spécifications techniques + motifs du gré à gré

**Acteur principal :** Service demandeur / service bénéficiaire
**Acteur secondaire :** PRMP (validation), service technique (appui)

### Spécificité GaG
À cette étape, le service bénéficiaire doit produire **deux livrables** :

1. Les **spécifications techniques** (identique à l'AOO dans le fond)
2. Un **argumentaire sur les motifs justifiant le gré à gré**, **avec l'identité du candidat** avec lequel le marché sera conclu

C'est unique dans le code : c'est la seule procédure où **le candidat est désigné nommément dès l'expression du besoin**.

### Entrées requises
- Expression de besoin validée dans le PPM
- Identification préalable du fournisseur/prestataire/entrepreneur unique capable
- Éléments factuels justifiant l'exclusivité ou l'urgence
- Budget prévisionnel et dotation confirmée

### Tâches à exécuter

#### Tâche 1 : Définir précisément le besoin
- Identique à l'AOO (spécifications, quantités, services associés)
- Voir fiche AOO §E1 pour le détail

#### Tâche 2 : Produire l'argumentaire des motifs
L'argumentaire doit **impérativement** :
1. Identifier le motif légal invoqué (article 34 de la loi 2020-26, alinéa X)
2. **Documenter factuellement** le motif (preuves, pièces justificatives)
3. Démontrer que **les autres procédures concurrentielles ne peuvent être utilisées**
4. **Nommer le candidat identifié** avec lequel le marché sera conclu
5. Justifier pourquoi **ce candidat spécifique** est le seul (ou le plus qualifié)
6. Estimer le montant prévisionnel

### Livrables attendus

| Livrable | Format | Destinataire | Statut |
|---|---|---|---|
| **Fiche d'expression des besoins** | Document formel daté/signé | PRMP | Obligatoire |
| **Spécifications techniques** | Document technique | PRMP | Obligatoire |
| **Motifs de justification du gré à gré** | Document motivé, daté, signé | PRMP | **Obligatoire — cœur du dossier** |
| **Identité du candidat retenu** | Indiquée dans les motifs | PRMP | Obligatoire |
| **Pièces justificatives des motifs** | Annexes | PRMP | **Critique en cas de recours** |

### Contenu type de l'argumentaire des motifs (template)

```
1. CONTEXTE
   - Objet du marché envisagé
   - Besoin exprimé (quand, par qui, pourquoi)
   - Montant prévisionnel HT

2. MOTIF LÉGAL INVOQUÉ
   - Référence précise : article 34 de la loi 2020-26, alinéa X
   - Formulation juridique du motif

3. JUSTIFICATION FACTUELLE
   - Éléments factuels démontrant que la situation entre dans le motif invoqué
   - Pièces justificatives jointes (certificats, expertises, études de marché, etc.)

4. IMPOSSIBILITÉ DES PROCÉDURES CONCURRENTIELLES
   - Démonstration que l'AO/DRP/DC n'est pas adaptée
   - Éventuels échecs de procédures antérieures

5. IDENTIFICATION DU CANDIDAT
   - Nom et coordonnées complètes du candidat
   - Justification de son choix (qualifications, expertise, exclusivité, etc.)
   - Absence de conflit d'intérêts avec l'AC ou ses agents

6. CONCLUSIONS ET RECOMMANDATIONS
   - Conclusion sur la légitimité du recours au gré à gré
   - Demande d'autorisation à la DNCMP
```

### Points de vigilance (Agent Juriste-Conformité)

| Risque | Critère de contrôle |
|---|---|
| Motif invoqué non prévu par l'article 34 | Vérification systématique contre la liste des motifs légaux |
| Motif invoqué sans justification factuelle | Chaque motif doit être **étayé par des preuves** |
| Identification précoce du candidat (conflit d'intérêts) | Vérification : absence de liens avec les agents de l'AC |
| Dépassement du plafond 10 % annuel | Calcul automatique par l'Agent Planificateur |
| Segmentation d'un marché pour rester sous le seuil | **Interdit** — marché réel à évaluer en valeur globale |
| Répétition abusive de GaG avec le même fournisseur | Pattern détectable, signal de collusion |

### Références
- Manuel §3.1.1.6-E1
- **Article 34 loi 2020-26** (à fournir pour validation exhaustive)

---

## E2 — Demande d'offres auprès du candidat identifié

**Acteur principal :** PRMP
**Acteur secondaire :** Service demandeur, SPMP

### Tâches à exécuter

La PRMP prépare une **Demande d'Offres** destinée au candidat unique identifié. Le document comprend au minimum :

| Élément | Contenu |
|---|---|
| **Lettre d'invitation** | Invitation formelle à soumettre une offre |
| **Instructions au candidat (IC)** | Règles de soumission, délais, adresse, format |
| **Spécifications techniques ou prescriptions techniques** | Selon nature du marché |
| **Cadres de bordereau quantitatif et prix unitaires** | Travaux / fournitures |
| **Devis quantitatif estimatif** | – |
| **Bordereau de livraison** (fournitures) | Quantités + échéancier |
| **Calendrier de livraison / exécution** | – |
| **Plans** (si requis) | – |
| **Nombre d'inspections et d'essais** (si requis) | – |
| **Formulaires à remplir** | Lettre de soumission, etc. |
| **Modèle du marché à signer** | Projet de contrat |

> ⚠️ **Note** : Contrairement à un AOO, le dossier est structurellement **allégé** (pas de RPAO complet, pas de CCAG/CCAP détaillés obligatoires). Mais il doit être **suffisamment complet** pour permettre une offre structurée et la négociation subséquente.

### Validation par l'organe de contrôle

Le manuel n'impose **pas** explicitement une validation préalable de la Demande d'Offres par l'organe de contrôle avant transmission au candidat. La validation du dossier aura lieu en E6-E7 (rapport spécial + autorisation DNCMP).

### Livrables attendus

| Livrable | Format | Destinataire | Signature |
|---|---|---|---|
| **Demande d'offres complète** | Dossier formel | Candidat identifié | PRMP |
| **Accusé de réception** | Pièce justificative | Dossier marché | Candidat |

### Délai
Le manuel indique : **jour de lancement prévu au PPM** pour la préparation de la Demande d'Offres par la PRMP.

---

## E3 — Préparation et transmission de l'offre par le candidat

**Acteur principal :** Candidat identifié
**Acteur secondaire :** PRMP (support), SPMP (réception)

### Tâches à exécuter

#### Réunion préalable d'information (optionnelle mais recommandée)
L'AC peut organiser une **réunion d'information avec visite de site**. C'est particulièrement utile en gré à gré car :
- Clarification mutuelle sur les attentes
- Préparation des négociations ultérieures
- Alignement technique en amont
- PV transmis au candidat (trace)

#### Préparation de l'offre par le candidat
- Offre technique (méthodologie, matériel, personnel, calendrier)
- Offre financière (BPU, DQE, sous-détail des prix si requis)
- Pièces administratives (RCCM, attestations, garantie si demandée)

#### Dépôt de l'offre
- Sous pli fermé
- Date, heure limite et adresse indiquées dans la Demande
- Enregistrement au registre ARMP

### Livrables attendus

| Livrable | Format | Destinataire | Traçabilité |
|---|---|---|---|
| **PV de réunion préalable** (si organisée) | Document signé | Candidat + dossier | Trace écrite |
| **Offre technique + financière** | Pli fermé | SPMP | Enregistrement registre |
| **Accusé de réception** | Reçu daté et signé | Candidat | Date certaine |

### Délais réglementaires

| Situation | Délai minimum de préparation de l'offre |
|---|---|
| **Demande nationale** | **≥ 21 jours calendaires** depuis la transmission de la Demande d'Offres |
| **Demande communautaire** (seuil UEMOA) | **≥ 30 jours calendaires** |
| Possible prolongation selon complexité | Selon appréciation de l'AC |

> ⚠️ **Important** : Même en gré à gré, les délais de préparation de l'offre **sont identiques à l'AOO**. Le gré à gré n'autorise pas à raccourcir indûment les délais pour le candidat.

### Réception et garde de l'offre
- Réception par le SPMP
- Enregistrement dans le registre spécial de réception des offres (registre ARMP)
- Indication : numéro d'ordre, date, heure de réception
- Transmission à la PRMP qui la garde en sécurité jusqu'à la séance d'évaluation

---

## E4 — Évaluation de l'offre soumise

**Acteur principal :** COE
**Acteur secondaire :** PRMP

### Particularité GaG
Il n'y a **qu'une seule offre** à évaluer — pas de comparaison possible. L'évaluation porte sur :
- La **recevabilité** de l'offre (pièces obligatoires présentes et valides)
- La **conformité technique** aux spécifications
- L'**acceptabilité financière** (montant cohérent avec l'estimation, absence d'anomalies)
- La **qualification du candidat** (capacité à exécuter)

### Tâches à exécuter

1. **Ouverture de l'offre** par la COE
2. **Examen de la recevabilité** (pièces administratives)
3. **Examen de la conformité technique** (respect des spécifications)
4. **Examen du montant** (cohérence, réalisme, rapport qualité/prix)
5. **Examen de la qualification** (capacité financière, technique, expérience)
6. **Rédaction du rapport d'évaluation**

### Spécificité GaG
L'offre peut être :
- **Acceptable en l'état** → passage direct à l'étape 5 (négociations)
- **Acceptable avec réserves** → négociation pour lever les réserves
- **Non acceptable** → rejet → retour à E1 (nouvelle procédure ou choix d'un autre candidat)

**Il n'y a pas de classement** (un seul candidat), mais il peut y avoir **rejet** motivé. Dans ce cas, l'AC doit :
- Documenter le rejet
- Éventuellement relancer un GaG avec un autre candidat (nouvelle autorisation DNCMP requise)
- Ou basculer vers un AO (si le motif initial n'est plus soutenable)

### Livrables attendus

| Livrable | Format | Destinataire | Signature |
|---|---|---|---|
| **Rapport d'évaluation de l'offre** | Document formel | PRMP + organe de contrôle | **Signé par tous les membres COE** |
| **Décision de recevabilité** (ou rejet motivé) | Intégrée au rapport | Dossier marché | COE |

### Délai
**10 jours ouvrables maximum** à partir de la date d'ouverture de l'offre pour produire le rapport d'évaluation.

---

## E5 — Négociations sur l'offre soumise

**Acteur principal :** COE + PRMP
**Acteur secondaire :** Candidat identifié

### Caractéristique unique du GaG

> **Le gré à gré est la SEULE procédure du code des marchés publics béninois où la négociation est explicitement autorisée et recommandée** (hors dialogue technique dans l'AO-2E et négociations finales en SFQC pour les prestations intellectuelles).

### Objets de la négociation

| Axe | Contenu négociable |
|---|---|
| **Technique** | Ajustement des spécifications, méthodes d'exécution, calendrier, livrables |
| **Financier** | Prix unitaires, prix global, conditions de paiement, révisions |
| **Contractuel** | Clauses CCAP, garanties, pénalités, durée, modalités d'exécution |
| **Qualité** | Certifications, tests, inspections, acceptation |

### Règles de conduite des négociations

1. **Négociation équitable** : ne pas exploiter la position de monopole du candidat
2. **Négociation de bonne foi** : visant à aboutir à un marché bénéfique pour les deux parties
3. **Traçabilité** : chaque séance donne lieu à un PV détaillé
4. **Respect du plafond financier** : le montant final ne doit pas dépasser l'estimation prévisionnelle sans justification
5. **Cohérence technique** : les modifications techniques doivent rester dans le cadre du besoin initial

### Tâches à exécuter

1. **Procéder à la négociation** de l'offre (technique, financière, contractuelle)
2. **Rédiger le PV de négociation** à chaque séance
3. **Élaborer le marché négocié** (projet de contrat)
4. **Faire parapher** le projet de marché par la société

### Livrables attendus

| Livrable | Format | Destinataire | Signature |
|---|---|---|---|
| **PV de négociation** | Document formel pour chaque séance | Dossier + candidat | **COE + candidat** |
| **Projet de marché négocié** | Contrat détaillé | Dossier + candidat | Paraphes PRMP + candidat |

### Délai
**10 jours ouvrables maximum** à partir de la date d'ouverture de l'offre pour la négociation. Ce délai inclut donc à la fois l'évaluation (E4) et la négociation (E5).

### Points de vigilance (Agent Juriste-Conformité)

| Risque | Critère de contrôle |
|---|---|
| Négociation biaisée en faveur du candidat | Trace écrite systématique des concessions |
| Détournement de l'esprit du besoin | Modifications substantielles = retour à E1 |
| Prix final dépassant largement l'estimation | Justification écrite obligatoire |
| Absence de PV de négociation | Toute négociation **doit** être documentée |
| Négociation en huis-clos sans membres COE | La COE doit être présente collégialement |

---

## E6 — Élaboration du rapport spécial par la PRMP + transmission DNCMP

**Acteur principal :** PRMP
**Acteur secondaire :** Services techniques (appui), COE (contribution)

### Caractère unique du rapport spécial

Le **rapport spécial** est un document obligatoire, propre au gré à gré, qui :
- Consolide l'ensemble du dossier
- Motive l'ensemble du recours au GaG
- Sert de base à la décision d'autorisation de la DNCMP

### Tâches à exécuter

1. **Finaliser les motifs** de justification du gré à gré
2. **Élaborer le rapport spécial** selon un format structuré
3. **Transmettre** le rapport spécial à la DNCMP pour avis/autorisation

### Contenu obligatoire du rapport spécial

```
1. IDENTIFICATION DE L'AUTORITÉ CONTRACTANTE
   - AC concernée, PRMP, coordonnées

2. IDENTIFICATION DU MARCHÉ PROPOSÉ
   - Objet, nature (travaux / fournitures / services)
   - Montant prévisionnel et montant négocié
   - Durée, lieu d'exécution

3. MOTIFS DU RECOURS AU GRÉ À GRÉ
   - Article 34 de la loi 2020-26, alinéa précis invoqué
   - Justification factuelle complète
   - Pièces justificatives jointes
   - Démonstration de l'impossibilité des procédures concurrentielles

4. IDENTIFICATION DU CANDIDAT ET JUSTIFICATION DE SON CHOIX
   - Nom, coordonnées, qualifications
   - Pourquoi ce candidat spécifique
   - Absence de conflit d'intérêts

5. PROCÉDURE SUIVIE
   - Chronologie (Demande d'offres → réception → évaluation → négociation)
   - Résultat de l'évaluation
   - Principales étapes de la négociation

6. PV DE NÉGOCIATION
   - Joints en annexe
   - Synthèse des ajustements technico-financiers

7. PROJET DE MARCHÉ NÉGOCIÉ
   - Joint en annexe

8. RAPPORT DE L'AC SUR LE PLAFOND 10 %
   - Total cumulé des marchés GaG de l'AC sur l'année en cours
   - Rapport en % du total des marchés de l'AC
   - Confirmation du respect du plafond

9. DEMANDE D'AUTORISATION
   - Formellement adressée à la DNCMP
```

### Livrables attendus

| Livrable | Format | Destinataire | Pièces jointes |
|---|---|---|---|
| **Rapport spécial** | Document formel complet | DNCMP | Motifs + PV évaluation + PV négociation + projet de marché + pièces justificatives |
| **Lettre de transmission** | Correspondance officielle | DNCMP | – |
| **Calcul du ratio 10 %** | Note financière | Annexée au rapport | – |

### Délai
**3 jours** après réception des motifs et du PV de négociation pour élaborer le rapport spécial et le transmettre à la DNCMP.

> ⚠️ **Délai inhabituellement court** : ce délai de 3 jours est très serré. En pratique, le rapport spécial doit être **pré-préparé** au fur et à mesure des étapes précédentes pour tenir ce délai.

### Points de vigilance (Agent Juriste-Conformité)

| Risque | Critère de contrôle |
|---|---|
| Rapport spécial incomplet | Checklist exhaustive des 9 sections |
| Motifs non conformes à l'article 34 | Validation contre la liste légale |
| Plafond 10 % dépassé | Calcul automatique + blocage si atteint |
| Pièces justificatives manquantes | Vérification systématique |
| Négociation non documentée | PV obligatoires |

---

## E7 — Obtention de l'autorisation de la DNCMP

**Acteur principal :** DNCMP
**Acteur secondaire :** PRMP (réception de l'avis)

### Tâches à exécuter (côté DNCMP)

1. **Recevoir le rapport spécial** transmis par la PRMP
2. **Examiner** :
   - Les motifs invoqués et leur conformité à l'article 34
   - Les justifications factuelles et pièces
   - La procédure suivie (demande, évaluation, négociation)
   - Le projet de marché négocié
   - Le respect du plafond 10 %
3. **Émettre un avis** : favorable (autorisation) ou défavorable (refus motivé)
4. **Transmettre l'avis** à la PRMP

### Issues possibles

| Issue | Conséquence |
|---|---|
| **Avis favorable** | Autorisation donnée → passage à E8 |
| **Avis favorable avec réserves** | Autorisation conditionnelle → PRMP doit intégrer les observations |
| **Avis défavorable motivé** | Refus → impossible de passer le marché en GaG → retour à E1 ou bascule vers AO |
| **Silence de la DNCMP** (pas prévu) | Pas d'automaticité — attendre l'avis |

### Cas du Conseil des Ministres
Dans certains cas spécifiques prévus par la loi (à préciser sur le texte de l'article 34), l'autorisation relève du **Conseil des Ministres** et non de la DNCMP. La procédure est alors plus lourde :
- Transmission via la DNCMP qui instruit le dossier
- Inscription à l'ordre du jour du Conseil
- Délibération et décision
- Notification à la PRMP

### Livrables attendus

| Livrable | Émetteur | Destinataire | Format |
|---|---|---|---|
| **Avis de la DNCMP** (ou décision du Conseil) | DNCMP / CM | PRMP | Document officiel |
| **Preuve de transmission** | DNCMP | Dossier | – |

### Délai
**5 jours ouvrables** après réception du rapport pour que la DNCMP rende son avis.

### Voies de recours
Si la DNCMP refuse l'autorisation et que la PRMP estime le refus non fondé :
- Recours possible devant l'**ARMP**
- Délai et modalités à vérifier sur le décret 2020-595 (organisation ARMP)

### Points de vigilance
- L'autorisation DNCMP **n'est pas un simple visa administratif** : c'est une décision motivée
- **Ne jamais commencer l'exécution** avant l'autorisation DNCMP (sanction : nullité du marché + responsabilité des agents)

---

## E8 — Élaboration et signature du marché

**Acteur principal :** PRMP + attributaire
**Acteur secondaire :** Services juridiques de l'AC

### Tâches à exécuter

Après réception de l'avis favorable de la DNCMP :

1. **Finaliser le projet de marché** (intégrer éventuelles réserves de la DNCMP)
2. **Préparer et transmettre la lettre de notification** à l'attributaire
3. **Préparer le marché en 3 exemplaires minimum**
4. **Transmettre au candidat** pour signature
5. **Candidat signe et retourne** le projet (avec AR)
6. **PRMP signe** le projet de marché

### Livrables attendus

| Livrable | Destinataire | Délai | Signature |
|---|---|---|---|
| **Lettre de notification d'attribution** | Attributaire | **2 jours calendaires** après réception de l'avis DNCMP | PRMP |
| **Projet de marché finalisé** | Attributaire | Joint à la notification | – |
| **Marché signé par l'attributaire** | PRMP | ≤ 3 jours ouvrables après réception | Attributaire |
| **Marché signé par la PRMP** | Partenaire + contrôle | ≤ 2 jours ouvrables après retour signé | PRMP |

### Délais réglementaires

| Action | Délai |
|---|---|
| Notification de l'attribution | **2 jours calendaires après réception de l'avis DNCMP** |
| Signature par l'attributaire | ≤ 3 jours ouvrables après réception |
| Signature par la PRMP | ≤ 2 jours ouvrables après retour signé |

### Spécificité GaG vs AOO
- **Pas de délai d'attente de 10 jours** (pas de recours possible des concurrents évincés, puisqu'il n'y en a pas)
- **Notification plus rapide** : directement après avis DNCMP
- **Marché signé plus tôt** dans la procédure

---

## E9 à E15 — Étapes identiques à l'AOO

Le manuel indique explicitement :

> **« 8. Signature du marché / 9. Approbation du marché / 10. Enregistrement du marché / 11. Notification du marché et 12. Publication. Ces phases sont identiques à celles de l'appel d'offre ouvert. »**

### Tableau de correspondance

| Étape GaG | Contenu | Référence AOO |
|---|---|---|
| **E9** | Examen juridique et technique du projet de marché | Fiche AOO §E9 (visa du contrôle) |
| **E10** | Approbation du marché par l'autorité compétente | Fiche AOO §E10 |
| **E11** | Authentification et numérotation par la DNCMP | Fiche AOO §E11 |
| **E12** | Enregistrement du marché (aux frais du titulaire + redevance ARMP) | Fiche AOO §E12 |
| **E13** | Notification attribution définitive (≤ 3 j calendaires après enregistrement) | Fiche AOO §E13 |
| **E14** | Entrée en vigueur (financement + garanties + avance + accès site) | Fiche AOO §E14 |
| **E15** | Publication avis attribution définitive (≤ 15 j calendaires après entrée en vigueur) | Fiche AOO §E15 |

### Point spécifique E15 — Publication en gré à gré

Bien que le GaG ne soit pas une procédure concurrentielle, **la publication de l'avis d'attribution définitive reste obligatoire** dans les mêmes canaux que l'AOO. Cette obligation de **transparence ex post** est essentielle pour :
- Assurer la traçabilité publique de tous les marchés publics
- Permettre le contrôle citoyen
- Alimenter les statistiques de l'ARMP (notamment pour le calcul du ratio 10 %)

L'avis doit mentionner :
- Objet du marché
- Nom de l'attributaire
- Montant
- **Mention explicite** que le marché a été passé par gré à gré
- **Motif légal** invoqué (article 34, alinéa X)

---

## Résumé des délais GaG

| Étape | Délai |
|---|---|
| E1 — Définition besoins + motifs | Au lancement PPM |
| E2 — Préparation Demande d'offres | Jour de lancement prévu au PPM |
| E3 — Délai de préparation de l'offre (national) | **≥ 21 jours calendaires** |
| E3 — Délai de préparation de l'offre (communautaire) | **≥ 30 jours calendaires** |
| E4 + E5 — Évaluation + négociation (COE) | **≤ 10 jours ouvrables** à partir de l'ouverture |
| E6 — Rapport spécial PRMP | **3 jours** après réception des motifs |
| E7 — Avis DNCMP | **5 jours ouvrables** après réception |
| E8 — Notification attributaire | **2 jours calendaires** après avis DNCMP |
| E8 — Signature attributaire | ≤ 3 jours ouvrables après réception |
| E8 — Signature PRMP | ≤ 2 jours ouvrables après retour signé |
| E10 — Refus approbation motivé | 5 jours calendaires |
| E13 — Notification après enregistrement | ≤ 3 jours calendaires |
| E15 — Publication avis définitif | ≤ 15 jours calendaires après entrée en vigueur |

### Durée totale minimum estimée
- **Délai de préparation de l'offre** : ~ 3 semaines (21 j)
- **Évaluation + négociation + rapport** : ~ 2 semaines (10 j ouvrables + 3 j)
- **Autorisation DNCMP** : ~ 1 semaine (5 j ouvrables)
- **Signature, approbation, enregistrement** : ~ 2 semaines
- **Entrée en vigueur + publication** : ~ 2 semaines
- **Total** : **~ 2 à 2,5 mois** (similaire à un AOO classique, malgré l'absence de publication initiale)

> **Paradoxe** : Le GaG n'est **pas significativement plus rapide** qu'un AOO. L'économie de temps liée à l'absence de publication (≥ 21 jours) est en grande partie absorbée par l'étape d'autorisation DNCMP et la procédure renforcée de contrôle. Pour les AC qui espéraient gagner du temps en choisissant le GaG, **c'est une illusion**.

---

## Récapitulatif comparatif AOO / AOR / AOP / AO-2E / AOC / GaG

| Dimension | AOO | AOR | AOP | AO-2E | AOC | **GaG** |
|---|---|---|---|---|---|---|
| **Mise en concurrence** | Oui (ouverte) | Oui (restreinte) | Oui (2 phases) | Oui (2 étapes) | Oui (jury) | **Aucune** |
| **Publication avis** | Oui | Non | Oui (phase 1) | Oui (étape 1) | Selon mode | **Aucune** |
| **Nombre de candidats** | Libre | Liste AC | Tous les qualifiés | Tous les qualifiés | Libre ou restreint | **Un seul** |
| **Autorisation préalable** | Non | Non (validation liste) | Oui DNCMP au PPM | Oui DNCMP au PPM | Non | **Oui DNCMP ou CM** |
| **Négociation** | Interdite | Interdite | Interdite | Autorisée (clarif.) | Interdite | **Autorisée et recommandée** |
| **Plafond annuel AC** | Non | Non | Non | Non | Non | **10 % du total** |
| **Publication attribution définitive** | Oui | Oui | Oui | Oui | Oui | **Oui** |
| **Risque juridique** | Faible | Moyen | Moyen | Moyen | Élevé | **Très élevé** |
| **Durée minimum** | ~ 2-3 mois | ~ 2-3 mois | ~ 4-6 mois | ~ 5-7 mois | ~ 2,5-4 mois | **~ 2-2,5 mois** |

---

## Implications pour les agents IA

| Agent | Responsabilité dans le GaG |
|---|---|
| **Agent Orientation Procédure** | **Désactive le GaG par défaut** — exige une validation manuelle/explicite du PRMP + un argumentaire structuré des motifs. Affiche tous les avertissements légaux. Pointe vers AO comme alternative quasi-systématique |
| **Agent Planificateur** | **Maintient le compteur 10 % annuel** par AC. Bloque toute nouvelle demande de GaG si plafond atteint ou proche. Trace l'historique des GaG pour détection de patterns suspects |
| **Agent Juriste-Conformité** | **Rôle renforcé en GaG** : (1) validation du motif contre article 34, (2) vérification factuelle des justifications, (3) vérification du plafond 10 %, (4) détection de conflits d'intérêts avec le candidat identifié, (5) vérification de la traçabilité de la négociation, (6) alerte sur répétition de GaG avec même fournisseur |
| **Agent Rédacteur Motifs** | **Nouveau sous-agent spécifique au GaG** : aide à structurer l'argumentaire des motifs selon l'article 34, suggère les pièces justificatives, formate le rapport spécial selon le template officiel |
| **Agent Négociateur** | **Nouveau sous-agent** : prépare les axes de négociation, calcule les marges acceptables, génère les PV de négociation structurés. S'active uniquement en GaG, AO-2E (clarifications), et SFQC (négociations) |
| **Agent Rédacteur Rapport Spécial** | **Nouveau sous-agent** : consolide tous les livrables du dossier GaG en un rapport spécial structuré, vérifie la complétude (9 sections obligatoires), génère le calcul du ratio 10 % |
| **Agent Rédacteur DAO** | Produit la Demande d'Offres simplifiée (pas de RPAO complet, structure allégée mais suffisante) |
| **Agent Analyste d'Offres** | Adapté au GaG : pas de comparaison multi-offres, mais évaluation stricte de l'unique offre avec focus sur l'absence de monopole abusif (prix justifié, qualité adéquate) |
| **Agent Rédacteur PV** | Produit les PV spécifiques au GaG : PV de réunion préalable, PV d'évaluation de l'offre unique, PV de négociation détaillés, rapport spécial |
| **Agent Suivi-Exécution** | Identique à l'AOO pour E9 à E15, avec surveillance renforcée (la DNCMP contrôlera plus strictement l'exécution d'un GaG) |
| **Agent Archiviste** | **Archivage renforcé** pour GaG : traçabilité exhaustive obligatoire en cas de contrôle a posteriori de l'ARMP ou d'audit (pièces justificatives des motifs, PV de négociation, rapport spécial, autorisation DNCMP) |

---

## Points d'attention stratégiques pour le SaaS

### 1. Le GaG est un risque légal pour les PRMP — le SaaS doit les protéger

Le gré à gré est la procédure où les PRMP **encourent le plus de sanctions personnelles** (disciplinaires, pénales dans les cas graves). Un SaaS qui sécurise juridiquement le PRMP dans l'usage du GaG est un **outil de réduction de risque personnel**, argument fort de vente.

Fonctionnalités critiques :
- **Bibliothèque juridique** des motifs de l'article 34 avec jurisprudence
- **Générateur de rapport spécial** conforme et exhaustif
- **Traçabilité horodatée** de toutes les étapes
- **Archivage sécurisé** sur plusieurs années (durée de prescription)
- **Alertes** sur les pratiques à risque (GaG répétitifs, plafond 10 %)

### 2. Le compteur 10 % est une fonctionnalité obligatoire

Sans compteur 10 %, le SaaS ne peut pas être utilisé en production pour le GaG. C'est un **must-have** technique. Il doit :
- Calculer en temps réel le ratio pour chaque AC
- Afficher un **tableau de bord permanent**
- Émettre des **alertes graduées** (80 %, 90 %, 95 %, 100 %)
- **Bloquer automatiquement** les nouvelles demandes au-delà de 100 %

### 3. Le GaG est une procédure à haute valeur pédagogique

Beaucoup de PRMP au Bénin utilisent mal le GaG par méconnaissance du cadre légal strict. Le SaaS a un **rôle pédagogique** :
- Rappels réglementaires contextuels
- Checklist des conditions légales
- Exemples de motifs valides vs non valides
- Template de rapport spécial avec commentaires explicatifs

### 4. 3 nouveaux sous-agents identifiés

Le GaG fait émerger 3 sous-agents spécifiques :
- **Agent Rédacteur Motifs** : structure l'argumentaire des motifs (art. 34)
- **Agent Négociateur** : assiste aux négociations (GaG, AO-2E, SFQC)
- **Agent Rédacteur Rapport Spécial** : consolide le dossier complet pour DNCMP

Tu es maintenant à **20 agents IA** au total dans ton architecture :
- 8 agents initiaux
- Gestion Invitations (AOR)
- Analyste Candidatures (AOP)
- Analyste Propositions Techniques, Facilitateur Réunions, Synthèse Spécifications (AO-2E)
- Constitution Jury, Gestion Anonymat, Analyste Projets, Gestion Primes (AOC)
- Rédacteur Motifs, Négociateur, Rédacteur Rapport Spécial (GaG)

### 5. Opportunité produit : "Module Conformité GaG"

Le GaG est assez distinct des autres procédures pour justifier un **module dédié** dans le SaaS :
- Accessible aux PRMP uniquement après formation/certification
- Workflow spécifique avec jalons de validation
- Intégration avec services juridiques externes (cabinets d'avocats)
- Reporting spécifique pour audit DNCMP/ARMP

Cela peut être vendu comme module complémentaire ou inclus dans les offres Enterprise.

---

## ⚠️ Source à compléter

> **Avant de finaliser l'Agent Juriste-Conformité pour le GaG**, il est impératif d'obtenir le texte précis de **l'article 34 de la loi 2020-26** qui liste les motifs limitatifs de recours au gré à gré. Sans ce texte, l'Agent ne peut pas valider à coup sûr qu'un motif invoqué est légalement recevable.
>
> **Demande à formuler** : Fournir la loi 2020-26 en intégralité (ou au minimum les articles 34, 35, 36 qui encadrent la procédure d'entente directe et ses conditions).

---

*Fin du document GaG. Source : Manuel ARMP Bénin, juin 2023, §3.1.1.6, pages 92-95. À enrichir avec le texte complet de l'article 34 de la loi 2020-26 et les dispositions du décret 2020-605 sur la procédure simplifiée de GaG dans les seuils de sollicitation de prix.*
