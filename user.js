/* ===========================================================================
 * user.js – Firefox-Profil für Vorträge und Unterricht
 * Florian Loyns · Stand: 28. Juli 2026
 * Geprüft gegen Firefox 153 (Release) und Firefox 140 ESR.
 *
 * Diese Datei gehört in den Profilordner (nicht in den Installationsordner).
 * Firefox liest sie bei jedem Start und schreibt die Werte nach prefs.js.
 * Wird eine Zeile hier gelöscht, bleibt der zuletzt geschriebene Wert in
 * prefs.js stehen – zum Zurücksetzen also über about:config zurücksetzen
 * oder ein frisches Profil anlegen.
 *
 * Jede Einstellung hat eine Zeile Begründung darüber. Wo der Nutzen unsicher
 * ist, steht das dabei. Einstellungen, die ohnehin dem Auslieferungszustand
 * entsprechen, sind bewusst nicht enthalten.
 * ======================================================================== */


/* ---------------------------------------------------------------------------
 * 1 · Start, Startseite, neuer Tab
 * Ein leerer Start ist der einzige, der nie überrascht. Alles, was Firefox
 * hier von sich aus einblendet, erscheint zwangsläufig auf der Leinwand.
 * ------------------------------------------------------------------------ */

// Beim Start eine leere Seite statt der Firefox-Startseite öffnen.
user_pref("browser.startup.page", 0);

// Startseite und neue Fenster leer lassen.
user_pref("browser.startup.homepage", "about:blank");

// Neuer Tab bleibt leer, statt Kacheln und Empfehlungen zu zeigen.
user_pref("browser.newtabpage.enabled", false);

// Falls die Firefox-Startseite doch einmal aufgerufen wird: keine gesponserten
// Geschichten und keine gesponserten Verknüpfungen darauf.
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// Sammelschalter „Firefox unterstützen“ über den beiden Werbeschaltern (ab FF 140).
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);

// Keine empfohlenen Geschichten auf der Startseite.
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

// Keine Verknüpfungskacheln – die verraten, welche Seiten man häufig besucht.
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);

// Keine vorbelegten Kacheln, falls die Verknüpfungen doch eingeschaltet werden.
user_pref("browser.newtabpage.activity-stream.default.sites", "");

// Kein Wetter-Widget (zwei Schalter: klassisches Layout und neues „Nova“-Layout).
user_pref("browser.newtabpage.activity-stream.showWeather", false);
user_pref("browser.newtabpage.activity-stream.widgets.weather.enabled", false);

// Keine „Highlights“ (zuletzt besucht, gespeichert, heruntergeladen).
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);


/* ---------------------------------------------------------------------------
 * 2 · Keine Einblendungen, Empfehlungen, Rundgänge
 * Das sind die Meldungen, die typischerweise genau dann kommen, wenn der
 * Beamer schon läuft.
 * ------------------------------------------------------------------------ */

// Weder nach der Installation noch nach einem Update eine Begrüßungs- oder
// Neuigkeitenseite öffnen. Der Wert "ignore" schaltet beide Fälle ab.
user_pref("browser.startup.homepage_override.mstone", "ignore");

// Keine Willkommens- und Einrichtungsseiten (about:welcome) beim ersten Start.
user_pref("browser.aboutwelcome.enabled", false);

// Keine Erweiterungsempfehlungen als Sprechblase beim Surfen.
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);

// Keine Funktionsempfehlungen („Wussten Sie schon …“) als Sprechblase.
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Keine personalisierten Erweiterungsempfehlungen (setzt Datenübermittlung voraus).
user_pref("browser.discovery.enabled", false);

// Keine Empfehlungskacheln in about:addons.
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Kein Abschnitt „Mehr von Mozilla“ in den Einstellungen.
user_pref("browser.preferences.moreFromMozilla", false);

// Keine geführten Rundgänge, die Mozilla-Seiten in der Oberfläche auslösen können.
user_pref("browser.uitour.enabled", false);

// Kein Hinweisdialog „Firefox als Standardbrowser festlegen“ beim Start.
user_pref("browser.shell.checkDefaultBrowser", false);

