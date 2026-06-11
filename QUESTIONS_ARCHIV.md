# ARCHIV — Questions ouvertes (validation humaine)

**Dernière mise à jour :** 14 mai 2026

---

## 1. Lieu de naissance (ville)

Plusieurs bases publiques indiquent seulement **Autriche** (ex. MusicBrainz pour la personne : `begin-area` = pays). La mention d’une **ville précise** (souvent « Graz » sur des pages grand public) **n’a pas été retenue** dans les sources de Phase 2 sans attestation institutionnelle ou primaire vérifiable.

**Question :** Souhaitez-vous que l’archive affiche uniquement « Austria », ou disposez-vous d’une source primaire (document d’état civil, notice d’institution, entretien publié avec lieu explicite) pour une ville ?

---

## 2. Annonce de décès — label SPQR

Side-Line indique que le label **SPQR** a annoncé le décès ; en **mai 2026**, l’URL `https://www.spqrlabel.com/albin/` renvoie vers un contenu manifestement **non lié** au label (spam / détournement de domaine).

**Question :** Avez-vous un communiqué archivé (PDF, capture d’écran authentifiée, message sur réseau social officiel du label) à citer à la place ? Sinon, le site ne citera **que** les sources secondaires vérifiables (ex. Side-Line + bases de données).

---

## 3. Détails de première sortie (1996)

Side-Line mentionne un premier **picture disc** autotitré, **250 exemplaires** (1996). À **croiser** avec une fiche de release primaire (label, matrice, Discogs avec scan) avant de figer le chiffre « 250 » dans une timeline « musée ».

**Question :** Exiger la mention exacte du tirage sur la page publique, ou formuler prudemment (« limited first pressing », sans chiffre) tant que la fiche matérielle n’est pas en main ?

---

## 4. ORF / FM4 (diffusion radiophonique)

Side-Line **cite** Audioglobe / une conversation sur le fait qu’**ORF FM4** aurait diffusé la musique après des années de boycott. C’est une **information de troisième main** dans l’article.

**Question :** Faut-il chercher une trace **primaire** (grille de programmes ORF, communiqué ORF, archive audio) avant d’inclure cette phrase sur le site, ou l’omettre entièrement ?

---

## 5. Périmètre de l’archive (personne vs projets)

Le brief peut se lire comme « figure publique + design autour des albums ». SR-Archiv et Metal Archives listent plusieurs **projets** (Der Blutharsch, collaboration Pacific 231, Jastreb, etc.).

**Question :** L’accueil et la navigation doivent-ils être centrés sur **Albin Julius** avec des sous-pages projets plus tard, ou sur **Der Blutharsch** comme entité principale dès la v1 ?

---

## 6. Droits sur le corpus visuel local (`images/albin/`)

Le dépôt contient **28 fichiers** dans `images/albin/`. **Un seul** (`albin-julius-performance-2021-sneq-cc-by-sa-4-0.jpg`) a une chaîne de droits documentée (Wikimedia Commons, **CC BY-SA 4.0**, auteur SneQ). Les **27 autres** (portraits studio, photos de scène, plates artwork, wordmarks de projet, photos privées) n’ont **pas** d’origine ni de licence vérifiées au moment de cette rédaction (mai 2026). Voir l’inventaire complet en section 13 de `SOURCES_ARCHIV.md`.

**Décision provisoire (Phase 2) :** ne **pas** afficher publiquement les 27 fichiers ; en lister **8** sur `galerie.html` comme « Visual references — image not displayed » (titre + chemin local + motif), et garder les **19** restants hors HTML public.

**Questions ouvertes :**
- Souhaitez-vous lancer une **recherche de provenance** (reverse image search ; contact d’ayants droit ; demande au label / au studio photo identifié) pour basculer certaines images en « affichables » avec licence ?
- Pour les wordmarks de projet (`DerBlutharschSchriftzug.gif`, `DBatucotlhSchritzug.gif`), peut-on s’appuyer sur la doctrine d’**usage rituel d’identité de marque dans un contexte documentaire** (citation d’identité visuelle + crédit au label), ou rester strict tant qu’aucun accord écrit n’a été obtenu ?
- Les fichiers manifestement **privés** (`Beachlife1.jpg`, `IMG_3907.jpg`, `albin_boat.jpg`, `albin_friend.jpeg`, `on_the_road.jpg`) doivent-ils être **retirés du dépôt** ou conservés hors-HTML pour archive interne ?

---

## 7. Bandcamp officiel — distinction artiste vs distributeur

Recherche menée le **14 mai 2026** : aucun **Bandcamp officiel d’artiste** ne semble exister pour Der Blutharsch ou Albin Julius. La distribution Bandcamp identifiée passe par **Tesco Distribution Germany** (`tescogermany.bandcamp.com`), qui héberge plusieurs albums tardifs (ex. *The Cosmic Trigger*, *Der Blutharsch + Aluk Todolo*).

**Questions ouvertes :**
- Confirmer (ou infirmer) qu’il n’existe **pas** de page Bandcamp d’artiste tenue par WKN / l’ayant droit. Si elle existe, la lier en priorité.
- Sur le site, formulation actuelle « Bandcamp (Tesco distribution) » — **valider** que cette nuance est suffisante pour ne pas laisser entendre une boutique artiste officielle.

---

## 8. État opérationnel du site officiel `derblutharsch.com`

L’URL `http://www.derblutharsch.com/Foyer/Available/available.html` est référencée par les bases publiques (Wikipedia, Discogs) et apparaît en résultats de recherche en mai 2026, mais elle est en **HTTP non sécurisé** et son rythme de mise à jour réel n’a pas été audité depuis le pivot du site.

**Questions ouvertes :**
- Audit ponctuel : contenu publié, last-modified, présence d’un mainteneur identifiable.
- Politique : conserver le lien dans le footer / `links.html` / `stammbaum.html`, ou afficher un avertissement « site officiel — état non audité depuis [date] » à côté du lien ?
