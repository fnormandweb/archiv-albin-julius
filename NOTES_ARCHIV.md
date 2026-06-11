# ARCHIV — Notes de production (choix documentés)

**Dernière mise à jour :** 14 mai 2026

---

## Dates de vie (référence de travail)

Pour toute chronologie et tout schéma JSON-LD **Person**, les dates suivantes sont retenues comme **référence croisée** MusicBrainz + Encyclopaedia Metallum + Side-Line :

- **Naissance :** 1967-10-16  
- **Décès :** 2022-05-04  

Toute divergence future sur le fuseau horaire ou l’heure exacte du décès sera traitée au cas par cas (Side-Line : « le matin du 4 mai » — sans précision de fuseau).

---

## Nom sur l’archive

- **Nom d’usage (site) :** Albin Julius (conforme au brief et aux bases musicales).  
- **Nom légal recensé :** Albin Julius Martinek (Encyclopaedia Metallum ; SR-Archiv). À afficher dans la biographie si la politique éditoriale ARCHIV impose le nom civil en sous-titre.

---

## Ville : distinction groupe / personne

MusicBrainz associe le **groupe** Der Blutharsch à **Vienne** (`begin-area` / `end-area` : Wien). Cela **ne** constitue pas, sans autre preuve, une attestation que la personne est née à Vienne. Le site évitera la confusion dans les textes.

---

## Langue du site

Le contenu public cible l’**anglais** (brief). Les présents fichiers de travail (`SOURCES_ARCHIV.md`, etc.) peuvent rester en **français** pour la coordination interne, sauf instruction contraire du commanditaire.

Les **cinq pages HTML** à la racine utilisent désormais des **repli 100 % anglais** (texte entre balises, commentaires HTML, libellés `aria` / skip link) : même sans exécution de `i18n.js`, l’affichage reste anglais.

---

## Source exclue (spam)

L’URL `https://www.spqrlabel.com/albin/` n’est **pas** utilisée comme preuve (voir `QUESTIONS_ARCHIV.md` §2).

---

## Domaine canonique (placeholder)

Les pages HTML, `sitemap.xml` et `robots.txt` utilisent pour l’instant **`https://archiv-albinjulius.example`** (TLD réservé `.example`). Remplacer par le domaine de production avant mise en ligne et vérifier les balises `canonical`, Open Graph et JSON-LD.
