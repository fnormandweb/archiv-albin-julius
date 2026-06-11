# QA — ARCHIV (Albin Julius)

**Date de synthèse :** 2026-05-14  
**Référence :** `PRIORITÉS_CORRECTION_ARCHIV.md` (audit du même jour)

Ce document décrit les **corrections appliquées** dans cette passe et ce qui doit encore être **validé par un humain** (édition, juridique, déploiement).

---

## Corrections appliquées (rapport PRIORITÉS)

| Thème rapport | Détail |
|----------------|--------|
| **Faits / JSON-LD** | Bloc `Person` : la `description` ne prétend plus des genres (« martial / industrial ») comme faits structurés ; elle renvoie aux identifiants publics et à la prudence sur les tags tiers. |
| **Cohérence graphe** | `CollectionPage` sur l’accueil : `isPartOf.name` aligné sur **« ARCHIV — Albin Julius »** (comme le `WebSite`), au lieu du seul hostname. |
| **Résidu UI « Degrelle-era »** | `hostingNote` dans `js/i18n.js` + repli HTML sur `index.html` : formulation neutre sur l’export Webflow et les MP4 locaux non reportés. |
| **Assets sensibles hors `images/` public** | Contenus `images/degrelle/*` et `images/Flag_of_the_Schutzstaffel.svg` déplacés vers `_legacy/images-degrelle-archive/`. Les gabarits `_legacy/template/*.html` pointent vers ce chemin relatif pour éviter des 404 si quelqu’un ouvre encore ces fichiers. |
| **Favicon PNG** | Fichier `images/favicon.png` ajouté (raster 64×64 cohérent avec le SVG) pour honorer les balises `link rel="icon"` PNG existantes. |
| **Commentaires code** | `js/main.js` : entêtes de section renommés **ARCHIV — Albin Julius**. `css/main.css` : retrait de **Germania One** sur `.ej-gen-tree-kicker` ; commentaire pied de page neutralisé. |
| **Dette i18n** | Bloc inutilisé `projectsPage` supprimé de `js/i18n.js`. |
| **Sections timeline / ressources** | Note de lecture des deux colonnes sous les filtres ; ligne bibliographique **2003** complétée (ne pas isoler l’année tant que le doublon RG 2004 n’est pas tranché) ; carte « 2003 » (i18n + HTML) harmonisée avec **QUESTIONS_ARCHIV.md**. |
| **SEO social** | Sur les **cinq** pages publiques : `og:site_name` = **ARCHIV — Albin Julius** ; `og:image:width` / `height` = **676** / **594** (image Commons actuelle). |
| **robots.txt** | `Disallow: /template/` retiré (le template vit sous `_legacy/`, déjà interdit). |
| **Documentation** | `ARCHIV_PRODUCTION_PLAN.md` : synthèse technique réalignée (EN, Albin Julius, chemin `_legacy/…`) + encadré « historique » avant la §3 obsolète. `SEO_PERFORMANCE_ARCHIV.md` : titre + note de lecture. `ARCHIV_EDITORIAL_ARCHITECTURE.md` : « Degrelle-era » → formulation sur le template hérité. |
| **Cache-bust** | `i18n.js?v=16`, `main.js?v=26`, `main.css?v=44-archiv-albin` sur les cinq HTML. |

**Tests automatisés :** aucune suite npm dans ce dépôt statique. **Contrôle effectué :** `node --check` sur `js/i18n.js` et `js/main.js` (syntaxe OK).

---

## Phase 2 — Direction artistique + galerie + projets enrichis (mai 2026)

### Phase 2 · A — Direction artistique (validée)

| Domaine | Modifications appliquées |
|----------|----------------------------|
| **Palette CSS** | Refonte complète des `:root` : noir profond `#050403`, charbon teinté vin (`--ink-2/3/4`), rouge vin très foncé (`--deep-wine` `#1c060a`), papier ivoire (`--paper` `#e8dfcf`), vert toxique rituel (`--accent` `#1f8f38`, `--accent-2` `#2dad48`), jaune venimeux (`--accent-3` `#d6a928`). Bordeaux supprimé partout (variables + `rgba()` hardcodés). |
| **Texture** | Grain SVG (noise data-URI) ajouté à `body::before` pour évoquer l’imprimé, désactivé sous `prefers-reduced-motion`. |
| **Composants** | Cartes (`.ej-leitmotive-card`, `.ej-exil-card`, `.ej-link-card`, `.ej-discography__item`, `.ej-bibliography-item`, `.gallery-card`) : fond noir/charbon, bordure verte sourde au hover. Filtres et boutons (`.ej-filter-btn`, `.button`) : actifs en vert toxique. Kickers `.ej-section-number` : jaune venimeux. |
| **Décoratifs** | Anciens blocs `.ej-rex-flag` / `.ej-ss-emblem` (gradients violet/vert) → noir/wine pour neutraliser tout résidu visuel d’ancien template. |
| **Favicon** | `favicon.svg` redessiné (fond noir, vert toxique + jaune venimeux + ivoire). `favicon.png` régénéré via script Python (sips/qlmanage indisponibles). |
| **Theme color** | `<meta name="theme-color">` `#0a0f0d` → `#050403`. `mask-icon color` violet `#5c3d7a` → vert toxique `#1f8f38`. |

