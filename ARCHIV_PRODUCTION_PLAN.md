# ARCHIV — Plan de production (Albin Julius)

**Date du document :** 14 mai 2026  
**Phase couverte :** audit et planification (Phase 1). Aucune modification majeure de contenu n’a été entamée avant la rédaction de ce plan.  
**Sujet cible :** Albin Julius — archive en **anglais**, ton muséal et éditorial, sources exigibles.

---

## 1. Synthèse de l’audit

Le dépôt est un site **statique multipage** (HTML, CSS, JavaScript) avec une couche **i18n** **monolingue anglaise** (`js/i18n.js`). Les **cinq pages publiques** à la racine ciblent **Albin Julius** ; les URL canoniques et Open Graph utilisent encore l’hôte réservé **`archiv-albinjulius.example`** (à remplacer avant indexation réelle).

Des **strates héritées** d’un template Webflow antérieur subsistent sous **`_legacy/`** (y compris médias et symboles déplacés hors de `images/` public vers `_legacy/images-degrelle-archive/`). Elles ne doivent **pas** être publiées à la racine du domaine.

---

## 2. Structure technique actuelle

| Couche | Rôle | Fichiers / dossiers clés |
|--------|------|---------------------------|
| Pages HTML | Contenu principal, JSON-LD, hero, sections ancres | `index.html`, `stammbaum.html`, `galerie.html`, `links.html`, `methodologie.html` |
| Styles | Thème sombre fixe, navigation, timeline, leitmotive, responsive | `css/normalize.css`, `css/main.css` (réf. cache-bust `?v=41-nav`) |
| Comportement | Thème, navigation ancres, filtres chronologie/bibliographie, lightbox timeline, lecteur vidéo, animations scroll | `js/main.js` (réf. `?v=24`) |
| Textes UI | Clés `data-i18n` → objet `translations.en` | `js/i18n.js` |
| Médias racine | Hero Albin, galerie, marque | `images/albin/`, `images/galerie/`, etc. ; symboles / médias hérités du template Webflow isolés sous `_legacy/images-degrelle-archive/` (ne pas publier) |
| SEO / déploiement | Sitemap, robots, en-têtes HTTP (Netlify) | `sitemap.xml`, `robots.txt`, `_headers` |
| Héritage | Non servi comme site principal ; réf. historique | `_legacy/` (Webflow, templates, `main.css.backup-*`) |
| Application secondaire | Maquettes dashboard (hors flux HTML principal ; **pas de `package.json`** à la racine du workspace) | `app/dashboard/`, `src/mock/archiv.ts`, `src/styles/archiv-dashboard.css` |

**Constat :** le cœur publiable est le **site statique** à la racine. Le dossier `app/` est **désindexé** dans `robots.txt` (`Disallow: /app/`) mais reste dans le dépôt : à clarifier (supprimer, déplacer, ou intégrer dans un monorepo avec build).

---

**Historique (pré-pivot) :** les sous-sections 3.1–3.5 ci-dessous décrivent encore l’ancienne cartographie Webflow / sujet précédent. L’état **implémenté** correspond aux cinq pages HTML anglaises listées en §2 (Albin Julius).

---

## Mises à jour Phase 2 (mai 2026)

| Bloc | État |
|------|------|
| Direction artistique | **Livrée** : palette refondue (noir profond, charbon vin, vert toxique, jaune venimeux, ivoire), grain SVG sur `body::before`, cartes sombres avec hover vert, kickers en jaune, favicon redessiné. Bordeaux et marqueurs violet/vert d’ancien template éliminés. Détails dans `QA_ARCHIV.md` (Phase 2 · A). |
| Section *Visual language* | **Livrée** sur `index.html` (`#visual-language`) — 7 motifs analytiques (champ noir / anonymat / masque / serpent / héraldique / animaux rituels / surface imprimée), glyphes SVG abstraits, encadré de précaution éditoriale. Lien ajouté à la nav (desktop dropdown + mobile) sur les **cinq** pages. |
| Galerie | **Livrée** sur `galerie.html` : seule la photo SneQ (CC BY-SA 4.0) est embarquée ; **8 fiches « Visual reference — image not displayed »** listent les visuels documentaires (motif, chemin local, statut « Rights to be cleared »). Politique appliquée à l’ensemble du corpus de 28 fichiers. |
| Œuvres & projets | **Livrée** : refonte de `stammbaum.html` en **6 fiches projets** (TMLHBAC, Der Blutharsch, DBatICotLH, Jastreb, Pacific 231 vs DB, Fragola Nera) + asides label WKN et sites officiels. Chaque fiche : Période / Rôle / Esthétique / Sources + liens externes. |
| Documentation | **Livrée** : `SOURCES_ARCHIV.md` §12 (Bandcamp/sites officiels) + §13 (corpus visuel local, 28 fichiers) ; `QUESTIONS_ARCHIV.md` Q6/Q7/Q8 (droits images, Bandcamp officiel, état `derblutharsch.com`) ; `QA_ARCHIV.md` section Phase 2. |
| Cache-bust | `i18n.js?v=18`, `main.js?v=27`, `main.css?v=49-phase2` — appliqué uniformément. |

