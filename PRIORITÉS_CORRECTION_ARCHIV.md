# PRIORITÉS_CORRECTION_ARCHIV — audit critique (ARCHIV / Albin Julius)

**Date du rapport :** 14 mai 2026  
**Périmètre :** site statique public (`*.html`, `js/`, `css/`, `images/`, `sitemap.xml`, `robots.txt`) + documentation projet à la racine ; `_legacy/` signalé mais non traité comme contenu publiable.  
**Méthode :** relecture ciblée des fichiers, recherche textuelle des résidus « ancien site », contrôle croisé avec `SOURCES_ARCHIV.md` / `QUESTIONS_ARCHIV.md`, vérification HTTP (échantillon) sur les URLs externes principales.

---

## Synthèse exécutive

Le pivot éditorial vers **Albin Julius** est avancé sur les pages HTML publiques, mais le dépôt reste **hybride** : traces du sujet et de la charte **Degrelle / Rex / SS** (fichiers, commentaires, documentation, chaînes UI), **métadonnées structurées encore assertives** (genre « martial music » sans source dans le JSON-LD), et **artefacts techniques** (icônes PNG référencées mais absentes, dossier `images/degrelle/` + drapeau SS encore présents). L’archive gagne en honnêteté méthodologique, mais manque encore de **profondeur muséale** (discographie détaillée, images multiples sourcées, médias documentés). Les URL canoniques pointent vers **`archiv-albinjulius.example`** : correct pour un brouillon, **bloquant pour tout référencement réel**.

---

## 1. Problèmes critiques

| ID | Problème | Risque |
|----|-----------|--------|
| **C1** | **Domaine `.example` et `og:site_name` brut** : tout le référencement social / JSON-LD / sitemap repose sur un hôte non indexable et non brandé côté « site name ». | SEO et partages **nuls ou trompeurs** en préprod ; incohérence avec l’identité « ARCHIV — Albin Julius ». |
| **C2** | **Références explicites à l’ancien site dans l’UI** : `hostingNote` (« Degrelle-era local video files… ») dans `index.html` et `js/i18n.js`. | Brise le ton « archive neutre » ; rappelle un contenu politique **sans valeur documentaire** pour le lecteur cible. |
| **C3** | **Assets idéologiques de l’ancien template encore dans le dépôt** : `images/degrelle/*` (rex, SS, Légion), `images/Flag_of_the_Schutzstaffel.svg`. Même non liés par les pages actuelles, ils restent **dans le repo** et exportables par erreur. | Risque **réputationnel et juridique** ; contredit la promesse ARCHIV de neutralité. |
| **C4** | **Icônes PNG déclarées mais absentes** : toutes les pages référencent `/images/favicon.png` (32/16/apple-touch) — **fichier inexistant** dans `images/`. | 404 en prod ; icônes cassées sur mobile / favoris ; signe de **livraison incomplète**. |
| **C5** | **JSON-LD `Person` : affirmations non sourcées dans le graphe** (ex. *« associated with industrial and martial music »*). | Sur-détermination sémantique **non traçable** ligne à ligne depuis le HTML public ; mauvaise pratique pour une archive qui prêche la prudence. |
| **C6** | **`robots.txt` : `Disallow: /template/`** alors que le risque documenté est plutôt `_legacy/` (déjà interdit) — **`/template/` peut être inexistant**. | Fausse couverture de sécurité ; maintien d’une **config obsolète**. |

---

## 2. Problèmes importants

