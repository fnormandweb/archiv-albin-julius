/**
 * ARCHIV — Albin Julius
 * English UI strings (single locale). data-i18n keys unchanged for DOM compatibility.
 */
const translations = {
  en: {
    skipLink: "Skip to main content",
    nav: {
      start: "Home",
      familie: "Projects & collaborations",
      werkZeit: "Work & time",
      leitmotive: "Motifs",
      zeitleiste: "Timeline & resources",
      medien: "Media",
      videos: "Moving image",
      movingImage: "Moving image",
      galerie: "Gallery",
      exil: "Phases & presentation",
      links: "Sources",
      interviews: "Interviews",
      discography: "Discography indexes"
    },
    hero: {
      title: "Albin Julius — life, work, and public record.",
      subtitle: "A documentary music archive.",
      ctaTimeline: "Explore the timeline",
      ctaInterview: "Moving image (limited)"
    },
    sections: {
      leitmotive: {
        number: "SECTION 00",
        title: "MOTIFS",
        subtitle: "Austrian industrial music, documented routes"
      },
      leitmotiveCards: {
        krieg: {
          title: "Archives & identity",
          desc: "Indexed as Albin Julius Martinek<br>in SR-Archiv (Austrian popular music)<br>with stable identifiers (ISNI, MusicBrainz)."
        },
        technik: {
          title: "The Moon lay hidden beneath a Cloud",
          desc: "Ensemble active 1992–1999 (MusicBrainz).<br>Der Blutharsch began in 1996 as a parallel project<br>(Side-Line; release-level credits to be expanded)."
        },
        natur: {
          title: "Der Blutharsch",
          desc: "Austrian group 1996–2022 (MusicBrainz).<br>Documented locality: Vienna for the group entity.<br>Primary outlet: WKN (Austria)."
        },
        waldgaenger: {
          title: "Labels & autonomy",
          desc: "WKN — catalogue hub on MusicBrainz.<br>HauRuck! cited in specialist press (Side-Line);<br>operational detail only when separately sourced."
        }
      },
      werkZeit: {
        number: "SECTION 01",
        title: "WORK & TIME",
        subtitle: "Chronology and documentary resources"
      },
      discography: {
        kicker: "Within work & time",
        title: "Discography indexes",
        intro: "Official catalogue pages on Discogs and MusicBrainz. This site does not mirror cover art or track lists; open each host to review releases and verify credits before reuse.",
        rows: {
          db: {
            name: "Der Blutharsch",
            note: "Discogs artist hub; MusicBrainz group entity (aliases include the extended English name used from 2010 onward)."
          },
          moon: {
            name: "The Moon lay hidden beneath a Cloud",
            note: "Discogs artist hub; MusicBrainz group span 1992–1999 — per-release credits still need a dedicated pass."
          },
          wkn: {
            name: "WKN (label)",
            note: "Discogs label entry; MusicBrainz label anchor used elsewhere on this site."
          },
          person: {
            name: "Albin Julius (person credits)",
            note: "Discogs artist hub for cross-project appearances; pair with the MusicBrainz person URI for life dates and ISNI."
          }
        }
      },
      movingImage: {
        number: "SECTION 02",
        title: "MOVING IMAGE",
        subtitle: "Rights-cleared material only",
        introNote: "This archive does not host historical MP4 mirrors from the previous template. Embeds will be added once each file’s chain of rights is documented in SOURCES_ARCHIV.md.",
        hostingNote: "Local MP4 mirrors from the legacy Webflow export were not carried over. When a moving-image file is embedded, it will be listed with rights in SOURCES_ARCHIV.md and on the methodology page.",
        cardSourcesTitle: "Start with the source index",
        cardSourcesDesc: "MusicBrainz entries, SR-Archiv, and press documentation linked from Sources & links.",
        cardSourcesMeta: "Reference · 2026",
        cardSourcesPosterAlt: "ARCHIV sources overview (decorative)",
        cardMethodTitle: "Methodology",
        cardMethodDesc: "How we handle media, captions, and uncertainty.",
        cardMethodMeta: "Site policy · HTML",
        cardMethodPosterAlt: "Methodology page (decorative)",
        sourcesCta: "Open Sources & links"
      },
      galerie: {
        number: "SECTION 03",
        title: "GALLERY",
        subtitle: "Rights-tracked images — full sheet on the Gallery page",
        moreButton: "Full gallery →",
        pageSubtitle: "Selected images from the working corpus, with rights status declared per item.",
        pageNote: "Thirteen images are displayed below as part of an editorial selection. Only the SneQ performance photograph has a fully documented licence (CC BY-SA 4.0, Wikimedia Commons). The other twelve are kept here for documentary purposes; their chain of rights is not yet cleared and is flagged on every caption. If you are a rights-holder and want an image removed or correctly credited, see the methodology page.",
        captionLicensed: "Photo: SneQ \u00b7 CC BY-SA 4.0 (Wikimedia Commons)",
        captionUnverified: "Rights to be cleared \u00b7 documentary use",
        gallery: {
          sneq: "Performance \u2014 2021 (photo SneQ)",
          rabbit: "Portrait with white rabbit (studio)",
          serpent: "<em>Serpenta</em> \u2014 artwork crop",
          gods: "<em>Amongst the Gods</em> \u2014 artwork plate",
          paradies: "<em>Paradies</em> \u2014 landscape plate",
          spomenik: "Spomenik \u2014 monument / location",
          jastreb: "Jastreb \u2014 collaboration period",
          bruxels: "Bruxelles \u2014 stage, \u201Cwaiting for the night\u201D",
          rummel: "Portrait \u2014 Rummel / Sunlight period",
          lockenwickler: "Portrait \u2014 \u201CLockenwickler\u201D",
          sweet: "Portrait \u2014 \u201CSweet Albin\u201D",
          al2010: "Portrait \u2014 ca. 2010",
          dog: "Portrait with dog (ritual animal motif)"
        }
      },
      exil: {
        number: "SECTION 04",
        title: "PHASES & PRESENTATION",
        subtitle: "Documented turning points (no biographical fiction)",
        intro: "The following cards summarise milestones that already appear in MusicBrainz, Metal Archives, or Side-Line. They replace the former “exile” section of the template.",
        cards: {
          innerZones: {
            title: "1996 — project launch",
            desc: "Der Blutharsch is dated from 1996 in MusicBrainz. Side-Line notes a first self-titled picture-disc year; edition size is pending verification (see QUESTIONS_ARCHIV.md)."
          },
          ritual: {
            title: "2003 — documented pivot",
            desc: "MusicBrainz lists the release group Time Is Thee Enemy! with first-release-date 2003. A parallel release-group year (2004) still needs reconciliation (QUESTIONS_ARCHIV.md). Side-Line describes a move toward a band-centred, rock-oriented presentation; wording here stays neutral."
          },
          hofmann: {
            title: "2010–2022 — line-up & naming",
            desc: "Metal Archives lists keyboards 2010–2022 under the extended project name also indexed in MusicBrainz as an alias of Der Blutharsch."
          },
          cartography: {
            title: "2022 — death",
            desc: "MusicBrainz life-span end 2022-05-04. Side-Line reports the morning of 4 May 2022; treat time-of-day as press detail, not a civil-registry extract."
          }
        }
      },
      interviews: {
        number: "SECTION 05",
        title: "INTERVIEWS",
        subtitle: "Published conversations \u2014 read in full at the source",
        intro: "Recorded interviews with Albin Julius are scarce and most live on independent webzines whose URLs drift over time. The list below tracks the interviews this archive considers most useful: a primary URL where the original is still online, a Wayback snapshot when the original is at risk, language, year, and a short note on the topics covered. Quotations are not transcribed here \u2014 follow the link to read the publishing party\u2019s text in full.",
        warning: "Editorial note \u2014 several of these interviews include statements about military aesthetics, sampling of historical figures, and personal politics. They are listed as primary sources to be read critically, not as endorsements.",
        legend: { source: "Source", date: "Date", language: "Language", topics: "Topics covered", read: "Open the interview" },
        cards: {
          occidental: {
            outlet: "Occidental Congress (webzine)",
            title: "\u201CDer Blutharsch \u2014 interview\u201D",
            date: "Summer 2000",
            language: "English",
            topics: "Origins of Der Blutharsch out of The Moon lay hidden beneath a Cloud; collaboration with Douglas P. (Death In June); the role of artwork in the catalogue; spirituality outside organised religion.",
            urlLabel: "occidentalcongress.com",
            note: "Webzine archive page (HTTP). Snapshot also available on the Internet Archive."
          },
          seidr: {
            outlet: "Seidr webzine",
            title: "\u201CInterview with Albin Julius (Der Blutharsch)\u201D",
            date: "12 May 2002 \u2014 conducted at the \u201CHammer and Thunder\u201D Industrial Festival, Moscow",
            language: "English",
            topics: "Audiences in Western Europe vs. Russia; ideology in industrial music; relation to European tradition and history; the festival as platform.",
            urlLabel: "seidr.woods.ru",
            note: "Russian webzine; English version of the interview. Old HTTP host \u2014 page still resolves; mirror via Wayback recommended."
          },
          chaindlk: {
            outlet: "Chain D.L.K.",
            title: "\u201CDer Blutharsch\u201D interview",
            date: "early 2000s (date pending precise check)",
            language: "English",
            topics: "Early influences (Russian classical composers, Throbbing Gristle, Death In June); editorial choice of untitled tracks on most albums; creative process and studio routine.",
            urlLabel: "chaindlk.com",
            note: "Italian-based industrial / experimental webzine; still online in 2026."
          },
          mica: {
            outlet: "mica \u2014 music austria (Music Information Center Austria)",
            title: "\u201CAlbin Julius im Interview\u201D \u2014 by Clemens Marschall",
            date: "2014 (curated for the \u201CWaves Vienna\u201D conference cycle)",
            language: "German",
            topics: "Personal trajectory from punk / mod to industrial; uniforms as fetish vs. politicisation of the scene from 1996\u201397; reaction to being labelled \u201CNazi\u201D; documented refusal of NPD distribution offer; later turn to psychedelic / kraut-rock.",
            urlLabel: "musicaustria.at",
            note: "Institutional outlet (national music information centre). The interview accompanies the editorial \u201CUniformierte Vieldeutigkeit\u201D on the use of Hitler iconography in music."
          },
          santasangre: {
            outlet: "Santa Sangre Magazine",
            title: "\u201C2014 through my eyes \u2014 Albin Julius (Der Blutharsch and the Infinite Church of the Leading Hand)\u201D",
            date: "16 December 2014",
            language: "English",
            topics: "End-of-year retrospective by Albin Julius himself: tour highlights, new releases, planned collaborations (White Hills, Urfaust).",
            urlLabel: "santasangremagazine.wordpress.com",
            note: "First-person retrospective format; useful as primary text for the project\u2019s 2010s phase."
          },
          radikaliai: {
            outlet: "Garsas / Sound (radikaliai.lt) \u2014 Mindaugas Peleckis",
            title: "\u201CExclusive interview with Albin Julius (Part 1): \u2018Most people I think see music just as a lifestyle tool \u2026 for me it\u2019s kind of a religion.\u2019\u201D",
            date: "June\u2013July 2015",
            language: "English",
            topics: "Music as a personal \u201Creligion\u201D vs. a \u201Clifestyle tool\u201D; meaning of the extended project name <em>and the Infinite Church of the Leading Hand</em>; 20th-anniversary plans for Der Blutharsch.",
            urlLabel: "web.archive.org \u00b7 radikaliai.lt",
            note: "Original URL was 404 in May 2026. The link below points to a 2024 Wayback Machine snapshot."
          }
        }
      },
      links: {
        number: "SECTION",
        title: "SOURCES",
        subtitle: "Databases, archives, and specialist press",
        visitLink: "Open link",
        cards: {
          cegesoma: {
            category: "Open music identifiers",
            title: "MusicBrainz — person “Albin Julius”",
            desc: "Structured dates, country, ISNI, and stable URI for citations."
          },
          dla: {
            category: "National popular-music archive",
            title: "SR-Archiv — Albin Julius Martinek",
            desc: "Austrian indexing of the person and linked bands (Der Blutharsch, collaborations)."
          },
          klettCotta: {
            category: "Specialist discography",
            title: "Encyclopaedia Metallum — Albin Julius",
            desc: "Legal name, participation tables, and project intervals (community-edited; cross-check releases)."
          },
          pleiade: {
            category: "Press documentation",
            title: "Side-Line — obituary (May 2022)",
            desc: "Industry reporting on death and career framing; third-party statements flagged where applicable."
          }
        }
      }
    },
    stammbaum: {
      titleNumber: "PROJECTS",
      title: "Works & projects",
      intro: "Project sheets for the named ensembles, collaborations, and label activity attached to Albin Julius. Sources are tracked in <cite>SOURCES_ARCHIV.md</cite>; open uncertainties in <cite>QUESTIONS_ARCHIV.md</cite>.",
      personTitle: "The person — public record",
      personBody: "Civil name <strong>Albin Julius Martinek</strong> (Metal Archives, SR-Archiv). MusicBrainz person record gives <strong>1967-10-16 \u2192 2022-05-04</strong> with country-level birthplace <strong>Austria</strong>; ISNI <code>0000000406806195</code>. No city-level place of birth is published here pending primary documentation (see Q1 of <cite>QUESTIONS_ARCHIV.md</cite>).",
      legend: {
        period: "Period",
        role: "Role",
        aesthetic: "Aesthetic register",
        sources: "Sources"
      },
      projects: {
        moon: {
          name: "The Moon lay hidden beneath a Cloud",
          period: "1992 \u2013 1999 (MusicBrainz group span; ended)",
          role: "Albin Julius with vocalist Alzbeth (per third-party press); per-release credits to be cross-checked against label sleeves",
          aesthetic: "Dark ambient and proto-neofolk strata, archaic European instruments and texts; releases issued through the duo\u2019s own framework, distributed at the time by World Serpent",
          sources: "MusicBrainz group page; Discogs artist hub; specialist press (Side-Line)"
        },
        db: {
          name: "Der Blutharsch",
          period: "1996 \u2013 2022 (MusicBrainz group span; documented locality: Vienna)",
          role: "Founder and primary author; everything-instrument credits on the early period (1996\u20132010)",
          aesthetic: "Started as martial-industrial sample composition (orchestral / military citation, dark ambient), shifted from 2003 onward toward a band format and rock-oriented presentation (per Side-Line)",
          sources: "MusicBrainz group; Discogs artist hub; SR-Archiv; AllMusic"
        },
        dbic: {
          name: "Der Blutharsch and the Infinite Church of the Leading Hand",
          period: "2010 \u2013 2022 (extended project name; alias on MusicBrainz)",
          role: "Keyboards under the extended name (Metal Archives credits); continuity of authorship with Der Blutharsch",
          aesthetic: "Psychedelic / experimental rock register, extended live formation, collaborations released on dedicated catalogue pages",
          sources: "Metal Archives; MusicBrainz aliases; project website (derblutharschandtheinfinitechurchoftheleadinghand.com)"
        },
        jastreb: {
          name: "Jastreb (collaboration)",
          period: "Indexed window per Metal Archives credits",
          role: "Keyboards / organ / vocals, as credited on Metal Archives",
          aesthetic: "Heavy psychedelic rock, ritual percussion; released with cover and sleeve material distinct from the Der Blutharsch line",
          sources: "Metal Archives; Discogs (band-level pages on Jastreb)"
        },
        pacific: {
          name: "Pacific 231 vs. Der Blutharsch (collaboration)",
          period: "Indexed by SR-Archiv as a band entry",
          role: "Joint authorship with Pacific 231 (Pierre Jolivet); release-by-release credits to verify on Discogs sleeves",
          aesthetic: "Industrial / collage register; pairs the long-form Pacific 231 catalogue with Der Blutharsch sound design",
          sources: "SR-Archiv band index; Discogs release pages"
        },
        fragola: {
          name: "Fragola Nera (participation)",
          period: "Participation window listed in Metal Archives",
          role: "Indexed contribution \u2014 verify per release before narrating",
          aesthetic: "Italian neofolk / ritual register (project context)",
          sources: "Metal Archives; Discogs"
        }
      },
      labelTitle: "Label \u2014 WKN (Wir Kapitulieren Niemals)",
      labelBody: "Albin Julius\u2019s own imprint, based in Austria; primary outlet for Der Blutharsch material from the late 1990s onward. Distribution moved from World Serpent (UK) to Tesco Distribution (Germany) around 2000.",
      siteTitle: "Project websites still online",
      siteBody: "<strong>derblutharsch.com</strong> \u2014 catalogue / merch foyer (Der Blutharsch). \u00b7 <strong>derblutharschandtheinfinitechurchoftheleadinghand.com</strong> \u2014 extended project page. \u00b7 <strong>tescogermany.bandcamp.com</strong> \u2014 distributor Bandcamp page hosting recent releases."
    },
    filters: {
      all: "All",
      timeline: "Timeline",
      bibliography: "Resources"
    },
    common: {
      loading: "Loading…",
      close: "Close",
      next: "Next",
      prev: "Previous"
    },
    footer: {
      description: "ARCHIV-style documentary site for Albin Julius (1967–2022): chronology, indexed projects, gallery items with explicit licences, and source-forward notes.",
      methodologie: "Methodology & sources",
      navigation: "Navigation",
      sitemap: "Sitemap",
      startseite: "Home",
      alleSeiten: "All pages",
      devNotice: "Editorial build in progress; canonical domain to be set before publication.",
      rightsText: "Independent, non-commercial research publication. No endorsement by artists, labels, or rights-holders unless stated. Images used only with documented licences (see methodology). © 2026 — ARCHIV / Albin Julius.",
      scrollToTop: "Back to top",
      hauptnavigation: "Main navigation",
      sitemapLabel: "Sitemap"
    }
  }
};