### Phase 2bis — Section *Interviews* (mai 2026)

| Élément | État |
|---------|------|
| Renommage ancres | Section vidéo `#interviews` → `#moving-image` (libellé inchangé « Moving image »). Ancien `#zitat` (Voices) supprimé. |
| Nouvelle section | `#interviews` (Section 05) sur `index.html` — **6 fiches d’interviews** sourcées (Occidental Congress 2000, Seidr Moscou 2002, Chain D.L.K., mica music austria 2014, Santa Sangre 2014, radikaliai.lt 2015 *via Wayback*). Chaque fiche : source / date / langue / thèmes / lien primaire + Wayback si à risque. |
| i18n | `nav.zitat` → `nav.interviews` (libellé « Interviews »). `nav.videos` → `nav.movingImage` (libellé inchangé). Bloc `sections.interviews.*` réécrit pour le print/web ; bloc `sections.movingImage.*` créé pour les vidéos. |
| Documentation | `SOURCES_ARCHIV.md` §11 bis : tableau du corpus retenu avec statut HTTP au 14/05/2026 (5 vivantes, 1 récupérée via Wayback). |
| Cache-bust | `i18n.js?v=19`, `main.css?v=50-interviews`. |
| Note historique | La cartographie ci-dessous mentionne encore `#zitat` au regard de la Section 05 — c’est l’**état du template d’origine** ; l’implémentation actuelle est `#interviews` (publications imprimées / web). |

## 3. Cartographie des pages et des sections

### 3.1 `index.html` (page d’accueil)

| Zone | ID / repère | Contenu actuel à remplacer | Mécanisme |
|------|-------------|----------------------------|-----------|
| `<head>` | — | `title`, meta description, Open Graph, Twitter, `canonical`, `hreflang`, `theme-color`, JSON-LD (`WebSite`, `Person`, `CollectionPage`) | HTML direct |
| Barre de navigation | `.ej-site-nav` | Logo (emblème Rex + typo « Germania One » + nom), libellés FR | HTML + `data-i18n` |
| Hero | `.hero-section` | Image WebP/JPG Degrelle, H1, sous-titre, plage de dates 1906–1994, CTA | HTML + i18n |
| Section 00 | `#leitmotive` | Quatre cartes thématiques (journalisme, Rex, Front de l’Est, exil) ; icônes dont drapeau Rex et emblème SS (CSS) | HTML + i18n + `main.css` (classes `.ej-rex-flag`, `.ej-ss-emblem`) |
| Section 01 | `#timeline` | Filtres « Chronologie / Bibliographie », liste d’entrées timeline (~25 `.ej-timeline-item` repéré), couvertures / avatars | HTML (structure) ; textes mélangés HTML / attributs |
| Section 02 | `#interviews` | Blocs vidéo (chemins `video/*.mp4`, posters) | HTML + i18n (titres, alts) |
| Section 03 | `#galerie` | Aperçu renvoyant vers `galerie.html` | HTML + i18n |
| Section 04 | `#exil` | Cartes « Exil & Espagne » (hautement spécifiques à Degrelle) | HTML + i18n |
| Section 05 | `#zitat` | Citations | HTML + i18n |
| Pied de page | — | Description archive, lien méthodologie, plan du site, mentions légales / disclaimer | HTML + i18n |

### 3.2 `stammbaum.html`

Page **« Famille & généalogie »** : arbre HTML, listes d’ascendance, fratrie, mariages, descendance — entièrement calquée sur la biographie Degrelle.

**Décision éditoriale à trancher (voir §8) :** réaffecter cette page (ex. « Collaborateurs & projets », « Labels & formations », « Réseau créatif ») ou la renommer / fusionner avec une autre rubrique pour Albin Julius, sans la laisser comme généalogie factice.

### 3.3 `galerie.html`

Galerie documentaire : métadonnées + grille d’images ; contenu Degrelle / rexisme.

### 3.4 `links.html`

Cartes de liens vers institutions, bibliographie, médias — toutes orientées recherche historique belge.

### 3.5 `methodologie.html`

Cadre méthodologique (provenance médias, citations, PDF) — à réécrire pour le **nouveau cadre de sources** (musique, entretiens, maisons de disques, archives institutionnelles, Commons sous licence explicite).

---

