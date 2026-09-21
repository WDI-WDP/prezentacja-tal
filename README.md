# Python — prezentacja do matury rozszerzonej

Prowadzący: por. Jakub GRĄTKIEWICZ · jakub.gratkiewicz@wat.edu.pl.

Lekcja 0 opisuje zasady zajęć i zawiera tabelę terminów TAL. Lekcje 1–12 odpowiadają kartom Jupyter: powtórzenie Pythona, samodzielna praca z plikami, algorytmy oraz zadania programistyczne z arkuszy maturalnych 2024 i 2025. Łącznie 120 zadań na lekcji i 24 zadania do samodzielnego wykonania.

Między lekcją 0 a lekcją 1 znajduje się **Konfiguracja środowiska**: ten sam zakres przygotowania co w prezentacji C++, z przykładami dopasowanymi do Pythona i Jupyter. Blok obejmuje instalację Git i GitHub Desktop przez Portal Firmy, PowerShell (`cd`, `ls`, `cat`), klucze SSH i GitHub, klonowanie oraz codzienną pracę z Git. Numeracja lekcji i 12 kart pracy pozostaje bez zmian.

Bezpośredni adres bloku po otwarciu strony to `#/konfiguracja/0`. W spisie lekcji oznaczono go jako **CFG**. Strzałki ←/→ prowadzą kolejno przez lekcję 0, konfigurację i lekcję 1; ↑/↓ zmieniają elementy bloku. Tekst instrukcji znajduje się także w [content/konfiguracja-srodowiska.md](content/konfiguracja-srodowiska.md). Strona pokazuje polecenia, ale ich nie wykonuje.

## Otwieranie i sterowanie

Otwórz `index.html` w przeglądarce. Strona działa lokalnie i na GitHub Pages. Nie wymaga serwera aplikacji ani bibliotek z CDN; po pobraniu całego repozytorium prezentacja działa bez internetu. Zewnętrzne odnośniki wymagają połączenia.

- **← / →** — poprzednia / następna lekcja.
- **↑ / ↓** — poprzedni / następny element lekcji.
- **Home** — strona tytułowa.
- **M** — spis lekcji z wyszukiwaniem; **Esc** zamyka spis.
- **F** — pełny ekran; **?** — pomoc.

Długie slajdy można przewijać pionowo. Na telefonie używaj przycisków strzałek; przesunięcie palcem w lewo lub prawo zmienia lekcję. Menu zawiera także drukowanie całej prezentacji i zapis do PDF.

## Karty i pliki

Karty pracy i dane przekazuje prowadzący innymi środkami. Prezentacja nie zawiera sekcji ani przycisków pobierania. Otrzymany notatnik `karta_pracy.ipynb` i pliki wejściowe zachowaj razem w katalogu danej lekcji.

Uczeń samodzielnie pisze rozwiązania, w tym kod otwierający i wczytujący pliki. Strona wyświetla materiał; kod wykonuje się w Jupyter. Prezentacja, druk, notatniki i archiwa ucznia nie zawierają rozwiązań ani zestawów kartkówek. W lekcji 0 opisano zasady kartkówek, ale nie zamieszczono pytań ani klucza.

## Publikacja na GitHub Pages

Publikuj wyłącznie zawartość repozytorium `prezentacja-tal`, nie cały lokalny katalog kursu. Po przesłaniu plików w ustawieniach repozytorium wybierz **Settings → Pages → Deploy from a branch**, gałąź `main`, katalog `/(root)` i **Save**. [Instrukcja GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Do działania strony zachowaj `index.html`, `app.js`, `styles.css`, `slides-data.js`, `.nojekyll` oraz katalog `lekcje` z arkuszami PDF, do których odsyłają slajdy. Sam plik HTML nie wystarczy do wyświetlenia wyglądu i treści. Generator zachowuje także kopie kart i archiwa ucznia, ale interfejs strony nie zawiera odnośników do ich pobierania.

Nie dołączaj prywatnych materiałów prowadzącego, zestawów kartkówek, źródeł generatora ani wcześniejszych rozwiązań C++.

## Aktualizacja i odtwarzanie

Źródła treści są w sąsiednim lokalnym projekcie `karty-pracy-python`, a źródła interfejsu w jego `scripts/presentation`. Nie edytuj ręcznie wygenerowanych kopii w tym repozytorium.

Źródło konfiguracji środowiska zapisano w `karty-pracy-python/scripts/presentation/content/konfiguracja-srodowiska.md`. Każdy nagłówek drugiego poziomu tworzy osobny slajd. Polecenie `--presentation-only` odświeża również ten blok i jego kopię tekstową, bez zmiany kart pracy.

Z katalogu `karty-pracy-python` odtworzysz stronę i paczki z istniejących czystych kart ucznia, nie zmieniając kart ani materiałów prowadzącego:

```text
python3 scripts/build-course.py --presentation-only
```

Samą organizację zajęć i jej kopię w paczce ZIP aktualizuje polecenie:

```text
python3 scripts/build-course.py --organization-only
```

Pełne `python3 scripts/build-course.py` regeneruje także karty i materiały prowadzącego, nadpisując ich szablony.

Źródłowy projekt przechowuj w osobnej kopii zapasowej. Repozytorium strony zawiera publikację dla uczniów, a nie pełny projekt prowadzącego.