// Kein Übersetzungs-Angebot, das sich bei fremdsprachigen Seiten aufklappt.
// Die Übersetzung selbst bleibt über das Menü erreichbar.
user_pref("browser.translations.automaticallyPopup", false);

// Keine KI-Seitenleiste, die sich über die Folien schieben kann.
user_pref("browser.ml.chat.enabled", false);

// Das Konto-Symbol aus der Symbolleiste entfernen und die Anbindung an
// Firefox-Konten (Sync) für dieses Profil abschalten. Ein Vortragsprofil,
// das Chronik und Lesezeichen des Alltagsprofils nachlädt, wäre sinnlos –
// und der Anmelden-Dialog hat vor einer Klasse nichts verloren. Das ist
// derselbe Schalter, den die offizielle Richtlinie „DisableAccounts“ setzt,
// nur auf dieses eine Profil begrenzt statt auf die ganze Installation.
user_pref("identity.fxaccounts.enabled", false);


/* ---------------------------------------------------------------------------
 * 3 · Telemetrie, Studien, Experimente
 * Nicht nur aus Datenschutzgründen: Studien können Oberflächenelemente
 * verändern, ohne dass man es angefordert hat.
 * ------------------------------------------------------------------------ */

// Keine Übermittlung von Nutzungsdaten; ab FF 83 wird damit auch die lokale
// Ablage der Telemetriedaten abgeschaltet.
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.usage.uploadEnabled", false);

// Telemetriemodul und die einzelnen Sendevorgänge abschalten.
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);

// Keine Firefox-Studien (Shield): sie können die Oberfläche unangekündigt ändern.
user_pref("app.shield.optoutstudies.enabled", false);

// Normandy ist der Kanal, über den Studien und Konfigurationsänderungen
// nachgeladen werden. Ohne ihn bleibt das Profil so, wie man es eingerichtet hat.
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");


/* ---------------------------------------------------------------------------
 * 4 · Absturzmeldungen
 * Ein Absturz mitten im Unterricht ist schon schlimm genug; der Dialog
 * danach muss nicht auch noch an die Wand.
 * ------------------------------------------------------------------------ */

// Keine Benachrichtigung über nicht gesendete Absturzberichte.
// (Im Release-Firefox ist das bereits die Voreinstellung; hier festgehalten,
// damit es auch in Beta- oder Nightly-Installationen gilt.)
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);

// Absturzberichte niemals ohne Rückfrage nachsenden.
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// Auf der Seite „Dieser Tab ist abgestürzt“ kein Formular zum Berichtversand.
user_pref("browser.tabs.crashReporting.sendReport", false);


/* ---------------------------------------------------------------------------
 * 5 · Adressleiste
 * Der wichtigste Abschnitt dieser Datei. Die Autovervollständigung der
 * Adressleiste ist die häufigste Art, vor einer Klasse etwas preiszugeben,
 * das niemanden etwas angeht. Lesezeichen bleiben absichtlich als Quelle
 * erhalten – sie sind bewusst angelegt und damit vorzeigbar.
 * ------------------------------------------------------------------------ */

// Keine Adresse mehr direkt in die Eingabezeile hineinschreiben („autofill“).
user_pref("browser.urlbar.autoFill", false);

// Keine Vorschläge aus der Chronik.
user_pref("browser.urlbar.suggest.history", false);

// Keine Vorschläge aus offenen Tabs.
user_pref("browser.urlbar.suggest.openpage", false);

// Keine Vorschläge aus Tabs anderer Geräte (Sync).
user_pref("browser.urlbar.suggest.remotetab", false);

// Keine Vorschläge aus den meistbesuchten Seiten.
user_pref("browser.urlbar.suggest.topsites", false);

// Den Inhalt der Zwischenablage nicht als Vorschlag anbieten.
user_pref("browser.urlbar.suggest.clipboard", false);

// Keine Liste der zuletzt eingegebenen Suchbegriffe.
user_pref("browser.urlbar.suggest.recentsearches", false);

