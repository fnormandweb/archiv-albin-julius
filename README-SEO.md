# SEO — ARCHIV / Albin Julius (`archiv-albinjulius.example`)

Site statique **monolingue anglais** : `index.html`, `galerie.html`, `stammbaum.html` (contenu « projects & collaborations »), `links.html`, `methodologie.html`. Le module `i18n.js` n’expose que la locale **`en`** ; les attributs `data-i18n` servent surtout de structure DOM et de repli texte.

## Domaine canonique (placeholder)

- **URL de travail** : `https://archiv-albinjulius.example/` (TLD `.example` réservé — **à remplacer** avant mise en ligne, puis aligner `canonical`, Open Graph, Twitter et JSON-LD).
- Si vous utilisez **www**, configurez une **redirection 301** cohérente (apex ↔ www) et mettez à jour toutes les URL absolues du dépôt.

## Fichiers utiles

| Fichier | Rôle |
|--------|------|
| `robots.txt` | `Allow` racine, exclusions éventuelles (`/_legacy/`, etc.), lien vers le sitemap |
| `sitemap.xml` | **5** pages publiques + `hreflang` **en** / `x-default` |
| `index.html` | Métadonnées + JSON-LD `WebSite`, `Person`, `CollectionPage` |
| Autres `.html` | Titres, descriptions, OG/Twitter, JSON-LD `WebPage` / fil d’Ariane |

## Bonnes pratiques après mise en ligne

1. **Google Search Console** : ajouter la propriété HTTPS définitive, vérifier le domaine, soumettre `sitemap.xml`.
2. **Inspection d’URL** : accueil + `links.html` + `methodologie.html`.
3. **Image Open Graph** : actuellement `images/albin/albin-julius-performance-2021-sneq-cc-by-sa-4-0.jpg` (Commons, SneQ, CC BY-SA 4.0). Pour un ratio carte réseau (~1,91:1), prévoir une image **1200×630** dédiée si besoin et mettre à jour `og:image` / `twitter:image` (et dimensions si vous les exposez).
4. **HTTPS** : certificat valide ; pas de contenu mixte.
5. **Liens internes** : chemins relatifs (`index.html#…`) — cohérents avec un hébergement à la racine du domaine.

## Structured data (JSON-LD)

- **WebSite** + **Organization** : identité ARCHIV — Albin Julius ; pas de `SearchAction` factice.
- **Person** : Albin Julius ; `sameAs` vers MusicBrainz, SR-Archiv, Wikidata (voir `SOURCES_ARCHIV.md`).
- **WebPage** / **CollectionPage** : `breadcrumb`, `isPartOf`, `inLanguage: en-GB` (ou `en` selon les pages).

## À ne pas indexer

Le dossier `_legacy/` et d’éventuels brouillons (`app/`, `src/`) doivent rester **hors** déploiement public ou être listés en **Disallow** dans `robots.txt`.