class I18n {
  constructor() {
    this.currentLang = 'en';
    this.init();
  }

  setLanguage() {
    this.currentLang = 'en';
    this.translatePage();
    this.updateLanguageButton();
    document.documentElement.setAttribute('lang', 'en');
  }

  t(key) {
    const keys = key.split('.');
    let value = translations[this.currentLang];

    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return key;
      }
    }

    return value;
  }

  translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((element) => {
      const key = element.getAttribute('data-i18n');
      const translation = this.t(key);
      if (!translation || translation === key) return;

      if (element.tagName === 'INPUT' && element.type === 'submit') {
        element.value = translation;
      } else if (element.hasAttribute('placeholder')) {
        element.placeholder = translation;
      } else if (element.hasAttribute('title')) {
        element.title = translation;
      } else if (element.hasAttribute('alt')) {
        element.alt = translation;
      } else {
        if (
          typeof translation === 'string' &&
          (translation.includes('<br>') ||
            translation.includes('<em>') ||
            translation.includes('<strong>'))
        ) {
          element.innerHTML = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    const skip = document.querySelector('.ej-skip-link');
    if (skip) {
      const s = this.t('skipLink');
      if (s && s !== 'skipLink') skip.textContent = s;
    }

    const attrElements = document.querySelectorAll('[data-i18n-attr]');
    attrElements.forEach((element) => {
      const attrData = element.getAttribute('data-i18n-attr');
      const [attr, key] = attrData.split(':');
      const translation = this.t(key);
      if (translation && translation !== key) {
        element.setAttribute(attr, translation);
      }
    });

    this.updateVideos();
  }

  updateVideos() {
    const videoItems = document.querySelectorAll('.ej-video-item');
    videoItems.forEach((item) => {
      item.style.display = '';
    });
  }

  updateLanguageButton() {
    document.querySelectorAll('.ej-lang-btn').forEach((btn) => {
      const isEn = btn.getAttribute('data-lang') === 'en';
      if (isEn) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initialize());
    } else {
      this.initialize();
    }
  }

  initialize() {
    this.setLanguage();
  }
}

let i18n;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    i18n = new I18n();
    window.EJI18n = i18n;
  });
} else {
  i18n = new I18n();
  window.EJI18n = i18n;
}