### Phase 2 · B — Section *Visual language* (nouvelle)

| Élément | Détail |
|----------|---------|
| Emplacement | `index.html`, nouvelle section `#visual-language` après les leitmotive, avant la timeline. |
| Contenu | 7 cartes analytiques (champ noir / anonymat / masque / serpent / héraldique / animaux rituels / surface imprimée), kicker en mono jaune, titre serif, glyphe SVG abstrait par carte (pas d’image documentaire). |
| Ton | Documentaire / culturel-historique. Encadré final (`ej-vl-warning`) précisant que l’iconographie n’est **pas** célébrée. |
| i18n | Nouvelle famille `sections.visualLanguage.*` + clé `nav.visualLanguage`. |
| Nav | Lien « Visual language » ajouté au dropdown desktop + mobile sur les **cinq** pages. |
| CSS | Nouvelle section CSS « Phase 2 » dans `css/main.css` (`.ej-visual-language`, `.ej-vl-grid`, `.ej-vl-card`, `.ej-vl-glyph`, `.ej-vl-warning`). |

### Phase 2 · C — Galerie & corpus visuel

| Élément | Détail |
|----------|---------|
| Décision droits | Sur les **28 fichiers** de `images/albin/`, **un seul** (`albin-julius-performance-2021-sneq-cc-by-sa-4-0.jpg`, **CC BY-SA 4.0**) est embarqué dans le HTML public. |
| `galerie.html` | Une seule carte affichée (la photo SneQ), suivie d’un bloc `#gallery-references` avec **8 fiches « Visual reference — image not displayed »** (titre + chemin local + motif), encadré méthodologique en bas. |
| 19 fichiers restants | Conservés dans le dépôt mais **non listés** dans le HTML public ; statut « Référence (non listée publiquement) » dans `SOURCES_ARCHIV.md` §13. |
| CSS | Nouveaux styles `.gallery-references`, `.gallery-reference`, etc. (carrés sombres, bordure pointillée, marqueur jaune venimeux en haut à droite). |

### Phase 2 · D — Projets enrichis (`stammbaum.html`)

| Élément | Détail |
|----------|---------|
| Refonte contenu | Ancien bloc « Stable identifiers » étendu en **6 fiches projets** : *The Moon lay hidden beneath a Cloud*, *Der Blutharsch*, *DBatICotLH*, *Jastreb*, *Pacific 231 vs. Der Blutharsch*, *Fragola Nera*. Chaque fiche : Période / Rôle / Registre esthétique / Sources, plus liens externes (MusicBrainz, Discogs, sites officiels) en mono. |
| Asides | Bloc dédié au label **WKN** (avec liens MusicBrainz / Discogs label) + bloc dédié aux **sites officiels** (`derblutharsch.com`, `derblutharschandtheinfinitechurchoftheleadinghand.com`, `tescogermany.bandcamp.com`). |
| i18n | Bloc `stammbaum` réécrit (clés `personTitle`, `legend.*`, `projects.*`, `labelTitle`, `siteTitle`). |
| CSS | Nouveaux styles `.ej-projects-list`, `.ej-project-card`, `.ej-project-row`, `.ej-project-aside`. |

### Phase 2 · E — Documentation actualisée

| Document | Modifications |
|----------|----------------|
| `SOURCES_ARCHIV.md` | Nouvelle §12 « Sites & catalogues officiels » (Bandcamp Tesco, sites projet, label). Nouvelle §13 « Corpus visuel local » avec inventaire des 28 fichiers (dimensions, catégorie, statut droits, décision). |
| `QUESTIONS_ARCHIV.md` | Nouvelles questions Q6 (droits sur les 27 images sans licence — politique appliquée + provenances à clarifier), Q7 (Bandcamp officiel artiste vs distributeur), Q8 (état du site `derblutharsch.com`). |
| `QA_ARCHIV.md` | Section Phase 2 (le présent bloc). |

