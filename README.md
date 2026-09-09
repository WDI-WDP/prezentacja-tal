# Python — prezentacja do matury rozszerzonej

Prowadzący: por. Jakub GRĄTKIEWICZ · jakub.gratkiewicz@wat.edu.pl.

Lekcja 0 opisuje zasady zajęć i zawiera tabelę terminów TAL. Lekcje 1–12 odpowiadają kartom Jupyter: powtórzenie Pythona, samodzielna praca z plikami, algorytmy oraz zadania programistyczne z arkuszy maturalnych 2024 i 2025. Łącznie 96 zadań na lekcji i 24 zadania do samodzielnego wykonania.

## Otwieranie i sterowanie

Otwórz `index.html` w przeglądarce. Strona działa lokalnie i na GitHub Pages. Nie wymaga serwera aplikacji ani bibliotek z CDN; po pobraniu całego repozytorium prezentacja działa bez internetu. Zewnętrzne odnośniki wymagają połączenia.

- **← / →** — poprzednia / następna lekcja.
- **↑ / ↓** — poprzedni / następny element lekcji.
- **Home** — strona tytułowa.
- **M** — spis lekcji z wyszukiwaniem; **Esc** zamyka spis.
- **F** — pełny ekran; **?** — pomoc.

Długie slajdy można przewijać pionowo. Na telefonie używaj przycisków strzałek; przesunięcie palcem w lewo lub prawo zmienia lekcję. Menu zawiera także drukowanie całej prezentacji i zapis do PDF.

## Karty i pliki

Na początku lekcji wybierz „Pobierz lekcję z danymi · ZIP” i rozpakuj cały folder. Notatnik `karta_pracy.ipynb` oraz pliki wejściowe znajdują się obok siebie w katalogu lekcji. Dostępne są też osobny notatnik oraz paczka całego kursu `kurs-python.zip`.

Uczeń samodzielnie pisze rozwiązania, w tym kod otwierający i wczytujący pliki. Strona wyświetla materiał; kod wykonuje się w Jupyter. Prezentacja, druk, notatniki i archiwa ucznia nie zawierają rozwiązań ani zestawów kartkówek. W lekcji 0 opisano zasady kartkówek, ale nie zamieszczono pytań ani klucza.

## Publikacja na GitHub Pages

Publikuj wyłącznie zawartość repozytorium `prezentacja-tal`, nie cały lokalny katalog kursu. Po przesłaniu plików w ustawieniach repozytorium wybierz **Settings → Pages → Deploy from a branch**, gałąź `main`, katalog `/(root)` i **Save**. [Instrukcja GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Zachowaj strukturę: `index.html`, `app.js`, `styles.css`, `slides-data.js`, `.nojekyll`, `00_organizacja_i_zasady_zajec.md`, `kurs-python.zip` oraz katalogi `lekcje` i `pobierz`. Sam plik HTML nie wystarczy do wyświetlenia wyglądu i treści.

Nie dołączaj prywatnych materiałów prowadzącego, zestawów kartkówek, źródeł generatora ani wcześniejszych rozwiązań C++.

## Aktualizacja i odtwarzanie

Źródła treści są w sąsiednim lokalnym projekcie `karty-pracy-python`, a źródła interfejsu w jego `scripts/presentation`. Nie edytuj ręcznie wygenerowanych kopii w tym repozytorium.

Z katalogu `karty-pracy-python` odtworzysz stronę i paczki z istniejących czystych kart ucznia, nie zmieniając kart ani materiałów prowadzącego:

```text
python3 scripts/build-course.py --presentation-only
```

Samą organizację zajęć i jej kopię w paczce ZIP aktualizuje polecenie:

```text
python3 scripts/build-course.py --organization-only
```

Pełne `python3 scripts/build-course.py` regeneruje także karty i materiały prowadzącego, nadpisując ich szablony. Testy uruchom poleceniem `python scripts/verify-course.py` w środowisku z `nbformat`, `nbclient` i `ipykernel`.

Źródłowy projekt przechowuj w osobnej kopii zapasowej. Repozytorium strony zawiera publikację dla uczniów, a nie pełny projekt prowadzącego.