// Keine Suchvorschläge der Suchmaschine – sie werden beim Tippen live geladen
// und stehen als fremde Textzeilen im Bild.
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);

// Keine Trend-Suchbegriffe, wenn die Adressleiste leer angeklickt wird.
user_pref("browser.urlbar.suggest.trending", false);

// Kein Wetter im Dropdown der Adressleiste.
user_pref("browser.urlbar.suggest.weather", false);

// Keine „Firefox-Aktionen“ im Dropdown – ruhigere, kürzere Ergebnisliste.
user_pref("browser.urlbar.suggest.quickactions", false);

// Keine vorauseilenden Verbindungen zu Servern, während man noch tippt.
user_pref("browser.urlbar.speculativeConnect.enabled", false);


/* ---------------------------------------------------------------------------
 * 6 · Passwörter und Formulare
 * Nichts, was Firefox von selbst in ein sichtbares Feld schreibt.
 * Passwörter gehören in einen eigenen Passwortverwalter, nicht in einen
 * Browser, dessen Fenster an der Wand hängt.
 * ------------------------------------------------------------------------ */

// Keine Zugangsdaten speichern und nicht danach fragen.
user_pref("signon.rememberSignons", false);

// Gespeicherte Zugangsdaten nicht automatisch in Formulare eintragen.
user_pref("signon.autofillForms", false);

// Kein Angebot, ein Passwort zu erzeugen.
user_pref("signon.generation.enabled", false);

// Keine Warnungen über Datenlecks zu gespeicherten Konten.
user_pref("signon.management.page.breach-alerts.enabled", false);

// Keine Such- und Formularchronik: verhindert die Vorschlagsliste unter
// Eingabefeldern auf Webseiten.
user_pref("browser.formfill.enable", false);

// Keine gespeicherten Adressen und Zahlungsdaten automatisch ausfüllen.
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);


/* ---------------------------------------------------------------------------
 * 7 · Benachrichtigungen
 * ------------------------------------------------------------------------ */

// Webseiten dürfen weder Benachrichtigungen senden noch danach fragen
// (0 = fragen, 1 = erlauben, 2 = blockieren).
user_pref("permissions.default.desktop-notification", 2);

// Push-Dienst abschalten, über den Benachrichtigungen auch bei geschlossener
// Seite zugestellt würden.
user_pref("dom.push.enabled", false);


/* ---------------------------------------------------------------------------
 * 8 · Vollbild und Präsentation
 * ------------------------------------------------------------------------ */

// Werkzeugleisten im Vollbild ausblenden, bis der Zeiger an den oberen Rand
// geht. Unter Windows und Linux ist das ohnehin der Auslieferungszustand,
// unter macOS ist er bewusst auf „false“ gesetzt (Mozilla-Bug 1702563).
// Wer auf einem Mac arbeitet und ein zuckendes Fenster beobachtet, nimmt
// diese Zeile wieder heraus.
user_pref("browser.fullscreen.autohide", true);

// Den Einblender „… ist jetzt im Vollbildmodus“ nicht anzeigen. Der Wert 0
// ist im Quelltext ausdrücklich als „Nutzer schaltet den Hinweis ab“ vorgesehen.
user_pref("full-screen-api.warning.timeout", 0);

// Kein Ein- und Ausblenden über einen schwarzen Zwischenschritt beim Wechsel
// in den Vollbildmodus – am Beamer sieht das wie ein Bildverlust aus.
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");

// Kein weiches Scrollen: beim Zeigen auf eine Textstelle läuft die Seite sonst
// noch nach, während man schon spricht.
user_pref("general.smoothScroll", false);


/* ---------------------------------------------------------------------------
 * 9 · Eingebettete Medien
 * ------------------------------------------------------------------------ */

// Kein Bild-in-Bild-Knopf, der beim Überfahren mitten über dem Video liegt.
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);

// Auch kein Bild-in-Bild-Knopf in der Adressleiste.
user_pref("media.videocontrols.picture-in-picture.urlbar-button.enabled", false);

