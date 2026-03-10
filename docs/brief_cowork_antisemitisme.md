# Brief Cowork — Guide interactif sur l'antisémitisme

## Contexte du projet

Je travaille sur un site web éducatif et informatif sur l'antisémitisme, inspiré du site eventsourcing.dev (un site technique très bien structuré avec des catégories, des pages profondes, des codes couleur, une navigation claire). L'objectif est de produire un guide complet, structuré, profond, pour comprendre l'antisémitisme — ses mécanismes, ses formes, ses conséquences.

Le site est en React (JSX), pensé pour être rendu comme un artifact ou déployé en standalone.

## Ce qui a été produit jusqu'ici

### 3 essais en markdown (le contenu brut)

**Essai 1 — "Anatomie de l'antisémitisme contemporain"** (essai principal)
Couvre :
- L'obsession sélective / deux poids deux mesures sur Israël
- Le fantasme du contrôle (médias, finance, pouvoir)
- Le déni de l'histoire (peuple sans terre autorisée, injonction impossible)
- L'amalgame identitaire (religion / communauté / nation / origine)
- Le piège du mot "sionisme" (3 définitions contradictoires)
- Peut-on être Juif et anti-sioniste ?
- La violence réelle et sa minimisation (chiffres, gravité spécifique : Halimi, Toulouse, Hyper Cacher, Sarah Halimi, Mireille Knoll)
- Section "points à approfondir" listant 8 angles manquants

**Essai 2 — "L'antisémitisme n'est pas un racisme"** (la spécificité)
Couvre :
- Ce que l'antisémitisme n'est pas (inversion : supériorité maléfique vs infériorité)
- Transversalité politique totale (fonctionne dans TOUTES les idéologies)
- Un racisme sans race (cible floue : ni religion, ni ethnie, ni nation exactement)
- Le bouc émissaire structurel (théorie girardienne)
- Les quatre âges : antique, chrétien, moderne (racial), contemporain (géopolitique)
- L'antisémitisme sans Juifs (Pologne, Japon, Malaisie)
- Essai de définition synthétique

