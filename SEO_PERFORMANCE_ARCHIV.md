# SEO, performance, accessibilité et publication — ARCHIV (Albin Julius)

> **Note 2026-05-14 :** ce document conserve une chronique d’audit antérieure (titres, métadonnées, héros). L’état **actuel** des balises sociales, du JSON-LD et du cache-bust est celui des fichiers `*.html` à la racine ; les URL canoniques restent sur `archiv-albinjulius.example` jusqu’au domaine de production.

**Périmètre :** site statique livré en production (`index.html`, `galerie.html`, `stammbaum.html`, `links.html`, `methodologie.html`, `css/`, `js/`, `images/`, `robots.txt`, `sitemap.xml`).  
**Hors périmètre déployable :** `_legacy/` (démo Webflow et sauvegardes), `app/`, `src/` — exclus via `robots.txt` ; ne pas les publier à la racine du domaine.

**Dernière revue technique (agent) :** 2026-05-10.

---

## 1. Résumé des optimisations effectuées

| Domaine | Action |
|---------|--------|
| **SEO / structure** | Vérification des titres, descriptions, canonical, `hreflang` fr / x-default, Open Graph et Twitter Cards sur les 5 pages publiques ; alignement `og:title` galerie sur « Galerie documentaire ». |
| **Données structurées** | Fil d’Ariane JSON-LD harmonisé (« Accueil » en première position sur `galerie.html`, `stammbaum.html`, accueil `CollectionPage`) ; description explicite ajoutée au `WebPage` de la galerie. |
| **Accessibilité** | Balise **`<main id="contenu-principal">`** sur l’accueil (contenu après navigation) et sur `galerie.html` ; lien d’évitement cible `#contenu-principal` (accueil + galerie). Icônes des boutons héros : `alt=""`, `aria-hidden` sur le wrap (icônes masquées par le CSS, rôle décoratif). Bouton langue **FR** : `aria-label="Français"` sur `stammbaum`, `galerie`, `links`, `methodologie`. Bouton « retour en haut » : `data-i18n-attr` sur `galerie` et `stammbaum`. |
| **Performance** | État déjà solide : hero en `<picture>` WebP + JPEG, préchargement LCP (`preload` WebP, `fetchpriority="high"`), grilles galerie en `<picture>` + WebP + `loading="lazy"` + dimensions `width`/`height` pour limiter le CLS ; polices Google en chargement non bloquant (`media="print"` trick + `noscript`). |
| **Cache bust** | `main.css?v=40-seo` sur toutes les pages publiques. |
| **Nettoyage « ancien site »** | Aucune métadonnée « Hardware / Webflow template » dans les pages livrées ; résidus confinés à `_legacy/` (à ne pas déployer). |

---

## 2. État SEO (audit technique)

| Critère | État |
|---------|------|
| Title unique par page | OK |
| Meta description unique | OK (ton sobre, non commercial) |
| H1 unique par page | OK (accueil : hero ; autres pages : titre de page) |
| Hiérarchie titres | OK : sections en `h2`/`h3` sous le `h1` |
| Contenu dupliqué massif | Pas de duplication problématique ; footer répété (usage courant) |
| Slugs / URLs | Fichiers `.html` à la racine, cohérents avec le sitemap |
| Canonical | Présent sur chaque page (domaine `https://leondegrelle.com/`) |
| Pages orphelines | Non : navigation + pied de page + sitemap relient les 5 pages |
| Liens internes | Cohérents (`/`, `index.html#…`, pages secondaires) |
| Liens externes | `rel="noopener noreferrer"` sur les cibles des cartes / sources quand applicable |
| Ancien nom de site / template | Absent des pages livrées |

**Score Lighthouse SEO :** non mesuré en CI (voir §11). À valider localement (objectif ≥ 95).

---

## 3. État performance

**Leviers déjà en place**

- LCP : image hero WebP préchargée, JPEG de repli, dimensions explicites.
- Galleries : WebP préféré, JPEG repli, lazy loading, dimensions.
- JS : `defer`, pas de framework lourd, pas de GSAP sur le site statique.
- CSS : fichier unique `main.css` (non purgé automatiquement ; `normalize.css` minimal).

**Pistes optionnelles (sans changement visuel demandé ici)**

- Réduction manuelle du poids des JPEG « maîtres » encore lourds sur disque (hors WebP) pour utilisateurs sans WebP — faible impact si navigateur prend le WebP.
- **Image Open Graph dédiée** 1200×630 (fichier unique) : améliore le rendu social sans toucher au layout du site (cf. §12).

**Score Lighthouse Performance :** non exécuté dans cet environnement (Lighthouse CLI indisponible). Objectif de référence : ≥ 90 sur connexion câblée après déploiement HTTPS.

---

## 4. État accessibilité

- Landmarks : `banner`, `contentinfo`, `main` (accueil + galerie) ; autres pages disposaient déjà de `<main>`.
- Lien d’évitement visible au focus (`.ej-skip-link`).
- Formulaires : absence de formulaires publics sur les pages livrées.
- Contraste : hérité du thème ARCHIV existant — non re-audité pixel à pixel (recommandé : axe DevTools ou Lighthouse Accessibility).