| ID | Problème | Détail |
|----|-----------|--------|
| **I1** | **Documentation projet obsolète vs site réel** | `ARCHIV_PRODUCTION_PLAN.md`, `SEO_PERFORMANCE_ARCHIV.md`, `PRIORITÉS_CORRECTION_ARCHIV.md` (version précédente remplacée par ce fichier), `QA_ARCHIV.md` : mélange Degrelle / leondegrelle.com et état actuel. **Risque** : une équipe lit la mauvaise vérité. |
| **I2** | **Commentaires de code encore « Archive Léon Degrelle »** (`js/main.js`) + commentaire CSS Rex/Germania (`main.css`) | Résidu culturel du template ; pas visible utilisateur, mais **pollue la maintenance** et les revues. |
| **I3** | **Typographie fantôme** : règle `.ej-gen-tree-kicker { font-family: "Germania One" … }` alors que **Germania n’est plus chargée** dans les pages (stack Fraunces / Inter). | Style mort ou **FOUT incohérent** si un bloc généalogique réapparaît ; dette CSS. |
| **I4** | **Identifiants de section vs libellés** : `#leitmotive`, `#interviews`, fichier `stammbaum.html` pour « Projects ». | SEO technique et compréhension URL **dissonants** avec le contenu anglais actuel. |
| **I5** | **Répétition timeline / bibliographie** | Les entrées MusicBrainz / SR / Side-Line apparaissent en **colonne chronologique** et en **liste « resources »** — utile comme rappel, mais redondant sans distinction de rôle (faits datés vs outils). |
| **I6** | **Dates encore ouvertes dans le contenu** (aligné avec `QUESTIONS_ARCHIV.md`) | Ex. **1996** : mention Side-Line / pressing « à vérifier » ; **2003 vs 2004** release group en parallèle — correctement signalé en partie, mais **exige une résolution** pour toute affirmation muséale. |
| **I7** | **Section « Moving image » vide** (CTA vers liens + modal jamais alimenté) | Donne l’impression d’une **section remplie vite** ; acceptable comme placeholder honnête, mais faible au regard d’une « archive ». |
| **I8** | **Galerie minimale** (2 visuels dont un motif grille **sans fiche de provenance** dédiée dans `SOURCES_ARCHIV.md` pour le SVG) | Proportionnel au stade du projet, mais **faible profondeur** pour une page « Gallery ». |
| **I9** | **JSON-LD `CollectionPage` : `isPartOf.name` = hostname** tandis que le bloc `WebSite` utilise **« ARCHIV — Albin Julius »** | Incohérence mineure dans le graphe ; les moteurs peuvent **fusionner ambiguëment** l’entité site. |
| **I10** | **`i18n.js` : bloc `projectsPage` volumineux** sans usage `data-i18n` repéré | **Dette** : chaînes non servies, risque de divergence avec `stammbaum.html` réel. |

---

## 3. Améliorations souhaitables

- **Purger ou archiver hors repo** les SVG / imagery Degrelle & SS, ou les déplacer dans `_legacy/` avec politique d’export claire.
- **Réécrire `SEO_PERFORMANCE_ARCHIV.md`** pour Albin Julius (LCP hero Commons, pas `Leon_Degrelle_header`).
- **Unifier les titres de section** entre HTML statique et `i18n` (ex. `MOVING IMAGE` vs formulation plus « musée »).
- **Ajouter `og:image:width` / `og:image:height`** ou une variante 1200×630 pour les cartes sociales (photo actuelle ~676×594 — rognage imprévisible).
- **`src/styles/archiv-dashboard.css`** : confirmer usage ; sinon retirer du périmètre ou documenter comme expérimental.
- **Nettoyer `QA_ARCHIV.md`** : tableau historique Degrelle vs état actuel — soit archive annexe, soit refonte.
- **Accessibilité** : vérifier ordre de tabulation mobile / focus piégé (non testé ici en navigateur).
- **Cohérence des chemins** : mélange `href="/"` et `href="index.html"` selon les pages — normaliser pour SEO interne et copie locale.

---

## 4. Questions à vous poser (commanditaire / archiviste)