**Essai 3 — "Les angles morts"** (ce qu'on ne dit pas assez)
Couvre :
- Le philosémitisme toxique (le compliment qui contient l'accusation)
- Le canari dans la mine (indicateur de santé démocratique)
- L'accusation contradictoire (communiste ET capitaliste, cosmopolite ET communautariste, etc.)
- La mémoire retournée (instrumentalisation, compétition victimaire, inversion victimaire)
- La matrice conspirationniste (QAnon, Grand Remplacement, Deep State → tous convergent vers les Juifs)
- L'exception géopolitique (seul État dont l'existence fait débat)
- L'exil intérieur (le passing, l'autocensure, l'exode silencieux)

### 1 site React (JSX) — première version fonctionnelle

Le site intègre tout le contenu ci-dessus dans une interface navigable avec :
- Page d'accueil avec cartes par catégorie
- Navigation sticky avec dropdowns
- 15+ pages de contenu
- Composants réutilisables : Quote, KeyPoint, Pair (comparaisons côte-à-côte), Section, Tag
- Thème sombre avec codes couleur par catégorie

## Structure actuelle (à retravailler)

La structure actuelle est : Mécanismes / Manifestations. Elle a été identifiée comme problématique car la frontière est floue (ex : l'antisémitisme de gauche est-il un mécanisme ou une manifestation ?).

Trois options ont été proposées. La structure retenue est **l'Option C — Narrative (parcours)** :

### Comprendre
La nature et la spécificité de l'antisémitisme
- Définition et essai de définition
- La spécificité (inversion supériorité/infériorité)
- Les quatre âges (antique → chrétien → moderne/racial → contemporain/géopolitique)

### Déconstruire
Les mécanismes logiques et psychologiques
- L'accusation contradictoire (le double bind systématique)
- La matrice conspirationniste (template originel de tous les complots)
- Le fantasme du contrôle (médias, finance, pouvoir)
- Le philosémitisme toxique (le compliment piégé)
- Le bouc émissaire structurel (Girard)

### Reconnaître
Les formes contemporaines déguisées
- L'obsession sélective (deux poids deux mesures sur Israël)
- L'antisémitisme de gauche (antisionisme comme véhicule)
- Le piège du mot sionisme (3 définitions, une confusion volontaire)
- La mémoire retournée (instrumentalisation de la Shoah)
- L'antisémitisme sans Juifs (Pologne, Japon, Malaisie)

### Mesurer
Les conséquences concrètes
- L'exil intérieur (passing, autocensure, exode)
- La violence réelle (Halimi, Toulouse, Hyper Cacher, etc.)
- Le canari dans la mine (indicateur démocratique)
- L'exception géopolitique (seul État dont l'existence fait débat)

### Ressources
- Ouvrages fondamentaux (Sartre, Arendt, Girard, Lipstadt, Dara Horn)
- Études et rapports (CNCDH, Université de Tel Aviv, IHRA)

## Design — Ce qu'il faut améliorer

### Couleurs
Les couleurs actuelles sont ternes (thème sombre avec des teintes désaturées). Il faut :
- Des couleurs de catégorie plus saturées, plus distinctes, plus lisibles
- Possiblement un fond clair ou un contraste plus fort
- Que chaque catégorie (Comprendre / Déconstruire / Reconnaître / Mesurer) ait une identité visuelle immédiatement reconnaissable
- S'inspirer de eventsourcing.dev pour la clarté, mais apporter plus de personnalité

### Typographie
Actuellement : Playfair Display (titres) + Source Sans 3 (corps). Ça fonctionne bien mais on peut explorer d'autres combinaisons si le thème change (clair vs sombre).

### Composants existants
- `Quote` : citation avec barre latérale
- `KeyPoint` : encadré coloré avec titre
- `Pair` : comparaison côte-à-côte (très utile pour les contradictions)
- `Card` : carte de navigation avec tag de catégorie
- `Tag` : badge de catégorie
- `Section` : section avec titre
- `ResourceCard` : carte pour les ressources bibliographiques

## Ce qu'il reste à faire

### Priorité 1 — Structure et navigation
- Réorganiser toutes les pages selon la structure narrative (Comprendre / Déconstruire / Reconnaître / Mesurer)
- Mettre à jour la navigation (dropdowns, routes)
- Ajouter de la navigation interne entre pages (« page suivante », « page précédente », liens croisés entre concepts liés)

### Priorité 2 — Design
- Refaire la palette de couleurs (plus vive, plus contrastée)
- 4 couleurs de catégorie bien distinctes pour Comprendre / Déconstruire / Reconnaître / Mesurer
- Revoir le fond (clair ? sombre avec plus de contraste ?)
- Ajouter des éléments visuels : icônes, séparateurs, illustrations ou schémas si pertinent

### Priorité 3 — Contenu à enrichir
- Ajouter des sources et références précises dans chaque page (dates, chiffres, noms, liens)
- Ajouter des exemples concrets contemporains (réseaux sociaux, figures publiques, événements récents)
- Développer la page Ressources avec plus de références
- Potentiellement ajouter une FAQ ou un glossaire
- Ajouter une page "Pourquoi ce guide" plus développée

### Priorité 4 — Fonctionnalités
- Moteur de recherche interne
- Table des matières globale
- Mode lecture / mode exploration
- Responsive mobile
- Possibilité d'export PDF des contenus

## Ton et positionnement éditorial

Le guide adopte un ton :
- **Analytique, pas militant** : on décortique des mécanismes, on ne fait pas de propagande
- **Direct et clair** : pas de langue de bois académique
- **Documenté** : chiffres, faits, références
- **Honnête** : on reconnaît la complexité (ex : l'instrumentalisation par certains gouvernements israéliens est abordée franchement, ce qui renforce la crédibilité du reste)
- **Français** : tout le contenu est en français

Le guide NE fait PAS :
- De la défense inconditionnelle d'Israël
- De la hiérarchisation des souffrances
- De l'accusation généralisée (ni des musulmans, ni de la gauche, ni de quiconque)
- Du victimisme — il analyse des mécanismes

## Fichiers de référence

- `/mnt/user-data/outputs/essai_antisemitisme.md` — Essai 1
- `/mnt/user-data/outputs/specificite_antisemitisme.md` — Essai 2
- `/mnt/user-data/outputs/angles_morts_antisemitisme.md` — Essai 3
- `/mnt/user-data/outputs/antisemitisme-site.jsx` — Site React v1

## Site de référence pour l'inspiration

https://eventsourcing.dev — Structure claire, catégories par couleur, pages profondes, navigation avec dropdowns, cartes sur la page d'accueil, design propre et lisible. Le site qu'on veut créer doit avoir la même clarté structurelle mais appliquée à un sujet radicalement différent.