// Autoplay bleibt bei der Voreinstellung: stummes Video startet von selbst,
// Ton erst nach Zustimmung (media.autoplay.default = 1). Für Vorträge ist das
// meistens richtig – ein Video mit „muted“ im HTML läuft ohne Nachfrage.
// Wer will, dass eingebettete Videos überall sofort mit Ton starten, entfernt
// die Kommentarzeichen. Dann startet aber auch jede beliebige Webseite mit Ton,
// was auf einer Beamer-Anlage unangenehm laut werden kann.
// user_pref("media.autoplay.default", 0);
//
// Der saubere Weg ist die Erlaubnis nur für den eigenen lokalen Webserver:
// den Vortrag einmal unter http://localhost:8000/ öffnen, links in der
// Adressleiste auf das Schloss-Symbol klicken und dort unter „Berechtigungen“
// das automatische Abspielen erlauben. Die Erlaubnis gilt danach nur für
// diese Adresse und bleibt im Profil gespeichert.


/* ---------------------------------------------------------------------------
 * 10 · Schutz auf einem geteilten Rechner
 * ------------------------------------------------------------------------ */

// Verbesserter Schutz vor Aktivitätenverfolgung auf „Streng“. Firefox leitet
// aus dieser einen Angabe die Einzelschalter (Tracker, Cryptominer,
// Fingerabdruck-Erkennung, Cookie-Verhalten) ab, deshalb stehen sie hier nicht
// noch einmal einzeln. Achtung: „Streng“ bricht gelegentlich Anmeldungen über
// Drittanbieter. Auf einer betroffenen Seite hilft der Schalter im
// Schild-Symbol links in der Adressleiste.
user_pref("browser.contentblocking.category", "strict");

// Nur-HTTPS-Modus einschalten. Bei Seiten ohne HTTPS erscheint eine
// Zwischenseite mit der Möglichkeit, einmalig fortzufahren.
user_pref("dom.security.https_only_mode", true);

// Beim Aufruf einer HTTPS-Seite nicht zusätzlich still eine HTTP-Anfrage
// senden. Kostet in seltenen Fällen ein paar Sekunden bei kaputten Servern,
// vermeidet aber eine unverschlüsselte Anfrage, die man nicht angefordert hat.
user_pref("dom.security.https_only_mode_send_http_background_request", false);

// Das Signal „Global Privacy Control“ auch in normalen Fenstern mitsenden;
// in privaten Fenstern tut Firefox das seit Version 120 von selbst. Es bittet
// Webseiten, Daten weder zu verkaufen noch weiterzugeben – in Kalifornien
// rechtlich bindend, in Europa bislang unverbindlich. Kostet nichts und
// bricht nichts.
user_pref("privacy.globalprivacycontrol.enabled", true);

// Im Dialog „Neueste Chronik löschen“ ist „Alles“ vorausgewählt, damit ein
// schnelles Aufräumen nach der Stunde nicht an der Zeitspanne scheitert.
user_pref("privacy.sanitize.timeSpan", 0);


/* ---------------------------------------------------------------------------
 * 11 · Aufräumen beim Beenden – bewusst NICHT voreingestellt
 *
 * Hier steht ein echter Zielkonflikt, den man nicht auflösen, sondern nur
 * entscheiden kann:
 *
 *   Löscht Firefox beim Beenden Cookies, ist man nach jedem Schließen aus
 *   allen Diensten abgemeldet – Lernplattform, Schulmail, Mediathek,
 *   Cloud-Speicher. Vor einer Klasse sich neu anzumelden, womöglich mit
 *   Zwei-Faktor-Code, kostet Zeit und zeigt genau die Anmeldemaske, die man
 *   nicht zeigen wollte.
 *
 *   Löscht Firefox nichts, bleiben angemeldete Sitzungen auf dem Rechner
 *   liegen. Auf einem Schulrechner, an dem sich alle mit demselben Konto
 *   anmelden, ist das die schlechtere Wahl.
 *
 * Voreinstellung dieses Profils: es wird nichts automatisch gelöscht.
 * Der eigentliche Vorführ-Schutz sitzt in Abschnitt 5 und 6 – die Chronik
 * wird gar nicht erst in der Adressleiste angeboten.
 *
 * Wer das Profil auf einem gemeinsam genutzten Benutzerkonto verwendet,
 * schaltet den folgenden Block scharf. Danach ist man nach jedem Beenden
 * überall abgemeldet; ein eigener Passwortverwalter ist dann Pflicht.
 * ------------------------------------------------------------------------ */