### Cache-bust Phase 2

`i18n.js?v=18`, `main.js?v=27`, `main.css?v=49-phase2`.

---

## Phase 2 bis — Section *Interviews* (mai 2026)

| Élément | Détail |
|----------|---------|
| Renommage ancres | Section vidéo `#interviews` → `#moving-image` partout (5 HTML, dropdown, mobile, footer, hero CTA). Ancien `#zitat` (Voices, 2 cartes placeholder) supprimé. |
| Nouvelle section | `#interviews` sur `index.html` — **6 fiches d’interviews** : Occidental Congress (2000), Seidr / Moscou (2002), Chain D.L.K., mica music austria (Clemens Marschall, 2014), Santa Sangre (2014), Garsas / Sound (Mindaugas Peleckis, 2015 *via Wayback Machine*). Chaque fiche : outlet, date, langue, thèmes (descriptif, **pas de citation transcrite**), lien primaire + Wayback quand l’URL est à risque. |
| i18n | Bloc `sections.interviews.*` réécrit pour le print/web (intro, légende, 6 fiches, encart de précaution). Bloc `sections.movingImage.*` créé pour les vidéos (mêmes contenus que l’ancien `sections.interviews.*`). `nav.zitat` → `nav.interviews` (libellé « Interviews »). `nav.videos` → `nav.movingImage`. |
| CSS | Nouvelle famille `.ej-interviews-section`, `.ej-interview-list`, `.ej-interview-card`, `.ej-interview-head`, `.ej-interview-meta`, `.ej-interview-link` (mono jaune sur underline `--accent-3-dim`). Variant `.ej-interview-card--feature` pour la fiche mica (border-left jaune venimeux). |
| Documentation | `SOURCES_ARCHIV.md` §11 bis (tableau corpus interviews + statut HTTP au 14/05/2026 + politique éditoriale + pistes complémentaires explicitement non retenues). `ARCHIV_PRODUCTION_PLAN.md` : encadré Phase 2 bis. |
| Vérifications | `node --check` OK ; **234 clés data-i18n** parcourues sur les 5 pages, **0 manquante** ; HTML parse propre sur les 5 pages. URLs probées en HTTP : 5 × 200, 1 × 404 (radikaliai.lt) → snapshot Wayback substitué. |
| Cache-bust | `i18n.js?v=19`, `main.css?v=50-interviews`. |

---

## À valider humainement

1. **Hébergeur / domaine** : remplacer `https://archiv-albinjulius.example` partout (canonical, Open Graph, Twitter, `sitemap.xml`, `robots.txt`, JSON-LD) par le domaine définitif ; politique apex vs `www` et redirections serveur.
2. **MusicBrainz 2003 vs 2004** : résoudre la divergence de release groups documentée dans `QUESTIONS_ARCHIV.md`, puis ajuster timeline + cartes si besoin.
3. **Déploiement** : confirmer que `_legacy/` (dont `_legacy/images-degrelle-archive/`) n’est **jamais** copié vers la racine publique ; même exigence pour `app/` et `src/` si présents sur le serveur.
4. **Droits et légendes** : galerie, citations Side-Line, tout futur embed vidéo — chaîne de droits et territoires (cf. `methodologie.html` + `SOURCES_ARCHIV.md`).
5. **Image Open Graph** : le portrait 676×594 peut rogner en carte sociale ; option bannière 1200×630 dédiée si le partage l’exige.
6. **Relecture éditoriale** : `ARCHIV_PRODUCTION_PLAN.md` §3+ reste une **cartographie historique** du template d’origine ; ne pas la lire comme description du site livré sans recouper le HTML.
7. **Corpus visuel `images/albin/`** : décider, fichier par fichier, du sort des 27 images non sourcées (recherche de provenance, contact ayants droit, ou retrait du dépôt) — voir `QUESTIONS_ARCHIV.md` Q6.
8. **Bandcamp officiel artiste** : confirmer qu’il n’en existe pas (cf. Q7) ; sinon le lier dans `stammbaum.html`, footer, et `links.html`.
9. **`derblutharsch.com`** : auditer ponctuellement (état, last-modified) et décider d’un éventuel disclaimer à côté du lien (cf. Q8).

---

*Fin du document QA.*