## 4. Fichiers et emplacements à modifier (plan de remplacement)

### 4.1 Obligatoires pour le pivot sujet + langue

- Toutes les pages listées en §3 (`*.html`).
- `js/i18n.js` : passage à l’**anglais** comme langue par défaut (soit nouvelle clé `en` + `document.documentElement.lang = "en"`, soit remplacement des chaînes `fr` — à décider techniquement en minimisant la dette).
- `js/main.js` : commentaires et tout libellé injecté en dur ; vérifier cohérence avec les nouveaux IDs de section si renommage.
- `css/main.css` : **retirer ou remplacer** les arrière-plans et symboles liés à Rex / SS / Légion ; ajuster la palette (brief : noir, vert, violet — à calibrer sur couvertures sourcées, pas sur spéculation).
- `sitemap.xml`, `robots.txt` : domaine, chemins, `hreflang` en `en` (ou `en-GB` / `en-US` selon choix éditorial).
- `images/favicon.svg`, `favicon.png`, éventuellement `mask-icon` (couleur actuelle `#b3141e` liée à l’identité actuelle).

### 4.2 Médias et actifs

- Dossier public `images/degrelle/` : **retiré** ; contenus sensibles déplacés sous `_legacy/images-degrelle-archive/` (hors build public).
- Supprimer ou archiver hors dépôt public les fichiers **non utilisés** nommés Jünger / EJ / SS / Rex si non nécessaires au nouveau site (réduit risque juridique et confusion).
- `video/` : remplacer les MP4 et posters par des contenus **dont la provenance et les droits** sont documentés dans `SOURCES_ARCHIV.md` (Phase 2).
- `images/videos/` : contenu Jünger — **exclure** du site public ou documenter explicitement.

### 4.3 Documentation existante à réaligner ou régénérer plus tard

- `QA_ARCHIV.md`, `SEO_PERFORMANCE_ARCHIV.md`, `README-SEO.md`, `PRIORITÉS_CORRECTION_ARCHIV.md` : actuellement alignés sur l’ancien sujet ; mise à jour en **Phase 7–9** ou lors des passes SEO.

### 4.4 Optionnel / périphérique

- `app/dashboard/*`, `src/mock/archiv.ts` : mock générique ; renommer libellés si le dashboard reste dans le dépôt, ou exclure du périmètre « site public ».

---

## 5. Données nécessaires (à produire en Phases 2–3)

Sans inventer de faits, la production devra s’appuyer sur des sources vérifiables pour :

- Identité légale / de scène, naissance, formations, villes de résidence ou pays **uniquement si attestés**.
- Chronologie des projets (**Der Blutharsch**, **Wir rufen deine Wölfe**, collaborations, labels : **Wir Kapitulieren Niemals**, etc.) avec dates de sortie vérifiables (discographies officielles, bases de données musicales institutionnelles ou maisons d’édition, pas forums).
- **Discographie et publications** (livres, artbooks si existants) avec références bibliographiques.
- **Contexte** : scène industrielle / expérimentale / néofolk (formulation prudente, non sensationnaliste, sans emprunt à Wikipédia seul).
- **Visuels** : portraits ou photos sous licence claire (Commons avec notice de licence, promo label, entretiens télévisuels avec droit d’usage à confirmer).
- **Citations** : uniquement si traçables à une source primaire ou secondaire fiable (transcription d’entretien, citation d’ouvrage avec page).

Les lacunes iront dans `QUESTIONS_ARCHIV.md` ; les choix sobres documentés dans `NOTES_ARCHIV.md` (à créer en Phase 2–3 si absent).

---

## 6. SEO, accessibilité et métadonnées

À traiter page par page en **Phase 6** :

- Un `title` et une meta description **uniques** par page, en anglais.
- Hiérarchie **H1 unique** par page, H2/H3 cohérents avec la structure actuelle.
- `og:image` : URL finale du domaine de publication (à définir) + images avec droits clairs.
- JSON-LD : mettre à jour `@type: Person` (ou `MusicGroup` si l’archive couvre principalement un projet collectif — **décision éditoriale**).
- Vérifier l’absence de références résiduelles à **Léon Degrelle**, **leondegrelle.com**, **Rex**, **Waffen-SS**, **Ernst Jünger**.
- Liens externes : pas de liens cassés après remplacement des cartes « Liens ».

---