// user_pref("privacy.sanitize.sanitizeOnShutdown", true);
// user_pref("privacy.clearOnShutdown_v2.cache", true);
// user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true);
// user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", true);   // ab FF 136
// user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true);   // FF 128 bis 135
// user_pref("privacy.clearOnShutdown_v2.formdata", true);
// user_pref("privacy.clearOnShutdown_v2.siteSettings", false);   // erteilte Berechtigungen behalten

/* Ein Mittelweg: nur den Zwischenspeicher leeren, angemeldet bleiben.
 * Sinnvoll, wenn der Profilordner auf einem USB-Stick liegt. */
// user_pref("privacy.sanitize.sanitizeOnShutdown", true);
// user_pref("privacy.clearOnShutdown_v2.cache", true);
// user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", false);
// user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", false);


/* ---------------------------------------------------------------------------
 * 12 · reveal.js aus einer lokalen Datei
 *
 * Es gibt hier keine Einstellung, die das Problem löst – deshalb steht in
 * diesem Abschnitt keine.
 *
 * Seit Firefox 68 gilt jede Datei unter file:// als eigener, undurchlässiger
 * Ursprung (Mozilla-Bug 1500453, Hintergrund CVE-2019-11730). Damit scheitern
 * beim Doppelklick auf eine index.html unter anderem:
 *   – externe Markdown-Dateien (<section data-markdown="folien.md">),
 *   – fetch()- und XMLHttpRequest-Aufrufe auf Nachbardateien,
 *   – ES-Module (<script type="module">), da Modulskripte CORS unterliegen,
 *   – alles andere, was CORS voraussetzt: CORS gilt laut MDN ausdrücklich nur
 *     für http und https, file:// ist kein gültiges Schema dafür.
 *
 * Die früher kursierende Einstellung privacy.file_unique_origin existiert im
 * heutigen Firefox-Quelltext nicht mehr. Es gibt noch
 * security.fileuri.strict_origin_policy; dieses Profil setzt sie nicht.
 * Sie lockert die Gleiche-Herkunft-Regel für lokale Dateien – das ist genau
 * die Lücke, für die CVE-2019-11730 vergeben wurde, und sie behebt die
 * CORS-Fälle (Module, fetch) ohnehin nicht.
 *
 * Die richtige Antwort ist ein kleiner lokaler Webserver. Aus dem
 * Vortragsordner heraus genügt eine Zeile:
 *
 *     python3 -m http.server 8000
 *     # oder, wenn Node vorhanden ist:
 *     npx http-server -p 8000
 *     # oder im reveal.js-Projekt:
 *     npm start
 *
 * Danach den Vortrag über http://localhost:8000/ öffnen. Der Nur-HTTPS-Modus
 * stört dabei nicht: lokale Adressen werden nicht auf HTTPS umgeleitet
 * (dom.security.https_only_mode.upgrade_local ist standardmäßig aus).
 * ------------------------------------------------------------------------ */


/* ---------------------------------------------------------------------------
 * 13 · Eigenes Stylesheet
 * ------------------------------------------------------------------------ */

// chrome/userChrome.css beim Start laden. Ohne diese Zeile bleibt die Datei
// wirkungslos. Mozilla unterstützt diese Anpassung nicht offiziell.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);


/* ---------------------------------------------------------------------------
 * 14 · Kleinigkeiten
 * ------------------------------------------------------------------------ */

// Keine Warnseite vor about:config. Wer diese Datei bearbeitet, kennt das
// Risiko; die Warnung kostet nur einen Klick, wenn man während der Stunde
// schnell etwas nachsehen muss.
user_pref("browser.aboutConfig.showWarning", false);