1. **Nom de domaine et marque finale** : URL canonique, `og:site_name`, et politique **apex vs www** ?
2. **Périmètre éditorial** : l’archive est-elle centrée sur **la personne**, sur **Der Blutharsch**, ou sur **l’ensemble des projets** (priorité navigation) — cf. `QUESTIONS_ARCHIV.md` §5 ?
3. **Naissance (ville)** : conserver uniquement **Austria** jusqu’à preuve primaire, ou autoriser une ville si vous fournissez la source ?
4. **Annonce de décès / SPQR** : disposez-vous d’une **source primaire** de remplacement (cf. `QUESTIONS_ARCHIV.md` §2) ?
5. **Tirage 1996 / picture disc** : afficher un **nombre** ou formulation prudente sans chiffre (cf. §3) ?
6. **ORF / FM4** : exiger trace primaire avant toute phrase sur le site (cf. §4) ?
7. **Slug `stammbaum.html`** : renommer en `projects.html` (301) ou garder l’URL pour la continuité ?
8. **Médias** : budget pour **droits d’images / vidéos** (live, interviews) ou limitation assumée à Commons + bases ouvertes ?
9. **Langue des documents de travail** : les `.md` internes restent-ils en français ou doivent-ils **aligner l’anglais** du site public ?

---

## 5. Corrections recommandées (priorisées)

1. **Retirer toute mention « Degrelle-era »** des chaînes visibles et des traductions ; remplacer par une formulation neutre (« legacy template video files removed ») ou supprimer la phrase si elle n’apporte rien.
2. **Décider du sort des assets `images/degrelle/` et du drapeau SS** : suppression du dépôt public **ou** déplacement strict sous `_legacy/` + clause de déploiement.
3. **Corriger les favicons** : générer `favicon.png` aux tailles déclarées **ou** retirer les balises `<link>` mortes.
4. **Assainir le JSON-LD `Person`** : description strictement vérifiable depuis `SOURCES_ARCHIV.md` (éviter les genres musicaux non sourcés dans le graphe).
5. **Aligner `robots.txt`** sur la structure réelle des dossiers (vérifier existence de `/template/`).
6. **Mettre à jour ou archiver** les markdowns de planification encore calibrés Degrelle (`ARCHIV_PRODUCTION_PLAN.md`, `SEO_PERFORMANCE_ARCHIV.md`, etc.).
7. **Nettoyer `main.css`** : commentaires français / Rex ; règles Germania mortes ou chargement explicite supprimé partout.
8. **Nettoyer `main.js`** : en-têtes de commentaires ; vérifier les chemins d’ancres (`#interviews` vs intitulé « Moving image »).
9. **Réduire la redondance** timeline / bibliographie : rôles distincts (colonnes « événements datés » vs « registre d’outils ») ou renvoi unique.
10. **Décider du bloc `projectsPage` dans `i18n.js`** : intégrer dans une page ou supprimer.
11. **Quand le domaine final est connu** : remplacement global contrôlé + sitemap + `lastmod` + tests Search Console.

---

## Plan de correction proposé (après validation de ce rapport)

**Phase A — Intégrité & risques (1–2 jours)**  
Exécuter C2, C3, C4, C6 et les points **1–5** de la section 5 : le site public ne doit ni pointer vers des ressources 404, ni conserver des symboles exportables non voulus, ni rappeler l’ancien sujet dans l’UI.

**Phase B — Cohérence éditoriale & données (2–4 jours)**  
Traiter I5, I6, I7, I8, I9 ; résoudre les questions §1–§6 de `QUESTIONS_ARCHIV.md` ; ajuster timeline / phases pour **éliminer toute phrase non sourçable** ; enrichir `SOURCES_ARCHIV.md` pour chaque fait affirmé sur la home.

**Phase C — SEO & structured data (1 jour + attente domaine)**  
Canonical, `og:site_name`, image sociale, harmonisation JSON-LD ; publication seulement après **domaine réel**.

**Phase D — Profondeur « archive » (itérations)**  
Discographie tabulaire (releases clés avec MB ID), galerie multi-fichiers avec fiches licence, médias documentés ; option renommage URL `stammbaum` → `projects`.

**Phase E — Documentation & dette**  
Réécrire les `.md` de pilotage ; audit responsive réel (appareils + Lighthouse) ; décision sur `src/` et CSS dashboard.

---

*Fin du rapport. Les entrées « critiques / importants » ci-dessus supplantent l’ancienne version de ce fichier focalisée sur Léon Degrelle.*
