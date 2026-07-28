# Firefox-Profil für Vorträge und Unterricht

Zwei Konfigurationsdateien, die dafür sorgen, dass Firefox während einer
Unterrichtsstunde nichts tut, was nicht ausdrücklich angefordert wurde: leerer
Start, keine Empfehlungen und Sprechblasen, eine schweigsame Adressleiste ohne
Vorschläge aus der Chronik, keine gespeicherten Passwörter, ruhiges Vollbild.
Über jeder Zeile der `user.js` steht ein Satz, warum sie da ist.

Geprüft gegen Firefox 153 (Release, Juli 2026) und Firefox 140 ESR.

## Einrichten

Das Profil sollte ein zusätzliches sein, kein Ersatz für das Alltagsprofil.
Dann bleibt der Browser, mit dem man vorbereitet, so bequem wie bisher, und der
Browser, den die Klasse sieht, ist ein anderer.

```
firefox --createprofile "Unterricht"
firefox -P Unterricht
```

Unter macOS mit vollem Pfad:
`/Applications/Firefox.app/Contents/MacOS/firefox --createprofile "Unterricht"`.
Einen Überblick über alle Profile gibt `about:profiles` im laufenden Firefox.

Wo der Profilordner liegt, verrät `about:support` unter „Profilordner“. Firefox
dann beenden, sonst überschreibt er beim Schließen die eigenen Einstellungen.

| Datei | Ziel |
|---|---|
| `user.js` | direkt in den Profilordner |
| `chrome/userChrome.css` | in den Unterordner `chrome` des Profilordners (anlegen, falls nicht vorhanden) |

Firefox liest die `user.js` bei **jedem** Start neu. Ändert man eine dieser
Einstellungen über die Oberfläche, ist die Änderung nach dem nächsten Neustart
wieder weg. Umgekehrt verschwindet ein Wert nicht dadurch, dass man die Zeile
löscht – er steht dann schon in der `prefs.js`. Zum Zurücksetzen nimmt man
`about:config` oder ein frisches Profil.

Zwei Handgriffe lohnen sich noch, beide einmalig pro Rechner: [uBlock
Origin](https://addons.mozilla.org/de/firefox/addon/ublock-origin/) installieren
(in dessen Filterlisten unter „Belästigungen“ zusätzlich *EasyList Cookie*
aktivieren) und per Rechtsklick auf die Symbolleiste → „Symbolleiste anpassen“
unten die Dichte auf **Touch** stellen, wenn am Smartboard mit dem Finger
bedient wird.

## Vortragsstart

Ein reveal.js-Vortrag per Doppelklick läuft unter `file://`, und dort gilt seit
Firefox 68 jede Datei als eigener, undurchlässiger Ursprung. Alles, was
nachgeladen wird – externe Markdown-Dateien, `fetch()`, ES-Module – scheitert
daran. Es gibt keine Einstellung, die das sauber löst; die Antwort ist ein
kleiner lokaler Webserver, gestartet im Vortragsordner:

```
python3 -m http.server 8000
```

Danach `http://localhost:8000/` öffnen – der Nur-HTTPS-Modus stört dabei nicht,
weil lokale Adressen nicht umgeleitet werden. In einem Aufruf:

```
firefox -P Unterricht http://localhost:8000/
```

Für den Vortrag selbst genügt F11. Nützlich am Touchscreen ist außerdem
`--disable-pinch`, das die Zwei-Finger-Zoomgeste abschaltet.

## Grenzen

`userChrome.css` ist von Mozilla nicht unterstützt: Die verwendeten Bezeichner
sind interne Namen der Firefox-Oberfläche und können sich mit jeder Version
ändern. Deshalb steht in der Datei nur eine einzige aktive Regel, alles Weitere
ist auskommentiert. Wenn Firefox nach einem Update merkwürdig aussieht, ist
diese Datei der erste Verdächtige: umbenennen, neu starten, prüfen.

Einstellungsnamen sind kein stabiles Versprechen – Firefox benennt sie um und
entfernt sie. Unbekannte Einstellungen werden ignoriert, schaden also nicht;
einmal im Jahr lohnt trotzdem eine Stichprobe in `about:config`.

Und schließlich: Diese Einstellungen machen den Browser ruhig, nicht anonym.