## 7. Risques et incertitudes

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Faits biographiques peu couverts par des sources institutionnelles | Contenu mince ou erreurs | Prioriser discographie / entretiens / notices d’éditeur ; signaler lacunes dans `QUESTIONS_ARCHIV.md` |
| Droits d’image et de vidéo (promo, concerts, couvertures) | Publication illégale ou retrait | Inventaire licence par licence dans `SOURCES_ARCHIV.md` ; alternatives (typographie, motifs abstraits sous licence ou création originale) |
| Symbolique visuelle (croix de fer, champignons) | Glissement vers esthétique « merch » ou connotations inappropriées | Traiter comme **motifs documentés** dans le corpus visuel de l’artiste, avec contexte muséal, pas comme décoration |
| Anciens actifs politiques / militaires dans le CSS et les SVG | Crédibilité ARCHIV détruite, risque réputationnel | Suppression systématique des assets Rex/SS ; refonte des classes `.ej-rex-flag`, `.ej-ss-emblem` |
| Langue du site (EN) vs règle interne « qualité du français » en Phase 7 | Incohérence procédurale | **Phase 7** : contrôle en **anglais** (orthographe, ton) ; ajuster `QA_ARCHIV.md` en conséquence |
| Absence de `package.json` pour le dashboard | Tests / build incomplets | Phase 8 : se concentrer sur validation statique (lint HTML si outil ajouté, ou contrôle manuel + serveur local) |

---

## 8. Décisions éditoriales importantes — questions pour le commanditaire

1. **URL canonique et nom du site** : remplacer `leondegrelle.com` par quel domaine final ? (impacte `canonical`, `og:url`, sitemap, JSON-LD.)
2. **Page `stammbaum.html`** : conserver l’URL et le gabarit d’« arbre » pour un **réseau de collaborations**, ou renommer le fichier (slug) pour coller à l’anglais et au sujet musical ?
3. **Typographie du mot-marque** : conserver **Germania One** (forte connotation gothique / propagande visuelle européenne) ou passer à une serif plus neutre (Fraunces seul) pour un ton plus « musée d’art moderne » ?
4. **Périmètre du sujet** : archive centrée sur **la personne** (Albin Julius) uniquement, ou sur **l’ensemble des projets** (Der Blutharsch comme entité principale + projets satellites) avec pages dédiées plus tard ?
5. **Vidéos** : souhaitez-vous des extraits hébergés localement (comme aujourd’hui), ou intégration **embed** depuis des plateformes officielles (YouTube / Bandcamp) pour réduire la charge juridique sur les fichiers binaires ?

---

## 9. Ordre d’exécution recommandé (Phases 2 à 9)

1. **Phase 2** — Recherche documentaire et rédaction de `SOURCES_ARCHIV.md` (sources primaires/secondaires crédibles uniquement).
2. **Phase 3** — Architecture narrative (plan de textes : résumé, longue bio, périodes, thèmes, héritage, bibliographie) ; pas encore de commit massif sur le HTML.
3. **Phase 4** — Remplissage : i18n EN → HTML → navigation ; retrait des symboles et médias inadéquats ; renommage dossiers images.
4. **Phase 5** — Images optimisées, alts, légendes sourcées ; mise à jour continue de `SOURCES_ARCHIV.md`.
5. **Phase 6** — SEO discret, cohérence des slugs, liens internes, `lang="en"`.
6. **Phase 7** — `QA_ARCHIV.md` : relecture anglaise, cohérence chronologique, traçabilité des faits.
7. **Phase 8** — Tests locaux (serveur statique), console JS sans erreur, vérification responsive ; corriger les régressions.
8. **Phase 9** — Livraison : liste des pages, composants, données, images, sources, questions ouvertes, tests effectués.

---

## 10. Résumé de la Phase 1 (livrable demandé)

- **Structure actuelle** : site statique multipage ARCHIV-like, thème sombre, sections numérotées, timeline riche, galerie, liens, méthodologie, page « arbre » ; i18n centralisé en français ; médias dans `images/` et `video/`.
- **Sections à remplacer** : l’intégralité des textes, métadonnées, JSON-LD, hero, leitmotive, timeline, médias, exil, citations, liens, généalogie, méthodologie ; ainsi que les **symboles et fichiers** liés au sujet Degrelle et aux résidus Jünger.
- **Fichiers qui seront modifiés** : tous les `*.html` racine, `js/i18n.js`, `js/main.js`, `css/main.css`, `sitemap.xml`, `robots.txt`, favicons et masse d’assets sous `images/` et `video/`, plus documentation QA/SEO si le périmètre l’inclut.
- **Données nécessaires** : biographie et chronologie sourcées, discographie, contexte de scène, visuels licenciés, éventuelles citations traçables.
- **Risques** : droits, minceur documentaire, résidus idéologiques dans les assets techniques, cohérence langue/QA.
- **Ordre d’exécution** : recherche et sources → architecture éditoriale → remplacement contenu + médias → SEO → QA → tests → livraison.

---

*Document produit dans le cadre de la Phase 1 ; les phases 2 à 9 suivent ce plan jusqu’à révision explicite du commanditaire.*