**Score Lighthouse Accessibility :** à mesurer en local (objectif ≥ 95).

---

## 5. Core Web Vitals (cibles)

| Métrique | Mesures prises dans le code | Reste |
|----------|------------------------------|-------|
| **LCP** | Hero prioritaire + WebP + dimensions | Mesure terrain (CDN, TTFB serveur) |
| **CLS** | `width`/`height` sur images visibles | Vérifier polices (FOUT minimal avec chargement async) |
| **INP** | JS léger, interactions principalement natives | Profiler si modals / lightbox semblent lentes |

---

## 6. Images (audit)

- **Hero** : `Leon_Degrelle_header` — JPG ~270 Ko, WebP ~70 Ko ; ratio stabilisé dans le markup.
- **Galerie** : paires JPG + WebP ; lazy sauf contexte lightbox (chargement à l’ouverture).
- **Alt** : renseignés sur les documents historiques ; pas de remplacement de source historique.
- **OG** : `portrait_main.jpg` partagé — ratio pourrait rogner sur les réseaux (non bloquant SEO classique).

---

## 7. Métadonnées et partage social

- OG / Twitter : présents ; titres et descriptions alignés avec le ton ARCHIV.
- Pas de `meta keywords` (conforme aux bonnes pratiques actuelles).

---

## 8. Données structurées (JSON-LD)

- **Accueil** : `WebSite`, `Person`, `CollectionPage` ; éditeur avec `logo` `ImageObject` ; breadcrumb racine « Accueil ».
- **Pages profondes** : `WebPage` + `BreadcrumbList` ; fil d’Ariane cohérent.
- Pas d’`Article` ni de données excessives non visibles dans la page.

---

## 9. Sitemap, robots, indexation

- `https://leondegrelle.com/sitemap.xml` : 5 URLs (+ accueil) avec `lastmod` 2026-05-10.
- `robots.txt` : `Allow: /` ; `Disallow` pour `/_legacy/`, `/template/`, `/app/`, `/src/`.
- Aucune directive `noindex` sur les pages publiques.
- **Canonical / www** : balises en apex ; la redirection 301 www ↔ apex est **côté hébergeur** (à configurer une fois pour toutes).

---

## 10. Nettoyage de code

- Pas de `console.log` ni `TODO` détectés dans `js/` des pages livrées.
- Pas de `package.json` : pas de build npm à exécuter pour le statique.
- **Fichiers potentiellement superflus en prod** : dossier `_legacy/`, éventuels médias non référencés — à auditer avant upload (documenter plutôt que supprimer si doute).

---

## 11. Tests exécutés

| Test | Résultat |
|------|----------|
| `node --check js/main.js` | OK |
| `node --check js/i18n.js` | OK |
| `npm run lint` / `build` / `test` | N/A (pas de `package.json` à la racine du site statique) |
| Lighthouse (CLI) | Non disponible dans l’environnement d’exécution |

**Recommandé avant mise en ligne :** Lighthouse ou PageSpeed Insights sur l’URL HTTPS finale + crawl manuel des liens du pied de page et de `links.html`.

---

## 12. Erreurs et risques restants

1. **Mesures réelles** : scores et CWV dépendent du serveur (HTTP/2, compression Brotli/Gzip, cache), non vérifiables ici.
2. **Image OG** : portrait peut être rogné ; une bannière 1200×630 dédiée reste l’idéal pour les réseaux.
3. **Liens externes** : pas de crawl automatique ; certains peuvent évoluer (institutions, podcasts).
4. **Déploiement** : risque de publier accidentellement `_legacy/` ou dossiers React si le pipeline ne filtre pas les fichiers.
5. **Analytics** : aucun GTM / GA intégré (volontaire — voir §13).

---

## 13. Analytics et mesure (recommandations sans implémentation)

Conformément aux consignes, **aucun traceur invasif n’a été ajouté**. Si le commanditaire le souhaite ensuite :

- **Google Search Console** : propriété domaine ou préfixe d’URL.
- **Plausible / Matomo / GA4** : à charger de façon documentée et consentement si nécessaire.
- Événements utiles : clics « Consulter PDF », ouvertures lightbox, sorties vers CegeSoma / Archives de l’État, consultation des ancres `#timeline`.

---

## 14. Avant mise en ligne

1. Forcer **HTTPS** et redirection 301 vers la variante canonique (apex vs `www`).
2. Vérifier que le build de déploiement **n’inclut pas** `_legacy/`, `app/`, `src/` si non voulus.
3. Soumettre le sitemap dans la Search Console.
4. Tester les **chemins relatifs** depuis la racine du domaine (pas seulement en `file://`).
5. Exécuter **Lighthouse** sur l’URL de production.

---

## 15. Après mise en ligne (Search Console)

1. **Inspection d’URL** sur `/`, `galerie.html`, `methodologie.html`.
2. Surveiller l’onglet **Couverture** / indexation.
3. Corriger les éventuelles erreurs de lien signalées.
4. Planifier une **revue semestrielle** des métadonnées et des liens institutionnels.

---

*Document généré dans le cadre du passage « agent final » ARCHIV — mémoire, structure, lisibilité et excellence technique.*
