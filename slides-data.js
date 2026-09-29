window.PYTHON_COURSE = {
 "meta": {
  "title": "Python — programowanie do matury rozszerzonej",
  "shortTitle": "Python · matura rozszerzona",
  "standard": "Powtórzenie i zadania maturalne · 12 lekcji",
  "teacher": "por. Jakub GRĄTKIEWICZ",
  "email": "jakub.gratkiewicz@wat.edu.pl",
  "lessonCount": 12,
  "sectionCount": 309,
  "setupCount": 2,
  "setupSectionCount": 27,
  "taskCount": 144,
  "classTaskCount": 120,
  "homeworkTaskCount": 24
 },
 "lessons": [
  {
   "number": 0,
   "kind": "organization",
   "title": "Organizacja i zasady zajęć",
   "sourceFile": "00_organizacja_i_zasady_zajec.md",
   "download": "00_organizacja_i_zasady_zajec.md",
   "assetBase": "",
   "sections": [
    {
     "id": "org-0",
     "title": "Organizacja i zasady zajęć",
     "kind": "organization",
     "context": "",
     "markdown": "# Organizacja i zasady zajęć\n\nPython — programowanie do matury rozszerzonej z informatyki.\n\nProwadzący: por. Jakub GRĄTKIEWICZ · jakub.gratkiewicz@wat.edu.pl."
    },
    {
     "id": "org-1",
     "title": "1. Organizacja i przebieg zajęć",
     "kind": "organization",
     "context": "",
     "markdown": "## 1. Organizacja i przebieg zajęć\n\nZajęcia TAL odbywają się w poniedziałki i czwartki, zasadniczo co drugi tydzień, zgodnie z harmonogramem w punkcie 2. Materiał kursu jest uporządkowany w 12 kartach pracy. Zakładamy znajomość podstaw Pythona: zmiennych, typów, warunków, pętli, funkcji i podstawowych kolekcji. Początek kursu jest powtórzeniem i uporządkowaniem tych umiejętności, a nie nauką programowania od zera.\n\nKażda lekcja ma następujący schemat:\n\n1. **Kartkówka** — przed rozpoczęciem części dydaktycznej uczeń samodzielnie odpowiada na trzy pytania. Kartkówka trwa 10 minut i dotyczy kompetencji z wcześniejszych lekcji. Przed pierwszą lekcją sprawdzamy podstawy Pythona znane sprzed kursu.\n2. **Treść dydaktyczna i zadania na lekcji** — przypominamy potrzebne narzędzia, analizujemy przykłady, rozwiązujemy zadania i wyjaśniamy zastosowane algorytmy. Stopniowo przechodzimy do oryginalnych zadań maturalnych.\n3. **Zadania do samodzielnego wykonania** — utrwalamy i łączymy umiejętności. Wszystkie zadania wymagane przez prowadzącego, także niedokończone na lekcji, należy ukończyć przed następnym spotkaniem.\n\nNie przewiduje się sprawdzianów. Oceniane są wykonane zadania, odpowiedzi dotyczące zadań, kartkówki oraz praca na lekcji."
    },
    {
     "id": "org-2",
     "title": "2. Terminy zajęć TAL",
     "kind": "organization",
     "context": "",
     "markdown": "## 2. Terminy zajęć TAL\n\n\n| Poniedziałek | Czwartek |\n|---|---|\n| 14.09.2026 | 17.09.2026 |\n| 28.09.2026 | 01.10.2026 |\n| 12.10.2026 | 15.10.2026 |\n| 26.10.2026 | 29.10.2026 |\n| 09.11.2026 | 12.11.2026 |\n| 23.11.2026 | 26.11.2026 |\n| 07.12.2026 | 10.12.2026 |\n| 21.12.2026 | — |\n| 11.01.2027 | 14.01.2027 |"
    },
    {
     "id": "org-3",
     "title": "3. Tematy kolejnych lekcji",
     "kind": "organization",
     "context": "",
     "markdown": "## 3. Tematy kolejnych lekcji\n\n1. Powtórzenie Pythona: Jupyter, obliczenia i sterowanie.\n2. Powtórzenie: napisy, kolekcje i funkcje.\n3. Powtórzenie: samodzielna praca z plikami.\n4. Cyfry, podstawy systemów liczbowych i NWD.\n5. Matura 2024: Nieparzysty skrót krok po kroku.\n6. Sortowanie, liczności i rozkład na czynniki.\n7. Sumy prefiksowe, okna i porównywanie średnich.\n8. Matura 2024: Liczby — cztery podpunkty.\n9. Zapis pozycyjny, palindromy i siatki znaków.\n10. Matura 2025: Zapis symboliczny krok po kroku.\n11. Wektory, punkty i geometria całkowitoliczbowa.\n12. Matura 2025: Dron i kompletne rozwiązanie.\n\nMateriał jest kumulatywny: umiejętności z wcześniejszych lekcji są potrzebne na kolejnych. Kurs obejmuje zadania programistyczne z dwóch dostarczonych arkuszy, nie część dotyczącą arkusza kalkulacyjnego ani baz danych."
    },
    {
     "id": "org-4",
     "title": "4. Przygotowanie do każdej lekcji",
     "kind": "organization",
     "context": "",
     "markdown": "## 4. Przygotowanie do każdej lekcji\n\nUczeń jest gotowy do pracy od początku zajęć. Przed każdą lekcją:\n\n- zna jej temat, zapoznaje się z odpowiednią kartą pracy i przypomina sobie wcześniejszy materiał;\n- posiada sprawny, naładowany komputer osobisty, zasilacz i akcesoria potrzebne do pracy, np. mysz, klawiaturę, monitor, przejściówki i przewody;\n- ma działającego Pythona i Jupyter, potrafi otworzyć notatnik, wybrać jądro oraz uruchomić kod;\n- posiada zeszyt do własnych notatek i obliczeń, długopis oraz co najmniej pięć czystych kartek A4 lub A5 albo kartkownik z łatwo wyrywanymi kartkami;\n- posiada własne konto GitHub, zna dane logowania i ma urządzenie potrzebne do potwierdzenia logowania; przed zajęciami sprawdza, czy może się zalogować;\n- ma wykonane wszystkie zadania wymagane do bieżącej lekcji oraz aktualne rozwiązania udostępnione na GitHub;\n- przechowuje na swoim komputerze uporządkowane katalogi dotychczasowych lekcji: notatniki z własnym kodem, dane wejściowe i wymagane pliki wynikowe;\n- potrafi szybko wskazać, otworzyć i uruchomić każde dotychczasowe rozwiązanie oraz wyjaśnić jego działanie.\n\n**Niespełnienie któregokolwiek z powyższych warunków jest traktowane jako nieprzygotowanie do lekcji i skutkuje oceną niedostateczną za przygotowanie.**"
    },
    {
     "id": "org-5",
     "title": "5. Wykonywanie i ocenianie zadań",
     "kind": "organization",
     "context": "",
     "markdown": "## 5. Wykonywanie i ocenianie zadań\n\nKażda lekcja ma osobny katalog. W zadaniach plikowych dane leżą obok notatnika. Uczeń samodzielnie pisze cały potrzebny kod: otwarcie pliku, odczyt wierszy, konwersję danych, obliczenia i zapis odpowiedzi. Podanie samej funkcji obliczeniowej albo wpisanie znanej odpowiedzi do programu nie stanowi kompletnego rozwiązania zadania plikowego.\n\nPrzed oddaniem pracy uczeń restartuje jądro, uruchamia własny notatnik od początku i zapisuje go. Program nie może polegać na zmiennych utworzonych w innej karcie ani na gotowym kodzie uruchomionym wcześniej. Plików wejściowych nie wolno nadpisywać wynikami.\n\nPrzy ocenie zadania uwzględniamy zgodność z poleceniem, samodzielność, poprawność algorytmu, obsługę wskazanego formatu danych, przypadki brzegowe oraz wymagany plik odpowiedzi.\n\nKażda praca może zostać zweryfikowana ustnie. Uczeń może zostać poproszony o wyjaśnienie fragmentu kodu, przewidzenie wyniku dla innych danych, wskazanie błędu, uzasadnienie kosztu obliczeń lub wprowadzenie niewielkiej zmiany. Odpowiedzi dotyczące zadań również podlegają ocenie. Nieumiejętność wyjaśnienia przedstawionego rozwiązania traktujemy jak brak samodzielnie wykonanego rozwiązania."
    },
    {
     "id": "org-6",
     "title": "6. Kartkówki i aktywność",
     "kind": "organization",
     "context": "",
     "markdown": "## 6. Kartkówki i aktywność\n\nKartkówkę wykonujemy na kartce, bez komputera, notatek i korzystania z cudzej pomocy. Za każde z trzech pytań uczeń otrzymuje plus (1 pkt) za poprawną, kompletną odpowiedź zgodną z poleceniem albo minus (0 pkt) w pozostałych przypadkach. Z jednej kartkówki można uzyskać maksymalnie 3 pkt.\n\nSumujemy punkty z czterech kolejnych kartkówek i wystawiamy jedną ocenę z pracy na lekcji lub aktywności. Maksymalny wynik to 12 pkt. Obowiązuje następująca skala:\n\n| Suma punktów z czterech kartkówek | Ocena |\n|---:|---:|\n| 0–4 | 1 |\n| 5–6 | 2 |\n| 7–8 | 3 |\n| 9–10 | 4 |\n| 11 | 5 |\n| 12 | 6 |\n\nPo wystawieniu oceny rozpoczynamy zbieranie punktów z kolejnego zestawu czterech kartkówek. Pytania odwołują się do zrealizowanego materiału; nie wymagają poznania nowych algorytmów przewidzianych dopiero na bieżącą lekcję."
    },
    {
     "id": "org-7",
     "title": "7. Nieobecność",
     "kind": "organization",
     "context": "",
     "markdown": "## 7. Nieobecność\n\nUczeń nieobecny samodzielnie uzupełnia wiedzę, notatki i wszystkie wymagane zadania przed rozpoczęciem następnej lekcji. W sprawie sposobu uzupełnienia opuszczonej kartkówki kontaktuje się z prowadzącym.\n\nNieobecność nie zwalnia z przygotowania do kolejnego spotkania ani z kartkówki obejmującej wcześniejszy materiał. Do uzupełnianych prac stosujemy te same zasady przygotowania, samodzielności i weryfikacji."
    }
   ]
  },
  {
   "number": null,
   "id": "konfiguracja-srodowiska",
   "route": "konfiguracja",
   "kind": "setup",
   "shortTitle": "Konfiguracja środowiska",
   "counterLabel": "Konfiguracja",
   "menuLabel": "CFG",
   "badge": "Przed lekcją 1",
   "title": "Konfiguracja środowiska",
   "sourceFile": "content/konfiguracja-srodowiska.md",
   "assetBase": "",
   "checksum": "d56a1eff0f1fc4ff906a29f784ab158bee0f0f50bfd195f647a755e06bede53e",
   "sections": [
    {
     "id": "setup-01",
     "title": "Instalacja przez Portal Firmy",
     "kind": "setup",
     "context": "",
     "markdown": "Przygotujemy Windows do pracy z repozytorium zadań. Potrzebujesz dostępu do konta szkolnego oraz własnego konta GitHub, także urządzenia do potwierdzenia logowania.\n\n1. Otwórz menu Start i uruchom aplikację **Portal Firmy**.\n2. Zaloguj się kontem szkolnym, jeśli aplikacja o to poprosi.\n3. Wyszukaj **Git** lub **Git for Windows**, wybierz aplikację i kliknij **Zainstaluj**.\n4. Tak samo zainstaluj **GitHub Desktop** — graficzną aplikację do pracy z Git.\n5. Poczekaj, aż obie instalacje zakończą się. Zamknij wcześniej otwarte terminale.\n\n**Git** to narzędzie kontroli wersji. **GitHub** to platforma przechowująca repozytoria w internecie. **GitHub Desktop** udostępnia interfejs graficzny; w tej lekcji poznajemy polecenia Git w PowerShell.\n\nJeśli aplikacji brakuje w Portalu Firmy lub instalacja wymaga uprawnień, zgłoś to prowadzącemu. Nie omijaj zabezpieczeń komputera.\n\nPomoc: [instalowanie aplikacji z Portalu Firmy](https://learn.microsoft.com/en-us/intune/user-help/apps/install-apps-windows), [GitHub Desktop](https://docs.github.com/en/desktop/overview/getting-started-with-github-desktop)."
    },
    {
     "id": "setup-02",
     "title": "Od konsoli cmd do PowerShell",
     "kind": "setup",
     "context": "",
     "markdown": "Naciśnij **Win + R**, wpisz `cmd` i zatwierdź Enterem. W oknie wiersza polecenia uruchom powłokę PowerShell:\n\n```cmd\npowershell\n```\n\nPoczątek wiersza polecenia powinien zawierać `PS`. Od tej chwili kolejne polecenia wykonujesz w PowerShell. Nie wpisuj samodzielnie oznaczenia `PS` ani wyświetlanej przed kursorem ścieżki.\n\nSprawdź instalację Git:\n\n```powershell\ngit\ngit --version\n```\n\n`git` wyświetla pomoc i listę podstawowych poleceń. `git --version` podaje zainstalowaną wersję. Komunikat, że `git` nie jest rozpoznawany, oznacza, że powłoka go nie znajduje. Otwórz nowe okno po instalacji; jeśli to nie pomaga, zgłoś problem prowadzącemu.\n\n`powershell` uruchamia powłokę wewnątrz bieżącego okna. Polecenie `exit` zakończy tę sesję i wróci do cmd.\n\nPomoc: [uruchamianie Windows PowerShell](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_powershell_exe?view=powershell-5.1)."
    },
    {
     "id": "setup-03",
     "title": "PowerShell: cd — zmiana katalogu",
     "kind": "setup",
     "context": "",
     "markdown": "Każde polecenie wykonujesz w określonym katalogu. `cd` jest skrótem polecenia `Set-Location` i zmienia bieżący katalog; nie przenosi plików.\n\n```powershell\ncd \"$env:USERPROFILE\"\ncd C:\\Users\ncd ..\n```\n\nPierwsze polecenie otwiera katalog Twojego profilu użytkownika. Drugie przechodzi do `C:\\Users`, a trzecie o poziom wyżej, czyli w tym przykładzie do `C:\\`.\n\n- `cd .\\zadania` — wejście do istniejącego podkatalogu `zadania`.\n- `cd ..` — przejście do katalogu nadrzędnego.\n- `cd \"C:\\Moje projekty\"` — ścieżkę ze spacjami ujmij w cudzysłowy; katalog musi już istnieć.\n- `pwd` — pokazanie bieżącej lokalizacji, jeśli nie wiesz, gdzie jesteś.\n\n**Zadanie:** przejdź do swojego profilu, potem o katalog wyżej. Sprawdź lokalizację poleceniem `pwd`.\n\nPomoc: [Set-Location](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/set-location?view=powershell-7.5)."
    },
    {
     "id": "setup-04",
     "title": "PowerShell: ls — lista plików i katalogów",
     "kind": "setup",
     "context": "",
     "markdown": "`ls` to w Windows PowerShell skrót `Get-ChildItem`. Bez dodatkowej ścieżki pokazuje zawartość bieżącego katalogu.\n\n```powershell\ncd \"$env:USERPROFILE\"\nls\nls -Force\nls C:\\Users\n```\n\n`ls -Force` pokazuje również elementy ukryte. Podanie ścieżki pozwala obejrzeć inny katalog bez przechodzenia do niego. Samo `ls` niczego nie otwiera ani nie usuwa.\n\nPo sklonowaniu repozytorium przyda się również `ls *.py` — lista plików z rozszerzeniem `.py` w bieżącym katalogu. Gwiazdka zastępuje dowolny fragment nazwy. Polecenie `ls *.ipynb` pokaże notatniki Jupyter.\n\n**Zadanie:** wyświetl zawartość swojego profilu i wskaż nazwę jednego katalogu. Wejdź do niego za pomocą `cd`, wykonaj `ls`, a następnie wróć przez `cd ..`.\n\nPomoc: [Get-ChildItem](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-childitem?view=powershell-5.1)."
    },
    {
     "id": "setup-05",
     "title": "PowerShell: cat — odczyt pliku tekstowego",
     "kind": "setup",
     "context": "",
     "markdown": "`cat` jest w Windows PowerShell skrótem `Get-Content`. Wyświetla tekst zapisany w pliku; nie edytuje go i nie uruchamia programu.\n\nPoniższe przykłady wykonasz w katalogu zawierającym wskazane pliki. Zastąp nazwy rzeczywistymi nazwami widocznymi po `ls`.\n\n```powershell\ncat .\\README.md\ncat .\\main.py\ncat \".\\moje notatki.txt\"\n```\n\n`cat .\\main.py` pokazuje kod źródłowy. Nie uruchamia programu Pythona. Notatniki `.ipynb` otwieraj w Jupyter — `cat` pokazałby ich zapis JSON, a nie wygodną kartę pracy.\n\n`ls` służy do przeglądania nazw plików i katalogów, a `cat` — zawartości konkretnego pliku tekstowego. Przy błędzie „ścieżka nie istnieje” sprawdź nazwę oraz bieżący katalog.\n\n**Zadanie:** wybierz dostępny plik tekstowy i wyświetl jego zawartość. Jeśli nie masz jeszcze takiego pliku, wróć do tego polecenia po sklonowaniu repozytorium.\n\nPomoc: [Get-Content](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-content?view=powershell-7.5)."
    },
    {
     "id": "setup-06",
     "title": "Dane autora commitów",
     "kind": "setup",
     "context": "",
     "markdown": "Przed pierwszym commitem ustaw dane autora. W poniższych poleceniach wpisz własne imię, nazwisko i adres e-mail powiązany z kontem GitHub. Jeśli nie chcesz ujawniać prywatnego adresu w historii, użyj adresu `noreply` podanego w ustawieniach e-mail na GitHub.\n\n```powershell\ngit config --global user.name \"Imie Nazwisko\"\ngit config --global user.email \"twoj_email@example.com\"\n```\n\n`--global` zapisuje ustawienia dla Twojego konta użytkownika na tym komputerze. Zwykle wystarczy zrobić to raz. Te dane opisują autora zmian; nie logują do GitHub.\n\nSprawdź zapisane wartości:\n\n```powershell\ngit config --global --get user.name\ngit config --global --get user.email\n```\n\nPomoc: [przygotowanie Git do pracy](https://docs.github.com/en/get-started/git-basics/set-up-git)."
    },
    {
     "id": "setup-07",
     "title": "Utworzenie klucza SSH w PowerShell",
     "kind": "setup",
     "context": "",
     "markdown": "Klucz SSH umożliwi uwierzytelnienie podczas pracy z GitHub. Najpierw sprawdź, czy narzędzia są dostępne i czy masz już klucze:\n\n```powershell\nGet-Command ssh, ssh-keygen\nls \"$env:USERPROFILE\\.ssh\"\n```\n\nBrak katalogu `.ssh` przy pierwszej konfiguracji jest normalny. Jeśli nie ma polecenia `ssh-keygen`, poproś prowadzącego o pomoc z klientem OpenSSH. Nie potrzebujesz serwera SSH.\n\nJeżeli nie masz klucza do wykorzystania, wygeneruj nową parę, podając własny e-mail jako opis:\n\n```powershell\nssh-keygen -t ed25519 -C \"twoj_email@example.com\"\n```\n\n1. Przy pytaniu o miejsce zapisu naciśnij Enter, aby zaakceptować domyślną ścieżkę, o ile nie nadpisujesz istniejącego klucza.\n2. Ustaw frazę zabezpieczającą klucz — `passphrase` — i wpisz ją ponownie. Znaki nie są widoczne podczas wpisywania.\n3. Jeśli program pyta o nadpisanie istniejącego pliku, odpowiedz `n` i skonsultuj się z prowadzącym. Nie niszcz wcześniej używanego klucza.\n\nPomoc: [generowanie klucza SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=windows)."
    },
    {
     "id": "setup-08",
     "title": "Pliki klucza: prywatny i publiczny",
     "kind": "setup",
     "context": "",
     "markdown": "Po zaakceptowaniu domyślnej lokalizacji klucze znajdziesz w `.ssh` we własnym profilu, zwykle `C:\\Users\\NAZWA_UZYTKOWNIKA\\.ssh`. W PowerShell zapis `$env:USERPROFILE` oznacza ścieżkę do Twojego profilu.\n\n```powershell\nls \"$env:USERPROFILE\\.ssh\"\n```\n\n| Plik | Znaczenie | Co z nim robimy? |\n|---|---|---|\n| `id_ed25519` | Klucz prywatny | Chronimy go na swoim komputerze. Nie wysyłamy go do GitHub, repozytorium ani innych osób. |\n| `id_ed25519.pub` | Klucz publiczny | Jego zawartość dodajemy do ustawień konta GitHub. |\n\nTo dwa pliki utworzone przez `ssh-keygen`. Fraza `passphrase` zabezpiecza klucz prywatny; nie jest hasłem do konta GitHub. Może być wymagana przy kolejnych połączeniach.\n\n**Nie twórz kluczy w katalogu repozytorium. Do GitHub kopiujemy wyłącznie plik z końcówką `.pub`.**\n\nPomoc: [klucze SSH w Windows](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement)."
    },
    {
     "id": "setup-09",
     "title": "Dodanie klucza publicznego do GitHub",
     "kind": "setup",
     "context": "",
     "markdown": "Wyświetl zawartość klucza publicznego i skopiuj cały wiersz, od `ssh-ed25519` do końca. Nie kopiuj polecenia ani znaku zachęty PowerShell.\n\n```powershell\ncat \"$env:USERPROFILE\\.ssh\\id_ed25519.pub\"\n```\n\nMożesz też skopiować samą zawartość do schowka:\n\n```powershell\ncat \"$env:USERPROFILE\\.ssh\\id_ed25519.pub\" | clip\n```\n\n1. Zaloguj się na własne konto GitHub. Kliknij zdjęcie profilowe, potem **Settings**.\n2. Otwórz **SSH and GPG keys** i wybierz **New SSH key**.\n3. W polu **Title** podaj opis komputera, np. `Laptop szkolny`.\n4. Jako **Key type** wybierz **Authentication Key**. W polu **Key** wklej klucz publiczny.\n5. Kliknij **Add SSH key** i potwierdź dostęp do konta, jeśli GitHub o to poprosi.\n\nPomoc: [dodawanie klucza SSH do konta](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)."
    },
    {
     "id": "setup-10",
     "title": "Sprawdzenie połączenia SSH",
     "kind": "setup",
     "context": "",
     "markdown": "W PowerShell wykonaj:\n\n```powershell\nssh -T git@github.com\n```\n\nUżyj dokładnie `git@github.com` — w tym poleceniu nie zastępuj słowa `git` swoim loginem.\n\nPrzy pierwszym połączeniu program może zapytać o zaufanie do serwera. Porównaj wyświetlony odcisk klucza z [oficjalnymi odciskami GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints). Wpisz `yes` tylko wtedy, gdy się zgadzają. Przy różnicy przerwij i zgłoś problem.\n\nJeśli pojawi się prośba o `passphrase`, podaj frazę ustawioną dla klucza. Udane połączenie wyświetla powitanie z Twoim loginem i komunikat `You've successfully authenticated`. Informacja o braku dostępu do powłoki GitHub jest normalna; to nie jest zdalny pulpit ani konsola do pracy.\n\nPo zaakceptowaniu serwera może powstać plik `.ssh\\known_hosts`. Zawiera zapamiętane klucze serwerów; nie jest Twoim kluczem publicznym ani prywatnym.\n\nPomoc: [sprawdzanie połączenia SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)."
    },
    {
     "id": "setup-11",
     "title": "Katalog na repozytoria — bez polskich znaków",
     "kind": "setup",
     "context": "",
     "markdown": "**Jeśli nazwa Twojego katalogu użytkownika zawiera polskie znaki, np. `C:\\Users\\Łukasz`, klonuj repozytorium poza tym katalogiem. Wybierz ścieżkę bez polskich znaków, np. `C:\\Repo`.**\n\nTo zalecenie organizacyjne dla naszego kursu: pozwala ograniczyć problemy części narzędzi z nazwami ścieżek. Nie oznacza, że Git w ogóle nie obsługuje polskich znaków. Sprawdź całą ścieżkę, nie tylko nazwę ostatniego folderu; wybieraj też proste nazwy bez spacji.\n\nW Eksploratorze utwórz katalog `C:\\Repo`, jeśli jeszcze go nie ma. Następnie:\n\n```powershell\ncd C:\\Repo\npwd\nls\n```\n\nJeżeli nie masz prawa tworzyć katalogów w tym miejscu, poproś prowadzącego o wskazanie innej zapisywalnej lokalizacji bez polskich znaków. Nie zmieniaj nazwy profilu Windows ani jego uprawnień.\n\nKlucze SSH pozostają w `.ssh` w profilu użytkownika. Nie przenoś ich do repozytorium razem z zadaniami."
    },
    {
     "id": "setup-12",
     "title": "git clone — pierwsza kopia repozytorium",
     "kind": "setup",
     "context": "",
     "markdown": "Otwórz na GitHub właściwe repozytorium zadań, do którego masz prawo zapisu. Wybierz **Code**, zakładkę **SSH** i skopiuj adres. Nie wybieraj ZIP-a ani adresu HTTPS w tym ćwiczeniu.\n\nPoniżej jest wzór: zastąp `UZYTKOWNIK/NAZWA_REPO` danymi ze skopiowanego adresu. Właścicielem może być również organizacja szkolna.\n\n```powershell\ncd C:\\Repo\ngit clone git@github.com:UZYTKOWNIK/NAZWA_REPO.git\ncd .\\NAZWA_REPO\ngit status\n```\n\n`git clone` tworzy podkatalog repozytorium i pobiera pliki wraz z historią. Poczekaj na zakończenie klonowania i powrót znaku zachęty, zanim wejdziesz do folderu albo zaczniesz kopiować do niego pliki.\n\nKlonowanie wykonujesz raz dla danej lokalnej kopii, a nie przed każdą lekcją. Aktualizacje pobierzesz później przez `git pull`. Dalsze polecenia Git wykonuj wewnątrz sklonowanego repozytorium.\n\nPomoc: [klonowanie repozytorium z GitHub](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)."
    },
    {
     "id": "setup-13",
     "title": "Podsumowanie poleceń Git",
     "kind": "setup",
     "context": "",
     "markdown": "| Polecenie | Do czego służy? |\n|---|---|\n| `git clone ADRES` | Tworzy lokalną kopię repozytorium. W miejsce `ADRES` wstaw adres SSH z GitHub. |\n| `git status` | Pokazuje zmiany w plikach i to, które przygotowano do commita. |\n| `git add .` | Przygotowuje zmiany z bieżącego katalogu i jego podkatalogów do następnego commita. |\n| `git commit -m \"nazwa commita\"` | Zapisuje przygotowane zmiany w lokalnej historii; tekst w cudzysłowie jest opisem commita. |\n| `git push` | Wysyła lokalne commity do repozytorium zdalnego, np. na GitHub. |\n| `git pull` | Pobiera zmiany z repozytorium zdalnego i integruje je z bieżącą gałęzią. |\n\nW tym kursie pracujemy w sklonowanym repozytorium, na gałęzi śledzącej gałąź z GitHub. Dzięki temu zwykle wystarczą samo `git push` i samo `git pull`.\n\nDokumentacja: [clone](https://git-scm.com/docs/git-clone), [status](https://git-scm.com/docs/git-status), [add](https://git-scm.com/docs/git-add), [commit](https://git-scm.com/docs/git-commit), [push](https://git-scm.com/docs/git-push), [pull](https://git-scm.com/docs/git-pull)."
    },
    {
     "id": "setup-14",
     "title": "Plik roboczy, obszar przygotowania i commit",
     "kind": "setup",
     "context": "",
     "markdown": "| Etap | Gdzie są zmiany? | Następna czynność |\n|---|---|---|\n| Zapisany plik | W katalogu roboczym na Twoim komputerze | Sprawdź `git status`. |\n| Po `git add .` | W obszarze przygotowania, czyli indeksie Git | Utwórz commit z przygotowanych zmian. |\n| Po `git commit` | W lokalnej historii repozytorium | Wyślij commity przez `git push`. |\n| Po udanym `git push` | Również w repozytorium na GitHub | Sprawdź je w przeglądarce. |\n\nUruchamiaj `git add .` z głównego katalogu repozytorium, jeśli chcesz uwzględnić zmiany w całym projekcie. Polecenie obejmuje nowe pliki, modyfikacje i usunięcia w tym zakresie; nie dodaje nowych plików wykluczonych przez `.gitignore`.\n\nPrzed dodaniem przejrzyj listę. Nie dodawaj haseł, kluczy prywatnych ani przypadkowych plików. Jeśli zmienisz plik ponownie po `git add .`, wykonaj `add` jeszcze raz, aby nowa wersja trafiła do commita.\n\nPomoc: [obszar przygotowania i git add](https://git-scm.com/docs/git-add), [zapis commita](https://git-scm.com/docs/git-commit)."
    },
    {
     "id": "setup-15",
     "title": "Codzienny przebieg pracy",
     "kind": "setup",
     "context": "",
     "markdown": "Na początku pracy wejdź do głównego katalogu repozytorium i sprawdź stan. Gdy nie masz niezapisanych w commitach zmian, pobierz aktualizacje:\n\n```powershell\ngit status\ngit pull\n```\n\nNastępnie rozwiąż zadanie w karcie pracy, uruchom własne komórki od początku i zapisz notatnik oraz wymagane pliki wynikowe. Na koniec wykonaj kolejno:\n\n```powershell\ngit status\ngit add .\ngit status\ngit commit -m \"Rozwiazanie zadania 01\"\ngit push\n```\n\nSprawdzasz zmiany, dodajesz je do obszaru przygotowania, kontrolujesz wybór, tworzysz lokalny commit i udostępniasz go na GitHub. W opisie commita napisz, co zmieniłeś; nie nazywa on nowego pliku ani gałęzi.\n\nPo `push` otwórz repozytorium w przeglądarce i sprawdź pliki oraz ostatni commit. Samo zapisanie pliku lub wykonanie `commit` nie udostępnia pracy prowadzącemu.\n\nPomoc: [sprawdzanie stanu](https://git-scm.com/docs/git-status), [wysyłanie commitów](https://git-scm.com/docs/git-push), [pobieranie zmian](https://git-scm.com/docs/git-pull)."
    },
    {
     "id": "setup-16",
     "title": "Zadanie: pierwszy pełny cykl pracy",
     "kind": "setup",
     "context": "",
     "markdown": "Pracuj wyłącznie we własnym repozytorium zadań lub w repozytorium wskazanym przez prowadzącego, do którego masz prawo zapisu.\n\n1. Wejdź do jego lokalnego katalogu. Wykonaj `git status`, a przy czystym stanie `git pull`.\n2. Utwórz w edytorze plik `notatki-konfiguracja.txt` i zapisz w nim dwa zdania: czym różni się `ls` od `cat` i czym różni się `commit` od `push`. Jeśli plik już istnieje, dopisz notatkę bez kasowania wcześniejszej treści.\n3. Zapisz plik. Sprawdź jego treść przez `cat .\\notatki-konfiguracja.txt`.\n4. Wykonaj `git status`, `git add .`, ponownie `git status`, a potem `git commit -m \"Notatki z konfiguracji\"` i `git push`.\n5. Znajdź plik oraz commit na GitHub i pokaż je prowadzącemu.\n\nNie wpisuj do notatki haseł, frazy zabezpieczającej ani zawartości kluczy.\n\n**Pytania:** czy commit jest już widoczny na GitHub przed `push`? Czy `git add .` zapisze w commicie zmianę dopisaną dopiero po wykonaniu tego polecenia?"
    },
    {
     "id": "setup-17",
     "title": "Gdy polecenie nie działa",
     "kind": "setup",
     "context": "",
     "markdown": "- **`git` nie jest rozpoznawany:** sprawdź zakończenie instalacji Git w Portalu Firmy i uruchom nowe okno PowerShell.\n- **`not a git repository`:** sprawdź lokalizację przez `pwd`; wejdź przez `cd` do właściwego sklonowanego repozytorium.\n- **`Permission denied (publickey)`:** sprawdź, czy dodałeś plik `.pub` do właściwego konta GitHub i czy powitanie po `ssh -T git@github.com` zawiera Twój login. Poproś prowadzącego o pomoc; nie wysyłaj mu klucza prywatnego.\n- **`nothing to commit`:** sprawdź, czy zapisałeś plik i przygotowałeś jego zmianę przez `git add .`.\n- **Odrzucony `push` lub konflikt przy `pull`:** nie używaj `--force` i nie usuwaj repozytorium. Zatrzymaj się, sprawdź komunikat oraz `git status` i poproś o pomoc w połączeniu zmian.\n\nPrzed następną lekcją potrafisz otworzyć PowerShell, wskazać repozytorium, wyświetlić plik oraz przejść pełny cykl od zmiany pliku do jej udostępnienia na GitHub."
    }
   ]
  },
  {
   "number": null,
   "id": "aktualizacja-zadan",
   "route": "aktualizacja-zadan",
   "kind": "setup",
   "shortTitle": "Aktualizacja zadań w repozytorium",
   "counterLabel": "Aktualizacja",
   "menuLabel": "GIT",
   "badge": "Przed kolejnymi lekcjami",
   "title": "Aktualizacja zadań w repozytorium",
   "sourceFile": "content/aktualizacja-zadan.md",
   "assetBase": "",
   "checksum": "944953f3a91ae3bad58354b5b889bde4d2b6966e9a258d26def75042683af4f4",
   "sections": [
    {
     "id": "setup-01",
     "title": "Oryginał, własny fork i kopia na komputerze",
     "kind": "setup",
     "context": "",
     "markdown": "Prowadzący publikuje nowe lub poprawione zadania w [WDI-WDP/tal-repo-na-zadania](https://github.com/WDI-WDP/tal-repo-na-zadania). Repozytorium korzysta z gałęzi **main**.\n\n| Miejsce | Co zawiera? | Nazwa w poleceniach Git |\n|---|---|---|\n| Repozytorium WDI-WDP | Oryginalne materiały prowadzącego | `upstream`, po dodaniu tego adresu |\n| Twój fork na GitHub | Materiały i Twoje zapisane rozwiązania | `origin`, jeśli sklonowałeś własny fork |\n| Folder na komputerze | Pliki, które otwierasz i zmieniasz w Jupyter | Lokalna kopia repozytorium |\n\nAktualizacja ma **dołączyć zmiany prowadzącego do Twojej pracy**. Nie wymaga tworzenia nowego forka ani ponownego klonowania.\n\nSamo `git pull` z własnego `origin` nie pobierze nowych zadań z WDI-WDP, jeśli Twój fork nie zawiera jeszcze tych zmian. Potrzebne jest także połączenie historii z oryginałem, czyli **merge**."
    },
    {
     "id": "setup-02",
     "title": "Zabezpieczenie własnych rozwiązań",
     "kind": "setup",
     "context": "",
     "markdown": "Przed synchronizacją zapisz otwarte notatniki i zamknij je w Jupyter, aby otwarty edytor nie zapisał później starej wersji. Ważne rozwiązania możesz dodatkowo skopiować do folderu poza repozytorium.\n\nW PowerShell przejdź do istniejącej lokalnej kopii swojego forka. Przykładowa ścieżka:\n\n```powershell\ncd C:\\Repo\\tal-repo-na-zadania\ngit remote -v\ngit branch --show-current\ngit status\n```\n\nSprawdź, czy **origin prowadzi do Twojego konta**, np. `git@github.com:TWOJ-LOGIN/tal-repo-na-zadania.git`, a nie do WDI-WDP. Jeśli sklonowałeś oryginał lub pracujesz na innej gałęzi niż `main`, ustal z prowadzącym, którą kopię i gałąź należy aktualizować.\n\nJeżeli masz własne zmiany, przejrzyj listę, a następnie zapisz je w commicie i wyślij do swojego forka:\n\n```powershell\ngit add .\ngit commit -m \"Zapis rozwiazan przed aktualizacja zadan\"\ngit push origin main\ngit status\n```\n\nTen przykład zakłada pracę na `main`. Nie dodawaj haseł, kluczy ani przypadkowych plików. Jeśli nie ma zmian, pomiń `add` i `commit`. Przed scalaniem stan powinien być czysty, a własne commity zapisane na GitHub. Przy błędzie zatrzymaj się, zamiast wykonywać kolejne polecenia."
    },
    {
     "id": "setup-03",
     "title": "Wariant A: Sync fork na GitHub",
     "kind": "setup",
     "context": "",
     "markdown": "1. Zaloguj się na GitHub i otwórz **swój fork**, czyli `TWOJ-LOGIN/tal-repo-na-zadania`. Sprawdź właściciela nad listą plików.\n2. Wybierz gałąź **main**. Informacja pod nazwą repozytorium powinna wskazywać, że fork pochodzi z WDI-WDP.\n3. Kliknij **Sync fork** nad listą plików.\n4. Przeczytaj informację o zmianach i wybierz **Update branch**.\n5. Po zakończeniu sprawdź nowe zadania lub ostatnie commity w swoim forku.\n\nKomunikat, że gałąź jest aktualna, oznacza, że nie ma nowych zmian do pobrania. Nie trzeba tworzyć pustego commita.\n\n**Nie wybieraj opcji odrzucania własnych commitów**, np. **Discard commits**, aby wymusić zgodność. Jeśli GitHub zgłasza konflikt lub proponuje pull request do jego rozwiązania, przerwij prostą synchronizację i skorzystaj z pomocy prowadzącego.\n\nTen krok aktualizuje fork **na GitHub**, ale jeszcze nie folder na komputerze.\n\nPomoc: [synchronizacja forka w przeglądarce](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/syncing-a-fork)."
    },
    {
     "id": "setup-04",
     "title": "Wariant A: pobranie zmian na komputer",
     "kind": "setup",
     "context": "",
     "markdown": "Po udanym **Sync fork → Update branch**, w lokalnym folderze własnego forka wykonaj:\n\n```powershell\ngit status\ngit switch main\ngit pull --ff-only origin main\ngit status\n```\n\nRozpocznij przy czystym stanie pracy. `git switch main` wybiera gałąź, którą aktualizujesz. `git pull --ff-only origin main` pobiera jej aktualną wersję z Twojego forka i dopuszcza tylko aktualizację bez tworzenia dodatkowego scalenia lokalnych, rozbieżnych historii.\n\nJeśli polecenie zgłosi, że **fast-forward nie jest możliwy**, lokalna gałąź i fork mają rozbieżne commity. Nie oznacza to, że należy skasować własne pliki. Pokaż prowadzącemu komunikat i `git status`.\n\nOtwórz kartę ponownie z dysku w Jupyter. Sprawdź, czy widzisz nowe polecenia i czy pozostały Twoje rozwiązania. Samo odświeżenie strony forka nie zmienia lokalnego notatnika.\n\nPomoc: [git pull i opcja ff-only](https://git-scm.com/docs/git-pull)."
    },
    {
     "id": "setup-05",
     "title": "Wariant B: jednorazowe dodanie upstream",
     "kind": "setup",
     "context": "",
     "markdown": "Ten wariant wykonuje synchronizację poleceniami Git. Jest alternatywą dla przycisku **Sync fork**, nie obowiązkowym drugim sposobem aktualizacji.\n\nW lokalnej kopii własnego forka sprawdź adresy:\n\n```powershell\ngit remote -v\n```\n\nJeśli nie ma nazwy `upstream`, dodaj oryginalne repozytorium prowadzącego:\n\n```powershell\ngit remote add upstream https://github.com/WDI-WDP/tal-repo-na-zadania.git\ngit remote -v\n```\n\n**origin** ma nadal wskazywać Twój fork, a **upstream** repozytorium WDI-WDP. Dodanie adresu nie kopiuje plików ani nie wykonuje scalenia.\n\nTę konfigurację robisz raz dla danej lokalnej kopii. Jeśli `upstream` już istnieje, sprawdź adres zamiast dodawać go ponownie. Przy błędnym adresie skonsultuj zmianę; nie zastępuj przypadkowo `origin` oryginalnym repozytorium.\n\nPomoc: [konfiguracja upstream dla forka](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/configuring-a-remote-repository-for-a-fork), [git remote](https://git-scm.com/docs/git-remote)."
    },
    {
     "id": "setup-06",
     "title": "Wariant B: pobranie nowych commitów",
     "kind": "setup",
     "context": "",
     "markdown": "Zapisz własną pracę zgodnie z wcześniejszym slajdem. Przy czystym stanie i prawidłowych adresach wykonaj:\n\n```powershell\ngit switch main\ngit pull --ff-only origin main\ngit fetch upstream\ngit log --oneline HEAD..upstream/main\n```\n\nPo każdym poleceniu sprawdź wynik. Jeśli pojawi się błąd, nie przechodź dalej automatycznie.\n\n`git fetch upstream` pobiera informacje i commity z repozytorium prowadzącego. **Nie zmienia jeszcze Twoich plików roboczych.** Lokalna nazwa `upstream/main` wskazuje pobraną wersję gałęzi prowadzącego.\n\nOstatnie polecenie pokazuje commity z `upstream/main`, których nie ma w bieżącej gałęzi. Przejrzyj ich opisy. Brak wpisów oznacza, że te zmiany są już uwzględnione.\n\nPomoc: [pobieranie commitów przez git fetch](https://git-scm.com/docs/git-fetch)."
    },
    {
     "id": "setup-07",
     "title": "Wariant B: scalenie i wysłanie do forka",
     "kind": "setup",
     "context": "",
     "markdown": "Jeśli pobieranie zakończyło się poprawnie, dołącz zmiany do lokalnej gałęzi `main`:\n\n```powershell\ngit merge --no-edit upstream/main\ngit status\n```\n\n`merge` łączy zmiany prowadzącego z Twoją historią. Może wykonać prostą aktualizację **fast-forward** albo utworzyć commit scalający. `--no-edit` akceptuje domyślny opis tego commita. Ta opcja **nie rozwiązuje konfliktów** i nie wybiera za Ciebie wersji plików.\n\nJeśli scalenie zakończyło się poprawnie, przejrzyj zaktualizowane karty. Dopiero wtedy wyślij wynik do własnego forka:\n\n```powershell\ngit push origin main\ngit status\n```\n\nOtwórz swój fork na GitHub i sprawdź pliki oraz ostatni commit. **Nie wykonuj `git push upstream main`**: rozwiązania i połączone zmiany wysyłasz do swojego repozytorium, nie do repozytorium prowadzącego.\n\nPomoc: [scalanie zmian przez git merge](https://git-scm.com/docs/git-merge)."
    },
    {
     "id": "setup-08",
     "title": "Konflikt w karcie Jupyter",
     "kind": "setup",
     "context": "",
     "markdown": "Konflikt może wystąpić, gdy prowadzący zmieni treść karty, a Ty uzupełnisz ten sam notatnik. Git nie zawsze potrafi automatycznie połączyć obie wersje pliku `.ipynb`.\n\n1. Zatrzymaj się po komunikacie **CONFLICT**. Nie wykonuj `push` i nie uruchamiaj nierozwiązanego notatnika.\n2. Sprawdź `git status` i pokaż prowadzącemu nazwy konfliktujących plików.\n3. Podczas łączenia trzeba zachować nowe polecenia **i** Twój kod. Nie wybieraj bez sprawdzenia całej wersji „naszej” lub „ich”. Plik `.ipynb` ma strukturę JSON, dlatego przypadkowe usuwanie fragmentów może go uszkodzić.\n\nJeśli chcesz wycofać niedokończone scalenie rozpoczęte przy czystym stanie, a nie wprowadziłeś jeszcze poprawek rozwiązywania konfliktu:\n\n```powershell\ngit merge --abort\ngit status\n```\n\nJeżeli zacząłeś już ręcznie poprawiać konflikt, najpierw zachowaj tę pracę i poproś o pomoc. `--abort` wycofuje bieżącą próbę scalenia, nie jest sposobem na usunięcie pojedynczego błędu w kodzie.\n\nNie używaj `reset --hard`, wymuszonego `push` ani usuwania repozytorium jako sposobu aktualizacji. Nie musisz tracić rozwiązań, aby otrzymać nowe zadania.\n\nPomoc: [konflikty i przerwanie scalenia](https://git-scm.com/docs/git-merge)."
    },
    {
     "id": "setup-09",
     "title": "Podsumowanie dwóch sposobów aktualizacji",
     "kind": "setup",
     "context": "",
     "markdown": "| Etap | Wariant A: GitHub i PowerShell | Wariant B: PowerShell |\n|---|---|---|\n| Własna praca | Zapisane notatniki, commit, push do własnego forka | Tak samo |\n| Zmiany prowadzącego | Na swoim forku: **Sync fork → Update branch** | `git fetch upstream`, potem `git merge --no-edit upstream/main` |\n| Kopia lokalna | `git pull --ff-only origin main` | Aktualizuje się podczas udanego merge |\n| Kopia na GitHub | Aktualizuje się podczas Sync fork | `git push origin main` po udanym merge |\n\nW obu wariantach sprawdzasz stan przed rozpoczęciem i po zakończeniu. Wariant B wymaga wcześniejszego dodania `upstream` i uzgodnienia lokalnej gałęzi z `origin/main`.\n\n**Nie klonuj repozytorium ponownie przed każdą lekcją.** Aktualizuj istniejącą kopię, otwórz kartę z dysku i sprawdź, czy masz aktualne zadania oraz dotychczasowe rozwiązania."
    },
    {
     "id": "setup-10",
     "title": "Zadanie: aktualna karta we własnym forku",
     "kind": "setup",
     "context": "",
     "markdown": "Zaktualizuj swojego forka na podstawie [repozytorium WDI-WDP](https://github.com/WDI-WDP/tal-repo-na-zadania) jednym z opisanych sposobów.\n\n- Pokaż, że `origin` wskazuje Twoje konto, a nie repozytorium prowadzącego.\n- Znajdź aktualną kartę w swoim forku na GitHub oraz w folderze na komputerze.\n- Otwórz ją w Jupyter i upewnij się, że Twoje dotychczasowe rozwiązania pozostały dostępne.\n- Wyjaśnij, dlaczego samo `fetch` nie aktualizuje otwartego notatnika i czym różni się pobranie commitów od ich scalenia.\n\nJeżeli nie ma nowych zmian, pokaż informację o aktualności i `git status`. Nie twórz sztucznej zmiany tylko po to, by powstał commit. W razie konfliktu pokaż komunikat prowadzącemu zamiast wymuszać aktualizację."
    }
   ]
  },
  {
   "number": 1,
   "kind": "lesson",
   "title": "Powtórzenie Pythona: Jupyter, obliczenia i sterowanie",
   "sourceFile": "01_jupyter_i_podstawy_pythona/karta_pracy.ipynb",
   "notebook": "lekcje/01_jupyter_i_podstawy_pythona/karta_pracy.ipynb",
   "download": "pobierz/01_jupyter_i_podstawy_pythona.zip",
   "assetBase": "lekcje/01_jupyter_i_podstawy_pythona/",
   "checksum": "9c4deba73a09fcdf3fcb1e8c9f1f975529047fab2e77e8f3390490c838b490a5",
   "sections": [
    {
     "id": "intro",
     "title": "Cel i sposób pracy",
     "kind": "intro",
     "context": "",
     "markdown": "# Karta pracy 01. Powtórzenie Pythona: Jupyter, obliczenia i sterowanie\n\n**Kurs:** Python — programowanie do matury rozszerzonej z informatyki\n\n**Prowadzący:** por. Jakub GRĄTKIEWICZ · jakub.gratkiewicz@wat.edu.pl\n\n**Cel:** Przygotowanie do przetwarzania cyfr, liczników i danych z pliku.\n\nZnasz podstawy Pythona. Przypominamy potrzebne narzędzia i stosujemy je w coraz bardziej złożonych zadaniach.\n\nOtwórz ten notatnik w folderze bieżącej lekcji. W zadaniu plikowym samodzielnie napisz otwarcie pliku, odczyt, konwersję, obliczenia i zapis odpowiedzi. Nie ma wspólnej komórki wczytującej dane ani gotowych list z plików zadaniowych.\n\nZadania 1–12 wykonujemy na lekcji, zadania 13–14 samodzielnie. Niedokończone zadania uzupełnij przed następnym spotkaniem.\n\nW pustych komórkach roboczych wpisz własny kod. Wyświetl wyniki obliczeń i przygotuj się do wyjaśnienia swojego rozwiązania.\n\nPrzed oddaniem zrestartuj jądro, uruchom własne komórki od początku i zapisz notatnik oraz wymagane pliki wynikowe."
    },
    {
     "id": "s001",
     "title": "Katalog lekcji i dane",
     "kind": "organization",
     "context": "",
     "markdown": "## Katalog lekcji i dane\n\nTa karta jest powtórzeniem na niewielkich danych zapisanych w poleceniach. Nie wymaga zewnętrznych plików wejściowych. Zachowaj własny kod w katalogu tej lekcji."
    },
    {
     "id": "s002",
     "title": "1. Przypomnienie",
     "kind": "recall",
     "context": "",
     "markdown": "## 1. Przypomnienie\n\n1. Czym różni się wynik wyświetlony na ekranie od wartości przechowywanej w zmiennej?\n2. Jaki jest wynik 17 / 5, 17 // 5 i 17 % 5?\n3. Dlaczego komórka uruchomiona po restarcie jądra może nie znać zmiennej?\n\nTo pytania do wspólnego powtórzenia, nie zestaw kartkówki.\n\n```python\n# Własne odpowiedzi:\n# 1.\n# 2.\n# 3.\n```"
    },
    {
     "id": "s003",
     "title": "2. Treść dydaktyczna i zadania na lekcji",
     "kind": "theory",
     "context": "",
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nPrzypomnij potrzebne narzędzia, przeczytaj kontrakt funkcji i sam napisz rozwiązanie. W zadaniach z plikiem pamiętaj również o odczycie danych i wymaganym zapisie wyniku."
    },
    {
     "id": "s004",
     "title": "Komórki, typy i stan programu",
     "kind": "theory",
     "context": "",
     "markdown": "## Komórki, typy i stan programu\n\nKomórka Markdown przechowuje opis; komórka Code wykonuje kod w jądrze Pythona. Shift+Enter uruchamia komórkę i przechodzi dalej. Numer wykonania pokazuje kolejność uruchomień, nie położenie na stronie. Zmienna istnieje dopiero po wykonaniu przypisania. Uruchomienie komórki ponownie może zmienić wynik, jeśli kod korzysta ze starej wartości.\n\nint przechowuje liczby całkowite, float przybliżenia liczb rzeczywistych, str tekst, bool True albo False. Wcięcie o cztery spacje wyznacza blok. print wyświetla dane, a type podaje typ wartości.\n\n```python\nliczba = 7\nliczba += 1\nprint(liczba, type(liczba))\nprint(\"7\" + \"3\", 7 + 3)\n```"
    },
    {
     "id": "s005",
     "title": "Zadanie 1: Przewidź, uruchom, wyjaśnij",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 1: Przewidź, uruchom, wyjaśnij\n\nBez uruchamiania oblicz wynik a=8; b=a; a+=5. Zapisz wartości a i b, następnie wykonaj kod. Zmienna przewidywanie ma zawierać parę oczekiwanych wartości. Wyjaśnij, dlaczego b się nie zmienia.\n\n**Wskazówka:** Przypisanie nazwy b do liczby nie tworzy formuły zależnej od a."
    },
    {
     "id": "s006",
     "title": "Zadanie 2: Powtarzalny notatnik",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: Powtarzalny notatnik\n\nUstaw licznik na 0, zwiększ go trzykrotnie i zapisz w wynik_stanu. Uruchom komórkę dwa razy, a następnie po restarcie. Za każdym razem wynik ma wynosić 3. Wyjaśnij rolę inicjalizacji.\n\n**Wskazówka:** Zerowanie musi należeć do komórki, którą powtarzasz."
    },
    {
     "id": "s007",
     "title": "Dzielenie, konwersja i warunki",
     "kind": "theory",
     "context": "",
     "markdown": "## Dzielenie, konwersja i warunki\n\nOperator / zawsze daje wynik rzeczywisty. // zaokrągla iloraz w dół: -7 // 3 daje -3. Dla dodatnich liczb jest to liczba pełnych grup. Reszta n % p należy do zakresu od 0 do p-1, gdy p jest dodatnie. Zachodzi n == (n // p) * p + n % p.\n\nint(\"17\") zamienia zapis liczby na liczbę. Użyj == do porównania; = przypisuje. Warunki łączymy przez and, or i not. W if/elif/else wykonywany jest tylko pierwszy spełniony wariant. Przed dzieleniem sprawdź, czy dzielnik nie jest zerem.\n\n```python\nn = 125\nprint(n // 60, n % 60)\npunkty = 72\nif punkty >= 80:\n    opis = \"bardzo dobry\"\nelif punkty >= 50:\n    opis = \"zaliczony\"\nelse:\n    opis = \"do poprawy\"\nprint(opis)\n```"
    },
    {
     "id": "s008",
     "title": "Zadanie 3: Czas w sekundach",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 3: Czas w sekundach\n\nDla tekstu '3671' oblicz h, m, s bez liczb rzeczywistych. Wynik: 1 godzina, 1 minuta i 11 sekund. Wypisz wynik w formacie 01:01:11. Sprawdź również 59 i 3600 sekund.\n\n**Wskazówka:** Najpierw wydziel godziny, potem pracuj na pozostałych sekundach."
    },
    {
     "id": "s009",
     "title": "Zadanie 4: Nocna wyprawa i zegar",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: Nocna wyprawa i zegar\n\nWyprawa zaczyna się o 23:47 i trwa 89 minut. Zapisz godzinę rozpoczęcia, minutę i długość wyprawy w osobnych zmiennych. Oblicz godzinę zakończenia w formacie HH:MM oraz liczbę przekroczonych północy. Użyj liczb całkowitych, bez bibliotek daty. Program powinien działać również dla wyprawy trwającej kilka dni.\n\n**Wskazówka:** Najpierw wyraź cały czas w minutach, a potem oddziel pełne doby."
    },
    {
     "id": "s010",
     "title": "Zadanie 5: Dzielniki bez pułapki logicznej",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: Dzielniki bez pułapki logicznej\n\nDla n=30 zapisz w czy_dzielne informację, czy n jest podzielne przez 3 i przez 5. Zmień n na 9: wynik ma być False. Wyjaśnij różnicę między and i or.\n\n**Wskazówka:** Oba porównania muszą być osobnymi wyrażeniami."
    },
    {
     "id": "s011",
     "title": "Zadanie 6: Kamień, papier, nożyce — sędzia jednej rundy",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Kamień, papier, nożyce — sędzia jednej rundy\n\nDwie osoby zapisują wybory w gracz_a i gracz_b: kamien, papier albo nozyce. Napisz program wyświetlający A, B lub REMIS. Kamień wygrywa z nożycami, nożyce z papierem, papier z kamieniem. Jeżeli którykolwiek napis jest inny, wyświetl BLEDNY RUCH. Zacznij od gracz_a=\"papier\" i gracz_b=\"kamien\". Nie losuj wyborów ani nie pisz całej gry.\n\n**Wskazówka:** Oddziel niepoprawne dane i remis od trzech sytuacji, w których wygrywa A."
    },
    {
     "id": "s012",
     "title": "Zadanie 7: Progi i wartości graniczne",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Progi i wartości graniczne\n\nDla 0 <= punkty <= 100 przypisz kategorie: poniżej 50 'N', 50–79 'P', od 80 'B'. Rozwiąż dla punkty=80 i uzasadnij działanie dla 49, 50 i 79.\n\n**Wskazówka:** Ułóż progi od najwyższego albo zapewnij rozłączne przedziały."
    },
    {
     "id": "s013",
     "title": "Pętla, licznik i akumulator",
     "kind": "theory",
     "context": "",
     "markdown": "## Pętla, licznik i akumulator\n\nrange(a, b) obejmuje a i wyklucza b. range(1, n + 1) przechodzi przez liczby od 1 do n. Licznik zwiększasz tylko po spełnieniu warunku; akumulator powiększasz o wartość elementu.\n\nwhile powtarza kod tak długo, jak warunek jest prawdziwy. W każdej iteracji musi nastąpić postęp prowadzący do zakończenia. Licznik i sumę inicjalizuj przed pętlą; po restarcie i uruchomieniu całej karty wynik ma być taki sam.\n\n```python\nsuma = 0\nile = 0\nfor n in range(1, 11):\n    if n % 2 == 0:\n        suma += n\n        ile += 1\nprint(ile, suma)\n```"
    },
    {
     "id": "s014",
     "title": "Zadanie 8: Filtrowanie i sumowanie",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: Filtrowanie i sumowanie\n\nPętlą policz, ile liczb od 1 do 30 jest podzielnych przez 4, ale nie przez 3. Zapisz liczność w ile, a sumę w suma. Wynik: 5 liczb o sumie 76.\n\n**Wskazówka:** Odrzuć 12 i 24, choć są wielokrotnościami 4."
    },
    {
     "id": "s015",
     "title": "Zadanie 9: Alarm w bazie badawczej",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 9: Alarm w bazie badawczej\n\nCzujnik zapisał pomiary [18,27,29,19,31,28,26,20]. Alarm trwa, gdy kolejne wartości są większe od 25; wartość 25 lub mniejsza przerywa serię. Oblicz długość najdłuższej nieprzerwanej serii alarmowej i wyświetl ją. Nie sortuj pomiarów. Wyjaśnij różnicę między liczbą wszystkich przekroczeń a długością jednej serii.\n\n**Wskazówka:** Pamiętaj osobno długość bieżącej serii i najlepszy dotychczasowy wynik."
    },
    {
     "id": "s016",
     "title": "Zadanie 10: Najmniejsza wystarczająca potęga",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 10: Najmniejsza wystarczająca potęga\n\nDla n=70 znajdź p, najmniejszą potęgę dwójki nie mniejszą od n. Użyj while. Policz wykonane podwojenia w kroki. Wynik: 128 i 7. Sprawdź myślowo n=1 i n=64.\n\n**Wskazówka:** Pierwszą potęgą jest 2**0, czyli 1."
    },
    {
     "id": "s017",
     "title": "Zadanie 11: Mini-analiza jak w arkuszu",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 11: Mini-analiza jak w arkuszu\n\nDla liczb 100–150 policz te, których cyfra jedności jest nieparzysta, a suma cyfry setek i jedności wynosi 6. Zapisz liczność, sumę i największą taką liczbę. Wynik: 5, 625, 145. Wydziel cyfry arytmetycznie.\n\n**Wskazówka:** Wszystkie rozważane liczby mają cyfrę setek 1."
    },
    {
     "id": "s018",
     "title": "Zadanie 12: Ostatnie życie w grze",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 12: Ostatnie życie w grze\n\nBohater zaczyna z 10 punktami energii. Kolejne pułapki zabierają [2,5,1,4,3] punktów. Po każdej odwiedzonej pułapce wyświetl jej numer i pozostałą energię, nie mniejszą niż zero. Zatrzymaj program natychmiast, gdy energia się skończy. Wyświetl liczbę odwiedzonych pułapek. Kolejne pułapki nie mogą już zabierać energii.\n\n**Wskazówka:** Instrukcja break kończy pętlę, a nie tylko bieżący warunek."
    },
    {
     "id": "s019",
     "title": "Podsumowanie",
     "kind": "theory",
     "context": "",
     "markdown": "## Podsumowanie\n\nWyjaśnij jedno własne rozwiązanie i wskaż ważny przypadek brzegowy. W zadaniu plikowym pokaż kod od otwarcia pliku do zapisania odpowiedzi."
    },
    {
     "id": "s020",
     "title": "3. Zadania do samodzielnego wykonania",
     "kind": "homework",
     "context": "",
     "markdown": "## 3. Zadania do samodzielnego wykonania\n\nWykonaj zadania 13–14 przed następnym spotkaniem i zapisz własne rozwiązania."
    },
    {
     "id": "s021",
     "title": "Zadanie 13: cyfry liczby",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 13: cyfry liczby\n\nDla n=407 oblicz sumę trzech cyfr oraz liczbę z cyframi zapisanymi odwrotnie. Użyj // i %. Wynik: 11 oraz 704.\n\n**Wskazówka:** Zero w środku też jest cyfrą."
    },
    {
     "id": "s022",
     "title": "Zadanie 14: wykryj błąd granicy",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 14: wykryj błąd granicy\n\nPolicz sumę kwadratów od 1 do 10 włącznie. Popraw pomysł range(1,10), wyjaśnij błąd i zapisz odpowiedź w suma_kwadratow.\n\n**Wskazówka:** Prawa granica range nie jest wykonywana."
    }
   ]
  },
  {
   "number": 2,
   "kind": "lesson",
   "title": "Powtórzenie: napisy, kolekcje i funkcje",
   "sourceFile": "02_kolekcje_napisy_i_funkcje/karta_pracy.ipynb",
   "notebook": "lekcje/02_kolekcje_napisy_i_funkcje/karta_pracy.ipynb",
   "download": "pobierz/02_kolekcje_napisy_i_funkcje.zip",
   "assetBase": "lekcje/02_kolekcje_napisy_i_funkcje/",
   "checksum": "f193ba08e2bec6fb7c9db570523a38d2b3dd8388714770a215d8d8a07c5fd0ca",
   "sections": [
    {
     "id": "intro",
     "title": "Cel i sposób pracy",
     "kind": "intro",
     "context": "",
     "markdown": "# Karta pracy 02. Powtórzenie: napisy, kolekcje i funkcje\n\n**Kurs:** Python — programowanie do matury rozszerzonej z informatyki\n\n**Prowadzący:** por. Jakub GRĄTKIEWICZ · jakub.gratkiewicz@wat.edu.pl\n\n**Cel:** Palindromy, filtrowanie rekordów i liczniki potrzebne w obu maturach.\n\nZnasz podstawy Pythona. Przypominamy potrzebne narzędzia i stosujemy je w coraz bardziej złożonych zadaniach.\n\nOtwórz ten notatnik w folderze bieżącej lekcji. W zadaniu plikowym samodzielnie napisz otwarcie pliku, odczyt, konwersję, obliczenia i zapis odpowiedzi. Nie ma wspólnej komórki wczytującej dane ani gotowych list z plików zadaniowych.\n\nZadania 1–12 wykonujemy na lekcji, zadania 13–14 samodzielnie. Niedokończone zadania uzupełnij przed następnym spotkaniem.\n\nW pustych komórkach roboczych wpisz własny kod. Wyświetl wyniki obliczeń i przygotuj się do wyjaśnienia swojego rozwiązania.\n\nPrzed oddaniem zrestartuj jądro, uruchom własne komórki od początku i zapisz notatnik oraz wymagane pliki wynikowe."
    },
    {
     "id": "s001",
     "title": "Katalog lekcji i dane",
     "kind": "organization",
     "context": "",
     "markdown": "## Katalog lekcji i dane\n\nTa karta jest powtórzeniem na niewielkich danych zapisanych w poleceniach. Nie wymaga zewnętrznych plików wejściowych. Zachowaj własny kod w katalogu tej lekcji."
    },
    {
     "id": "s002",
     "title": "1. Przypomnienie",
     "kind": "recall",
     "context": "",
     "markdown": "## 1. Przypomnienie\n\n1. Jakie indeksy mają pierwszy i ostatni element listy długości 5?\n2. Co zwraca funkcja bez instrukcji return?\n3. Kiedy trzeba zachować powtórzenia danych?\n\nTo pytania do wspólnego powtórzenia, nie zestaw kartkówki.\n\n```python\n# Własne odpowiedzi:\n# 1.\n# 2.\n# 3.\n```"
    },
    {
     "id": "s003",
     "title": "2. Treść dydaktyczna i zadania na lekcji",
     "kind": "theory",
     "context": "",
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nKażde polecenie określa dane, problem do rozwiązania i wymagany wynik. Przykład wyjaśniający pokazuje, jak rozumieć wymagania i format odpowiedzi. W zadaniu plikowym oblicz właściwy wynik z podanego pliku, nie z małego przykładu w opisie. Samodzielnie zaplanuj sposób rozwiązania i napisz kod. Funkcja ma zwracać wynik; wyświetl go w miejscu jej wywołania, jeśli wymaga tego polecenie. W zadaniach plikowych sam napisz także otwarcie, odczyt i zapis pliku. Przygotuj się do wyjaśnienia swoich decyzji."
    },
    {
     "id": "s004",
     "title": "Napis i lista: indeksy oraz kopie",
     "kind": "theory",
     "context": "",
     "markdown": "## Napis i lista: indeksy oraz kopie\n\nstr jest niezmiennym ciągiem znaków. s[1:4] wybiera indeksy 1, 2, 3; s[::-1] odwraca napis. Lista przechowuje dowolne obiekty i może się zmieniać: append dodaje na koniec.\n\nPrzypisanie b = a dla list nie kopiuje danych: obie nazwy wskazują tę samą listę. b = a.copy() tworzy płytką kopię, wystarczającą dla listy liczb. Nie usuwaj elementów listy podczas przechodzenia po niej; buduj nową listę.\n\n```python\na = [2, 4]\nb = a.copy()\nb.append(8)\nprint(a, b)\ns = \"informatyka\"\nprint(s[0], s[-1], s[2:5], s[::-1])\n```"
    },
    {
     "id": "s005",
     "title": "Zadanie 1: Indeksy i wycinki",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 1: Indeksy i wycinki\n\n**Dane:** Napis `s = \"matura\"`. Indeksy znaków liczymy od 0.\n\n**Do wykonania:** Za pomocą indeksowania i wycinków odczytaj pierwszy znak, ostatni znak, znaki o indeksach od 1 do 3 włącznie oraz napis zapisany od końca. Nie wpisuj gotowych fragmentów ręcznie.\n\n**Wynik:** Zapisz cztery uzyskane napisy w jednej krotce o nazwie `wycinki`. Kolejność elementów krotki ma odpowiadać kolejności próśb w poleceniu. Wyświetl ją i wyjaśnij, jakie znaki obejmuje Twój wycinek.\n\n**Przykład wyjaśniający:** W napisie `\"komputer\"` znak o indeksie 0 to `\"k\"`, a znaki o indeksach 1, 2 i 3 tworzą `\"omp\"`. Indeks oznacza pozycję znaku, nie liczbę znaków do pobrania. W zadaniu wykonaj wszystkie cztery odczyty dla `\"matura\"`."
    },
    {
     "id": "s006",
     "title": "Zadanie 2: Kopia danych",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: Kopia danych\n\n**Dane:** Lista `lista_a = [3, 1, 3]`.\n\n**Do wykonania:** Przygotuj niezależną listę `lista_b` o tej samej zawartości. Dodaj do niej liczbę 9 tak, aby `lista_a` pozostała niezmieniona.\n\n**Wynik:** Wyświetl obie listy. W krótkiej odpowiedzi wyjaśnij, czy samo `lista_b = lista_a` spełniłoby wymaganie i dlaczego.\n\n**Przykład wyjaśniający:** Gdy oryginał zawiera `[4, 6]`, dopisanie 9 do jego niezależnej kopii daje `[4, 6, 9]`, ale oryginał nadal zawiera `[4, 6]`. To właśnie znaczy tutaj „niezależna lista”: zmiana jednej nie może zmienić drugiej."
    },
    {
     "id": "s007",
     "title": "Funkcja i kontrakt",
     "kind": "theory",
     "context": "",
     "markdown": "## Funkcja i kontrakt\n\ndef tworzy funkcję. Parametry opisują dane wejściowe, return przekazuje wynik do miejsca wywołania. Wypisanie wyniku przez print nie zastępuje return. Kontrakt określa dopuszczalne argumenty i znaczenie zwracanej wartości.\n\nNone może oznaczać brak wyniku; nie jest liczbą 0. Funkcja nie powinna korzystać z przypadkowo utworzonej wcześniej zmiennej globalnej. Wywołaj ją z wybranymi argumentami i wyświetl zwróconą wartość przez print.\n\n```python\ndef roznica(a, b):\n    return a - b\n\nprint(roznica(8, 3))\nprint(roznica(3, 8))\nprint(roznica(2, 2))\n```"
    },
    {
     "id": "s008",
     "title": "Zadanie 3: Filtr jako funkcja",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 3: Filtr jako funkcja\n\n**Dane:** Lista liczb całkowitych, która może być pusta i może zawierać powtórzenia.\n\n**Do wykonania:** Napisz funkcję `dodatnie(liczby)` wybierającą wyłącznie wartości większe od zera. Zachowaj ich kolejność i wszystkie wystąpienia. Nie zmieniaj przekazanej listy.\n\n**Wynik:** Funkcja ma zwrócić nową listę dodatnich liczb, a nie ich sumę ani liczbę wystąpień. Wyświetl zwróconą listę dla `[-2, 0, 5, 5]` oraz pustej listy.\n\n**Przykład wyjaśniający:** Dla `[4, -1, 4, 0, 2]` wynikiem jest `[4, 4, 2]`. Obie czwórki pozostają w wyniku, zero nie jest dodatnie, a dwójka nadal znajduje się za czwórkami."
    },
    {
     "id": "s009",
     "title": "Zadanie 4: Wiadomość z przesuniętym alfabetem",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: Wiadomość z przesuniętym alfabetem\n\n**Dane:** Wiadomość z wielkich liter A–Z i spacji oraz całkowite przesunięcie `k` od 0 do 25.\n\n**Do wykonania:** Napisz funkcję `szyfruj(wiadomosc, k)`. Każda litera ma zostać zastąpiona literą oddaloną o `k` pozycji. Alfabet jest cykliczny: po Z następuje A. Spacje pozostają na swoich miejscach.\n\n**Wynik:** Funkcja zwraca zaszyfrowany napis o takiej samej długości jak wiadomość. Wyświetl wynik dla `\"TAJNA BAZA\"` i `k = 3`. Wyjaśnij na własnym przykładzie zachowanie na końcu alfabetu.\n\n**Przykład wyjaśniający:** Przesunięcie o 2 zmienia A na C, B na D, Y na A, a Z na B. Wiadomość `\"AZ BY\"` zmieni się więc w `\"CB DA\"`. Przesuwamy litery w alfabecie, a nie ich miejsca w wiadomości."
    },
    {
     "id": "s010",
     "title": "Zadanie 5: Rozpoznawanie palindromu",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: Rozpoznawanie palindromu\n\n**Dane:** Dowolny napis `s`. Wielkość liter i wszystkie znaki mają znaczenie.\n\n**Do wykonania:** Napisz funkcję `palindrom(s)`, która rozstrzyga, czy napis czytany w obu kierunkach jest taki sam. Nie odwracaj napisu ani nie twórz jego odwróconej kopii. Pusty napis i pojedynczy znak uznaj za palindromy.\n\n**Wynik:** Funkcja zwraca `True`, jeśli napis jest palindromem, i `False` w przeciwnym przypadku. Wywołaj ją dla `\"kajak\"`, `\"ab\"`, `\"x\"` i `\"\"`. Uzasadnij jedną odpowiedź.\n\n**Przykład wyjaśniający:** `\"anna\"` jest palindromem, ponieważ czytane od lewej i od prawej daje ten sam napis. `\"Anna\"` nim nie jest: wielka litera A i mała litera a to różne znaki. Nie usuwaj spacji ani nie poprawiaj wielkości liter."
    },
    {
     "id": "s011",
     "title": "Zadanie 6: Wynik i numer wiersza",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Wynik i numer wiersza\n\n**Dane:** Lista liczb. Pozycje w wyniku numerujemy od 1, chociaż indeksy Pythona zaczynają się od 0.\n\n**Do wykonania:** Napisz funkcję `pierwsze_max(liczby)`, która znajduje największą wartość i numer jej pierwszego wystąpienia. Lista może być pusta.\n\n**Wynik:** Zwróć parę `(maksimum, numer)`: największą liczbę oraz numer miejsca, na którym pojawia się ona po raz pierwszy. Dla pustej listy zwróć `None`. Zaprezentuj działanie dla `[3, 8, 8, 2]`.\n\n**Przykład wyjaśniający:** Dla `[1, 9, 4, 9]` odpowiedź to `(9, 2)`. Największą wartością jest 9; jej pierwsze wystąpienie jest drugim elementem listy. Późniejsza dziewiątka nie zmienia odpowiedzi. Numer 2 odpowiada indeksowi 1 w Pythonie."
    },
    {
     "id": "s012",
     "title": "Krotka, słownik i zbiór",
     "kind": "theory",
     "context": "",
     "markdown": "## Krotka, słownik i zbiór\n\nKrotka (x, y) opisuje parę i może być kluczem słownika albo elementem zbioru. Rozpakowanie x, y = punkt daje osobne współrzędne.\n\nSłownik kojarzy klucz z wartością. get(k, 0) zwraca 0 dla brakującego klucza. Zbiór set usuwa powtórzenia i przyspiesza sprawdzanie przynależności; nie używaj go do zliczania wszystkich wystąpień. enumerate(lista, start=1) wiąże dane z numerem wiersza liczonym od 1.\n\n```python\nlicznosci = {}\nfor znak in \"ABBA\":\n    licznosci[znak] = licznosci.get(znak, 0) + 1\nprint(licznosci)\nfor numer, wartosc in enumerate([7, 7, 9], start=1):\n    print(numer, wartosc)\n```"
    },
    {
     "id": "s013",
     "title": "Zadanie 7: Histogram znaków",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Histogram znaków\n\n**Dane:** Napis, w którym mogą powtarzać się litery i inne znaki. Wielkie i małe litery traktujemy oddzielnie.\n\n**Do wykonania:** Napisz funkcję `histogram(s)` zliczającą wystąpienia każdego znaku. Nie korzystaj z `Counter`.\n\n**Wynik:** Zwróć słownik, w którym każdy napotkany znak ma przypisaną liczbę swoich wystąpień. Pokaż wyniki dla `\"o+o*o\"`, `\"AaA\"` i pustego napisu.\n\n**Przykład wyjaśniający:** Dla `\"aba!\"` wynik to `{\"a\": 2, \"b\": 1, \"!\": 1}`. Znak a występuje dwa razy, a pozostałe znaki po jednym. To zestawienie liczności, nie lista kolejnych znaków. Dla pustego napisu zwróć pusty słownik."
    },
    {
     "id": "s014",
     "title": "Zadanie 8: Punkty w grze słownej",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: Punkty w grze słownej\n\n**Dane:** Słowo z wielkich liter A–Z. Litery A, E, I, O, U są warte po 1 punkcie, pozostałe po 2. Słowo długości co najmniej 6 otrzymuje jednorazową premię 5 punktów.\n\n**Do wykonania:** Napisz funkcję `punkty_slowa(slowo)` obliczającą punktację w grze słownej. Każde wystąpienie litery liczy się osobno.\n\n**Wynik:** Zwróć jedną liczbę — łączną punktację słowa. Wyświetl słowa `KOT`, `PYTHON`, `ALA` wraz z ich punktacją.\n\n**Przykład wyjaśniający:** `DOM` jest wart 5 punktów: D daje 2, O daje 1, M daje 2. Za `AAAAAA` przyznajemy 6 punktów za litery i jedną premię 5 punktów, czyli 11. Premia dotyczy całego słowa, a nie każdej jego litery."
    },
    {
     "id": "s015",
     "title": "Zadanie 9: Usuwanie duplikatów z zachowaniem kolejności",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 9: Usuwanie duplikatów z zachowaniem kolejności\n\n**Dane:** Lista liczb, w której mogą wystąpić duplikaty.\n\n**Do wykonania:** Napisz funkcję `unikalne(dane)`, która pozostawia tylko pierwsze wystąpienie każdej wartości. Zachowaj kolejność tych wystąpień. Sam zdecyduj, jakich kolekcji potrzebujesz.\n\n**Wynik:** Zwróć nową listę, w której każda wartość występuje tylko raz. Dla `[4, 2, 4, 7, 2]` kolejność wyniku to `[4, 2, 7]`. Dla pustej listy zwróć `[]`.\n\n**Przykład wyjaśniający:** „Zachowaj kolejność” oznacza kolejność pierwszego pojawienia się wartości, nie kolejność od najmniejszej do największej. Dla `[8, 3, 8, 1, 3]` odpowiedź to `[8, 3, 1]`, a nie `[1, 3, 8]`."
    },
    {
     "id": "s016",
     "title": "Zadanie 10: Dwie podpowiedzi do sejfu",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 10: Dwie podpowiedzi do sejfu\n\n**Dane:** Kod sejfu i próba otwarcia to napisy z czterech różnych cyfr. Zero może znajdować się na początku.\n\n**Do wykonania:** Napisz funkcję `podpowiedz(kod, proba)`. Określ, ile cyfr próby jest poprawnych i stoi na właściwej pozycji, a ile występuje w kodzie, lecz na innej pozycji. Jednej cyfry nie licz w obu grupach.\n\n**Wynik:** Zwróć parę `(na_wlasciwym_miejscu, na_innym_miejscu)` zawierającą dwie liczby cyfr. Wyświetl odpowiedź dla kodu `\"5072\"` i próby `\"5209\"`. Uzasadnij obie liczby.\n\n**Przykład wyjaśniający:** Dla kodu `\"1234\"` i próby `\"1428\"` wynik to `(1, 2)`: cyfra 1 stoi we właściwym miejscu, cyfry 4 i 2 są w kodzie, lecz w innych miejscach, a cyfry 8 w kodzie nie ma. Nie zwracaj samych cyfr."
    },
    {
     "id": "s017",
     "title": "Zadanie 11: Raport o napisach",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 11: Raport o napisach\n\n**Dane:** Lista napisów, także z powtarzającymi się elementami.\n\n**Do wykonania:** Napisz funkcję `raport_napisow(napisy)`. Raport ma wskazywać wszystkie palindromy oraz informować, ile napisów ma każdą z występujących długości. W części z palindromami zachowaj kolejność i powtórzenia.\n\n**Wynik:** Zwróć parę `(lista_palindromow, slownik_licznosci_dlugosci)`. Słownik ma opisywać długości wszystkich napisów wejściowych, nie tylko palindromów. Zaprezentuj raport dla `[\"aa\", \"ab\", \"x\", \"aa\"]`. Możesz wykorzystać własne wcześniejsze funkcje.\n\n**Przykład wyjaśniający:** Dla `[\"ala\", \"kot\", \"xx\"]` raport to `([\"ala\", \"xx\"], {3: 2, 2: 1})`. Są dwa palindromy, ale napisy o długości 3 liczymy oba, także niebędący palindromem `\"kot\"`."
    },
    {
     "id": "s018",
     "title": "Zadanie 12: Kompresja sygnału",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 12: Kompresja sygnału\n\n**Dane:** Sygnał zapisany jako napis z liter A–Z. Seria to maksymalny spójny fragment jednakowych liter.\n\n**Do wykonania:** Napisz funkcję `spakuj(sygnal)`, która opisuje każdą serię parą: litera i jej liczba wystąpień w tej serii. Oddzielnych serii tej samej litery nie wolno łączyć.\n\n**Wynik:** Zwróć listę par `(litera, dlugosc_serii)` w kolejności sygnału, a dla pustego napisu `[]`. Wyświetl zapis `\"AAABBCA\"` i wyjaśnij, dlaczego litera A tworzy dwa osobne wpisy.\n\n**Przykład wyjaśniający:** Dla `\"CCDC\"` wynik to `[(\"C\", 2), (\"D\", 1), (\"C\", 1)]`. Pierwsze dwa C tworzą jedną serię, litera D ją przerywa, a ostatnie C rozpoczyna nową. Nie chodzi o łączną liczbę wszystkich liter C w sygnale."
    },
    {
     "id": "s019",
     "title": "Podsumowanie",
     "kind": "theory",
     "context": "",
     "markdown": "## Podsumowanie\n\nWyjaśnij jedno własne rozwiązanie i wskaż ważny przypadek brzegowy. W zadaniu plikowym pokaż kod od otwarcia pliku do zapisania odpowiedzi."
    },
    {
     "id": "s020",
     "title": "3. Zadania do samodzielnego wykonania",
     "kind": "homework",
     "context": "",
     "markdown": "## 3. Zadania do samodzielnego wykonania\n\nWykonaj zadania 13–14 przed następnym spotkaniem i zapisz własne rozwiązania."
    },
    {
     "id": "s021",
     "title": "Zadanie 13: anagramy",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 13: anagramy\n\n**Dane:** Dwa napisy `a` i `b`. Nie pomijamy spacji ani nie zmieniamy wielkości liter.\n\n**Do wykonania:** Napisz funkcję `anagramy(a, b)`, która rozstrzyga, czy napisy składają się z dokładnie tych samych znaków użytych tyle samo razy, choć niekoniecznie w tej samej kolejności.\n\n**Wynik:** Zwróć `True`, jeśli można przestawić znaki pierwszego napisu, aby otrzymać drugi, i `False` w przeciwnym przypadku. Pokaż wynik dla par `(\"kot\", \"tok\")` i `(\"aa\", \"ab\")`.\n\n**Przykład wyjaśniający:** `\"aab\"` i `\"aba\"` są anagramami: oba mają dwa a i jedno b. Natomiast `\"aab\"` i `\"abb\"` nie są, chociaż używają tych samych dwóch liter. Wyjaśnij na tym przykładzie, dlaczego sam zbiór znaków nie wystarcza."
    },
    {
     "id": "s022",
     "title": "Zadanie 14: najdłuższy napis",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 14: najdłuższy napis\n\n**Dane:** Lista napisów, która może być pusta.\n\n**Do wykonania:** Napisz funkcję `najdluzszy(napisy)`, która wybiera najdłuższy napis. Jeśli kilka ma tę samą największą długość, wybierz pierwszy z nich. Nie sortuj całej listy.\n\n**Wynik:** Zwróć wybrany napis w całości, a nie jego długość ani pozycję. Jeśli lista jest pusta, zwróć `None`. Pokaż działanie dla `[\"ab\", \"cd\", \"x\"]` i pustej listy.\n\n**Przykład wyjaśniający:** Dla `[\"lis\", \"ryba\", \"sowa\"]` wybieramy `\"ryba\"`. Zarówno `\"ryba\"`, jak i `\"sowa\"` mają cztery znaki, ale `\"ryba\"` pojawiła się wcześniej. Kolejność alfabetyczna nie rozstrzyga tego remisu."
    }
   ]
  },
  {
   "number": 3,
   "kind": "lesson",
   "title": "Powtórzenie: samodzielna praca z plikami",
   "sourceFile": "03_pliki_tekstowe_i_wyniki/karta_pracy.ipynb",
   "notebook": "lekcje/03_pliki_tekstowe_i_wyniki/karta_pracy.ipynb",
   "download": "pobierz/03_pliki_tekstowe_i_wyniki.zip",
   "assetBase": "lekcje/03_pliki_tekstowe_i_wyniki/",
   "checksum": "b7b8e45d4eb64af8bfac83ddb600002c2e18d98f63a188ce558bf641c6f4c42b",
   "sections": [
    {
     "id": "intro",
     "title": "Cel i sposób pracy",
     "kind": "intro",
     "context": "",
     "markdown": "# Karta pracy 03. Powtórzenie: samodzielna praca z plikami\n\n**Kurs:** Python — programowanie do matury rozszerzonej z informatyki\n\n**Prowadzący:** por. Jakub GRĄTKIEWICZ · jakub.gratkiewicz@wat.edu.pl\n\n**Cel:** Samodzielne napisanie całego procesu: otwarcie pliku, odczyt, konwersja, obliczenia i zapis odpowiedzi.\n\nZnasz podstawy Pythona. Przypominamy potrzebne narzędzia i stosujemy je w coraz bardziej złożonych zadaniach.\n\nOtwórz ten notatnik w folderze bieżącej lekcji. W zadaniu plikowym samodzielnie napisz otwarcie pliku, odczyt, konwersję, obliczenia i zapis odpowiedzi. Nie ma wspólnej komórki wczytującej dane ani gotowych list z plików zadaniowych.\n\nZadania 1–12 wykonujemy na lekcji, zadania 13–14 samodzielnie. Niedokończone zadania uzupełnij przed następnym spotkaniem.\n\nW pustych komórkach roboczych wpisz własny kod. Wyświetl wyniki obliczeń i przygotuj się do wyjaśnienia swojego rozwiązania.\n\nPrzed oddaniem zrestartuj jądro, uruchom własne komórki od początku i zapisz notatnik oraz wymagane pliki wynikowe."
    },
    {
     "id": "s001",
     "title": "Katalog lekcji i dane",
     "kind": "organization",
     "context": "",
     "markdown": "## Katalog lekcji i dane\n\nPliki wejściowe w katalogu tej lekcji:\n\n- skrot_przyklad.txt\n- liczby_przyklad.txt\n- dron_przyklad.txt\n- dron.txt\n- symbole_przyklad.txt\n- demo-liczby.txt\n- sygnal.txt\n- paczki.txt\n- zamowienia.txt\n- mecze.txt\n\nPrzeczytaj format w poleceniu. Pliki otwierasz we własnym kodzie; nie przepisuj ich zawartości do programu. Nazwy wyników są podane w zadaniach. Zapisuj wyniki obok notatnika i nie nadpisuj danych wejściowych."
    },
    {
     "id": "s002",
     "title": "1. Przypomnienie",
     "kind": "recall",
     "context": "",
     "markdown": "## 1. Przypomnienie\n\n1. Czym różni się return od print?\n2. Jak rozpakować parę liczb z listy?\n3. Dlaczego trzeba zachowywać kolejność i powtórzenia rekordów?\n\nTo pytania do wspólnego powtórzenia, nie zestaw kartkówki.\n\n```python\n# Własne odpowiedzi:\n# 1.\n# 2.\n# 3.\n```"
    },
    {
     "id": "s003",
     "title": "2. Treść dydaktyczna i zadania na lekcji",
     "kind": "theory",
     "context": "",
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nKażde polecenie określa dane, problem do rozwiązania i wymagany wynik. Przykład wyjaśniający pokazuje, jak rozumieć wymagania i format odpowiedzi. W zadaniu plikowym oblicz właściwy wynik z podanego pliku, nie z małego przykładu w opisie. Samodzielnie zaplanuj sposób rozwiązania i napisz kod. Funkcja ma zwracać wynik; wyświetl go w miejscu jej wywołania, jeśli wymaga tego polecenie. W zadaniach plikowych sam napisz także otwarcie, odczyt i zapis pliku. Przygotuj się do wyjaśnienia swoich decyzji."
    },
    {
     "id": "s004",
     "title": "Powtórzenie: otwarcie, odczyt i konwersja",
     "kind": "theory",
     "context": "",
     "markdown": "## Powtórzenie: otwarcie, odczyt i konwersja\n\nPliki wejściowe leżą obok tego notatnika. Nazwa względna, np. 'demo-liczby.txt', jest liczona względem bieżącego katalogu pracy jądra. Otwórz notatnik z folderu lekcji i uruchom jądro w tym folderze. Jeśli pojawi się FileNotFoundError, sprawdź nazwę, rozszerzenie i katalog pracy; nie obchodź problemu wpisaniem danych ręcznie.\n\nwith open(nazwa, 'r', encoding='utf-8') otwiera plik do odczytu i zamyka go po wyjściu z bloku. Iterowanie po pliku daje kolejne wiersze jako napisy. int(wiersz) zamienia zapis liczby na liczbę. W zadaniach sam tworzysz listę oraz kod odczytu — żadna wcześniejsza komórka nie ładuje danych za Ciebie.\n\nPrzykład dotyczy wyłącznie małego pliku demonstracyjnego. Zadania wykorzystują inne pliki i różne formaty rekordów.\n\n```python\nliczby_demo = []\nwith open(\"demo-liczby.txt\", \"r\", encoding=\"utf-8\") as plik:\n    for wiersz in plik:\n        liczby_demo.append(int(wiersz))\nprint(liczby_demo)\n```"
    },
    {
     "id": "s005",
     "title": "Zadanie 1: Zamiana wiersza tekstu na listę liczb",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 1: Zamiana wiersza tekstu na listę liczb\n\n**Dane:** Otrzymujesz jeden napis, np. tekst przepisany z wiersza pliku. W tym napisie są liczby całkowite, także ujemne. Oddzielają je spacje lub tabulatory. Przed liczbami i za nimi także mogą występować odstępy.\n\n**Do wykonania:** Napisz funkcję `pola(wiersz)`, która zamieni taki tekst na listę liczb. Argument `wiersz` jest napisem, nie nazwą pliku — w tym zadaniu nie otwierasz jeszcze żadnego pliku. Liczba odstępów między liczbami nie powinna wpływać na odpowiedź.\n\n**Wynik:** Zwróć listę liczb typu `int` w takiej kolejności, w jakiej występują w tekście. Jeśli tekst nie zawiera liczb, bo jest pusty lub składa się z samych odstępów, zwróć `[]`. Wyświetl wyniki dla `\"  7   -2\\t5  \"`, `\"\"` i `\"   \"`; zapis `\\t` wewnątrz napisu w Pythonie oznacza tabulator.\n\n**Przykład wyjaśniający:** Z napisu `\"  12    -3  0 \"` powinna powstać lista `[12, -3, 0]`. Jej elementy są liczbami, więc można je dodawać. Lista `[\"12\", \"-3\", \"0\"]` byłaby niepoprawna, ponieważ nadal zawiera tekst."
    },
    {
     "id": "s006",
     "title": "Zadanie 2: Odczyt wszystkich liczb z pliku",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: Odczyt wszystkich liczb z pliku\n\n**Dane:** W folderze lekcji znajduje się plik `skrot_przyklad.txt`. Każdy jego wiersz zawiera jedną liczbę całkowitą. Plik ma 20 wierszy; w tym zadaniu nie obliczasz jeszcze żadnego „skrótu” tych liczb.\n\n**Do wykonania:** Napisz funkcję `czytaj_liczby(nazwa)`. Argument `nazwa` ma być nazwą pliku, który funkcja sama otworzy i odczyta. Zadaniem funkcji jest przygotowanie listy wszystkich liczb zapisanych w tym pliku. Zachowaj kolejność wierszy i powtarzające się liczby. Nie przepisuj zawartości pliku do kodu.\n\n**Wynik:** Wywołaj funkcję dla `skrot_przyklad.txt` i zapisz zwróconą listę w zmiennej `a`. Wyświetl z podpisami: ile liczb odczytano, jaka jest pierwsza i jaka ostatnia. Wskaż typ elementów listy. Liczba odczytanych elementów powinna odpowiadać liczbie wierszy pliku.\n\n**Przykład wyjaśniający:** Gdyby osobny plik zawierał trzy wiersze: `8`, potem `-2`, potem ponownie `8`, funkcja powinna zwrócić `[8, -2, 8]`. To trzy odczytane liczby, mimo że tylko dwie wartości są różne."
    },
    {
     "id": "s007",
     "title": "Zadanie 3: Radioteleskop: ile razy sygnał wzrósł?",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 3: Radioteleskop: ile razy sygnał wzrósł?\n\n**Dane:** Radioteleskop wykonuje kolejne pomiary siły sygnału. W pliku `sygnal.txt` zapisano ich wyniki: jedna liczba całkowita w każdym wierszu. Pierwszy wiersz oznacza najwcześniejszy pomiar, a każdy następny — pomiar wykonany chwilę później.\n\n**Do wykonania:** Napisz program, który sam wczyta plik i policzy, ile razy siła sygnału wzrosła w porównaniu z pomiarem wykonanym bezpośrednio wcześniej. Porównujemy wyłącznie sąsiadujące pomiary. Równe wartości nie oznaczają wzrostu. Pierwszego pomiaru nie uwzględniamy w zliczaniu, ponieważ nie ma wcześniejszego pomiaru do porównania.\n\n**Wynik:** Wyświetl jedną liczbę: liczbę zauważonych wzrostów. Tę samą liczbę zapisz w jednym wierszu pliku `wyniki-sygnal.txt`. Nie sortuj pomiarów. Nie obliczaj sumy pomiarów ani wielkości wzrostów — interesuje nas liczba sytuacji, w których nastąpił wzrost.\n\n**Przykład wyjaśniający:** Dla pomiarów `10, 13, 13, 8, 12` odpowiedź wynosi `2`. Wzrost nastąpił z 10 do 13 oraz z 8 do 12. Przejście z 13 do 13 nic nie dodaje, a z 13 do 8 jest spadkiem. To tylko przykład zasady; właściwą odpowiedź oblicz z pliku `sygnal.txt`."
    },
    {
     "id": "s008",
     "title": "Powtórzenie: rekordy i białe znaki",
     "kind": "theory",
     "context": "",
     "markdown": "## Powtórzenie: rekordy i białe znaki\n\nsplit() dzieli napis po białych znakach; kilka spacji lub tabulator nie tworzy pustych pól. split(' ') zachowuje się inaczej. read() daje cały tekst, readline() jeden wiersz, a read().splitlines() listę wierszy bez zakończeń.\n\nJeżeli każdy wiersz ma odrębne znaczenie, nie łącz od razu wszystkich liczb w jedną listę. Pary współrzędnych wczytuj wiersz po wierszu i sprawdzaj liczbę pól. strip() usuwa białe znaki z obu końców; rstrip('\\r\\n') usuwa tylko zakończenie wiersza. Wybór zależy od tego, czy spacje są częścią danych.\n\n```python\nwiersz = \"  12\\t -5  \"\npola_demo = wiersz.split()\nprint(\"Liczba pól:\", len(pola_demo))\ndx, dy = [int(pole) for pole in pola_demo]\nprint(dx, dy)\n```"
    },
    {
     "id": "s009",
     "title": "Zadanie 4: Dwa wiersze pliku jako dwie osobne listy",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: Dwa wiersze pliku jako dwie osobne listy\n\n**Dane:** Plik `liczby_przyklad.txt` zawiera dokładnie dwa wiersze. W pierwszym znajduje się 200 liczb, w drugim 20. Liczby w każdym wierszu są oddzielone spacjami lub tabulatorami. Te dwa wiersze będą w dalszym kursie używane do różnych celów.\n\n**Do wykonania:** Napisz funkcję `dwa_wiersze(nazwa)`, która sama otworzy plik i zwróci dwie osobne listy: jedną z liczbami z pierwszego wiersza, drugą z liczbami z drugiego. Nie łącz ich w jedną listę. W tym zadaniu chodzi wyłącznie o poprawny odczyt, nie o badanie dzielników ani wykonywanie obliczeń na tych liczbach.\n\n**Wynik:** Zwróć parę `(lista_z_pierwszego_wiersza, lista_z_drugiego_wiersza)`. Po wywołaniu dla podanego pliku zapisz te listy odpowiednio w `a` i `b`. Wyświetl liczbę elementów każdej listy; oczekiwane długości to 200 i 20.\n\n**Przykład wyjaśniający:** Jeśli pierwszy wiersz ma treść `2 3 5`, a drugi `15 6`, wynik ma postać `([2, 3, 5], [15, 6])`. Lista `a` będzie więc zawierać trzy liczby, a lista `b` dwie. Niepoprawne byłoby połączenie ich w `[2, 3, 5, 15, 6]`."
    },
    {
     "id": "s010",
     "title": "Zadanie 5: Odczyt ruchów drona jako par liczb",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: Odczyt ruchów drona jako par liczb\n\n**Dane:** Każdy wiersz pliku `dron_przyklad.txt` opisuje jeden ruch drona za pomocą dwóch liczb: `dx` i `dy`. `dx` oznacza zmianę położenia w poziomie, a `dy` w pionie. To przesunięcia względem poprzedniego miejsca, nie gotowe współrzędne nowego położenia.\n\n**Do wykonania:** Napisz funkcję `czytaj_pary(nazwa)`, która sama odczyta plik i zamieni każdy wiersz w parę liczb całkowitych `(dx, dy)`. Dwie liczby pochodzące z jednego wiersza muszą pozostać razem. Jeśli wiersz zawiera inną liczbę wartości niż dwie, przerwij odczyt z komunikatem wskazującym numer tego wiersza.\n\n**Wynik:** Zwróć listę par w kolejności pliku. Dla `dron_przyklad.txt` zapisz ją w zmiennej `r` i wyświetl liczbę ruchów, pierwszy ruch oraz ostatni ruch. Nie obliczaj jeszcze całej trasy.\n\n**Przykład wyjaśniający:** Dla dwóch wierszy `3 2` oraz `1 -4` wynikiem jest `[(3, 2), (1, -4)]`. Pierwszy ruch to 3 jednostki w prawo i 2 w górę, drugi: 1 w prawo i 4 w dół. Zapis `[3, 2, 1, -4]` gubi podział na ruchy."
    },
    {
     "id": "s011",
     "title": "Zadanie 6: Które paczki nadal są w drodze?",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Które paczki nadal są w drodze?\n\n**Dane:** Plik `paczki.txt` jest historią wysyłek. Wiersz, np. `A17;START`, zawiera nazwę paczki i zdarzenie, rozdzielone średnikiem. `START` oznacza wysłanie paczki, a `KONIEC` jej dostarczenie. Wiersze są ułożone od najwcześniejszego zdarzenia do najpóźniejszego. Na początku żadna paczka nie jest w drodze.\n\n**Do wykonania:** Napisz program, który sam odczyta plik i ustali, które paczki po wszystkich zapisanych zdarzeniach wciąż są w drodze. Ten sam identyfikator może pojawiać się wiele razy: dostarczoną paczkę wolno wysłać ponownie. Dane są poprawne — nie ma dostarczenia bez wcześniejszej wysyłki ani ponownego wysłania paczki będącej już w drodze.\n\n**Wynik:** Wyświetl identyfikatory paczek nadal będących w drodze, uporządkowane alfabetycznie. Zapisz je też w `wyniki-paczki.txt`, po jednym identyfikatorze w wierszu. Każda paczka ma pojawić się w odpowiedzi tylko raz.\n\n**Przykład wyjaśniający:** Po zdarzeniach `P1;START`, `P2;START`, `P1;KONIEC` w drodze pozostaje tylko P2. Jeśli następnym zdarzeniem jest `P1;START`, w drodze są już P1 i P2. Wcześniejsze dostarczenie P1 nie oznacza więc, że zawsze należy ją pomijać."
    },
    {
     "id": "s012",
     "title": "Zadanie 7: Wskazanie błędnych wierszy z symbolami",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Wskazanie błędnych wierszy z symbolami\n\n**Dane:** Plik `symbole_przyklad.txt` zawiera po jednym napisie w każdym wierszu. Poprawny napis ma dokładnie 12 znaków, a każdy z nich musi być jednym z symboli `o`, `+`, `*`. Znak `o` jest małą literą o, nie cyfrą zero. Zakończenie wiersza nie jest częścią napisu.\n\n**Do wykonania:** Napisz funkcję `bledne_wiersze(napisy)`, która otrzyma listę napisów i wskaże wszystkie pozycje niespełniające tych wymagań. Wystarczy zła długość albo choć jeden niedozwolony znak, aby wiersz uznać za błędny. Samodzielnie odczytaj plik do listy `napisy` i użyj na niej swojej funkcji. Nie usuwaj symboli ani nie naprawiaj błędnych danych.\n\n**Wynik:** Zwróć listę numerów błędnych wierszy, licząc od 1. Nie zwracaj ich treści ani samej liczby błędów. Jeśli wszystkie są poprawne, zwróć `[]`. Wyświetl wynik dla pliku oraz dla listy `[\"o\" * 12, \"+x\" + \"o\" * 10, \"*\"]`.\n\n**Przykład wyjaśniający:** W dodatkowej liście pierwszy napis ma 12 dozwolonych znaków. Drugi także ma długość 12, ale zawiera niedozwolone x. Trzeci jest za krótki. Odpowiedzią dla tej listy jest `[2, 3]`: numery dwóch błędnych wierszy."
    },
    {
     "id": "s013",
     "title": "Powtórzenie: od obliczeń do pliku odpowiedzi",
     "kind": "theory",
     "context": "",
     "markdown": "## Powtórzenie: od obliczeń do pliku odpowiedzi\n\nFunkcja obliczeniowa może przyjmować listę i zwracać wynik obliczeń. W zadaniu plikowym musisz sam otworzyć właściwy plik, wczytać rekordy, wywołać funkcję oraz zapisać odpowiedź.\n\nTryb 'w' tworzy plik lub zastępuje jego zawartość. Nie zapisuj wyników pod nazwą pliku wejściowego. W tej lekcji zapisuj odpowiedzi obok notatnika, pod nazwą podaną w poleceniu. print(..., file=plik) zapisuje wiersz do pliku. Odczytaj wynik ponownie i sprawdź format oraz liczby, nie tylko komunikat na ekranie.\n\n```python\nwith open(\"demo-wynik.txt\", \"w\", encoding=\"utf-8\") as plik:\n    print(\"Suma:\", sum(liczby_demo), file=plik)\nwith open(\"demo-wynik.txt\", \"r\", encoding=\"utf-8\") as plik:\n    zapis_demo = plik.read()\nprint(zapis_demo)\n```"
    },
    {
     "id": "s014",
     "title": "Zadanie 8: Liczba ruchów i łączne przesunięcie drona",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: Liczba ruchów i łączne przesunięcie drona\n\n**Dane:** Masz listę ruchów drona, takich jak w zadaniu 5. Każdy ruch jest parą `(dx, dy)`. Dodatnia wartość oznacza przesunięcie w prawo lub w górę, ujemna — w przeciwną stronę. Dane do właściwego obliczenia znajdują się w `dron_przyklad.txt`.\n\n**Do wykonania:** Napisz funkcję `bilans(ruchy)`, która podsumuje wszystkie ruchy. Ustal, ile ruchów wykonano, o ile łącznie zmieniło się położenie w poziomie oraz o ile w pionie. Przesunięcia w przeciwnych kierunkach mogą się znosić. Nie obliczasz długości przebytej drogi.\n\n**Wynik:** Zwróć trzy liczby w krotce `(liczba_ruchow, suma_dx, suma_dy)`. Sam odczytaj plik własnym kodem, np. swoją funkcją z zadania 5. Wynik obliczeń zapisz w `bilans_przykladu` i wyświetl z opisem znaczenia każdej liczby.\n\n**Przykład wyjaśniający:** Dla ruchów `[(3, 2), (1, -4)]` bilans wynosi `(2, 4, -2)`: wykonano dwa ruchy, łącznie 4 jednostki w prawo i 2 w dół. Liczba -2 opisuje zmianę położenia w pionie, nie ujemną długość drogi."
    },
    {
     "id": "s015",
     "title": "Zadanie 9: Łączna liczba produktów i rachunek w kawiarni",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 9: Łączna liczba produktów i rachunek w kawiarni\n\n**Dane:** Plik `zamowienia.txt` opisuje zakupy w kawiarni. Każdy wiersz zawiera trzy pola oddzielone średnikami: nazwę produktu, liczbę zamówionych sztuk i cenę jednej sztuki w groszach. Przykładowy wiersz `sok;3;450` oznacza trzy soki po 4,50 zł za sztukę.\n\n**Do wykonania:** Napisz program, który sam odczyta plik i obliczy łączną liczbę wszystkich zamówionych sztuk oraz kwotę do zapłaty za całe zamówienie. Ten sam produkt może występować w kilku wierszach — każdy wiersz opisuje kolejną część zamówienia i trzeba go uwzględnić. Nie chodzi o liczbę różnych nazw produktów. Obliczenia pieniężne prowadź w całkowitej liczbie groszy.\n\n**Wynik:** Zapisz plik `wyniki-kawiarnia.txt` z dwoma wierszami: w pierwszym łączną liczbę sztuk, w drugim całkowitą kwotę w złotych. Kwotę zapisz z kropką i dokładnie dwiema cyframi po niej, np. `8.05`. Nie dodawaj symbolu waluty.\n\n**Przykład wyjaśniający:** Dla dwóch wierszy `sok;2;450` i `ciastko;1;300` zamówiono łącznie 3 sztuki za 12,00 zł. Plik wynikowy zawierałby `3` w pierwszym wierszu i `12.00` w drugim. Właściwy rachunek oblicz z dostarczonego pliku."
    },
    {
     "id": "s016",
     "title": "Zadanie 10: Zapis listy liczb do pliku i ponowny odczyt",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 10: Zapis listy liczb do pliku i ponowny odczyt\n\n**Dane:** W tym zadaniu to program tworzy pliki z danych zapisanych w kodzie. Masz dwie listy: `[7, 7, 2]` oraz `[]`. Nie korzystaj z żadnego pliku wejściowego jako miejsca zapisu wyników.\n\n**Do wykonania:** Napisz funkcję `zapisz_liczby(nazwa, liczby)`, która zapisze wskazaną listę do wskazanego pliku. Każda liczba ma znaleźć się w osobnym wierszu. Jeśli plik wynikowy już istnieje, zastąp jego poprzednią zawartość, nie dopisuj do niej kolejnych danych. Użyj funkcji do utworzenia `zapis-liczb.txt` dla pierwszej listy i `pusty-zapis.txt` dla drugiej.\n\n**Wynik:** Utwórz oba pliki. W tym samym rozwiązaniu odczytaj je ponownie własną funkcją `czytaj_liczby` i wyświetl odczytane listy. Mają być takie same jak listy przekazane do zapisu. Funkcja zapisująca nie musi zwracać wartości; jej wynikiem jest zawartość pliku.\n\n**Przykład wyjaśniający:** Z listy `[4, 4, 9]` mają powstać trzy wiersze: `4`, `4`, `9`, bez nawiasów i przecinków. Pusta lista oznacza pusty plik, nie plik zawierający tekst `[]` ani liczbę 0."
    },
    {
     "id": "s017",
     "title": "Zadanie 11: Raport z pełnego pliku lotu drona",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 11: Raport z pełnego pliku lotu drona\n\n**Dane:** Plik `dron.txt` jest większym zestawem danych niż `dron_przyklad.txt`. Ma ten sam format: jeden ruch w wierszu, zapisany jako `dx dy`. W tym zadaniu użyj właśnie pełnego pliku `dron.txt`.\n\n**Do wykonania:** Przygotuj rozwiązanie obejmujące odczyt pliku, obliczenie liczby ruchów oraz łącznego przesunięcia w poziomie i pionie, a następnie zapis raportu. Możesz wywołać własne funkcje `czytaj_pary` i `bilans`. Wszystkie liczby w raporcie muszą wynikać z odczytanych danych.\n\n**Wynik:** Utwórz `raport-dron.txt` z dokładnie trzema wierszami: `ruchy LICZBA`, `x SUMA_DX`, `y SUMA_DY`. Wielkie napisy są miejscem na obliczone liczby, nie tekstem do skopiowania. Odczytaj zapisany raport do zmiennej `odczyt_raportu` i wyświetl ją.\n\n**Przykład wyjaśniający:** Dla lotu złożonego z ruchów `[(3, 2), (1, -4)]` wiersze raportu brzmiałyby: `ruchy 2`, `x 4`, `y -2`. Etykiety `ruchy`, `x`, `y` zostają w pliku, natomiast wartości zależą od danych lotu."
    },
    {
     "id": "s018",
     "title": "Zadanie 12: Łączna punktacja drużyn w lidze",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 12: Łączna punktacja drużyn w lidze\n\n**Dane:** Plik `mecze.txt` zawiera wyniki spotkań. Wiersz ma postać `druzyna_A;druzyna_B;gole_A;gole_B`, np. `Smoki;Sowy;2;0` oznacza wygraną Smoków 2:0. Za wygraną drużyna otrzymuje 3 punkty, za remis 1, a za przegraną 0.\n\n**Do wykonania:** Napisz program, który sam odczyta wszystkie mecze i obliczy sumę punktów każdej drużyny w całej lidze. Nie sumuj bramek — wynik meczu służy do ustalenia, komu przyznać punkty. Uwzględnij także drużyny, które przegrały wszystkie spotkania.\n\n**Wynik:** Zapisz `wyniki-liga.txt`: jeden wiersz `nazwa;punkty` dla każdej drużyny. Zachowaj kolejność pierwszego pojawienia się nazw w pliku, czytając w każdym wierszu najpierw drużynę A, potem B. Nie sortuj tabeli według punktów. Każda nazwa ma wystąpić raz.\n\n**Przykład wyjaśniający:** Po meczach `Smoki;Sowy;2;0` i `Sowy;Smoki;1;1` Smoki mają 4 punkty, a Sowy 1. Raport zawierałby wiersze `Smoki;4` oraz `Sowy;1` w tej kolejności. Remis dodaje punkt obu drużynom."
    },
    {
     "id": "s019",
     "title": "Podsumowanie",
     "kind": "theory",
     "context": "",
     "markdown": "## Podsumowanie\n\nWyjaśnij jedno własne rozwiązanie i wskaż ważny przypadek brzegowy. W zadaniu plikowym pokaż kod od otwarcia pliku do zapisania odpowiedzi."
    },
    {
     "id": "s020",
     "title": "3. Zadania do samodzielnego wykonania",
     "kind": "homework",
     "context": "",
     "markdown": "## 3. Zadania do samodzielnego wykonania\n\nWykonaj zadania 13–14 przed następnym spotkaniem i zapisz własne rozwiązania."
    },
    {
     "id": "s021",
     "title": "Zadanie 13: Numer pierwszego niepoprawnego wiersza",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 13: Numer pierwszego niepoprawnego wiersza\n\n**Dane:** Funkcja otrzyma listę napisów, z których każdy reprezentuje jeden wiersz tekstu. Poprawny wiersz zawiera dokładnie dwie liczby całkowite oddzielone spacjami lub tabulatorami. Dodatkowe odstępy są dozwolone, ale pusty wiersz jest błędny.\n\n**Do wykonania:** Napisz funkcję `pierwszy_blad(wiersze)`, która wskaże najwcześniejszy niepoprawny wiersz. Błędem jest zarówno nieprawidłowa liczba wartości, jak i tekst, którego nie da się zamienić na liczbę całkowitą. Obsłuż `ValueError`, aby taki tekst nie kończył działania programu nieobsłużonym wyjątkiem. Tutaj pracujesz na przekazanej liście — nie musisz otwierać pliku.\n\n**Wynik:** Zwróć numer pierwszego błędnego wiersza, licząc od 1. Gdy wszystkie wiersze są poprawne albo lista jest pusta, zwróć `None`. Pokaż osobno przypadek błędnej liczby pól oraz przypadek tekstu zamiast liczby.\n\n**Przykład wyjaśniający:** Dla `[\"4 5\", \"6 7 8\", \"x 2\"]` odpowiedź to `2`: już drugi wiersz ma trzy liczby zamiast dwóch. Nie zwracamy `[2, 3]`, ponieważ szukamy tylko pierwszego błędu. Dla `[\"4 5\", \"x 2\"]` odpowiedź też wynosi 2, lecz z innego powodu."
    },
    {
     "id": "s022",
     "title": "Zadanie 14: Numery wierszy zawierających palindromy",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 14: Numery wierszy zawierających palindromy\n\n**Dane:** Plik `symbole_przyklad.txt` zawiera po jednym napisie w wierszu. Szukamy palindromów, czyli napisów, które czytane od lewej i od prawej są identyczne. Znak zakończenia wiersza nie należy do napisu.\n\n**Do wykonania:** W nowej komórce napisz rozwiązanie, które samo otworzy plik, odczyta napisy i ustali, które z nich są palindromami. Nie korzystaj z listy danych pozostawionej przez wcześniejsze zadanie. Możesz użyć własnej funkcji rozpoznającej palindrom.\n\n**Wynik:** Zapisz odpowiedź w liście `numery_palindromow` i wyświetl ją. Lista ma zawierać numery odpowiednich wierszy od 1, w kolejności pliku, a nie treści tych wierszy. Gdy palindromów nie ma, odpowiedzią jest pusta lista.\n\n**Przykład wyjaśniający:** Gdyby kolejne trzy wiersze zawierały `o+o`, `o+*`, `***`, odpowiedź miałaby postać `[1, 3]`. Są to numery wierszy dla człowieka. Odpowiadają im indeksy 0 i 2 w pythonowej liście — tych indeksów nie wpisujemy do wyniku."
    }
   ]
  },
  {
   "number": 4,
   "kind": "lesson",
   "title": "Cyfry, podstawy systemów liczbowych i NWD",
   "sourceFile": "04_cyfry_skroty_i_nwd/karta_pracy.ipynb",
   "notebook": "lekcje/04_cyfry_skroty_i_nwd/karta_pracy.ipynb",
   "download": "pobierz/04_cyfry_skroty_i_nwd.zip",
   "assetBase": "lekcje/04_cyfry_skroty_i_nwd/",
   "checksum": "faed66c62d50e42b94566dae0b7fb09094090605c910c7a2d6d0f5eae7b2fcd0",
   "sections": [
    {
     "id": "intro",
     "title": "Cel i sposób pracy",
     "kind": "intro",
     "context": "",
     "markdown": "# Karta pracy 04. Cyfry, podstawy systemów liczbowych i NWD\n\n**Kurs:** Python — programowanie do matury rozszerzonej z informatyki\n\n**Prowadzący:** por. Jakub GRĄTKIEWICZ · jakub.gratkiewicz@wat.edu.pl\n\n**Cel:** Przygotowanie nieparzystego skrótu oraz fundament konwersji do systemu trójkowego.\n\nZnasz podstawy Pythona. Przypominamy potrzebne narzędzia i stosujemy je w coraz bardziej złożonych zadaniach.\n\nOtwórz ten notatnik w folderze bieżącej lekcji. W zadaniu plikowym samodzielnie napisz otwarcie pliku, odczyt, konwersję, obliczenia i zapis odpowiedzi. Nie ma wspólnej komórki wczytującej dane ani gotowych list z plików zadaniowych.\n\nZadania 1–12 wykonujemy na lekcji, zadania 13–14 samodzielnie. Niedokończone zadania uzupełnij przed następnym spotkaniem.\n\nW pustych komórkach roboczych wpisz własny kod. Wyświetl wyniki obliczeń i przygotuj się do wyjaśnienia swojego rozwiązania.\n\nPrzed oddaniem zrestartuj jądro, uruchom własne komórki od początku i zapisz notatnik oraz wymagane pliki wynikowe."
    },
    {
     "id": "s001",
     "title": "Katalog lekcji i dane",
     "kind": "organization",
     "context": "",
     "markdown": "## Katalog lekcji i dane\n\nPliki wejściowe w katalogu tej lekcji:\n\n- liczby-trening.txt\n\nPrzeczytaj format w poleceniu. Pliki otwierasz we własnym kodzie; nie przepisuj ich zawartości do programu. Nazwy wyników są podane w zadaniach. Zapisuj wyniki obok notatnika i nie nadpisuj danych wejściowych."
    },
    {
     "id": "s002",
     "title": "1. Przypomnienie",
     "kind": "recall",
     "context": "",
     "markdown": "## 1. Przypomnienie\n\n1. Jak wydzielić ostatnią cyfrę liczby bez używania str?\n2. Co oznacza zapis 1011 w systemie dwójkowym?\n3. Dlaczego NWD(a,b) = NWD(b,a % b)?\n\nTo pytania do wspólnego powtórzenia, nie zestaw kartkówki.\n\n```python\n# Własne odpowiedzi:\n# 1.\n# 2.\n# 3.\n```"
    },
    {
     "id": "s003",
     "title": "2. Treść dydaktyczna i zadania na lekcji",
     "kind": "theory",
     "context": "",
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nKażde polecenie określa dane, problem do rozwiązania i wymagany wynik. Przykład wyjaśniający pokazuje, jak rozumieć wymagania i format odpowiedzi. W zadaniu plikowym oblicz właściwy wynik z podanego pliku, nie z małego przykładu w opisie. Samodzielnie zaplanuj sposób rozwiązania i napisz kod. Funkcja ma zwracać wynik; wyświetl go w miejscu jej wywołania, jeśli wymaga tego polecenie. W zadaniach plikowych sam napisz także otwarcie, odczyt i zapis pliku. Przygotuj się do wyjaśnienia swoich decyzji."
    },
    {
     "id": "s004",
     "title": "Pozycja cyfry i podstawa systemu",
     "kind": "theory",
     "context": "",
     "markdown": "## Pozycja cyfry i podstawa systemu\n\nW systemie o podstawie p cyfry mają wartości od 0 do p-1. Wagi od prawej to 1,p,p²,... . Zapis 1011₂ oznacza 1·8+0·4+1·2+1=11. 102₃ oznacza 1·9+0·3+2=11. W systemie szesnastkowym A–F oznaczają 10–15.\n\nDo wydzielenia ostatniej cyfry dowolnego systemu służy n % p; n // p usuwa tę cyfrę. Zero wymaga osobnej uwagi: ma jedną cyfrę, chociaż while n > 0 nie wykona się ani razu.\n\n```python\nn = 45\nreszty = []\nwhile n > 0:\n    reszty.append(n % 2)\n    n //= 2\nprint(reszty)  # cyfry od najmniej znaczącej\nprint(list(reversed(reszty)))\n```"
    },
    {
     "id": "s005",
     "title": "Zadanie 1: Ostatnia cyfra",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 1: Ostatnia cyfra\n\n**Dane:** Liczba całkowita `n >= 0` i podstawa systemu `2 <= p <= 16`.\n\n**Do wykonania:** Napisz funkcję `rozdziel(n, p)` określającą iloraz całkowity i resztę z dzielenia `n` przez `p`. Wyjaśnij, która z tych wartości opisuje ostatnią cyfrę zapisu w podstawie `p`.\n\n**Wynik:** Zwróć parę `(iloraz, reszta)`: liczbę pełnych grup po `p` oraz to, co pozostaje poza tymi grupami. Wyświetl wyniki dla `(45, 2)` i `(255, 16)`.\n\n**Przykład wyjaśniający:** Przy dzieleniu 23 przez 5 mieszczą się cztery pełne piątki i pozostają 3, więc wynik to `(4, 3)`. Reszta jest wartością ostatniej cyfry liczby w systemie o podstawie 5. Dla podstawy 16 wartość cyfry może być większa od 9."
    },
    {
     "id": "s006",
     "title": "Zadanie 2: Suma i liczba cyfr",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: Suma i liczba cyfr\n\n**Dane:** Nieujemna liczba całkowita `n` w zapisie dziesiętnym. Zero ma jedną cyfrę.\n\n**Do wykonania:** Napisz funkcję `statystyka_cyfr(n)` obliczającą sumę cyfr i ich liczbę. Nie zamieniaj liczby na napis.\n\n**Wynik:** Zwróć parę `(suma_cyfr, liczba_cyfr)`. Obie informacje dotyczą zwykłego zapisu dziesiętnego. Przed uruchomieniem oblicz ręcznie odpowiedzi dla 0 i 407, a potem porównaj je z działaniem funkcji.\n\n**Przykład wyjaśniający:** Liczba 502 ma trzy cyfry: 5, 0 i 2. Ich suma wynosi 7, zatem odpowiedź to `(7, 3)`. Zero wewnątrz liczby nie zwiększa sumy, ale nadal zajmuje jedną pozycję i jest uwzględniane w liczbie cyfr."
    },
    {
     "id": "s007",
     "title": "Zadanie 3: Cyfra kontrolna kapsuły",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 3: Cyfra kontrolna kapsuły\n\n**Dane:** Pięciocyfrowy numer kapsuły `10000 <= n <= 99999`. Cyfry od lewej mają wagi 1, 2, 3, 4, 5. Suma kontrolna to suma iloczynów cyfr i ich wag.\n\n**Do wykonania:** Napisz funkcję `numer_kapsuly(n)` dopisującą z prawej cyfrę od 0 do 9, która dodana do sumy kontrolnej daje wielokrotność 10. Nie używaj `str`.\n\n**Wynik:** Zwróć nowy, sześciocyfrowy numer kapsuły: pięć pierwotnych cyfr i dopisaną cyfrę kontrolną. Nie zwracaj samej cyfry kontrolnej. Wyświetl wynik dla 31415 i pokaż rachunek uzasadniający dopisaną cyfrę.\n\n**Przykład wyjaśniający:** Dla numeru 12345 suma ważona to `1·1 + 2·2 + 3·3 + 4·4 + 5·5 = 55`. Dopisujemy 5, bo 55 + 5 = 60 jest podzielne przez 10. Nowy numer to 123455. Jeśli suma już jest wielokrotnością 10, dopisujemy cyfrę 0."
    },
    {
     "id": "s008",
     "title": "Horner i budowanie liczby",
     "kind": "theory",
     "context": "",
     "markdown": "## Horner i budowanie liczby\n\nCzytając cyfry od lewej, aktualizujemy wartosc = wartosc * podstawa + cyfra. Po każdym kroku wartosc oznacza już przetworzony prefiks. Przy zamianie liczby na zapis reszty pojawiają się odwrotnie, dlatego odwracamy je na końcu.\n\nW nieparzystym skrócie czytamy dziesiętne cyfry od prawej, ale zachowujemy ich kolejność w wyniku. Mnożnik pozycji zwiększamy tylko wtedy, gdy cyfrę rzeczywiście dołączamy. Zero jako wynik pomocniczy może oznaczać brak skrótu: istniejący skrót jest dodatni.\n\n```python\nwartosc = 0\nfor cyfra in [1, 0, 2]:\n    wartosc = wartosc * 3 + cyfra\nprint(wartosc)\n```"
    },
    {
     "id": "s009",
     "title": "Zadanie 4: Horner dla dowolnej podstawy",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: Horner dla dowolnej podstawy\n\n**Dane:** Lista cyfr od najbardziej znaczącej do najmniej znaczącej oraz podstawa `2 <= p <= 16`. Każda cyfra ma wartość od 0 do `p - 1`.\n\n**Do wykonania:** Napisz funkcję `horner(cyfry, p)`, która oblicza wartość liczby metodą Hornera.\n\n**Wynik:** Zwróć wartość liczby jako `int`, a nie napis z jej cyframi. Pokaż działanie dla cyfr `[1, 0, 1, 1]` w podstawie 2 i `[15, 15]` w podstawie 16. Porównaj jeden wynik z rachunkiem na kartce.\n\n**Przykład wyjaśniający:** Lista `[1, 2, 0]` przy podstawie 3 oznacza zapis 120 w systemie trójkowym. Jego wartość to `1·9 + 2·3 + 0 = 15`. Lista opisuje więc jedną liczbę, a nie trzy niezależne liczby do zsumowania."
    },
    {
     "id": "s010",
     "title": "Zadanie 5: Panel czterech lampek",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: Panel czterech lampek\n\n**Dane:** Lampki: zasilanie, radio, kamera, alarm mają kolejno wagi 1, 2, 4, 8. Kod od 0 do 15 jest sumą wag zapalonych lampek.\n\n**Do wykonania:** Napisz funkcję `lampki(kod)` odtwarzającą stan panelu. Używaj działań całkowitoliczbowych `//` i `%`, bez operatorów bitowych.\n\n**Wynik:** Zwróć krotkę czterech wartości 0 lub 1 w kolejności: zasilanie, radio, kamera, alarm. Jedynka oznacza włączoną lampkę, zero wyłączoną. Wyświetl stany dla kodów 0, 5, 13, 15.\n\n**Przykład wyjaśniający:** Kod 6 powstaje z wag 2 + 4, więc świecą radio i kamera, a odpowiedź to `(0, 1, 1, 0)`. Nie chodzi o zapalenie sześciu lampek ani o szóstą lampkę — na panelu są tylko cztery."
    },
    {
     "id": "s011",
     "title": "Zadanie 6: Liczba na cyfry",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Liczba na cyfry\n\n**Dane:** Liczba całkowita `n >= 0` i całkowita podstawa `p >= 2`.\n\n**Do wykonania:** Napisz funkcję `cyfry_w_bazie(n, p)` wyznaczającą cyfry zapisu liczby w danym systemie. Wynik ma zaczynać się od najbardziej znaczącej cyfry. Zapis zera to `[0]`.\n\n**Wynik:** Zwróć listę wartości cyfr w takiej kolejności, w jakiej człowiek czyta zapis liczby: od lewej do prawej. Wyświetl zapisy 0, 11 i 50 w systemie trójkowym. Wyjaśnij znaczenie kolejności cyfr.\n\n**Przykład wyjaśniający:** Liczba dziesiętna 13 ma w systemie dwójkowym zapis 1101, więc dla `n = 13`, `p = 2` oczekujemy `[1, 1, 0, 1]`. Odwrócona lista `[1, 0, 1, 1]` oznaczałaby inną liczbę: 11."
    },
    {
     "id": "s012",
     "title": "Zadanie 7: Nieparzysty skrót",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Nieparzysty skrót\n\n**Dane:** Dodatnia liczba całkowita `n`. Nieparzysty skrót powstaje przez usunięcie wszystkich parzystych cyfr dziesiętnych, bez zmiany kolejności pozostałych.\n\n**Do wykonania:** Napisz funkcję `skrot(n)`. Wewnątrz funkcji korzystaj wyłącznie z arytmetyki całkowitoliczbowej, warunków i pętli; bez napisów, list i wywołań funkcji.\n\n**Wynik:** Zwróć liczbę utworzoną z pozostawionych cyfr. Jeśli wszystkie cyfry zostały usunięte, zwróć umownie 0. Pokaż działanie dla liczby z samych cyfr parzystych i liczby zawierającej również cyfry nieparzyste.\n\n**Przykład wyjaśniający:** Z liczby 280735 usuwamy 2, 8 i 0, a pozostawiamy 7, 3 i 5. Skrót wynosi 735, nie sumę cyfr 15. Z liczby 246 nie pozostaje nic, dlatego w programie przyjmujemy wynik 0. Cyfra zero także jest parzysta."
    },
    {
     "id": "s013",
     "title": "Algorytm Euklidesa",
     "kind": "theory",
     "context": "",
     "markdown": "## Algorytm Euklidesa\n\nKażdy wspólny dzielnik a i b dzieli również resztę a % b. Zastąpienie pary (a,b) przez (b,a % b) zachowuje NWD, a druga liczba maleje, aż stanie się zerem.\n\nNa końcu a jest wynikiem. Dla dowolnych znaków argumentów najpierw bierzemy wartości bezwzględne. Dla b=0 wynikiem jest |a|. W kursie NWD(0,0) przyjmujemy jako 0. W 3.1 matury 2024 ograniczenia dotyczą operacji wewnątrz funkcji skrótu: stosujemy tam wyłącznie arytmetykę całkowitą.\n\n```python\na, b = 84, 35\nwhile b != 0:\n    print(a, b, a % b)\n    a, b = b, a % b\nprint(\"NWD:\", a)\n```"
    },
    {
     "id": "s014",
     "title": "Zadanie 8: Własne NWD",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: Własne NWD\n\n**Dane:** Dwie liczby całkowite `a` i `b`, także ujemne lub równe zeru. W tym kursie przyjmujemy `NWD(0, 0) = 0`.\n\n**Do wykonania:** Napisz własną funkcję `nwd(a, b)` stosującą algorytm Euklidesa. Wynik nie może być ujemny.\n\n**Wynik:** Zwróć jedną nieujemną liczbę — największy wspólny dzielnik obu argumentów. Przed wywołaniem dla `(84, 35)` wyznacz odpowiedź ręcznie. Pokaż też przykład z liczbą ujemną i z zerem.\n\n**Przykład wyjaśniający:** Wspólne dodatnie dzielniki 18 i 24 to 1, 2, 3 i 6. Największy z nich to 6, więc odpowiedź to 6, a nie lista dzielników. Dla -18 i 24 wynik jest taki sam. Dla 0 i 24 przyjmujemy wynik 24."
    },
    {
     "id": "s015",
     "title": "Zadanie 9: Identyczne paczki ratunkowe",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 9: Identyczne paczki ratunkowe\n\n**Dane:** Dodatnie liczby butelek wody i batonów. Wszystkie zapasy mają trafić do jednakowych paczek, bez reszty.\n\n**Do wykonania:** Napisz funkcję `paczki_ratunkowe(woda, batony)` ustalającą największą możliwą liczbę paczek i zawartość jednej paczki. Wykorzystaj własne `nwd`.\n\n**Wynik:** Zwróć krotkę `(liczba_paczek, butelki_w_paczce, batony_w_paczce)`. Każda paczka ma zawierać tyle samo wody i tyle samo batonów co pozostałe. Pokaż wynik dla 12 butelek i 18 batonów i uzasadnij maksymalność liczby paczek.\n\n**Przykład wyjaśniający:** Z 8 butelek i 12 batonów można zrobić 4 jednakowe paczki, każdą po 2 butelki i 3 batony. Odpowiedź to `(4, 2, 3)`. Nie wolno zostawić zapasów poza paczkami ani tworzyć paczek o różnej zawartości."
    },
    {
     "id": "s016",
     "title": "Zadanie 10: Dwa warunki na jednym rekordzie",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 10: Dwa warunki na jednym rekordzie\n\n**Dane:** Lista dodatnich liczb całkowitych.\n\n**Do wykonania:** Napisz funkcję `wybierz(dane)` pozostawiającą liczby, które mają nieparzysty skrót, a ich NWD ze skrótem jest równy dokładnie 7. Zachowaj kolejność i powtórzenia.\n\n**Wynik:** Zwróć listę oryginalnych liczb, które spełniają oba warunki, a nie listę ich skrótów. Pokaż działanie dla `[224, 4872, 23527, 123]` i wyjaśnij przyczynę odrzucenia jednej z liczb.\n\n**Przykład wyjaśniający:** Liczba 70 ma skrót 7, a NWD(70, 7) = 7, więc do odpowiedzi trafia 70. Liczba 13 ma skrót 13, lecz NWD(13, 13) = 13, więc odpada. Samo istnienie skrótu nie wystarcza."
    },
    {
     "id": "s017",
     "title": "Zadanie 11: Dwa niezależne opisy liczby",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 11: Dwa niezależne opisy liczby\n\n**Dane:** Plik `liczby-trening.txt` zawiera po jednej dodatniej liczbie w wierszu.\n\n**Do wykonania:** Napisz funkcję `raport_liczby(n)` zwracającą nieparzysty skrót dziesiętny oraz liczbę jedynek w zapisie dwójkowym. Przygotuj własny odczyt pliku do `lista_z_pliku` i raport dla każdej liczby.\n\n**Wynik:** W `raporty_z_pliku` zapisz listę par `(skrot, liczba_jedynek)` w kolejności odczytanych liczb. Utwórz też `wyniki-trening.txt`: każdy wiersz ma zawierać liczbę wejściową, jej skrót i liczbę jedynek, oddzielone spacjami.\n\n**Przykład wyjaśniający:** Dla 19 nieparzysty skrót wynosi 19, a zapis dwójkowy to 10011, w którym są trzy jedynki. Funkcja zwraca `(19, 3)`, a odpowiadający tej liczbie wiersz pliku brzmiałby `19 19 3`. Są to dwa różne opisy tej samej liczby, nie dwa etapy skracania."
    },
    {
     "id": "s018",
     "title": "Zadanie 12: Rozkaz zapisany w pięciu bitach",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 12: Rozkaz zapisany w pięciu bitach\n\n**Dane:** Kod robota od 0 do 31. Bity o wagach 1, 2, 4, 8 oznaczają akcje `start`, `pomiar`, `zdjecie`, `powrot`. Bit o wadze 16 odwraca kolejność wybranych akcji.\n\n**Do wykonania:** Napisz funkcję `rozkaz(kod)`. Przy wyłączonym bicie 16 kolejność akcji jest taka jak w opisie. Użyj `//` i `%`, bez operatorów bitowych.\n\n**Wynik:** Zwróć listę nazw czynności do wykonania, w wymaganej kolejności. Kod 0 daje pustą listę. Waga 16 sama nie oznacza żadnej czynności: tylko zmienia ich kolejność. Wyświetl rozkazy dla 9 i 19.\n\n**Przykład wyjaśniający:** Kod 5 wybiera wagi 1 i 4, więc oznacza `[\"start\", \"zdjecie\"]`. Kod 21 zawiera te same wagi oraz 16, dlatego daje `[\"zdjecie\", \"start\"]`. Bit 16 nie dopisuje nowej nazwy do listy."
    },
    {
     "id": "s019",
     "title": "Podsumowanie",
     "kind": "theory",
     "context": "",
     "markdown": "## Podsumowanie\n\nWyjaśnij jedno własne rozwiązanie i wskaż ważny przypadek brzegowy. W zadaniu plikowym pokaż kod od otwarcia pliku do zapisania odpowiedzi."
    },
    {
     "id": "s020",
     "title": "3. Zadania do samodzielnego wykonania",
     "kind": "homework",
     "context": "",
     "markdown": "## 3. Zadania do samodzielnego wykonania\n\nWykonaj zadania 13–14 przed następnym spotkaniem i zapisz własne rozwiązania."
    },
    {
     "id": "s021",
     "title": "Zadanie 13: NWW",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 13: NWW\n\n**Dane:** Dwie nieujemne liczby całkowite `a` i `b`.\n\n**Do wykonania:** Napisz funkcję `nww(a, b)` wyznaczającą najmniejszą wspólną wielokrotność. Wykorzystaj NWD. Jeśli choć jeden argument to zero, przyjmij wynik 0. Nie stosuj liczb zmiennoprzecinkowych.\n\n**Wynik:** Zwróć najmniejszą dodatnią liczbę, która jest wielokrotnością obu dodatnich argumentów; wyjątek stanowi opisany przypadek z zerem. Pokaż działanie na parze dodatnich liczb oraz parze z zerem.\n\n**Przykład wyjaśniający:** Wielokrotności 4 to 4, 8, 12, 16, …, a wielokrotności 6 to 6, 12, 18, … . Pierwszą wspólną jest 12, więc NWW(4, 6) = 12. NWD tej samej pary wynosi 2 — nie pomyl tych dwóch pojęć."
    },
    {
     "id": "s022",
     "title": "Zadanie 14: zapis szesnastkowy",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 14: zapis szesnastkowy\n\n**Dane:** Liczba całkowita `n >= 0`. Alfabet cyfr szesnastkowych to `0123456789ABCDEF`.\n\n**Do wykonania:** Napisz funkcję `szesnastkowo(n)` zwracającą zapis szesnastkowy z wielkimi literami, bez prefiksu i zer wiodących. Wykorzystaj własną `cyfry_w_bazie`; nie używaj `hex` w implementacji.\n\n**Wynik:** Zwróć napis z cyframi szesnastkowymi, a dla zera `\"0\"`. „Bez prefiksu” oznacza bez początkowego `0x`. Wyświetl zapis kilku wybranych liczb. Wyniki możesz porównać z `hex`, pamiętając o różnicy formatu.\n\n**Przykład wyjaśniający:** Dziesiętna liczba 26 ma zapis szesnastkowy `\"1A\"`, ponieważ 1·16 + 10 = 26. Nie zwracaj `\"0x1a\"`, `\"1a\"` ani listy `[1, 10]`: w tym zadaniu wymagamy napisu `\"1A\"`."
    }
   ]
  },
  {
   "number": 5,
   "kind": "lesson",
   "title": "Matura 2024: Nieparzysty skrót",
   "sourceFile": "05_matura_2024_zadanie_3_nieparzysty_skrot/karta_pracy.ipynb",
   "notebook": "lekcje/05_matura_2024_zadanie_3_nieparzysty_skrot/karta_pracy.ipynb",
   "download": "pobierz/05_matura_2024_zadanie_3_nieparzysty_skrot.zip",
   "assetBase": "lekcje/05_matura_2024_zadanie_3_nieparzysty_skrot/",
   "checksum": "6088344aa2f150dc412d0808aebb8e2d6bafa7f9e7345ebbe91fc5a5de23ccfc",
   "sections": [
    {
     "id": "intro",
     "title": "Cel i sposób pracy",
     "kind": "intro",
     "context": "",
     "markdown": "# Karta pracy 05. Matura 2024: Nieparzysty skrót\n\n**Kurs:** Python — programowanie do matury rozszerzonej z informatyki\n\n**Prowadzący:** por. Jakub GRĄTKIEWICZ · jakub.gratkiewicz@wat.edu.pl\n\n**Cel:** Pełne rozwiązanie zadania 3.1–3.3 z arkusza MINP-R0-100-2405.\n\nZnasz podstawy Pythona. Przypominamy potrzebne narzędzia i stosujemy je w coraz bardziej złożonych zadaniach.\n\nOtwórz ten notatnik w folderze bieżącej lekcji. W zadaniu plikowym samodzielnie napisz otwarcie pliku, odczyt, konwersję, obliczenia i zapis odpowiedzi. Nie ma wspólnej komórki wczytującej dane ani gotowych list z plików zadaniowych.\n\nZadania 1–8 wykonujemy na lekcji, zadania 9–10 samodzielnie. Niedokończone zadania uzupełnij przed następnym spotkaniem.\n\nW pustych komórkach roboczych wpisz własny kod. Wyświetl wyniki obliczeń i przygotuj się do wyjaśnienia swojego rozwiązania.\n\nPrzed oddaniem zrestartuj jądro, uruchom własne komórki od początku i zapisz notatnik oraz wymagane pliki wynikowe."
    },
    {
     "id": "s001",
     "title": "Katalog lekcji i dane",
     "kind": "organization",
     "context": "",
     "markdown": "## Katalog lekcji i dane\n\nPliki wejściowe w katalogu tej lekcji:\n\n- skrot_przyklad.txt\n- skrot2_przyklad.txt\n- skrot.txt\n- skrot2.txt\n\nPrzeczytaj format w poleceniu. Pliki otwierasz we własnym kodzie; nie przepisuj ich zawartości do programu. Nazwy wyników są podane w zadaniach. Zapisuj wyniki obok notatnika i nie nadpisuj danych wejściowych."
    },
    {
     "id": "s002",
     "title": "1. Przypomnienie",
     "kind": "recall",
     "context": "",
     "markdown": "## 1. Przypomnienie\n\n1. Jaki warunek w pętli zachowuje tylko cyfry nieparzyste?\n2. Dlaczego 0 może sygnalizować nieistniejący skrót?\n3. Jakie operacje są dozwolone w funkcji wymaganej w 3.1?\n\nTo pytania do wspólnego powtórzenia, nie zestaw kartkówki.\n\n```python\n# Własne odpowiedzi:\n# 1.\n# 2.\n# 3.\n```"
    },
    {
     "id": "s003",
     "title": "2. Treść dydaktyczna i zadania na lekcji",
     "kind": "theory",
     "context": "",
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nKażde polecenie określa dane, problem do rozwiązania i wymagany wynik. Przykład wyjaśniający pokazuje, jak rozumieć wymagania i format odpowiedzi. W zadaniu plikowym oblicz właściwy wynik z podanego pliku, nie z małego przykładu w opisie. Samodzielnie zaplanuj sposób rozwiązania i napisz kod. Funkcja ma zwracać wynik; wyświetl go w miejscu jej wywołania, jeśli wymaga tego polecenie. W zadaniach plikowych sam napisz także otwarcie, odczyt i zapis pliku. Przygotuj się do wyjaśnienia swoich decyzji."
    },
    {
     "id": "s004",
     "title": "Zadanie maturalne · źródło i zakres",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie maturalne · źródło i zakres\n\n## Zadanie maturalne — pełna transkrypcja treści CKE\n\n**Źródło:** CKE, egzamin maturalny z informatyki, poziom rozszerzony, Formuła 2023, 22 maja 2024 r., arkusz `MINP-R0-100-2405`, zadanie 3 „Nieparzysty skrót”, łącznie 10 punktów.  \n**Oryginalny arkusz:** [arkusz-2024.pdf](arkusz-2024.pdf)\n\nPoniżej przepisano treść zadania maturalnego. Zachowano polecenia i przykłady, zmieniając jedynie układ typograficzny. Pominięto puste pola odpowiedzi, punktację na marginesie oraz nagłówki i stopki stron."
    },
    {
     "id": "s005",
     "title": "Zadanie 3. Nieparzysty skrót",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie 3. Nieparzysty skrót\n\n### Zadanie 3. Nieparzysty skrót\n\nNieparzystym skrótem dodatniej liczby całkowitej `n` nazwiemy dodatnią liczbę całkowitą `m`, która powstaje przez usunięcie cyfr parzystych z zapisu dziesiętnego liczby `n`.\n\nNieparzysty skrót liczby całkowitej `n` nie istnieje, gdy jej zapis dziesiętny składa się tylko z cyfr parzystych.\n\nPrzykład:\n\n- Nieparzystym skrótem liczby 294762 jest liczba 97.\n- Nieparzystym skrótem liczby 39101 jest liczba 3911.\n- Nieparzysty skrót liczby 224 nie istnieje."
    },
    {
     "id": "s006",
     "title": "Zadanie 3.1. (0–3)",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie 3.1. (0–3)\n\n### Zadanie 3.1. (0–3)\n\nW postaci pseudokodu lub w wybranym języku programowania napisz funkcję, która dla dodatniej całkowitej liczby `n`, takiej że istnieje dla niej nieparzysty skrót, wyznaczy liczbę `m` – nieparzysty skrót liczby `n`.\n\n**Uwaga:** Twój algorytm może używać wyłącznie zmiennych przechowujących liczby całkowite oraz może operować wyłącznie na liczbach całkowitych. W zapisie możesz wykorzystać tylko operacje arytmetyczne: dodawanie, odejmowanie, mnożenie, dzielenie, dzielenie całkowite, resztę z dzielenia oraz porównywanie liczb, instrukcje sterujące, przypisania do zmiennych lub samodzielnie napisane funkcje, wykorzystujące wyżej wymienione operacje. Zabronione jest używanie funkcji wbudowanych oraz operatorów innych niż wymienione.\n\n**Specyfikacja:**\n\n- Dane: `n` – dodatnia liczba całkowita, taka że istnieje dla niej nieparzysty skrót.\n- Wynik: `m` – nieparzysty skrót liczby `n`."
    },
    {
     "id": "s007",
     "title": "Zadanie 3.2. (0–3)",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie 3.2. (0–3)\n\n### Zadanie 3.2. (0–3)\n\nPlik `skrot.txt` zawiera 200 dodatnich liczb całkowitych, mniejszych od 30 000. Każda liczba jest zapisana w osobnym wierszu. Dla co najmniej jednej z tych liczb nie istnieje nieparzysty skrót.\n\nNapisz program, który wyznaczy liczbę wszystkich liczb z pliku `skrot.txt`, dla których nie istnieje nieparzysty skrót, oraz poda największą z nich. Odpowiedź zapisz w pliku `wyniki3_2.txt`.\n\nPlik `skrot_przyklad.txt` zawiera 20 liczb mniejszych od 30 000. Dla danych zawartych w pliku `skrot_przyklad.txt` prawidłową odpowiedzią jest:\n\n```text\n2\n2428\n```\n\n(w pliku są dwie liczby, dla których nie istnieje nieparzysty skrót: 266 i 2428; 2428 jest największą z nich).\n\nDo oceny oddajesz:\n\n- plik `wyniki3_2.txt` – zawierający odpowiedź do zadania 3.2.\n- plik(-i) zawierający(-e) kod(-y) źródłowy(-e) Twojego programu o nazwie(-ach) (uwaga: brak tego(tych) pliku(-ów) jest równoznaczny z brakiem rozwiązania zadania):"
    },
    {
     "id": "s008",
     "title": "Zadanie 3.3. (0–4)",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie 3.3. (0–4)\n\n### Zadanie 3.3. (0–4)\n\nPlik `skrot2.txt` zawiera 200 dodatnich liczb całkowitych, mniejszych od 30 000. Każda liczba jest zapisana w osobnym wierszu. Dla każdej z tych liczb istnieje nieparzysty skrót.\n\nNapisz program, który wypisze te liczby z pliku `skrot2.txt`, dla których największy wspólny dzielnik liczby i jej nieparzystego skrótu jest równy 7. Odpowiedź zapisz w pliku `wyniki3_3.txt`. Twój program powinien wypisać w każdym wierszu wyniku po jednej liczbie z pliku `skrot2.txt`, dla której jest spełniony powyższy warunek.\n\nPlik `skrot2_przyklad.txt` zawiera 20 liczb spełniających warunki zadania. Dla danych zawartych w pliku `skrot2_przyklad.txt` prawidłową odpowiedzią jest:\n\n```text\n4872\n23527\n```\n\nDo oceny oddajesz:\n\n- plik `wyniki3_3.txt` – zawierający odpowiedź do zadania 3.3.\n- plik(-i) zawierający(-e) kod(-y) źródłowy(-e) Twojego programu o nazwie(-ach) (uwaga: brak tego(tych) pliku(-ów) jest równoznaczny z brakiem rozwiązania zadania):"
    },
    {
     "id": "s009",
     "title": "Od polecenia do algorytmu",
     "kind": "theory",
     "context": "",
     "markdown": "## Od polecenia do algorytmu\n\nPrzeczytaj oryginalne polecenia. Zadanie 3.1 wymaga algorytmu do zapisania w arkuszu: operacje wewnątrz funkcji muszą być całkowitoliczbowe. W 3.2 i 3.3 potrzebujemy także czytania plików i zapisania wyników.\n\nZbuduj funkcję zwracającą 0, jeśli wszystkie cyfry są parzyste. To rozszerzenie dziedziny pomocne w 3.2. Dla danych dopuszczonych w 3.1 nigdy nie zwróci zera. Nie zmieniaj kolejności cyfr i nie używaj str do implementacji skrótu.\n\n```python\nn = 39101\nwynik = 0\npozycja = 1\nwhile n > 0:\n    cyfra = n % 10\n    n //= 10\n    if cyfra % 2 != 0:\n        wynik += cyfra * pozycja\n        pozycja *= 10\nprint(wynik)\n```"
    },
    {
     "id": "s010",
     "title": "Zadanie 1: 3.1: funkcja zgodna z ograniczeniami",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 1: 3.1: funkcja zgodna z ograniczeniami\n\n**Dane:** Dodatnia liczba całkowita i definicja nieparzystego skrótu z zadania 3.1 matury 2024.\n\n**Do wykonania:** Opracuj funkcję `skrot(n)` zgodną z ograniczeniami oryginalnego polecenia CKE. Używaj wyłącznie zmiennych całkowitych, dozwolonej arytmetyki, porównań, warunków i pętli. Nie korzystaj z napisów, kolekcji ani wywołań funkcji.\n\n**Wynik:** Zwróć skrót jako liczbę całkowitą; umownie 0, gdy skrót nie istnieje. Zapisz również na kartce własny algorytm i wyjaśnij, jak zachowuje kolejność cyfr. Ograniczenia dotyczą wnętrza funkcji, nie sposobu wyświetlania jej wyniku.\n\n**Przykład wyjaśniający:** Skrót tworzymy z nieparzystych cyfr liczby, pozostawiając ich kolejność. Dla 60391 otrzymujemy 391, a dla 820 nie pozostaje żadna cyfra. Wynik 0 oznacza w programie „brak skrótu”; nie dopisujemy go do cyfr, które zostały."
    },
    {
     "id": "s011",
     "title": "Zadanie 2: 3.1: skróty wybranych liczb",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: 3.1: skróty wybranych liczb\n\n**Dane:** Liczby `1, 2, 9, 10101, 20003, 86420`.\n\n**Do wykonania:** Wyznacz nieparzysty skrót każdej liczby własną funkcją. Przed uruchomieniem wybierz dwie liczby i zapisz dla nich przewidywane wyniki.\n\n**Wynik:** Zapisz wyniki w słowniku `slownik_skrotow`: kluczem ma być liczba wejściowa, a wartością skrót obliczony Twoją funkcją. Wyświetl każdą liczbę i odpowiadający jej skrót w osobnym wierszu. Wyjaśnij rolę cyfry zero.\n\n**Przykład wyjaśniający:** Dla dodatkowych danych 31, 301 i 408 słownik miałby postać `{31: 31, 301: 31, 408: 0}`. Różne liczby mogą mieć ten sam skrót i nadal powinny mieć osobne wpisy. Właściwy słownik przygotuj dla sześciu liczb z polecenia."
    },
    {
     "id": "s012",
     "title": "Licznik i maksimum spełniających warunek",
     "kind": "theory",
     "context": "",
     "markdown": "## Licznik i maksimum spełniających warunek\n\nNie szukamy największej liczby w całym pliku, lecz największej w grupie bez skrótu. Najpierw filtr albo warunek w pętli, dopiero potem aktualizacja maksimum.\n\nPolecenie gwarantuje co najmniej jeden taki rekord. Dla pustej grupy funkcja pomocnicza może zwracać (0,None). W pliku wynikowym dla danych maturalnych None nie powinno wystąpić.\n\n```python\nliczby = [266, 97, 2428]\nkandydaci = [266, 2428]\nprint(len(kandydaci), max(kandydaci))\nprint(\"Liczba rekordów:\", len(liczby))\n```"
    },
    {
     "id": "s013",
     "title": "Zadanie 3: Wczytanie obu przykładów",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 3: Wczytanie obu przykładów\n\n**Dane:** Pliki `skrot_przyklad.txt` i `skrot2_przyklad.txt` leżą obok notatnika. Każdy zawiera po jednej dodatniej liczbie całkowitej w wierszu.\n\n**Do wykonania:** Napisz funkcję `wczytaj(nazwa)`, która samodzielnie odczytuje taki plik. Zachowaj kolejność i wszystkie wystąpienia liczb.\n\n**Wynik:** Zapisz dane z pierwszego pliku w `przyklad_1`, a z drugiego w `przyklad_2`. Każda zmienna ma przechowywać listę liczb typu `int`. Wyświetl liczbę elementów każdej listy; w obu plikach powinno być po 20 liczb.\n\n**Przykład wyjaśniający:** Jeśli plik ma wiersze `71`, `204`, `71`, wynikiem odczytu jest `[71, 204, 71]`. Nie usuwaj powtórzonego 71 i nie obliczaj skrótów podczas odczytu: dalsze zadania potrzebują oryginalnych liczb."
    },
    {
     "id": "s014",
     "title": "Zadanie 4: 3.2: liczność i największy element",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: 3.2: liczność i największy element\n\n**Dane:** Lista dodatnich liczb całkowitych oraz wymagania zadania 3.2 matury 2024.\n\n**Do wykonania:** Napisz funkcję `bez_skrotu(liczby)` ustalającą, ile liczb nie ma nieparzystego skrótu i która z nich jest największa. Każde wystąpienie liczby liczy się osobno.\n\n**Wynik:** Zwróć parę `(liczba_rekordow, maksimum)`: liczbę wystąpień bez skrótu oraz największą z tych liczb wejściowych. Jeśli żadna nie pasuje, zwróć `(0, None)`. Wyświetl wynik dla `przyklad_1` i porównaj z przykładem CKE.\n\n**Przykład wyjaśniający:** Dla `[246, 31, 80, 246]` wynik to `(3, 246)`. Liczby 246, 80 i drugie wystąpienie 246 składają się wyłącznie z parzystych cyfr. Trójka w odpowiedzi oznacza liczbę wystąpień, nie liczbę różnych wartości."
    },
    {
     "id": "s015",
     "title": "Zadanie 5: 3.3: funkcja NWD",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: 3.3: funkcja NWD\n\n**Dane:** Dwie nieujemne liczby całkowite. Dla pary `(0, 0)` przyjmujemy NWD równe 0.\n\n**Do wykonania:** Napisz własne `nwd(a, b)`. Wyznacz nim NWD liczby 4872 i jej nieparzystego skrótu, obliczonego przez Twoją funkcję `skrot`.\n\n**Wynik:** Wyświetl liczbę 4872, jej obliczony skrót i ich NWD. Napisz, czy uzyskany NWD wynosi dokładnie 7 — tego wymaga zadanie 3.3. Wyjaśnij różnicę między wspólnym dzielnikiem a największym wspólnym dzielnikiem.\n\n**Przykład wyjaśniający:** Liczba 3 dzieli zarówno 18, jak i 24, ale nie jest ich NWD, ponieważ obie liczby dzielą się także przez 6. Podobnie w zadaniu nie wystarczy zauważyć, że liczba i jej skrót dzielą się przez 7: ich największy wspólny dzielnik ma wynosić 7."
    },
    {
     "id": "s016",
     "title": "Składanie podpunktów i dowody poprawności",
     "kind": "theory",
     "context": "",
     "markdown": "## Składanie podpunktów i dowody poprawności\n\nW 3.3 porównujemy NWD do 7, nie sprawdzamy tylko podzielności obu liczb przez 7: ich NWD może być większy. Każdy rekord rozpatrujemy niezależnie.\n\nZacznij od odczytu plików przykładowych i wyświetlenia odpowiedzi. Pełne pliki zawierają po 200 rekordów. Właściwe nazwy wyników to wyniki3_2.txt i wyniki3_3.txt. Pliki odpowiedzi zapisuj obok notatnika tej lekcji; nie mieszaj plików z różnych spotkań.\n\n```python\ndef nwd_demo(a, b):\n    while b:\n        a, b = b, a % b\n    return a\n\nprint(nwd_demo(21, 63))  # obie podzielne przez 7, ale NWD to 21\n```"
    },
    {
     "id": "s017",
     "title": "Zadanie 6: 3.3: lista odpowiedzi",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: 3.3: lista odpowiedzi\n\n**Dane:** Lista dodatnich liczb i warunek zadania 3.3: NWD liczby oraz jej nieparzystego skrótu wynosi 7.\n\n**Do wykonania:** Napisz funkcję `nwd_siedem(liczby)` wybierającą wszystkie liczby spełniające ten warunek. Liczby bez skrótu pomijamy. Zachowaj kolejność i każde wystąpienie.\n\n**Wynik:** Zwróć listę oryginalnych liczb, a nie ich skrótów ani wartości NWD. Wyświetl ją dla `przyklad_2` i porównaj z przykładem CKE. Jeśli żadna liczba nie pasuje, odpowiedzią jest `[]`.\n\n**Przykład wyjaśniający:** Dla `[70, 13, 70, 24]` wynikiem jest `[70, 70]`: każde 70 ma skrót 7 i NWD równe 7, liczba 13 ma NWD równe 13, a 24 nie ma skrótu. Zbiór usunąłby jedno poprawne wystąpienie 70."
    },
    {
     "id": "s018",
     "title": "Zadanie 7: Obliczenia na pełnych danych",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Obliczenia na pełnych danych\n\n**Dane:** Pełne dane maturalne: `skrot.txt` do zadania 3.2 i `skrot2.txt` do zadania 3.3, po 200 liczb w pliku.\n\n**Do wykonania:** Przygotuj obliczenie odpowiedzi obu podpunktów na podstawie samodzielnie wczytanych plików. Wyniki muszą powstać z obliczeń, a nie z ręcznie wpisanych odpowiedzi.\n\n**Wynik:** W `odp_32` zapisz parę `(ile_liczb_bez_skrotu, najwieksza_z_nich)` obliczoną z `skrot.txt`. W `odp_33` zapisz listę liczb spełniających warunek NWD = 7, obliczoną z `skrot2.txt`. Wyświetl rozmiary danych i odpowiedzi podpisane numerami podpunktów.\n\n**Przykład wyjaśniający:** Podpunkt 3.2 daje dwie informacje podsumowujące jeden plik. Podpunkt 3.3 daje listę wybranych liczb z drugiego pliku. Nie łącz obu wejść i nie używaj tutaj plików z dopiskiem `_przyklad` — służyły do wcześniejszego sprawdzenia działania."
    },
    {
     "id": "s019",
     "title": "Zadanie 8: Pliki odpowiedzi i kontrola po zapisie",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: Pliki odpowiedzi i kontrola po zapisie\n\n**Dane:** Obliczone odpowiedzi `odp_32` i `odp_33` dla pełnych danych.\n\n**Do wykonania:** Przygotuj kod zapisujący komplet odpowiedzi w folderze lekcji. Program ma również ponownie odczytać zapisane pliki.\n\n**Wynik:** W `wyniki3_2.txt` zapisz liczbę wystąpień bez skrótu w pierwszym wierszu, a największą z tych liczb w drugim. W `wyniki3_3.txt` zapisz każdą wybraną liczbę w osobnym wierszu. Wyświetl ponownie odczytaną zawartość obu plików.\n\n**Przykład wyjaśniający:** Gdyby `odp_32` wynosiło `(3, 246)`, pierwszy plik zawierałby wiersze `3` i `246`, nie tekst `(3, 246)`. Jeśli `odp_33` zawierałoby `[70, 707]`, drugi plik miałby osobne wiersze `70` i `707`. Użyj własnych obliczonych odpowiedzi, nie tych przykładowych wartości."
    },
    {
     "id": "s020",
     "title": "Podsumowanie",
     "kind": "theory",
     "context": "",
     "markdown": "## Podsumowanie\n\nWyjaśnij jedno własne rozwiązanie i wskaż ważny przypadek brzegowy. W zadaniu plikowym pokaż kod od otwarcia pliku do zapisania odpowiedzi."
    },
    {
     "id": "s021",
     "title": "3. Zadania do samodzielnego wykonania",
     "kind": "homework",
     "context": "",
     "markdown": "## 3. Zadania do samodzielnego wykonania\n\nWykonaj zadania 9–10 przed następnym spotkaniem i zapisz własne rozwiązania."
    },
    {
     "id": "s022",
     "title": "Zadanie 9: najczęstszy skrót",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 9: najczęstszy skrót\n\n**Dane:** Lista dodatnich liczb, np. `[13, 103, 130, 224, 57, 507]`.\n\n**Do wykonania:** Napisz funkcję `najczestszy_skrot(liczby)` wskazującą najczęściej występujący nieparzysty skrót. Pomiń liczby bez skrótu. Przy remisie wybierz mniejszy skrót. Użyj własnej arytmetycznej funkcji `skrot`.\n\n**Wynik:** Zwróć parę `(skrot, liczba_wystapien)` opisującą najczęstszy skrót albo `None`, jeśli żadna liczba nie ma skrótu. Zliczaj wystąpienia skrótów, nie powtarzające się liczby wejściowe. Wyświetl wynik dla podanej listy.\n\n**Przykład wyjaśniający:** Dla `[13, 103, 57, 507]` skrót 13 występuje dwa razy i skrót 57 także dwa razy. Odpowiedź to `(13, 2)`, bo przy tej samej liczbie wystąpień wybieramy mniejszy skrót. Liczba 103 liczy się do skrótu 13."
    },
    {
     "id": "s023",
     "title": "Zadanie 10: liczby równe własnemu skrótowi",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 10: liczby równe własnemu skrótowi\n\n**Dane:** Lista dodatnich liczb, np. `[13, 103, 57, 224, 135, 13]`.\n\n**Do wykonania:** Napisz funkcję `niezmienione(liczby)` wybierającą liczby równe własnemu nieparzystemu skrótowi. Zachowaj kolejność i powtórzenia.\n\n**Wynik:** Zwróć listę tych liczb wejściowych, których wartość nie zmieniła się po utworzeniu skrótu. Wyświetl ją i opisz wspólną cechę cyfr wszystkich wybranych liczb.\n\n**Przykład wyjaśniający:** Dla `[35, 305, 79, 35]` odpowiedź to `[35, 79, 35]`. Skrót 305 wynosi 35, czyli różni się od 305, dlatego ta liczba odpada. Oba wystąpienia liczby 35 zachowujemy."
    }
   ]
  },
  {
   "number": 6,
   "kind": "lesson",
   "title": "Sortowanie, liczności i rozkład na czynniki",
   "sourceFile": "06_sortowanie_zliczanie_i_czynniki/karta_pracy.ipynb",
   "notebook": "lekcje/06_sortowanie_zliczanie_i_czynniki/karta_pracy.ipynb",
   "download": "pobierz/06_sortowanie_zliczanie_i_czynniki.zip",
   "assetBase": "lekcje/06_sortowanie_zliczanie_i_czynniki/",
   "checksum": "e9c3ed37b3533ce8078ea06cd1a4e63efad2e978cd4e7eda7614ea46479397d0",
   "sections": [
    {
     "id": "intro",
     "title": "Cel i sposób pracy",
     "kind": "intro",
     "context": "",
     "markdown": "# Karta pracy 06. Sortowanie, liczności i rozkład na czynniki\n\n**Kurs:** Python — programowanie do matury rozszerzonej z informatyki\n\n**Prowadzący:** por. Jakub GRĄTKIEWICZ · jakub.gratkiewicz@wat.edu.pl\n\n**Cel:** Przygotowanie do podpunktów 4.1–4.3 matury 2024.\n\nZnasz podstawy Pythona. Przypominamy potrzebne narzędzia i stosujemy je w coraz bardziej złożonych zadaniach.\n\nOtwórz ten notatnik w folderze bieżącej lekcji. W zadaniu plikowym samodzielnie napisz otwarcie pliku, odczyt, konwersję, obliczenia i zapis odpowiedzi. Nie ma wspólnej komórki wczytującej dane ani gotowych list z plików zadaniowych.\n\nZadania 1–10 wykonujemy na lekcji, zadania 11–12 samodzielnie. Niedokończone zadania uzupełnij przed następnym spotkaniem.\n\nW pustych komórkach roboczych wpisz własny kod. Wyświetl wyniki obliczeń i przygotuj się do wyjaśnienia swojego rozwiązania.\n\nPrzed oddaniem zrestartuj jądro, uruchom własne komórki od początku i zapisz notatnik oraz wymagane pliki wynikowe."
    },
    {
     "id": "s001",
     "title": "Katalog lekcji i dane",
     "kind": "organization",
     "context": "",
     "markdown": "## Katalog lekcji i dane\n\nPliki wejściowe w katalogu tej lekcji:\n\n- czynniki-trening.txt\n\nPrzeczytaj format w poleceniu. Pliki otwierasz we własnym kodzie; nie przepisuj ich zawartości do programu. Nazwy wyników są podane w zadaniach. Zapisuj wyniki obok notatnika i nie nadpisuj danych wejściowych."
    },
    {
     "id": "s002",
     "title": "1. Przypomnienie",
     "kind": "recall",
     "context": "",
     "markdown": "## 1. Przypomnienie\n\n1. Czy sto pierwsza liczba po sortowaniu ma indeks 100 czy 101?\n2. Czym zbiór {2,3} różni się od listy [2,2,3]?\n3. Kiedy wystarczy znaleźć jeden pasujący dzielnik?\n\nTo pytania do wspólnego powtórzenia, nie zestaw kartkówki.\n\n```python\n# Własne odpowiedzi:\n# 1.\n# 2.\n# 3.\n```"
    },
    {
     "id": "s003",
     "title": "2. Treść dydaktyczna i zadania na lekcji",
     "kind": "theory",
     "context": "",
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nKażde polecenie określa dane, problem do rozwiązania i wymagany wynik. Przykład wyjaśniający pokazuje, jak rozumieć wymagania i format odpowiedzi. W zadaniu plikowym oblicz właściwy wynik z podanego pliku, nie z małego przykładu w opisie. Samodzielnie zaplanuj sposób rozwiązania i napisz kod. Funkcja ma zwracać wynik; wyświetl go w miejscu jej wywołania, jeśli wymaga tego polecenie. W zadaniach plikowych sam napisz także otwarcie, odczyt i zapis pliku. Przygotuj się do wyjaśnienia swoich decyzji."
    },
    {
     "id": "s004",
     "title": "Sortowanie z zachowaniem wystąpień",
     "kind": "theory",
     "context": "",
     "markdown": "## Sortowanie z zachowaniem wystąpień\n\nsorted tworzy nową uporządkowaną listę, a lista.sort zmienia obecną listę i zwraca None. reverse=True oznacza porządek malejący. Pozycja k liczona od 1 ma indeks k-1.\n\nNie usuwaj duplikatów przed wyborem k-tego elementu, jeśli polecenie nie wymaga różnych wartości. W ciągu 4,4,3 druga największa liczba to 4, nie 3. Zachowaj oryginalną kolejność danych, jeśli później szukasz fragmentów ciągu.\n\n```python\na = [2, 4, 2, 3, 3, 4]\nb = sorted(a, reverse=True)\nprint(a, b, b[1])\n```"
    },
    {
     "id": "s005",
     "title": "Zadanie 1: Ranking z powtórzeniami",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 1: Ranking z powtórzeniami\n\n**Dane:** Niepusta lista liczb oraz pozycja `1 <= k <= len(liczby)`. Powtórzenia zajmują osobne miejsca w rankingu.\n\n**Do wykonania:** Napisz funkcję `kta(liczby, k)` zwracającą k-tą największą wartość. Nie zmieniaj listy wejściowej.\n\n**Wynik:** Zwróć jedną liczbę — wartość, która zajmuje miejsce `k` w zestawieniu od największej do najmniejszej. Miejsca liczymy od 1. Pokaż działanie na liście z powtórzeniami.\n\n**Przykład wyjaśniający:** Dla `[8, 3, 8, 5]` kolejność od największej to 8, 8, 5, 3. Dla `k = 2` odpowiedź to 8, a dla `k = 3` to 5. Drugie wystąpienie ósemki zajmuje osobne miejsce; nie usuwamy powtórzeń."
    },
    {
     "id": "s006",
     "title": "Zadanie 2: Liczności bez biblioteki",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: Liczności bez biblioteki\n\n**Dane:** Lista liczb, np. `[2, 2, 3, 5, 3]`.\n\n**Do wykonania:** Napisz funkcję `licznik(dane)` określającą, ile razy występuje każda wartość. Nie korzystaj z gotowej klasy `Counter`.\n\n**Wynik:** Zwróć słownik, którego kluczami są różne liczby z danych, a wartościami liczby ich wystąpień. Wyświetl go dla podanej listy i dla pustej listy, dla której wynikiem powinno być `{}`.\n\n**Przykład wyjaśniający:** Dla `[4, 1, 4, 4]` wynik to `{4: 3, 1: 1}`. Wpis `4: 3` oznacza „liczba 4 wystąpiła trzy razy”. Nie oznacza trzeciej pozycji listy ani wyniku działania 4 + 3."
    },
    {
     "id": "s007",
     "title": "Istnieje a dla każdego",
     "kind": "theory",
     "context": "",
     "markdown": "## Istnieje a dla każdego\n\nany(warunki) zwraca True, gdy choć jeden warunek jest prawdziwy; all wymaga wszystkich. Odpowiednikiem any jest pętla zakończona break po znalezieniu pierwszego dopasowania.\n\nW zadaniu o dzielnikach każdy element pierwszego wiersza liczymy najwyżej raz, nawet jeśli dzieli pięć liczb z drugiego wiersza. Jednak dwa wystąpienia tego samego elementu w pierwszym wierszu liczymy oddzielnie.\n\n```python\npierwszy = [2, 2, 3, 7]\ndrugi = [12, 15]\nwynik = sum(any(n % p == 0 for n in drugi) for p in pierwszy)\nprint(wynik)\n```"
    },
    {
     "id": "s008",
     "title": "Zadanie 3: Choć jedna wielokrotność",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 3: Choć jedna wielokrotność\n\n**Dane:** Dodatnia liczba całkowita `p` i lista dodatnich liczb całkowitych.\n\n**Do wykonania:** Napisz funkcję `dzieli_jakas(p, liczby)` rozstrzygającą, czy `p` dzieli bez reszty przynajmniej jedną liczbę z listy. Zakończ przeszukiwanie, gdy odpowiedź jest już przesądzona.\n\n**Wynik:** Zwróć `True`, jeśli znaleziono choć jedną liczbę podzielną przez `p`, i `False`, jeśli takiej liczby nie ma. Dla pustej listy zwróć `False`. Pokaż przypadek pasujący i niepasujący.\n\n**Przykład wyjaśniający:** Dla `p = 4` i listy `[6, 12, 7]` odpowiedź to `True`, bo 12 dzieli się przez 4 bez reszty. Liczby 6 i 7 nie muszą spełniać warunku — pytamy o przynajmniej jedną liczbę, nie o wszystkie."
    },
    {
     "id": "s009",
     "title": "Zadanie 4: Zliczanie wystąpień dzielników",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: Zliczanie wystąpień dzielników\n\n**Dane:** Dwie listy dodatnich liczb całkowitych: `pierwszy` i `drugi`.\n\n**Do wykonania:** Napisz funkcję `licz_dzielniki(pierwszy, drugi)`. Policz wystąpienia z pierwszej listy, które dzielą przynajmniej jedną liczbę z drugiej. Powtórzony element pierwszej listy liczy się ponownie, ale kilka trafień dla jednego wystąpienia nie zwiększa jego udziału.\n\n**Wynik:** Zwróć liczbę pasujących elementów pierwszej listy. Nie zwracaj liczby wszystkich pasujących par pomiędzy listami. Wyświetl wynik dla `[2, 2, 3, 7]` i `[12, 15]` i wyjaśnij, co zostało policzone.\n\n**Przykład wyjaśniający:** Dla pierwszej listy `[2, 2, 5]` i drugiej `[6, 10]` wynik wynosi 3. Każda dwójka liczy się raz, mimo że dzieli obie liczby drugiej listy. Piątka też liczy się raz, ponieważ dzieli 10. Wynik nie może przekroczyć długości pierwszej listy."
    },
    {
     "id": "s010",
     "title": "Zadanie 5: Rozkład liczby",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: Rozkład liczby\n\n**Dane:** Liczba całkowita `n >= 2`.\n\n**Do wykonania:** Napisz funkcję `rozklad(n)` wyznaczającą wszystkie czynniki pierwsze liczby wraz z powtórzeniami. Lista ma być uporządkowana rosnąco.\n\n**Wynik:** Zwróć rosnącą listę liczb pierwszych, których iloczyn odtwarza `n`. Ta sama liczba pierwsza może pojawić się wielokrotnie. Pokaż działanie dla 72 i wybranej liczby pierwszej. Pomnóż otrzymane czynniki, aby uzasadnić odpowiedź.\n\n**Przykład wyjaśniający:** Dla 18 odpowiedź to `[2, 3, 3]`, bo 18 = 2·3·3. Nie wystarczy `[2, 3]`, bo jego iloczyn to 6. Lista `[1, 2, 3, 6, 9, 18]` też nie pasuje — to lista dzielników, a nie rozkład na czynniki pierwsze."
    },
    {
     "id": "s011",
     "title": "Zadanie 6: Ile robotów zbuduje warsztat?",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Ile robotów zbuduje warsztat?\n\n**Dane:** Słowniki `zapas` i `plan`. Plan jednego robota: `{\"kolo\": 4, \"silnik\": 2, \"czujnik\": 1}`. Przykładowy zapas: `{\"kolo\": 14, \"silnik\": 5, \"czujnik\": 9}`.\n\n**Do wykonania:** Napisz funkcję `warsztat(zapas, plan)` ustalającą maksymalną liczbę kompletnych robotów i pozostałe części. Plan jest niepusty, ilości w nim dodatnie, zapasy nieujemne. Brak części w zapasie oznacza zero. Nie zmieniaj argumentów.\n\n**Wynik:** Zwróć parę `(liczba_robotow, slownik_pozostalych_czesci)`: ile całych robotów można zbudować i jaki zapas zostanie po ich zbudowaniu. Zachowaj w zapasie także części nieużywane w planie. Wyświetl wynik dla przykładu i nazwij brakującą do dalszej produkcji część.\n\n**Przykład wyjaśniający:** Jeśli robot wymaga 2 kół i 1 silnika, a mamy 7 kół i 2 silniki, można zbudować 2 roboty. Pozostaną 3 koła i 0 silników. Nie można zbudować trzeciego kompletnego robota, choć zostały koła. Zapasy części zużywają się przy budowie."
    },
    {
     "id": "s012",
     "title": "Zapas czynników i niezależność prób",
     "kind": "theory",
     "context": "",
     "markdown": "## Zapas czynników i niezależność prób\n\nRozkład na czynniki pierwsze mówi, ile razy każda liczba pierwsza jest potrzebna. Counter(lista) buduje słownik dostępnych liczności. Można też przejść po całej liście czynników i dzielić pozostałą liczbę tylko raz na wystąpienie.\n\nGdy pozostało 1, liczba jest zbudowana. Gdy nie da się już dzielić i pozostało więcej niż 1, brakuje czynników. Każdą nową liczbę sprawdzamy z pełnym zapasem, bo zadanie nie wymaga jednoczesnego budowania wszystkich liczb.\n\n```python\nfrom collections import Counter\ndostepne = Counter([2, 2, 3, 5])\npotrzebne = Counter([2, 2, 2, 2])\nprint(dostepne, potrzebne)\nprint(potrzebne[2] <= dostepne[2])\n```"
    },
    {
     "id": "s013",
     "title": "Zadanie 7: Ograniczony iloczyn",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Ograniczony iloczyn\n\n**Dane:** Liczba całkowita `n >= 2` oraz lista `pierwsze` zawierająca zapas liczb pierwszych. Każde wystąpienie jest osobnym dostępnym czynnikiem.\n\n**Do wykonania:** Napisz funkcję `mozna(n, pierwsze)` sprawdzającą, czy `n` da się otrzymać jako iloczyn wybranych czynników. Każde wystąpienie można wykorzystać najwyżej raz, część zapasu może pozostać niewykorzystana.\n\n**Wynik:** Zwróć `True`, jeśli liczba jest możliwa do zbudowania z dostępnego zapasu, i `False` w przeciwnym przypadku. Nie trzeba używać wszystkich czynników. Wyświetl odpowiedzi dla 12, 20 i 16 przy zapasie `[2, 2, 3, 5]`.\n\n**Przykład wyjaśniający:** Przy zapasie `[2, 3, 3]` liczbę 18 można otrzymać jako 2·3·3, więc odpowiedź to `True`. Liczby 12 nie można otrzymać, bo potrzeba dwóch dwójek, a dostępna jest tylko jedna. Sam fakt, że występują liczby 2 i 3, nie wystarcza."
    },
    {
     "id": "s014",
     "title": "Zadanie 8: Brakujące czynniki pierwsze",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: Brakujące czynniki pierwsze\n\n**Dane:** Liczba `n >= 2` i lista dostępnych czynników pierwszych, z uwzględnieniem powtórzeń.\n\n**Do wykonania:** Napisz funkcję `brakujace(n, pierwsze)` ustalającą, jakie dodatkowe czynniki są potrzebne do zbudowania `n`. Dostępny czynnik wolno wykorzystać tylko tyle razy, ile występuje na liście.\n\n**Wynik:** Zwróć słownik, w którym klucz oznacza brakującą liczbę pierwszą, a wartość — ile jej dodatkowych sztuk potrzeba. Nie wpisuj czynników, których jest wystarczająco dużo. Gdy niczego nie brakuje, zwróć `{}`. Zaprezentuj 16 i 12 dla zapasu `[2, 2, 3]`.\n\n**Przykład wyjaśniający:** Liczba 72 wymaga czynników 2, 2, 2, 3, 3. Jeśli zapas wynosi `[2, 3, 5]`, brakuje dwóch dwójek i jednej trójki, więc wynik to `{2: 2, 3: 1}`. Dostępna piątka nie zastąpi żadnego z brakujących czynników."
    },
    {
     "id": "s015",
     "title": "Zadanie 9: Raport zbiorczy",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 9: Raport zbiorczy\n\n**Dane:** Plik `czynniki-trening.txt`: pierwszy wiersz to czynniki pierwsze, drugi badane liczby. Liczby w wierszu są rozdzielone spacjami.\n\n**Do wykonania:** Napisz funkcję `raport(pierwsze, liczby, k)` łączącą trzy informacje: ile wystąpień czynników dzieli jakąkolwiek badaną liczbę, jaka jest k-ta największa wartość z listy czynników i które badane liczby można zbudować z zapasu. Dla każdej badanej liczby zapas jest dostępny od nowa.\n\n**Wynik:** Zwróć krotkę `(liczba_pasujacych_czynnikow, kta_wartosc, lista_mozliwych_liczb)`, wykorzystując znaczenia z zadań 4, 1 i 7. Sam odczytaj plik i zapisz wynik dla `k = 2` w `raport_z_pliku`. W `wyniki-trening.txt` zapisz trzy części w osobnych wierszach, a liczby ostatniej części rozdziel spacjami.\n\n**Przykład wyjaśniający:** Dla czynników `[2, 3, 3]`, kandydatów `[6, 18, 4]` i `k = 2` raport to `(3, 3, [6, 18])`. Wszystkie trzy wystąpienia czynników dzielą którąś badaną liczbę. Drugą wartością w rankingu jest 3. Można zbudować 6 i 18, każdą ocenianą z pełnym zapasem od nowa."
    },
    {
     "id": "s016",
     "title": "Zadanie 10: Podium po kilku rundach",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 10: Podium po kilku rundach\n\n**Dane:** Wyniki rund: `[(\"Ada\", 14), (\"Jan\", 18), (\"Ada\", 7), (\"Ola\", 21), (\"Ewa\", 9)]`.\n\n**Do wykonania:** Napisz funkcję `podium(rundy)` wyznaczającą trzy najlepsze osoby według sumy punktów ze wszystkich rund. Remis rozstrzyga rosnąca kolejność alfabetyczna imion. Jedna osoba zajmuje tylko jedno miejsce.\n\n**Wynik:** Zwróć maksymalnie trzy pary `(imie, suma_punktow)`, od pierwszego do trzeciego miejsca. Jeśli osób jest mniej niż trzy, zwróć wszystkie. Każda osoba może wystąpić w wyniku tylko raz, nawet jeśli grała wiele rund.\n\n**Przykład wyjaśniający:** Dla rund `[(\"Jan\", 6), (\"Ada\", 10), (\"Jan\", 4), (\"Ola\", 8)]` wynik to `[(\"Ada\", 10), (\"Jan\", 10), (\"Ola\", 8)]`. Jan ma łącznie 10 punktów, ale przy remisie Ada jest wcześniej alfabetycznie."
    },
    {
     "id": "s017",
     "title": "Podsumowanie",
     "kind": "theory",
     "context": "",
     "markdown": "## Podsumowanie\n\nWyjaśnij jedno własne rozwiązanie i wskaż ważny przypadek brzegowy. W zadaniu plikowym pokaż kod od otwarcia pliku do zapisania odpowiedzi."
    },
    {
     "id": "s018",
     "title": "3. Zadania do samodzielnego wykonania",
     "kind": "homework",
     "context": "",
     "markdown": "## 3. Zadania do samodzielnego wykonania\n\nWykonaj zadania 11–12 przed następnym spotkaniem i zapisz własne rozwiązania."
    },
    {
     "id": "s019",
     "title": "Zadanie 11: druga różna",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 11: druga różna\n\n**Dane:** Lista liczb, w której mogą wystąpić powtórzenia.\n\n**Do wykonania:** Napisz funkcję `druga_rozna(liczby)` znajdującą drugą największą różną wartość. Tym razem wielokrotne wystąpienie tej samej liczby zajmuje jedno miejsce.\n\n**Wynik:** Zwróć jedną liczbę: największą wartość mniejszą od maksimum listy. Jeśli takiej wartości nie ma, zwróć `None`. Dobierz przykład, dla którego odpowiedź różni się od wyniku `kta(liczby, 2)`.\n\n**Przykład wyjaśniający:** Dla `[9, 9, 4, 2]` druga różna wartość to 4, a nie 9. Dla `[7, 7]` wynik to `None`, ponieważ lista ma dwa elementy, ale tylko jedną różną wartość. To inne zasady rankingu niż w zadaniu 1."
    },
    {
     "id": "s020",
     "title": "Zadanie 12: liczby z dostępnych czynników",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 12: liczby z dostępnych czynników\n\n**Dane:** Lista czynników pierwszych `pierwsze` oraz całkowita `granica >= 2`.\n\n**Do wykonania:** Napisz funkcję `mozliwe_liczby(pierwsze, granica)` wybierającą liczby od 2 do granicy włącznie, które można otrzymać jako iloczyn dostępnych czynników. Każdą liczbę oceniaj z pełnym zapasem od nowa.\n\n**Wynik:** Zwróć rosnącą listę wszystkich możliwych liczb z przedziału od 2 do `granica`, łącznie z granicą. Każdą wartość wpisz raz. Wyświetl wynik dla `[2, 2, 3, 5]` i granicy 20.\n\n**Przykład wyjaśniający:** Dla zapasu `[2, 3]` i granicy 8 odpowiedź to `[2, 3, 6]`. Można wybrać samą dwójkę, samą trójkę albo ich iloczyn. Nie ma 4, bo brakuje drugiej dwójki. Użycie 2 w jednej odpowiedzi nie odbiera jej możliwości użycia do oceny liczby 6."
    }
   ]
  },
  {
   "number": 7,
   "kind": "lesson",
   "title": "Sumy prefiksowe, okna i porównywanie średnich",
   "sourceFile": "07_sumy_prefiksowe_i_fragmenty/karta_pracy.ipynb",
   "notebook": "lekcje/07_sumy_prefiksowe_i_fragmenty/karta_pracy.ipynb",
   "download": "pobierz/07_sumy_prefiksowe_i_fragmenty.zip",
   "assetBase": "lekcje/07_sumy_prefiksowe_i_fragmenty/",
   "checksum": "454078863e4fc3fb42bbdf16841c0096b05c765d134a375ec9961d67c0a09a29",
   "sections": [
    {
     "id": "intro",
     "title": "Cel i sposób pracy",
     "kind": "intro",
     "context": "",
     "markdown": "# Karta pracy 07. Sumy prefiksowe, okna i porównywanie średnich\n\n**Kurs:** Python — programowanie do matury rozszerzonej z informatyki\n\n**Prowadzący:** por. Jakub GRĄTKIEWICZ · jakub.gratkiewicz@wat.edu.pl\n\n**Cel:** Przygotowanie poprawnej i wystarczająco szybkiej analizy fragmentów w 4.4 matury 2024.\n\nZnasz podstawy Pythona. Przypominamy potrzebne narzędzia i stosujemy je w coraz bardziej złożonych zadaniach.\n\nOtwórz ten notatnik w folderze bieżącej lekcji. W zadaniu plikowym samodzielnie napisz otwarcie pliku, odczyt, konwersję, obliczenia i zapis odpowiedzi. Nie ma wspólnej komórki wczytującej dane ani gotowych list z plików zadaniowych.\n\nZadania 1–10 wykonujemy na lekcji, zadania 11–12 samodzielnie. Niedokończone zadania uzupełnij przed następnym spotkaniem.\n\nW pustych komórkach roboczych wpisz własny kod. Wyświetl wyniki obliczeń i przygotuj się do wyjaśnienia swojego rozwiązania.\n\nPrzed oddaniem zrestartuj jądro, uruchom własne komórki od początku i zapisz notatnik oraz wymagane pliki wynikowe."
    },
    {
     "id": "s001",
     "title": "Katalog lekcji i dane",
     "kind": "organization",
     "context": "",
     "markdown": "## Katalog lekcji i dane\n\nPliki wejściowe w katalogu tej lekcji:\n\n- fragmenty-trening.txt\n\nPrzeczytaj format w poleceniu. Pliki otwierasz we własnym kodzie; nie przepisuj ich zawartości do programu. Nazwy wyników są podane w zadaniach. Zapisuj wyniki obok notatnika i nie nadpisuj danych wejściowych."
    },
    {
     "id": "s002",
     "title": "1. Przypomnienie",
     "kind": "recall",
     "context": "",
     "markdown": "## 1. Przypomnienie\n\n1. Czym spójny fragment różni się od dowolnie wybranego podciągu?\n2. Ile jest fragmentów długości 3 w liście 7-elementowej?\n3. Czy największa suma oznacza zawsze największą średnią?\n\nTo pytania do wspólnego powtórzenia, nie zestaw kartkówki.\n\n```python\n# Własne odpowiedzi:\n# 1.\n# 2.\n# 3.\n```"
    },
    {
     "id": "s003",
     "title": "2. Treść dydaktyczna i zadania na lekcji",
     "kind": "theory",
     "context": "",
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nKażde polecenie określa dane, problem do rozwiązania i wymagany wynik. Przykład wyjaśniający pokazuje, jak rozumieć wymagania i format odpowiedzi. W zadaniu plikowym oblicz właściwy wynik z podanego pliku, nie z małego przykładu w opisie. Samodzielnie zaplanuj sposób rozwiązania i napisz kod. Funkcja ma zwracać wynik; wyświetl go w miejscu jej wywołania, jeśli wymaga tego polecenie. W zadaniach plikowych sam napisz także otwarcie, odczyt i zapis pliku. Przygotuj się do wyjaśnienia swoich decyzji."
    },
    {
     "id": "s004",
     "title": "Przedziały półotwarte",
     "kind": "theory",
     "context": "",
     "markdown": "## Przedziały półotwarte\n\nFragment a[l:r] zawiera indeks l, wyklucza r i ma r-l elementów. Fragment dochodzący do końca listy ma r=len(a). Spójność oznacza, że żadnego elementu między końcami nie wolno pominąć.\n\nWygodnie przyjąć jeden sposób zapisu końców w całym algorytmie. Prawy koniec wyłączny pasuje do range, wycinków i sum prefiksowych.\n\n```python\na = [3, 1, 8, 2, 7]\nl, r = 1, 4\nprint(a[l:r], r-l, sum(a[l:r]))\n```"
    },
    {
     "id": "s005",
     "title": "Zadanie 1: Końce fragmentu",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 1: Końce fragmentu\n\n**Dane:** Lista liczb `a` i granice `0 <= l <= r <= len(a)`. Fragment obejmuje indeksy od `l` włącznie do `r` wyłącznie.\n\n**Do wykonania:** Napisz funkcję `opis(a, l, r)` opisującą wskazany spójny fragment bez zmiany listy. Gdy `l == r`, fragment jest pusty.\n\n**Wynik:** Zwróć krotkę `(lista_elementow_fragmentu, dlugosc, suma)`: wybrane elementy, ich liczbę oraz ich sumę. „Spójny” oznacza, że nie pomijasz żadnego elementu pomiędzy granicami. Pokaż fragment niepusty i pusty.\n\n**Przykład wyjaśniający:** Dla listy `[6, 2, 9, 4]` i granic `l = 1`, `r = 3` bierzemy elementy o indeksach 1 i 2, czyli `[2, 9]`. Wynik to `([2, 9], 2, 11)`. Element o indeksie 3 nie należy do fragmentu. Dla `l = r` odpowiedź to `([], 0, 0)`."
    },
    {
     "id": "s006",
     "title": "Zadanie 2: Ile okien?",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: Ile okien?\n\n**Dane:** Długość ciągu `n >= 0` i długość okna `k >= 1`. Okno to `k` kolejnych elementów ciągu.\n\n**Do wykonania:** Napisz funkcję `liczba_okien(n, k)` określającą, ile różnych położeń okna mieści się w ciągu. Dwa okna mogą się częściowo pokrywać.\n\n**Wynik:** Zwróć liczbę różnych miejsc, w których można umieścić okno długości `k` bez wychodzenia poza ciąg. Jeśli okno jest dłuższe od ciągu, zwróć 0. Pokaż wynik dla `n = 7`, `k = 3` i wypisz możliwe indeksy początków.\n\n**Przykład wyjaśniający:** W ciągu pięciu elementów A, B, C, D, E okna długości 3 to ABC, BCD i CDE. Są trzy, choć się nakładają. ACD nie jest oknem, bo pomija B. Do obliczenia liczby okien potrzebne są długości, nie wartości elementów."
    },
    {
     "id": "s007",
     "title": "Prefiksy i koszt obliczeń",
     "kind": "theory",
     "context": "",
     "markdown": "## Prefiksy i koszt obliczeń\n\nP[0]=0; P[i] to suma pierwszych i elementów. Dodawanie kolejnych elementów tworzy n+1 prefiksów. Suma a[l:r] to P[r]-P[l]. Liczymy ją w O(1), gdy prefiksy są gotowe.\n\nJest O(n²) par końców. Sumowanie każdego wycinka osobno daje O(n³), a sumy prefiksowe zmniejszają koszt do O(n²). Dla stałej długości k wystarczy n-k+1 okien, więc można przejść po nich w O(n).\n\n```python\na = [3, 1, 8, 2, 7]\np = [0]\nfor n in a:\n    p.append(p[-1] + n)\nprint(p)\nprint(\"Suma fragmentu:\", p[4] - p[1])\n```"
    },
    {
     "id": "s008",
     "title": "Zadanie 3: Budowa prefiksów",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 3: Budowa prefiksów\n\n**Dane:** Lista `a` długości `n`. Suma prefiksowa dla pozycji `i` oznacza sumę pierwszych `i` elementów listy.\n\n**Do wykonania:** Napisz funkcję `prefiksy(a)` obliczającą wszystkie sumy prefiksowe, w tym sumę pustego początku.\n\n**Wynik:** Zwróć listę długości `n + 1`. Element o indeksie `i` ma być sumą pierwszych `i` liczb wejściowych. Dlatego na początku musi być 0 — suma jeszcze przed uwzględnieniem pierwszej liczby. Wyświetl wynik dla `[3, 1, 8]`.\n\n**Przykład wyjaśniający:** Dla `[2, 5, 1]` lista prefiksów to `[0, 2, 7, 8]`: suma zera elementów, jednego, dwóch i trzech. Prefiks opisuje początek listy. Odpowiedź nie jest samą sumą wszystkich elementów, lecz zestawem sum kolejnych początków."
    },
    {
     "id": "s009",
     "title": "Zadanie 4: Odpowiadanie na zapytania",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: Odpowiadanie na zapytania\n\n**Dane:** Lista `a` i zapytania `(l, r)` spełniające `0 <= l <= r <= len(a)`. Prawa granica nie należy do fragmentu.\n\n**Do wykonania:** Napisz funkcję `sumy_fragmentow(a, zapytania)`. Przygotuj sumy prefiksowe tylko raz. Każda odpowiedź ma być obliczana w stałej liczbie działań, bez ponownego sumowania elementów fragmentu.\n\n**Wynik:** Zwróć listę, w której każdemu zapytaniu odpowiada jedna suma wybranego fragmentu. Zachowaj kolejność zapytań. Pokaż wyniki dla `[3, 1, 8, 2]` i zapytań `[(0, 4), (1, 3), (2, 2)]`.\n\n**Przykład wyjaśniający:** Dla `[2, 5, 1, 4]` zapytanie `(1, 3)` dotyczy liczb 5 i 1, więc odpowiedź wynosi 6. Zapytanie `(2, 2)` opisuje pusty fragment, którego suma to 0. Wynik dla tych dwóch zapytań ma postać `[6, 0]`, nie listy samych fragmentów."
    },
    {
     "id": "s010",
     "title": "Zadanie 5: Akumulator stacji orbitalnej",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: Akumulator stacji orbitalnej\n\n**Dane:** Zmiany energii stacji, np. `[-4, 3, -6, 8, -2]`. Wartość dodatnia oznacza ładowanie, ujemna zużycie.\n\n**Do wykonania:** Napisz funkcję `minimalny_zapas(zmiany)`, która znajduje najmniejszą nieujemną energię początkową pozwalającą przejść całą sekwencję bez spadku poniżej zera. Wykorzystaj sumy prefiksowe.\n\n**Wynik:** Zwróć najmniejszy zapas energii potrzebny przed pierwszą zmianą. Energia może spaść do zera, ale ani razu poniżej niego, także przed późniejszym ładowaniem. Dla pustej listy zwróć 0. Uzasadnij, dlaczego zapas mniejszy o 1 nie wystarczy.\n\n**Przykład wyjaśniający:** Dla zmian `[-3, 5, -4]` potrzebny zapas to 3. Energia po kolejnych zmianach wynosi wtedy 0, 5, 1. Start z 2 nie wystarczy, bo już po pierwszym zużyciu dałby -1, mimo że później następuje ładowanie."
    },
    {
     "id": "s011",
     "title": "Zadanie 6: Najlepsze stałe okno",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Najlepsze stałe okno\n\n**Dane:** Lista liczb całkowitych `a`, także ujemnych, oraz `1 <= k <= len(a)`.\n\n**Do wykonania:** Napisz funkcję `stale_okno(a, k)` wybierającą spójny fragment dokładnie `k` elementów o największej sumie. Przy remisie wybierz najwcześniejszy początek.\n\n**Wynik:** Zwróć parę `(najwieksza_suma, indeks_poczatku_od_0)`. Wybierasz dokładnie `k` sąsiadujących elementów, nie `k` dowolnych największych liczb. Wyświetl wynik dla `[1, 8, 9, 2, 10]`, `k = 2`, oraz przykładu z samymi liczbami ujemnymi.\n\n**Przykład wyjaśniający:** Dla `[4, 1, 6, 2]` i `k = 2` możliwe sumy to 5, 7 i 8. Najlepszy fragment to `[6, 2]`, zaczynający się na indeksie 2, więc wynik to `(8, 2)`. Nie wolno wybrać 4 i 6, bo nie leżą obok siebie."
    },
    {
     "id": "s012",
     "title": "Średnia, minimum długości i remisy",
     "kind": "theory",
     "context": "",
     "markdown": "## Średnia, minimum długości i remisy\n\nSuma 18 z 3 elementów daje średnią 6, a suma 17 z 2 elementów 8,5. Maksymalizacja sumy nie wystarczy. Dodatnie długości pozwalają porównać średnie dokładnie: s1*d2 > s2*d1.\n\nSprawdzaj wszystkie długości od minimum do końca danych, nie tylko minimum. Przechodź po początkach rosnąco i aktualizuj wynik tylko przy ścisłej poprawie. To zachowa najwcześniejszy początek. Gdy ten sam początek daje równe średnie przy różnych końcach, w kursie zachowujemy krótszy fragment.\n\n```python\ns1, d1 = 18, 3\ns2, d2 = 17, 2\nprint(\"Czy pierwsza średnia jest większa?\", s1 * d2 > s2 * d1)\nprint(\"Czy druga średnia jest większa?\", s2 * d1 > s1 * d2)\n```"
    },
    {
     "id": "s013",
     "title": "Zadanie 7: Dokładne porównanie",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Dokładne porównanie\n\n**Dane:** Dwie sumy całkowite `s1`, `s2` i dodatnie długości `d1`, `d2`. Średnie wynoszą odpowiednio `s1/d1` i `s2/d2`.\n\n**Do wykonania:** Napisz funkcję `lepsza(s1, d1, s2, d2)` rozstrzygającą, czy pierwsza średnia jest ściśle większa. Nie wykonuj dzielenia ani konwersji do `float`.\n\n**Wynik:** Zwróć `True` tylko wtedy, gdy pierwsza średnia jest większa od drugiej. Równe średnie mają dawać `False`. Pokaż porównanie `17/2` z `18/3` oraz `10/2` z `15/3`, bez używania przybliżeń w funkcji.\n\n**Przykład wyjaśniający:** Pierwszy fragment może mieć sumę 12 i długość 3, a drugi sumę 15 i długość 5. Ich średnie to 4 i 3, więc pierwszy jest lepszy, choć ma mniejszą sumę. Argumenty opisują sumy i długości fragmentów, nie ich gotowe średnie."
    },
    {
     "id": "s014",
     "title": "Zadanie 8: Wszystkie długości od minimum",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: Wszystkie długości od minimum\n\n**Dane:** Lista liczb całkowitych `a` i minimalna długość `1 <= k <= len(a)`.\n\n**Do wykonania:** Napisz funkcję `najlepszy(a, k)` wybierającą spójny fragment o największej średniej spośród fragmentów długości co najmniej `k`. Przy remisie wybierz wcześniejszy początek, a przy tym samym początku krótszy fragment. Użyj prefiksów i dokładnego porównywania średnich.\n\n**Wynik:** Zwróć krotkę `(suma, dlugosc, indeks_poczatku_od_0)` opisującą jeden wybrany fragment. Dopuszczalne są długości `k`, `k + 1` i większe, aż do całej listy. Wyświetl wynik dla `[9, 1, 9]`, `k = 2`.\n\n**Przykład wyjaśniający:** Dla `[8, 0, 8]` i `k = 2` oba fragmenty długości 2 mają średnią 4, a cała lista średnią 16/3, czyli większą. Odpowiedź to `(16, 3, 0)`. Najlepszy fragment nie zawsze ma najmniejszą dozwoloną długość. Przy równych średnich zastosuj zasady remisu z polecenia."
    },
    {
     "id": "s015",
     "title": "Zadanie 9: Ostatni fragment i remis",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 9: Ostatni fragment i remis\n\n**Dane:** Listy `[0, 0, 9, 9]`, `[5, 5, 5]`, `[2, 4]` oraz plik `fragmenty-trening.txt` z liczbami rozdzielonymi spacjami. W każdym przypadku `k = 2`.\n\n**Do wykonania:** Wyznacz najlepsze fragmenty według reguł poprzedniego zadania. Samodzielnie wczytaj plik do `ciag_z_pliku`. Wyjaśnij wybór dla listy z równymi wartościami i dla listy mającej tylko dwa elementy.\n\n**Wynik:** Dla każdej z trzech list pokaż wybrany fragment oraz jego sumę, długość i indeks początku. Wynik dla pliku zapisz w `wynik_z_pliku`, a jego trzy liczby w jednym wierszu `wyniki-trening.txt`, rozdzielone spacjami.\n\n**Przykład wyjaśniający:** Przy liście `[4, 4, 4]` i `k = 2` wszystkie dopuszczalne fragmenty mają średnią 4. Wygrywa początek o indeksie 0, a spośród fragmentów o tym początku krótszy, czyli `[4, 4]`. Opis to `(8, 2, 0)`, a wiersz pliku miałby postać `8 2 0`."
    },
    {
     "id": "s016",
     "title": "Zadanie 10: Najkrótszy pakiet alarmowy",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 10: Najkrótszy pakiet alarmowy\n\n**Dane:** Dodatnie rozmiary kolejnych pakietów i dodatni cel. Przykład: `[4, 7, 3, 11, 2, 9]`, cel 20.\n\n**Do wykonania:** Napisz funkcję `pakiet_alarmowy(rozmiary, cel)` wybierającą jak najmniej kolejnych pakietów o łącznym rozmiarze co najmniej równym celowi. Przy remisie wybierz wcześniejszy początek. Wykorzystaj sumy prefiksowe.\n\n**Wynik:** Zwróć krotkę `(indeks_poczatku_od_0, liczba_pakietow, suma)` opisującą najkrótszy pasujący fragment kolejnych pakietów. Nie wybieraj pakietów z pominięciem tych pomiędzy nimi. Jeśli nawet wszystkie razem nie osiągają celu, zwróć `None`.\n\n**Przykład wyjaśniający:** Dla rozmiarów `[3, 8, 4]` i celu 10 wystarczają dwa pakiety: `[3, 8]` albo `[8, 4]`. Wybieramy wcześniejszy fragment, więc odpowiedź to `(0, 2, 11)`. Żaden pojedynczy pakiet nie osiąga 10, a suma nie musi być dokładnie równa celowi."
    },
    {
     "id": "s017",
     "title": "Podsumowanie",
     "kind": "theory",
     "context": "",
     "markdown": "## Podsumowanie\n\nWyjaśnij jedno własne rozwiązanie i wskaż ważny przypadek brzegowy. W zadaniu plikowym pokaż kod od otwarcia pliku do zapisania odpowiedzi."
    },
    {
     "id": "s018",
     "title": "3. Zadania do samodzielnego wykonania",
     "kind": "homework",
     "context": "",
     "markdown": "## 3. Zadania do samodzielnego wykonania\n\nWykonaj zadania 11–12 przed następnym spotkaniem i zapisz własne rozwiązania."
    },
    {
     "id": "s019",
     "title": "Zadanie 11: okno przesuwne",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 11: okno przesuwne\n\n**Dane:** Lista liczb `a` oraz `1 <= k <= len(a)`. Obowiązują te same zasady wyboru co w `stale_okno`.\n\n**Do wykonania:** Napisz funkcję `stale_okno_bez_prefiksow(a, k)` bez tablicy prefiksów i bez ponownego sumowania całego okna przy każdym przesunięciu. Rozwiązanie ma przeglądać listę jednokrotnie i używać stałej dodatkowej pamięci.\n\n**Wynik:** Zwróć parę `(najwieksza_suma, pierwszy_indeks_poczatku)` tak samo jak w zadaniu 6. Porównaj odpowiedzi obu funkcji dla `[1, 8, 9, 2, 10]`, `k = 2`. Wyjaśnij, dlaczego nowa wersja nie potrzebuje listy sum prefiksowych.\n\n**Przykład wyjaśniający:** Dla `[2, 7, 1]` i `k = 2` obie wersje powinny zwrócić `(9, 0)`. Zmienia się sposób organizacji obliczeń, nie znaczenie odpowiedzi. Stała dodatkowa pamięć oznacza, że liczba dodatkowych przechowywanych wartości nie rośnie wraz z długością wejściowej listy."
    },
    {
     "id": "s020",
     "title": "Zadanie 12: okna o średniej powyżej progu",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 12: okna o średniej powyżej progu\n\n**Dane:** Lista całkowita `a`, długość `1 <= k <= len(a)` oraz całkowity `prog`.\n\n**Do wykonania:** Napisz funkcję `okna_powyzej(a, k, prog)` zliczającą spójne fragmenty dokładnie `k` elementów, których średnia jest ściśle większa od progu. Wykorzystaj prefiksy, bez dzielenia przy porównaniu.\n\n**Wynik:** Zwróć liczbę wszystkich fragmentów długości dokładnie `k`, których średnia przekracza `prog`. Nakładające się fragmenty liczymy osobno. Nie szukasz tutaj jednego najlepszego fragmentu. Wyświetl wynik dla `[1, 8, 9, 2, 10]`, `k = 2`, `prog = 6`.\n\n**Przykład wyjaśniający:** Dla `[2, 6, 6]`, `k = 2` i progu 4 okno `[2, 6]` ma średnią 4 i nie spełnia warunku, a `[6, 6]` ma średnią 6 i go spełnia. Odpowiedź to 1. Średnia równa progowi nie jest jego przekroczeniem."
    }
   ]
  },
  {
   "number": 8,
   "kind": "lesson",
   "title": "Matura 2024: Liczby — cztery podpunkty",
   "sourceFile": "08_matura_2024_zadanie_4_liczby/karta_pracy.ipynb",
   "notebook": "lekcje/08_matura_2024_zadanie_4_liczby/karta_pracy.ipynb",
   "download": "pobierz/08_matura_2024_zadanie_4_liczby.zip",
   "assetBase": "lekcje/08_matura_2024_zadanie_4_liczby/",
   "checksum": "0f3a3754927f3700a3ecefc09bee2655a69cd562e850e532350d3d5d5c1d5a8d",
   "sections": [
    {
     "id": "intro",
     "title": "Cel i sposób pracy",
     "kind": "intro",
     "context": "",
     "markdown": "# Karta pracy 08. Matura 2024: Liczby — cztery podpunkty\n\n**Kurs:** Python — programowanie do matury rozszerzonej z informatyki\n\n**Prowadzący:** por. Jakub GRĄTKIEWICZ · jakub.gratkiewicz@wat.edu.pl\n\n**Cel:** Pełne zadanie 4.1–4.4 z przykładami, obliczeniami i plikiem odpowiedzi.\n\nZnasz podstawy Pythona. Przypominamy potrzebne narzędzia i stosujemy je w coraz bardziej złożonych zadaniach.\n\nOtwórz ten notatnik w folderze bieżącej lekcji. W zadaniu plikowym samodzielnie napisz otwarcie pliku, odczyt, konwersję, obliczenia i zapis odpowiedzi. Nie ma wspólnej komórki wczytującej dane ani gotowych list z plików zadaniowych.\n\nZadania 1–8 wykonujemy na lekcji, zadania 9–10 samodzielnie. Niedokończone zadania uzupełnij przed następnym spotkaniem.\n\nW pustych komórkach roboczych wpisz własny kod. Wyświetl wyniki obliczeń i przygotuj się do wyjaśnienia swojego rozwiązania.\n\nPrzed oddaniem zrestartuj jądro, uruchom własne komórki od początku i zapisz notatnik oraz wymagane pliki wynikowe."
    },
    {
     "id": "s001",
     "title": "Katalog lekcji i dane",
     "kind": "organization",
     "context": "",
     "markdown": "## Katalog lekcji i dane\n\nPliki wejściowe w katalogu tej lekcji:\n\n- liczby_przyklad.txt\n- liczby.txt\n\nPrzeczytaj format w poleceniu. Pliki otwierasz we własnym kodzie; nie przepisuj ich zawartości do programu. Nazwy wyników są podane w zadaniach. Zapisuj wyniki obok notatnika i nie nadpisuj danych wejściowych."
    },
    {
     "id": "s002",
     "title": "1. Przypomnienie",
     "kind": "recall",
     "context": "",
     "markdown": "## 1. Przypomnienie\n\n1. Czy sortowanie może zniszczyć dane potrzebne do 4.4?\n2. Czy dany czynnik wolno zużyć ponownie dla następnego kandydata?\n3. Który fragment wygrywa przy równej średniej?\n\nTo pytania do wspólnego powtórzenia, nie zestaw kartkówki.\n\n```python\n# Własne odpowiedzi:\n# 1.\n# 2.\n# 3.\n```"
    },
    {
     "id": "s003",
     "title": "2. Treść dydaktyczna i zadania na lekcji",
     "kind": "theory",
     "context": "",
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nKażde polecenie określa dane, problem do rozwiązania i wymagany wynik. Przykład wyjaśniający pokazuje, jak rozumieć wymagania i format odpowiedzi. W zadaniu plikowym oblicz właściwy wynik z podanego pliku, nie z małego przykładu w opisie. Samodzielnie zaplanuj sposób rozwiązania i napisz kod. Funkcja ma zwracać wynik; wyświetl go w miejscu jej wywołania, jeśli wymaga tego polecenie. W zadaniach plikowych sam napisz także otwarcie, odczyt i zapis pliku. Przygotuj się do wyjaśnienia swoich decyzji."
    },
    {
     "id": "s004",
     "title": "Zadanie maturalne · źródło i zakres",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie maturalne · źródło i zakres\n\n## Zadanie maturalne — pełna transkrypcja treści CKE\n\n**Źródło:** CKE, egzamin maturalny z informatyki, poziom rozszerzony, Formuła 2023, 22 maja 2024 r., arkusz `MINP-R0-100-2405`, zadanie 4 „Liczby”, łącznie 10 punktów.  \n**Oryginalny arkusz:** [arkusz-2024.pdf](arkusz-2024.pdf)\n\nPoniżej przepisano treść zadania maturalnego. Zachowano polecenia i przykłady, zmieniając jedynie układ typograficzny. Pominięto puste pola odpowiedzi, punktację na marginesie oraz nagłówki i stopki stron."
    },
    {
     "id": "s005",
     "title": "Zadanie 4. Liczby",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie 4. Liczby\n\n### Zadanie 4. Liczby\n\nPlik `liczby.txt` składa się z dwóch wierszy:\n\n- pierwszy wiersz pliku zawiera 3000 liczb pierwszych z przedziału [2, 2000],\n- drugi wiersz pliku zawiera 20 liczb całkowitych z przedziału [2, 1 000 000 000].\n\nLiczby w wierszach są rozdzielone znakami spacji.\n\nNapisz program (lub kilka programów), który(-e) znajdzie(-ą) odpowiedzi do podanych zadań. Każdą odpowiedź zapisz w pliku `wyniki4.txt` i poprzedź ją numerem oznaczającym zadanie.\n\nDo Twojej dyspozycji jest plik `liczby_przyklad.txt`, który zawiera 200 liczb w pierwszym wierszu (są to wyłącznie liczby 2, 3, 5, 7 i 31) oraz 20 liczb w drugim wierszu. Odpowiedzi dla danych z tego pliku są umieszczone pod każdym zadaniem.\n\nPamiętaj, że Twój program musi ostatecznie zadziałać na pliku `liczby.txt` z 3000 liczb w pierwszym wierszu."
    },
    {
     "id": "s006",
     "title": "Zadanie 4.1. (0–2)",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie 4.1. (0–2)\n\n### Zadanie 4.1. (0–2)\n\nPodaj, ile liczb z pierwszego wiersza jest dzielnikiem jakiejkolwiek liczby spośród liczb z drugiego wiersza.\n\nDla pliku `liczby_przyklad.txt` odpowiedzią jest 199 (tylko liczba 31, która występuje raz, nie jest dzielnikiem żadnej z liczb w drugim wierszu)."
    },
    {
     "id": "s007",
     "title": "Zadanie 4.2. (0–2)",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie 4.2. (0–2)\n\n### Zadanie 4.2. (0–2)\n\nSpośród liczb z pierwszego wiersza podaj liczbę, która jest sto pierwszą liczbą w kolejności, licząc od największej po ich uporządkowaniu.\n\nPrzykład: wśród liczb 2, 4, 2, 3, 3, 4 drugą w kolejności, licząc od największej, jest liczba 4.\n\nDla pliku `liczby_przyklad.txt` odpowiedzią jest 5."
    },
    {
     "id": "s008",
     "title": "Zadanie 4.3. (0–3)",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie 4.3. (0–3)\n\n### Zadanie 4.3. (0–3)\n\nDla każdej z liczb z drugiego wiersza rozstrzygnij, czy da się ją przedstawić jako iloczyn jedynie liczb z pierwszego wiersza. Przy tym liczba wystąpień danego czynnika w iloczynie nie może być większa niż liczba wystąpień tego czynnika w pierwszym wierszu.\n\nZnajdź wszystkie liczby, które da się tak przedstawić, i je wypisz.\n\nDla pliku `liczby_przyklad.txt` odpowiedzią są liczby:\n\n```text\n10 12 14 15 18 20 21 25 27 28\n```\n\n(liczbę 16 można przedstawić jako iloczyn 2∙2∙2∙2, jednak w pierwszym wierszu liczba 2 występuje tylko dwa razy, więc 16 nie należy do rozwiązania. Podobnie jest z liczbą 24, którą można przedstawić jako iloczyn 2∙2∙2∙3)."
    },
    {
     "id": "s009",
     "title": "Zadanie 4.4. (0–3)",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie 4.4. (0–3)\n\n### Zadanie 4.4. (0–3)\n\nZnajdź w ciągu liczb z pierwszego wiersza spójny fragment, który zawiera co najmniej 50 elementów i którego średnia arytmetyczna jest największa.\n\nJeżeli jest więcej niż jeden taki fragment, wybierz ten, który występuje jako pierwszy w pliku `liczby.txt`.\n\nW odpowiedzi wypisz:\n\n- znalezioną najwyższą średnią,\n- liczbę elementów ciągu z tą najwyższą średnią,\n- liczbę, która jest pierwszym elementem tego ciągu.\n\nDla pliku `liczby_przyklad.txt` odpowiedzią jest:\n\n```text\n5,52 50 5\n```\n\n(największa średnia to 5,52 dla 50 liczb zaczynających się od liczby 5).\n\nDo oceny oddajesz:\n\n- plik `wyniki4.txt` – zawierający odpowiedzi do zadań 4.1.–4.4. (odpowiedź do każdego zadania powinna być poprzedzona jego numerem)\n- pliki zawierające kody źródłowe Twojego(-ich) programu(-ów) o nazwach (uwaga: brak tych plików jest równoznaczny z brakiem rozwiązania zadania):"
    },
    {
     "id": "s010",
     "title": "Jedno wejście, różne interpretacje",
     "kind": "theory",
     "context": "",
     "markdown": "## Jedno wejście, różne interpretacje\n\nPierwszy wiersz służy jako lista wystąpień dzielników, lista do rankingu, zapas czynników i uporządkowany ciąg. W różnych podpunktach inne własności są ważne. Odczytaj dane raz i nie zmieniaj pierwszej listy przez sortowanie w miejscu.\n\nNie zakładaj 3000 elementów podczas odczytu przykładu: w nim jest 200 liczb. Sprawdź rozmiary po odczycie. Algorytmy powinny korzystać z długości listy.\n\n```python\nlista = [5, 2, 3, 2]\nranking = sorted(lista, reverse=True)\nprint(lista, ranking)\n```"
    },
    {
     "id": "s011",
     "title": "Zadanie 1: Odczyt i kontrola przykładów",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 1: Odczyt i kontrola przykładów\n\n**Dane:** Plik `liczby_przyklad.txt` z zadania 4 matury 2024. Pierwszy wiersz zawiera czynniki, drugi liczby do zbadania.\n\n**Do wykonania:** Napisz funkcję `wczytaj(nazwa)` samodzielnie odczytującą oba wiersze do dwóch list liczb całkowitych. Zachowaj kolejność i powtórzenia.\n\n**Wynik:** Zwróć dwie listy i zapisz je w zmiennych `pa` (pierwszy wiersz) oraz `pb` (drugi wiersz). Wyświetl ich długości: odpowiednio 200 i 20 elementów. Na tym etapie nie sortuj liczb i nie usuwaj powtórzeń.\n\n**Przykład wyjaśniający:** Dwa wiersze `2 3 3` i `6 9` powinny dać dwie listy: `[2, 3, 3]` oraz `[6, 9]`. Obie trójki pozostają w pierwszej liście. Każdy wiersz jest osobnym zestawem danych, mimo że liczby w obu zapisano w tym samym formacie."
    },
    {
     "id": "s012",
     "title": "Zadanie 2: 4.1: wystąpienia dzielników",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: 4.1: wystąpienia dzielników\n\n**Dane:** Listy `a` i `b` z pierwszego i drugiego wiersza pliku. Obowiązuje zadanie 4.1 CKE.\n\n**Do wykonania:** Napisz funkcję `z41(a, b)` zliczającą wystąpienia liczb z `a`, które dzielą przynajmniej jedną liczbę z `b`. Jedno wystąpienie z `a` może zwiększyć wynik najwyżej o 1.\n\n**Wynik:** Zwróć jedną liczbę: ile elementów listy `a` spełnia warunek podzielności. Nie zwracaj liczby trafień w `b`. Wyświetl odpowiedź dla `pa`, `pb` i porównaj z przykładem w oryginalnej treści zadania.\n\n**Przykład wyjaśniający:** Dla `a = [2, 2, 7]` i `b = [6, 10]` odpowiedź wynosi 2. Obie dwójki liczą się osobno, ale każda tylko raz, choć dzieli i 6, i 10. Siódemka nie dzieli żadnej z tych liczb."
    },
    {
     "id": "s013",
     "title": "Dokładne odczytanie kwantyfikatorów",
     "kind": "theory",
     "context": "",
     "markdown": "## Dokładne odczytanie kwantyfikatorów\n\nW 4.1 pytanie brzmi, ile wystąpień z pierwszego wiersza dzieli jakąkolwiek liczbę z drugiego. W 4.3 sprawdzamy, czy wystąpienia czynników wystarczą dla każdego kandydata osobno.\n\nW 4.2 sto pierwsza pozycja ma indeks 100. Dla 4.4 nie używaj posortowanej kopii: spójność dotyczy oryginalnego pliku.\n\n```python\na = [2, 2, 3]\nb = [12, 18]\nprint(sum(any(n % p == 0 for n in b) for p in a))\nprint(sorted(a, reverse=True)[0])\n```"
    },
    {
     "id": "s014",
     "title": "Zadanie 3: 4.2: sto pierwsza",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 3: 4.2: sto pierwsza\n\n**Dane:** Lista `a` z pierwszego wiersza pliku, zawierająca co najmniej 101 liczb.\n\n**Do wykonania:** Napisz funkcję `z42(a)` znajdującą sto pierwszą liczbę w porządku od największej do najmniejszej. Powtórzenia zajmują oddzielne pozycje. Nie zmieniaj oryginalnej listy.\n\n**Wynik:** Zwróć wartość znajdującą się na 101. miejscu, licząc miejsca od 1. Nie zwracaj indeksu ani całej posortowanej listy. Wyświetl wynik dla `pa`. Lista `pa` po wywołaniu ma nadal mieć pierwotną kolejność, potrzebną w zadaniu o fragmentach.\n\n**Przykład wyjaśniający:** W krótkiej liście `[7, 2, 7, 5]` ranking malejący to 7, 7, 5, 2. Trzecia pozycja to 5, a nie trzecia różna wartość 2. W zadaniu stosujesz te same reguły, lecz wybierasz pozycję 101 w znacznie dłuższej liście."
    },
    {
     "id": "s015",
     "title": "Zadanie 4: 4.3: ograniczona liczność",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: 4.3: ograniczona liczność\n\n**Dane:** Lista czynników pierwszych `a` i lista kandydatów `b`, zgodnie z zadaniem 4.3 CKE.\n\n**Do wykonania:** Napisz funkcję `z43(a, b)` wybierającą liczby z `b`, które da się otrzymać jako iloczyn czynników z `a`. Każde wystąpienie czynnika wolno wykorzystać najwyżej raz dla jednego kandydata. Następny kandydat ma ponownie cały zapas.\n\n**Wynik:** Zwróć wybrane liczby z `b`, zachowując ich kolejność i powtórzenia. Nie zwracaj ich rozkładów na czynniki. Wyświetl odpowiedź dla danych przykładowych i porównaj ją z treścią CKE.\n\n**Przykład wyjaśniający:** Dla zapasu `a = [2, 3, 3]` i kandydatów `b = [6, 18, 12, 6]` wynik to `[6, 18, 6]`. Do 12 brakuje drugiej dwójki. Ocenianie 6 nie zużywa zapasu przeznaczonego do oceny 18 ani drugiego wystąpienia 6."
    },
    {
     "id": "s016",
     "title": "Zadanie 5: 4.4: prefiksy i wszystkie granice",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: 4.4: prefiksy i wszystkie granice\n\n**Dane:** Oryginalna, nieposortowana lista `a` oraz minimalna długość `k`, domyślnie 50; `1 <= k <= len(a)`.\n\n**Do wykonania:** Napisz funkcję `z44(a, k=50)` wybierającą spójny fragment o największej średniej i długości co najmniej `k`. Wykorzystaj prefiksy. Porównuj średnie dokładnie. Przy remisie wybierz wcześniejszy początek, a następnie krótszą długość.\n\n**Wynik:** Zwróć krotkę `(suma_fragmentu, dlugosc, indeks_poczatku_od_0)` opisującą wybrany fragment kolejnych liczb. Wyświetl ją dla `pa`. Nie wybieraj dowolnych największych liczb z całej listy. Indeks służy programowi do odnalezienia fragmentu; arkusz w odpowiedzi wymaga wartości jego pierwszego elementu.\n\n**Przykład wyjaśniający:** Dla `[0, 8, 8, 0]` i `k = 2` najlepszy fragment to `[8, 8]`. Funkcja zwraca `(16, 2, 1)`: sumę 16, długość 2 i indeks początku 1. Pierwszą liczbą fragmentu jest 8, nie 1 — rozróżnij te informacje przy przygotowaniu odpowiedzi maturalnej."
    },
    {
     "id": "s017",
     "title": "Cały proces i precyzja wyniku",
     "kind": "theory",
     "context": "",
     "markdown": "## Cały proces i precyzja wyniku\n\nŚrednie porównujemy przez iloczyny liczb całkowitych. Dopiero końcowy iloraz formatujemy do zapisu dziesiętnego. Zachowaj także dokładną sumę i długość; weryfikacja nie musi opierać się na zaokrągleniu.\n\nArkusz nie nakazuje w 4.4 dwóch miejsc po przecinku. Dla pełnych danych prezentujemy 10 miejsc oraz zapamiętujemy dokładną sumę i długość w kodzie. Każdą odpowiedź w wyniki4.txt poprzedź numerem podpunktu.\n\n```python\nsuma, dlugosc = 276, 50\nprint(f\"{suma / dlugosc:.10f}\".rstrip(\"0\").rstrip(\".\"))\n```"
    },
    {
     "id": "s018",
     "title": "Zadanie 6: Zintegrowane rozwiązanie",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Zintegrowane rozwiązanie\n\n**Dane:** Dwie listy odczytane z jednego pliku zadania 4.\n\n**Do wykonania:** Napisz funkcję `rozwiaz(a, b)`, która zwraca komplet czterech odpowiedzi, korzystając z Twoich wcześniejszych funkcji. Nie zmieniaj danych między podpunktami.\n\n**Wynik:** Zwróć słownik z czterema wpisami: `\"4.1\"` — liczba pasujących wystąpień, `\"4.2\"` — wartość na 101. miejscu, `\"4.3\"` — lista możliwych iloczynów, `\"4.4\"` — krotka `(suma, dlugosc, pierwsza_liczba_fragmentu)`. Wyświetl podpisane odpowiedzi dla przykładu.\n\n**Przykład wyjaśniający:** Jeśli pomocnicza funkcja `z44` wskazała fragment `[8, 8]` zaczynający się pod indeksem 1, jej opis to `(16, 2, 1)`. W raporcie 4.4 ma się jednak znaleźć `(16, 2, 8)`: ostatnia liczba to wartość pierwszego elementu fragmentu, nie jego indeks."
    },
    {
     "id": "s019",
     "title": "Zadanie 7: Przejście do pełnego pliku",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Przejście do pełnego pliku\n\n**Dane:** Pełny plik `liczby.txt`: 3000 liczb w pierwszym wierszu i 20 w drugim.\n\n**Do wykonania:** Przygotuj samodzielny odczyt pełnych danych i oblicz odpowiedzi do wszystkich podpunktów. Korzystaj z danych pliku, nie z wartości przykładowych.\n\n**Wynik:** Zapisz komplet czterech wyników w słowniku `odp`, w formacie z zadania 6. Wyświetl odpowiedzi z numerami podpunktów. Dla 4.4 pokaż dokładną sumę i długość wybranego fragmentu — dzięki nim będzie można później przedstawić jego średnią.\n\n**Przykład wyjaśniający:** Jeśli fragment miałby sumę 25 i długość 3, jego średnia to dokładnie 25/3. W danych roboczych zachowaj 25 i 3, a nie wyłącznie zaokrąglone 8,33. Właściwy fragment i pozostałe odpowiedzi muszą wynikać z pełnego pliku `liczby.txt`."
    },
    {
     "id": "s020",
     "title": "Zadanie 8: wyniki4.txt",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: wyniki4.txt\n\n**Dane:** Komplet odpowiedzi `odp` dla pełnych danych.\n\n**Do wykonania:** Przygotuj zapis pliku `wyniki4.txt` w folderze lekcji. Każdy z czterech wierszy rozpocznij numerem podpunktu. W 4.3 rozdziel wybrane liczby spacjami.\n\n**Wynik:** Wiersze 4.1 i 4.2 mają zawierać po jednej odpowiedzi liczbowej, a 4.3 listę wybranych liczb. W 4.4 zapisz średnią z 10 cyframi po kropce, długość i pierwszą liczbę fragmentu. Odczytaj zapisany plik do `odczyt` i wyświetl jego zawartość.\n\n**Przykład wyjaśniający:** Gdyby średnia wynosiła 8, długość fragmentu 2, a jego pierwsza liczba 8, ostatni wiersz miałby postać `4.4. 8.0000000000 2 8`. Nie wpisuj w tym miejscu sumy fragmentu ani indeksu jego początku. To przykład formatu, nie odpowiedź do pełnych danych."
    },
    {
     "id": "s021",
     "title": "Podsumowanie",
     "kind": "theory",
     "context": "",
     "markdown": "## Podsumowanie\n\nWyjaśnij jedno własne rozwiązanie i wskaż ważny przypadek brzegowy. W zadaniu plikowym pokaż kod od otwarcia pliku do zapisania odpowiedzi."
    },
    {
     "id": "s022",
     "title": "3. Zadania do samodzielnego wykonania",
     "kind": "homework",
     "context": "",
     "markdown": "## 3. Zadania do samodzielnego wykonania\n\nWykonaj zadania 9–10 przed następnym spotkaniem i zapisz własne rozwiązania."
    },
    {
     "id": "s023",
     "title": "Zadanie 9: położenie najlepszego fragmentu",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 9: położenie najlepszego fragmentu\n\n**Dane:** Listy `[10, 10, 0, 0]`, `[0, 0, 10, 10]`, `[5, 5, 5]` i minimalna długość 2.\n\n**Do wykonania:** Użyj własnej `z44` do wskazania najlepszego fragmentu każdej listy. Zwróć uwagę na fragment zaczynający się na początku, kończący na końcu i przypadek równych średnich.\n\n**Wynik:** Dla każdej listy wyświetl elementy wybranego fragmentu, jego sumę, długość i indeks początku. Zastosuj reguły z zadania 5: wcześniejszy początek, a potem krótszy fragment. Uzasadnij wybór w przypadku równych średnich.\n\n**Przykład wyjaśniający:** Dla dodatkowej listy `[7, 7, 7, 7]` każdy fragment ma taką samą średnią. Przy minimalnej długości 2 wybieramy pierwsze dwie siódemki, nie całą listę i nie ostatnią parę. Suma to 14, długość 2, indeks początku 0."
    },
    {
     "id": "s024",
     "title": "Zadanie 10: dokładny zapis średniej",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 10: dokładny zapis średniej\n\n**Dane:** Dokładna suma i długość fragmentu wybranego dla pełnych danych zadania 4.4.\n\n**Do wykonania:** Przedstaw tę samą średnią za pomocą `Fraction` z modułu `fractions` oraz w zapisie dziesiętnym z 10 cyframi po kropce.\n\n**Wynik:** W `srednia_dokladna` zapisz ułamek utworzony z całkowitej sumy i długości. Wyświetl go oraz zapis dziesiętny tej samej średniej. Wyjaśnij, dlaczego dziesięć cyfr po kropce nie zawsze pozwala zapisać wartość dokładnie.\n\n**Przykład wyjaśniający:** Jeśli suma wynosi 10, a długość 3, dokładny wynik to 10/3. Zapis `3.3333333333` jest tylko przybliżeniem tego ułamka. Nie twórz dokładnego ułamka z wcześniej zaokrąglonej liczby — potrzebne są pierwotna suma i długość."
    }
   ]
  },
  {
   "number": 9,
   "kind": "lesson",
   "title": "Zapis pozycyjny, palindromy i siatki znaków",
   "sourceFile": "09_napisy_system_trojkowy_i_siatki/karta_pracy.ipynb",
   "notebook": "lekcje/09_napisy_system_trojkowy_i_siatki/karta_pracy.ipynb",
   "download": "pobierz/09_napisy_system_trojkowy_i_siatki.zip",
   "assetBase": "lekcje/09_napisy_system_trojkowy_i_siatki/",
   "checksum": "02b432880ac3e8be28e7a2dc5cb78c5b2fe1281c9d00ac38d78fb8016787943c",
   "sections": [
    {
     "id": "intro",
     "title": "Cel i sposób pracy",
     "kind": "intro",
     "context": "",
     "markdown": "# Karta pracy 09. Zapis pozycyjny, palindromy i siatki znaków\n\n**Kurs:** Python — programowanie do matury rozszerzonej z informatyki\n\n**Prowadzący:** por. Jakub GRĄTKIEWICZ · jakub.gratkiewicz@wat.edu.pl\n\n**Cel:** Przygotowanie każdego algorytmu do zadania 2 matury 2025.\n\nZnasz podstawy Pythona. Przypominamy potrzebne narzędzia i stosujemy je w coraz bardziej złożonych zadaniach.\n\nOtwórz ten notatnik w folderze bieżącej lekcji. W zadaniu plikowym samodzielnie napisz otwarcie pliku, odczyt, konwersję, obliczenia i zapis odpowiedzi. Nie ma wspólnej komórki wczytującej dane ani gotowych list z plików zadaniowych.\n\nZadania 1–10 wykonujemy na lekcji, zadania 11–12 samodzielnie. Niedokończone zadania uzupełnij przed następnym spotkaniem.\n\nW pustych komórkach roboczych wpisz własny kod. Wyświetl wyniki obliczeń i przygotuj się do wyjaśnienia swojego rozwiązania.\n\nPrzed oddaniem zrestartuj jądro, uruchom własne komórki od początku i zapisz notatnik oraz wymagane pliki wynikowe."
    },
    {
     "id": "s001",
     "title": "Katalog lekcji i dane",
     "kind": "organization",
     "context": "",
     "markdown": "## Katalog lekcji i dane\n\nPliki wejściowe w katalogu tej lekcji:\n\n- symbole-trening.txt\n\nPrzeczytaj format w poleceniu. Pliki otwierasz we własnym kodzie; nie przepisuj ich zawartości do programu. Nazwy wyników są podane w zadaniach. Zapisuj wyniki obok notatnika i nie nadpisuj danych wejściowych."
    },
    {
     "id": "s002",
     "title": "1. Przypomnienie",
     "kind": "recall",
     "context": "",
     "markdown": "## 1. Przypomnienie\n\n1. Dlaczego '*' w danych jest znakiem, a w kodzie może być operatorem?\n2. Co daje Horner dla cyfr 1,0,2 w podstawie 3?\n3. Jakie indeksy opisują środkowe pole bloku 3×3?\n\nTo pytania do wspólnego powtórzenia, nie zestaw kartkówki.\n\n```python\n# Własne odpowiedzi:\n# 1.\n# 2.\n# 3.\n```"
    },
    {
     "id": "s003",
     "title": "2. Treść dydaktyczna i zadania na lekcji",
     "kind": "theory",
     "context": "",
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nKażde polecenie określa dane, problem do rozwiązania i wymagany wynik. Przykład wyjaśniający pokazuje, jak rozumieć wymagania i format odpowiedzi. W zadaniu plikowym oblicz właściwy wynik z podanego pliku, nie z małego przykładu w opisie. Samodzielnie zaplanuj sposób rozwiązania i napisz kod. Funkcja ma zwracać wynik; wyświetl go w miejscu jej wywołania, jeśli wymaga tego polecenie. W zadaniach plikowych sam napisz także otwarcie, odczyt i zapis pliku. Przygotuj się do wyjaśnienia swoich decyzji."
    },
    {
     "id": "s004",
     "title": "Znaczenie symbolu i porównywanie napisów",
     "kind": "theory",
     "context": "",
     "markdown": "## Znaczenie symbolu i porównywanie napisów\n\nAlfabet danych o,+,* koduje wartości 0,1,2. Słownik {'o':0,'+':1,'*':2} oddziela wygląd znaku od jego wartości. Pojedynczy znak jest w Pythonie napisem długości 1.\n\nPorównanie napisów działa według porządku znaków, który nie musi odpowiadać wartości liczby. Największy napis przez max(napisy) nie musi oznaczać największej zakodowanej liczby. Palindrom z kolei zależy wyłącznie od symetrii znaków, a nie od wartości liczbowej.\n\n```python\ncyfra = {\"o\": 0, \"+\": 1, \"*\": 2}\nprint([cyfra[c] for c in \"+o*\"])\nprint(max([\"o\", \"*\"]))  # to nie maksimum wartości 0 i 2\nprint(\"o\" > \"*\")\n```"
    },
    {
     "id": "s005",
     "title": "Zadanie 1: Mapowanie symboli",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 1: Mapowanie symboli\n\n**Dane:** Napis z symboli `o`, `+`, `*`, oznaczających odpowiednio cyfry 0, 1, 2.\n\n**Do wykonania:** Napisz funkcję `cyfry(s)` zastępującą każdy symbol jego wartością liczbową. Zachowaj długość i kolejność zapisu.\n\n**Wynik:** Zwróć listę wartości 0, 1, 2, po jednej liczbie na każdy symbol wejścia. Na tym etapie nie obliczaj jeszcze wartości całej liczby w systemie trójkowym. Wyświetl wynik dla `\"+o*+\"`.\n\n**Przykład wyjaśniający:** Napis `\"*o+\"` daje listę `[2, 0, 1]`. Symbol `\"o\"` jest literą, którą w naszym zapisie umownie odczytujemy jako cyfrę zero. Wynikiem nie jest napis `\"201\"` ani liczba dziesiętna 201."
    },
    {
     "id": "s006",
     "title": "Zadanie 2: Palindrom i ostatni znak",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: Palindrom i ostatni znak\n\n**Dane:** Napis z symboli `o`, `+`, `*`.\n\n**Do wykonania:** Napisz funkcję `palindrom(s)` rozstrzygającą, czy napis jest palindromem. Wykorzystaj indeksowanie, bez tworzenia odwróconego napisu. Pusty i jednoznakowy napis uznaj za palindromy.\n\n**Wynik:** Zwróć `True`, gdy symbole odczytane od lewej i od prawej tworzą identyczny napis, albo `False`, gdy tak nie jest. Zaprezentuj wyniki dla `\"o++o\"`, `\"o++*\"` i `\"o\"`. Nie przeliczaj symboli na liczbę.\n\n**Przykład wyjaśniający:** `\"*o*\"` jest palindromem, a `\"*o+\"` nie, bo pierwszy i ostatni symbol się różnią. Badamy cały napis, włącznie z początkowymi symbolami `o`. Ich usunięcie mogłoby zmienić odpowiedź."
    },
    {
     "id": "s007",
     "title": "Systemy pozycyjne w obie strony",
     "kind": "theory",
     "context": "",
     "markdown": "## Systemy pozycyjne w obie strony\n\nPrzy odczycie od lewej stosuj wynik = wynik*3 + cyfra. Przy zapisie liczby bierz reszty z dzielenia przez 3, zamieniaj na symbole i odwróć kolejność. Dla zera wynikiem jest o.\n\nZera wiodące nie zmieniają wartości. Przekształcenie napis→liczba→napis usuwa zera wiodące, więc nie musi odtwarzać oryginalnego napisu. Natomiast liczba→napis→liczba zawsze powinna odtwarzać nieujemną liczbę. Suma 2000 wartości może potrzebować więcej niż 12 znaków.\n\n```python\nwynik = 0\nfor c in \"+o*\":\n    wynik = wynik * 3 + {\"o\": 0, \"+\": 1, \"*\": 2}[c]\nprint(\"Wartość zapisu +o*:\", wynik)\nprint(\"Maksimum dla 12 cyfr:\", 3**12 - 1)\n```"
    },
    {
     "id": "s008",
     "title": "Zadanie 3: Zapis symboliczny na liczbę",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 3: Zapis symboliczny na liczbę\n\n**Dane:** Zapis liczby w systemie trójkowym, w którym `o = 0`, `+ = 1`, `* = 2`. Dopuszczamy zera wiodące.\n\n**Do wykonania:** Napisz funkcję `dekoduj(s)` obliczającą wartość zapisu metodą Hornera. Uwzględnij wszystkie symbole.\n\n**Wynik:** Zwróć wartość liczby jako `int` w zwykłej reprezentacji Pythona. Początkowe symbole `o` to zera wiodące, które nie zwiększają wartości. Wyświetl wyniki dla `\"+o*\"` i `\"oo+o*\"` i porównaj je.\n\n**Przykład wyjaśniający:** Napis `\"*+o\"` odpowiada cyfrom 210 w systemie trójkowym. Jego wartość wynosi `2·9 + 1·3 + 0 = 21`. Wynik funkcji to 21, a nie 210 ani suma wartości symboli 3."
    },
    {
     "id": "s009",
     "title": "Zadanie 4: Liczba na zapis symboliczny",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: Liczba na zapis symboliczny\n\n**Dane:** Nieujemna liczba całkowita `n` oraz symbole cyfr trójkowych: `o`, `+`, `*`.\n\n**Do wykonania:** Napisz funkcję `koduj(n)` tworzącą zapis symboliczny bez zer wiodących. Zero zapisujemy jako pojedyncze `\"o\"`. Nie ograniczaj długości wyniku.\n\n**Wynik:** Zwróć napis złożony wyłącznie z symboli `o`, `+`, `*`, który przedstawia wartość `n` w systemie trójkowym. Wyświetl zapisy liczb 0, 5, 26, 100 i ręcznie odczytaj wartość jednego z otrzymanych napisów.\n\n**Przykład wyjaśniający:** Liczba dziesiętna 7 ma zapis trójkowy 21, więc jej zapis symboliczny to `\"*+\"`. Nie zwracaj `\"21\"`, bo wymagamy symboli. Nie dopisuj `o` z lewej: `\"o*+\"` przedstawiałoby tę samą wartość, ale nie najkrótszy zapis."
    },
    {
     "id": "s010",
     "title": "Zadanie 5: Maksimum z właściwym kluczem",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: Maksimum z właściwym kluczem\n\n**Dane:** Niepusta lista zapisów symbolicznych liczb. Napisy mogą mieć różne długości i zera wiodące.\n\n**Do wykonania:** Napisz funkcję `najwiekszy(napisy)` wybierającą zapis o największej wartości liczbowej. Przy równości wartości wybierz pierwszy zapis z listy i zachowaj jego oryginalną postać.\n\n**Wynik:** Zwróć parę `(wartosc, oryginalny_napis)`: największą wartość dziesiętną i dokładny napis, który ją przedstawiał. Nie usuwaj z wybranego napisu zer wiodących. Dobierz przykład pokazujący różnicę między porządkiem tekstów a wartości liczb.\n\n**Przykład wyjaśniający:** W liście `[\"*\", \"+o\", \"o+o\"]` wartości to odpowiednio 2, 3 i 3. Wynik to `(3, \"+o\")`, bo pierwszy zapis wartości 3 pojawia się na drugim miejscu. Najdłuższy napis nie musi być odpowiedzią."
    },
    {
     "id": "s011",
     "title": "Zadanie 6: Licznik na obcej planecie",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Licznik na obcej planecie\n\n**Dane:** Początkowy zapis symboliczny `start` i nieujemna liczba stanów `ile`. Symbole `o`, `+`, `*` oznaczają cyfry trójkowe.\n\n**Do wykonania:** Napisz funkcję `licznik_planety(start, ile)` opisującą licznik zwiększający wartość o 1. Pierwszy stan ma odpowiadać wartości `start`. Każdy wynik zapisuj bez zer wiodących. Możesz użyć własnych funkcji kodowania.\n\n**Wynik:** Zwróć listę dokładnie `ile` kolejnych stanów licznika, uwzględniając stan początkowy. Każdy stan jest zapisem liczby większej o 1 od poprzedniej. Dla `ile = 0` zwróć `[]`. Wyświetl cztery stany od `\"**\"`.\n\n**Przykład wyjaśniający:** Dla `start = \"+*\"` i `ile = 3` otrzymujemy `[\"+*\", \"*o\", \"*+\"]`, czyli wartości 5, 6 i 7. Nie wykonujemy trzech zwiększeń po wypisaniu początku — lista ma zawierać trzy stany łącznie."
    },
    {
     "id": "s012",
     "title": "Siatka: indeksy i nakładające się okna",
     "kind": "theory",
     "context": "",
     "markdown": "## Siatka: indeksy i nakładające się okna\n\nLista napisów opisuje prostokątną tablicę: wiersze[r][c] to znak w wierszu r i kolumnie c. Dla wysokości h i szerokości w lewe górne rogi bloków 3×3 mają r w range(h-2), c w range(w-2).\n\nBloki mogą się nakładać i każdy należy policzyć. Dla rogu (r,c) środek ma indeksy (r+1,c+1), czyli numerację od 1 równą (r+2,c+2). Najpierw sprawdź wszystkie dziewięć znaków, dopiero potem dopisz środek.\n\n```python\nwiersze = [\"oooo\", \"oooo\", \"oooo\"]\nprint(wiersze[1][2])\nprint(\"Liczba możliwych bloków:\", (len(wiersze)-2)*(len(wiersze[0])-2))\n```"
    },
    {
     "id": "s013",
     "title": "Zadanie 7: Jeden blok 3×3",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Jeden blok 3×3\n\n**Dane:** Prostokątna siatka zapisana jako lista jednakowo długich napisów oraz indeksy `r`, `c` lewego górnego pola bloku 3×3. Blok mieści się w siatce.\n\n**Do wykonania:** Napisz funkcję `jednolity(wiersze, r, c)` rozstrzygającą, czy wszystkie dziewięć pól bloku zawiera ten sam symbol. Indeksy argumentów liczymy od 0.\n\n**Wynik:** Zwróć `True`, jeśli wszystkie dziewięć znaków wskazanego bloku jest identycznych, albo `False`, jeśli choć jeden się różni. Badamy tylko blok zaczynający się w `(r, c)`, nie całą siatkę. Przygotuj dwa własne przykłady.\n\n**Przykład wyjaśniający:** Dla wierszy `[\"ooo+\", \"ooo*\", \"ooo+\"]` blok o lewym górnym rogu `(0, 0)` jest jednolity: obejmuje trzy pierwsze znaki każdego wiersza. Różne znaki w ostatniej kolumnie nie należą do tego bloku i nie zmieniają odpowiedzi."
    },
    {
     "id": "s014",
     "title": "Zadanie 8: Wszystkie środki",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: Wszystkie środki\n\n**Dane:** Prostokątna siatka symboli zapisana jako lista napisów.\n\n**Do wykonania:** Napisz funkcję `kwadraty(wiersze)` wyszukującą wszystkie jednolite bloki 3×3. Nakładające się bloki są osobnymi wynikami. Pusta lub zbyt mała siatka daje pustą listę.\n\n**Wynik:** Zwróć listę współrzędnych środkowych pól znalezionych bloków: `(numer_wiersza, numer_kolumny)`, licząc oba numery od 1. Uporządkuj ją od góry do dołu, a w jednym wierszu od lewej do prawej. Wyświetl wynik dla trzech wierszy `\"oooo\"`.\n\n**Przykład wyjaśniający:** W planszy z trzech wierszy `\"+++++\"` mieszczą się trzy jednolite bloki 3×3. Ich środki to `(2, 2)`, `(2, 3)`, `(2, 4)`. Bloki częściowo się pokrywają, ale każdy ma inny środek i jest osobnym wynikiem."
    },
    {
     "id": "s015",
     "title": "Zadanie 9: Małe zadanie łączące",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 9: Małe zadanie łączące\n\n**Dane:** Plik `symbole-trening.txt`. Wiersze są jednocześnie zapisami liczb i wierszami prostokątnej siatki.\n\n**Do wykonania:** Samodzielnie odczytaj napisy i przygotuj raport obejmujący: listę palindromów, środki jednolitych bloków 3×3, największą liczbę i sumę wszystkich liczb. Zachowaj powtórzenia danych.\n\n**Wynik:** Zapisz słownik `raport`: `palindromy` to lista pasujących napisów, `kwadraty` to lista środków, `maksimum` to para `(wartosc, oryginalny_napis)`, a `suma` to para `(wartosc_sumy, jej_zapis_symboliczny)`. Zapisz te cztery podpisane części w `wyniki-trening.txt`.\n\n**Przykład wyjaśniający:** Te same wiersze interpretujemy na dwa sposoby: jako osobne liczby oraz razem jako planszę. Dla wierszy `[\"+++\", \"+++\", \"+++\"]` każda liczba wynosi 13, więc suma to 39, a na planszy jest jeden blok o środku `(2, 2)`. Powtórzone wiersze nadal liczą się do sumy."
    },
    {
     "id": "s016",
     "title": "Zadanie 10: Obrócona mapa pikselowa",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 10: Obrócona mapa pikselowa\n\n**Dane:** Prostokątna mapa z symboli `o`, `+`, `*`, np. `[\"oo+\", \"*+o\"]`. W niepustej mapie wszystkie wiersze mają tę samą dodatnią długość.\n\n**Do wykonania:** Napisz funkcję `obroc_mape(wiersze)` obracającą mapę o 90 stopni zgodnie z ruchem wskazówek zegara. Nie zmieniaj mapy wejściowej.\n\n**Wynik:** Zwróć nową listę napisów opisującą obróconą mapę. Jeśli oryginał ma 2 wiersze i 3 kolumny, wynik ma mieć 3 wiersze i 2 kolumny. Dla pustej listy zwróć `[]`. Wyświetl wynik wierszami i porównaj ze szkicem.\n\n**Przykład wyjaśniający:** Dla mapy `[\"o+\", \"**\"]` obrót zgodnie z ruchem zegara daje `[\"*o\", \"*+\"]`. Symbol z lewego górnego rogu trafia do prawego górnego. Nie chodzi o odbicie lustrzane ani o samo odwrócenie kolejności wierszy."
    },
    {
     "id": "s017",
     "title": "Podsumowanie",
     "kind": "theory",
     "context": "",
     "markdown": "## Podsumowanie\n\nWyjaśnij jedno własne rozwiązanie i wskaż ważny przypadek brzegowy. W zadaniu plikowym pokaż kod od otwarcia pliku do zapisania odpowiedzi."
    },
    {
     "id": "s018",
     "title": "3. Zadania do samodzielnego wykonania",
     "kind": "homework",
     "context": "",
     "markdown": "## 3. Zadania do samodzielnego wykonania\n\nWykonaj zadania 11–12 przed następnym spotkaniem i zapisz własne rozwiązania."
    },
    {
     "id": "s019",
     "title": "Zadanie 11: inne systemy",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 11: inne systemy\n\n**Dane:** Niepusty napis z alfabetu `0123456789ABCDEF` oraz podstawa `2 <= p <= 16`.\n\n**Do wykonania:** Napisz funkcję `wartosc(s, p)` wyznaczającą wartość zapisu metodą Hornera, bez `int(s, p)`. Jeśli wartość którejkolwiek cyfry nie jest dozwolona w danej podstawie, zwróć `None`.\n\n**Wynik:** Zwróć wartość jako liczbę całkowitą lub `None`, jeśli zapis zawiera cyfrę niemożliwą w danej podstawie. Litery A–F oznaczają wartości 10–15. Wyświetl wyniki dla `\"1011\"` w podstawie 2, `\"FF\"` w 16, `\"17\"` w 8 oraz `\"19\"` w 8.\n\n**Przykład wyjaśniający:** Napis `\"12\"` przy podstawie 3 oznacza wartość 5, ale przy podstawie 2 jest niepoprawny, ponieważ system dwójkowy nie ma cyfry 2. Sam fakt, że znak należy do ogólnego alfabetu cyfr, nie oznacza, że wolno go użyć w każdej podstawie."
    },
    {
     "id": "s020",
     "title": "Zadanie 12: zero wiodące",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 12: zero wiodące\n\n**Dane:** Niepusty zapis symboliczny liczby, który może zawierać zera wiodące.\n\n**Do wykonania:** Napisz funkcję `kanoniczny(s)` tworzącą najkrótszy zapis tej samej wartości. Wykorzystaj własne funkcje dekodowania i kodowania. Zero ma być zapisane jednym symbolem `\"o\"`.\n\n**Wynik:** Zwróć najkrótszy napis przedstawiający tę samą liczbę. Nie usuwaj zer wewnątrz liczby ani na jej końcu. Dla samego zera zostaw dokładnie jedno `o`. Wyświetl wyniki dla `\"ooo+o\"` i `\"ooo\"`.\n\n**Przykład wyjaśniający:** `\"oo*o\"` ma być zamienione na `\"*o\"`. Dwa pierwsze `o` są zerami wiodącymi, ale ostatnie `o` ma znaczenie: `\"*o\"` oznacza 6, a `\"*\"` oznacza 2. „Kanoniczny” znaczy tutaj najkrótszy zapis bez zbędnych zer na początku."
    }
   ]
  },
  {
   "number": 10,
   "kind": "lesson",
   "title": "Matura 2025: Zapis symboliczny",
   "sourceFile": "10_matura_2025_zadanie_2_zapis_symboliczny/karta_pracy.ipynb",
   "notebook": "lekcje/10_matura_2025_zadanie_2_zapis_symboliczny/karta_pracy.ipynb",
   "download": "pobierz/10_matura_2025_zadanie_2_zapis_symboliczny.zip",
   "assetBase": "lekcje/10_matura_2025_zadanie_2_zapis_symboliczny/",
   "checksum": "1b56beac6f47230d7101ebd16019722b46e801316c96652b1ed17f4bd6fd0aab",
   "sections": [
    {
     "id": "intro",
     "title": "Cel i sposób pracy",
     "kind": "intro",
     "context": "",
     "markdown": "# Karta pracy 10. Matura 2025: Zapis symboliczny\n\n**Kurs:** Python — programowanie do matury rozszerzonej z informatyki\n\n**Prowadzący:** por. Jakub GRĄTKIEWICZ · jakub.gratkiewicz@wat.edu.pl\n\n**Cel:** Pełne rozwiązanie podpunktów 2.1–2.4, z kontrolą indeksów, powtórzeń i zapisu wyniku.\n\nZnasz podstawy Pythona. Przypominamy potrzebne narzędzia i stosujemy je w coraz bardziej złożonych zadaniach.\n\nOtwórz ten notatnik w folderze bieżącej lekcji. W zadaniu plikowym samodzielnie napisz otwarcie pliku, odczyt, konwersję, obliczenia i zapis odpowiedzi. Nie ma wspólnej komórki wczytującej dane ani gotowych list z plików zadaniowych.\n\nZadania 1–8 wykonujemy na lekcji, zadania 9–10 samodzielnie. Niedokończone zadania uzupełnij przed następnym spotkaniem.\n\nW pustych komórkach roboczych wpisz własny kod. Wyświetl wyniki obliczeń i przygotuj się do wyjaśnienia swojego rozwiązania.\n\nPrzed oddaniem zrestartuj jądro, uruchom własne komórki od początku i zapisz notatnik oraz wymagane pliki wynikowe."
    },
    {
     "id": "s001",
     "title": "Katalog lekcji i dane",
     "kind": "organization",
     "context": "",
     "markdown": "## Katalog lekcji i dane\n\nPliki wejściowe w katalogu tej lekcji:\n\n- symbole_przyklad.txt\n- symbole.txt\n\nPrzeczytaj format w poleceniu. Pliki otwierasz we własnym kodzie; nie przepisuj ich zawartości do programu. Nazwy wyników są podane w zadaniach. Zapisuj wyniki obok notatnika i nie nadpisuj danych wejściowych."
    },
    {
     "id": "s002",
     "title": "1. Przypomnienie",
     "kind": "recall",
     "context": "",
     "markdown": "## 1. Przypomnienie\n\n1. Ile znaków ma każdy rekord w symbole.txt?\n2. Czy sumę należy ograniczyć do dwunastu symboli?\n3. Co oznacza para (6,3) w odpowiedzi do 2.2?\n\nTo pytania do wspólnego powtórzenia, nie zestaw kartkówki.\n\n```python\n# Własne odpowiedzi:\n# 1.\n# 2.\n# 3.\n```"
    },
    {
     "id": "s003",
     "title": "2. Treść dydaktyczna i zadania na lekcji",
     "kind": "theory",
     "context": "",
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nKażde polecenie określa dane, problem do rozwiązania i wymagany wynik. Przykład wyjaśniający pokazuje, jak rozumieć wymagania i format odpowiedzi. W zadaniu plikowym oblicz właściwy wynik z podanego pliku, nie z małego przykładu w opisie. Samodzielnie zaplanuj sposób rozwiązania i napisz kod. Funkcja ma zwracać wynik; wyświetl go w miejscu jej wywołania, jeśli wymaga tego polecenie. W zadaniach plikowych sam napisz także otwarcie, odczyt i zapis pliku. Przygotuj się do wyjaśnienia swoich decyzji."
    },
    {
     "id": "s004",
     "title": "Zadanie maturalne · źródło i zakres",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie maturalne · źródło i zakres\n\n## Zadanie maturalne — pełna transkrypcja treści CKE\n\n**Źródło:** CKE, egzamin maturalny z informatyki, poziom rozszerzony, Formuła 2023, 14 maja 2025 r., arkusz `MINP-R0-100-2505`, zadanie 2 „Zapis symboliczny”, łącznie 11 punktów.  \n**Oryginalny arkusz:** [arkusz-2025.pdf](arkusz-2025.pdf)\n\nPoniżej przepisano treść zadania maturalnego. Zachowano polecenia i przykłady, zmieniając jedynie układ typograficzny. Pominięto puste pola odpowiedzi, punktację na marginesie oraz nagłówki i stopki stron. Kwadraty zapisano czcionką o stałej szerokości."
    },
    {
     "id": "s005",
     "title": "Zadanie 2. Zapis symboliczny",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie 2. Zapis symboliczny\n\n### Zadanie 2. Zapis symboliczny\n\nW pliku `symbole.txt` zapisano 2000 napisów. Każdy z nich jest zapisany w osobnym wierszu i składa się z dokładnie 12 znaków spośród: `o`, `+`, `*`.\n\nNapisz program (lub kilka programów) znajdujący(-ch) odpowiedzi do podanych zadań. Każdą odpowiedź zapisz w pliku `wyniki2.txt` i poprzedź ją numerem oznaczającym zadanie.\n\nDo Twojej dyspozycji jest plik `symbole_przyklad.txt`, który zawiera 20 wierszy danych spełniających warunki zadania. Odpowiedzi dla pliku `symbole_przyklad.txt` są podane pod każdym zadaniem.\n\nPamiętaj, że Twój program musi ostatecznie zadziałać na pliku `symbole.txt` zawierającym 2000 napisów."
    },
    {
     "id": "s006",
     "title": "Zadanie 2.1. (0–2)",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie 2.1. (0–2)\n\n### Zadanie 2.1. (0–2)\n\nPodaj wszystkie takie napisy z pliku `symbole.txt`, które są palindromami (czytane od przodu i od tyłu są takie same). Wypisz je po jednym w wierszu, w kolejności takiej jak w pliku `symbole.txt`.\n\nOdpowiedź dla pliku `symbole_przyklad.txt` to\n\n```text\noooo+**+oooo\n```\n\n(w tym pliku jest jeden palindrom)"
    },
    {
     "id": "s007",
     "title": "Zadanie 2.2. (0–4)",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie 2.2. (0–4)\n\n### Zadanie 2.2. (0–4)\n\nW pliku `symbole.txt` szukamy „kwadratów” złożonych z dziewięciu sąsiadujących identycznych symboli:\n\n```text\n+ + +     o o o     * * *\n+ + + lub o o o lub * * *\n+ + +     o o o     * * *\n```\n\nPodaj, ile takich kwadratów występuje w pliku `symbole.txt`. Jeżeli w pliku występuje jeden taki kwadrat, podaj numer wiersza i numer pozycji w wierszu (licząc od 1) jego środkowego pola. Jeżeli jest więcej takich kwadratów, podaj numer wiersza i numer pozycji w wierszu dla środkowego pola każdego z nich.\n\nPrzykład:\n\nPoniżej podano 6 wierszy przykładowych danych (po 12 znaków w każdym wierszu):\n\n```text\n1. +**+o*o++*o+\n2. +++oooo*o***\n3. +o*oooo**+++\n4. *+*oooooo+++\n5. o**o+++o++++\n6. oooo++**+*+o\n```\n\nMamy tutaj trzy kwadraty złożone z 9 identycznych symboli: pierwszy ma środek w wierszu 3 na pozycji 5, drugi – w wierszu 3 na pozycji 6, a trzeci – w wierszu 4 na pozycji 11.\n\nOdpowiedź dla pliku `symbole_przyklad.txt` to\n\n```text\n1 6 3\n```\n\n(jeden kwadrat, który ma środkowe pole w wierszu 6, na pozycji 3)."
    },
    {
     "id": "s008",
     "title": "Informacja do zadań 2.3. i 2.4.",
     "kind": "matura",
     "context": "",
     "markdown": "## Informacja do zadań 2.3. i 2.4.\n\n### Informacja do zadań 2.3. i 2.4.\n\nKażdy z napisów podanych w pliku `symbole.txt` będziemy traktować jako liczbę zapisaną w systemie trójkowym, w którym:\n\n- znak `o` odpowiada cyfrze 0,\n- znak `+` odpowiada cyfrze 1,\n- znak `*` odpowiada cyfrze 2."
    },
    {
     "id": "s009",
     "title": "Zadanie 2.3. (0–2)",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie 2.3. (0–2)\n\n### Zadanie 2.3. (0–2)\n\nPodaj największą liczbę spośród liczb zapisanych w pliku `symbole.txt`. W odpowiedzi podaj tę liczbę w zapisie dziesiętnym oraz napis jej odpowiadający.\n\nOdpowiedź dla pliku `symbole_przyklad.txt` to `519789 ***+o*ooo++o`."
    },
    {
     "id": "s010",
     "title": "Zadanie 2.4. (0–3)",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie 2.4. (0–3)\n\n### Zadanie 2.4. (0–3)\n\nOblicz sumę wszystkich liczb z pliku `symbole.txt`. Podaj jej wartość w zapisie dziesiętnym oraz w zapisie trójkowym z użyciem symboli: `o`, `+`, `*`.\n\nOdpowiedź dla pliku `symbole_przyklad.txt` to `4841542 +oooo****+oo+o+`.\n\nDo oceny oddajesz:\n\n- plik `wyniki2.txt` – zawierający odpowiedzi do zadań 2.1.–2.4. (odpowiedź do każdego zadania powinna być poprzedzona jego numerem)\n- pliki zawierające kody źródłowe Twojego(-ich) programu(-ów) o nazwach (uwaga: brak tych plików jest równoznaczny z brakiem rozwiązania zadania):"
    },
    {
     "id": "s011",
     "title": "Najpierw format, potem własność",
     "kind": "theory",
     "context": "",
     "markdown": "## Najpierw format, potem własność\n\nKażdy wiersz zawiera dokładnie 12 symboli. splitlines usuwa zakończenia wierszy, zachowując wszystkie znaki rekordu. Nie zmniejszaj długości napisu ręcznie o jeden: po splitlines ostatni symbol jest już zwykłą daną.\n\nW 2.1 wypisujemy palindromy w oryginalnej kolejności, po jednym na wiersz. Lista wynikowa jest odpowiednia; set usunąłby powtarzające się rekordy.\n\n```python\nwiersz = \"oooo+**+oooo\\r\\n\"\nnapis = wiersz.rstrip(\"\\r\\n\")\nprint(napis)\nprint(\"Długość:\", len(napis))\nprint(\"Czy palindrom?\", napis == napis[::-1])\n```"
    },
    {
     "id": "s012",
     "title": "Zadanie 1: Odczyt przykładów",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 1: Odczyt przykładów\n\n**Dane:** Plik `symbole_przyklad.txt` z zadania 2 matury 2025. Rekord ma 12 symboli z alfabetu `o`, `+`, `*`.\n\n**Do wykonania:** Napisz funkcję `wczytaj(nazwa)` samodzielnie odczytującą plik. Usuń wyłącznie zakończenia wierszy. Program powinien rozpoznawać rekordy o niewłaściwej długości lub niedozwolonym symbolu.\n\n**Wynik:** Zwróć listę napisów i zapisz ją w `napisy_p`. Każdy element ma odpowiadać jednemu wierszowi pliku. Wyświetl liczbę odczytanych wierszy i informację o poprawności formatu. Jeśli znajdziesz błędny wiersz, przerwij odczyt z błędem — nie pomijaj go i nie przedstawiaj pozostałych danych jako kompletnego pliku.\n\n**Przykład wyjaśniający:** Wiersz `oooooooooooo` jest poprawny: ma 12 dozwolonych znaków. Wiersz `ooooo` jest za krótki, a `ooooooooooox` zawiera niedozwolone x. Zachowaj wszystkie symbole `o` — także początkowe, bo są częścią danych do badania palindromów i kwadratów."
    },
    {
     "id": "s013",
     "title": "Zadanie 2: 2.1: palindromy",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: 2.1: palindromy\n\n**Dane:** Lista zapisów symbolicznych oraz treść zadania 2.1 CKE.\n\n**Do wykonania:** Napisz funkcję `z21(napisy)` wybierającą wszystkie zapisy będące palindromami. Zachowaj kolejność i powtarzające się wystąpienia.\n\n**Wynik:** Zwróć listę pełnych napisów, które są palindromami, nie ich numery ani samą liczbę wystąpień. Wyświetl ją dla `napisy_p` i porównaj z odpowiedzią przykładową w oryginalnej treści zadania.\n\n**Przykład wyjaśniający:** Na krótszych danych `[\"*o*\", \"+o*\", \"*o*\"]` wynik to `[\"*o*\", \"*o*\"]`. Dwa identyczne wiersze to dwa wystąpienia i oba zostają w odpowiedzi. W pliku maturalnym obowiązuje ta sama zasada, tylko napisy mają po 12 znaków."
    },
    {
     "id": "s014",
     "title": "Sprawdzenie bloku i całej planszy",
     "kind": "theory",
     "context": "",
     "markdown": "## Sprawdzenie bloku i całej planszy\n\nW 2.2 wystarczy przeglądać możliwe środki albo rogi. Wybierz jedną konwencję i konsekwentnie przelicz wynik na numerację od 1. Ostatni dopuszczalny blok kończy się na ostatnim wierszu i ostatniej kolumnie.\n\nPrzykład sześciu wierszy w treści CKE jest inny niż pierwszych sześć wierszy pliku symbole_przyklad.txt. Obydwa przykłady są potrzebne: ręczna plansza sprawdza nakładanie kwadratów, plik sprawdza cały odczyt.\n\n```python\nsiatka = [\"+++\",\"+++\",\"+++\"]\nr, c = 0, 0\nsrodek_od_1 = (r+2, c+2)\nprint(srodek_od_1)\n```"
    },
    {
     "id": "s015",
     "title": "Zadanie 3: 2.2: funkcja i przykład ręczny",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 3: 2.2: funkcja i przykład ręczny\n\n**Dane:** Siatka symboli z zadania 2.2. Współrzędne w odpowiedzi oznaczają numer wiersza i kolumny, liczone od 1.\n\n**Do wykonania:** Napisz funkcję `z22(wiersze)` znajdującą środki wszystkich jednolitych kwadratów 3×3. Uwzględnij także kwadraty nakładające się na siebie.\n\n**Wynik:** Zwróć listę par `(numer_wiersza_srodka, numer_kolumny_srodka)`, licząc od 1. Uporządkuj odpowiedzi od góry do dołu, a w tym samym wierszu od lewej do prawej. Wyświetl wyniki dla siatki z treści CKE oraz pliku przykładowego.\n\n**Przykład wyjaśniający:** Jeśli jednolity blok zajmuje wiersze 2–4 i kolumny 5–7, jego środek ma współrzędne `(3, 6)`. Do odpowiedzi nie wpisujemy `(2, 5)`, bo to lewy górny róg. Wszystkie dziewięć pól bloku musi mieć identyczny symbol."
    },
    {
     "id": "s016",
     "title": "Zadanie 4: 2.3: Horner i maksimum",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: 2.3: Horner i maksimum\n\n**Dane:** Niepusta lista zapisów symbolicznych, z wartościami cyfr `o = 0`, `+ = 1`, `* = 2` w systemie trójkowym.\n\n**Do wykonania:** Napisz funkcję `dekoduj(s)` metodą Hornera oraz `z23(napisy)` wybierającą największą wartość. Zachowaj oryginalny napis, a przy remisie pierwszy zapis.\n\n**Wynik:** Zwróć parę `(wartosc_dziesietna, oryginalny_zapis)` dla największej liczby. Zapis ma pozostać dokładnie taki jak w danych, także z początkowymi `o`. Wyświetl odpowiedź dla przykładu i porównaj z zadaniem 2.3 CKE.\n\n**Przykład wyjaśniający:** Dla krótkich zapisów `[\"o*\", \"+o\", \"*o\"]` wartości wynoszą 2, 3 i 6. Największa jest ostatnia, więc wynik to `(6, \"*o\")`. Nie wybieramy największego napisu według kolejności znaków ani nie sumujemy wartości."
    },
    {
     "id": "s017",
     "title": "Zadanie 5: 2.4: suma i zapis odwrotny",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: 2.4: suma i zapis odwrotny\n\n**Dane:** Lista zapisów symbolicznych liczb.\n\n**Do wykonania:** Napisz funkcję `koduj(n)` dla nieujemnych liczb całkowitych oraz `z24(napisy)` obliczającą sumę wszystkich wartości. Suma ma mieć poprawny zapis symboliczny bez zer wiodących, niezależnie od jego długości. Zero zapisujemy jako `\"o\"`.\n\n**Wynik:** Zwróć parę `(suma_dziesietna, zapis_symboliczny_sumy)`. Druga część ma przedstawiać tę samą sumę w systemie trójkowym z symbolami, a nie być połączeniem napisów wejściowych. Wyświetl obie części i porównaj z odpowiedzią przykładową CKE.\n\n**Przykład wyjaśniający:** Napisy `\"*\"` i `\"+\"` oznaczają 2 i 1. Ich suma wynosi 3 i ma zapis `\"+o\"`, więc odpowiedź to `(3, \"+o\")`. Sklejenie tekstów dałoby `\"*+\"`, czyli wartość 7, a nie żądaną sumę."
    },
    {
     "id": "s018",
     "title": "Suma i pełne rozwiązanie",
     "kind": "theory",
     "context": "",
     "markdown": "## Suma i pełne rozwiązanie\n\nDla każdej wartości wykonaj jeden odczyt symboli. Python int nie ma stałej granicy 32-bitowej, a więc nie wymaga specjalnego typu do sumy. Wygodnie oddzielić dekodowanie, kodowanie i raport.\n\nOstateczny raport ma cztery podpisane części. Dla 2.2 wypisz liczbę kwadratów, a następnie współrzędne każdego środka. Dla 2.3 zachowaj oryginalny napis największej liczby, w tym zera wiodące, jeżeli by występowały.\n\n```python\nmaksymalny_rekord = 3**12 - 1\nprint(maksymalny_rekord, 2000 * maksymalny_rekord)\n```"
    },
    {
     "id": "s019",
     "title": "Zadanie 6: Jeden interfejs raportu",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Jeden interfejs raportu\n\n**Dane:** Lista napisów z jednego pliku zadania 2.\n\n**Do wykonania:** Napisz funkcję `rozwiaz(napisy)` zwracającą komplet odpowiedzi 2.1–2.4. Wykorzystaj własne funkcje obliczające poszczególne części.\n\n**Wynik:** Zwróć słownik z czterema wpisami: `\"2.1\"` — lista palindromów, `\"2.2\"` — lista środków kwadratów, `\"2.3\"` — para `(najwieksza_wartosc, oryginalny_zapis)`, `\"2.4\"` — para `(suma, zapis_sumy)`. Wyświetl każdą część z jej numerem dla `napisy_p`.\n\n**Przykład wyjaśniający:** Raport ma grupować różne rodzaje odpowiedzi, nie zmieniać ich formatu na jedną listę liczb. Jeśli znaleziono dwa kwadraty, pod kluczem `\"2.2\"` mają być ich dwie pary współrzędnych, a nie sama liczba 2. Liczbę kwadratów można podać dodatkowo przy wyświetlaniu."
    },
    {
     "id": "s020",
     "title": "Zadanie 7: Pełne dane",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Pełne dane\n\n**Dane:** Pełny plik `symbole.txt`, zawierający 2000 rekordów.\n\n**Do wykonania:** Samodzielnie odczytaj pełne dane i oblicz wszystkie odpowiedzi. Zachowaj zarówno wartości liczbowe, jak i wymagane zapisy symboliczne.\n\n**Wynik:** Zapisz cztery odpowiedzi w słowniku `odp`, w formacie z zadania 6. Wyświetl je z numerami podpunktów. Pokaż też liczbę wczytanych napisów, aby potwierdzić, że użyto pełnego pliku, a nie przykładu.\n\n**Przykład wyjaśniający:** Wynik 2.3 opisuje jedną największą liczbę, natomiast 2.4 sumę wartości ze wszystkich 2000 wierszy. Powtarzające się wiersze trzeba uwzględnić w sumie ponownie. Odpowiedzi dla `symbole_przyklad.txt` nie są odpowiedziami dla `symbole.txt`."
    },
    {
     "id": "s021",
     "title": "Zadanie 8: wyniki2.txt",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: wyniki2.txt\n\n**Dane:** Komplet obliczonych odpowiedzi `odp` dla pełnego pliku.\n\n**Do wykonania:** Przygotuj kod zapisujący `wyniki2.txt` w folderze lekcji. Rozdziel odpowiedzi numerami podpunktów, aby było wiadomo, czego dotyczą.\n\n**Wynik:** Pod `2.1.` zapisz palindromy, każdy w osobnym wierszu. Przy `2.2.` podaj liczbę kwadratów, a dalej ich środki, po parze na wiersz. Wiersze `2.3.` i `2.4.` mają zawierać wartość dziesiętną i zapis symboliczny. Odczytaj plik do `odczyt_wyniku` i wyświetl go.\n\n**Przykład wyjaśniający:** Jeśli przykładowy wynik 2.3 miałby postać `(6, \"*o\")`, wiersz odpowiedzi brzmiałby `2.3. 6 *o`. Nie zapisuj całego pythonowego słownika ze znakami `{}`. Plik powinien być czytelny także dla osoby, która nie uruchamia Twojego notatnika."
    },
    {
     "id": "s022",
     "title": "Podsumowanie",
     "kind": "theory",
     "context": "",
     "markdown": "## Podsumowanie\n\nWyjaśnij jedno własne rozwiązanie i wskaż ważny przypadek brzegowy. W zadaniu plikowym pokaż kod od otwarcia pliku do zapisania odpowiedzi."
    },
    {
     "id": "s023",
     "title": "3. Zadania do samodzielnego wykonania",
     "kind": "homework",
     "context": "",
     "markdown": "## 3. Zadania do samodzielnego wykonania\n\nWykonaj zadania 9–10 przed następnym spotkaniem i zapisz własne rozwiązania."
    },
    {
     "id": "s024",
     "title": "Zadanie 9: zapis cyframi trójkowymi",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 9: zapis cyframi trójkowymi\n\n**Dane:** Zapisy symboliczne `\"+o*\"` i `\"oo+o*\"`. Symbole `o`, `+`, `*` odpowiadają cyfrom `0`, `1`, `2`.\n\n**Do wykonania:** Napisz funkcję `zapis_trojkowy(s)` zamieniającą symbole na znaki cyfr, z użyciem `str.maketrans` i `translate`. Zachowaj zera wiodące. Wyznacz również wartość otrzymanego zapisu za pomocą `int` z podstawą 3.\n\n**Wynik:** Funkcja `zapis_trojkowy` ma zwracać napis ze znakami `0`, `1`, `2`, zachowując długość wejścia. Osobno wyznacz wartość liczbową tego zapisu. Wyświetl oryginał, zapis cyframi i wartość dziesiętną dla obu podanych przykładów.\n\n**Przykład wyjaśniający:** `\"o*+\"` ma zostać przetłumaczone na napis `\"021\"`. Ten napis, odczytany w systemie trójkowym, ma wartość dziesiętną 7. Pierwsze dwa zapisy są tekstem, trzeci liczbą. Początkowe zero pozostaje w tekście, ale nie zmienia wartości."
    },
    {
     "id": "s025",
     "title": "Zadanie 10: plansza samych zer",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 10: plansza samych zer\n\n**Dane:** Plansza z pięciu wierszy, każdy zawiera pięć znaków `o`.\n\n**Do wykonania:** Wyznacz wszystkie jednolite bloki 3×3. Zanim uruchomisz własny program, oszacuj ich liczbę na rysunku, uwzględniając nakładanie się bloków.\n\n**Wynik:** Zapisz współrzędne wszystkich środków w liście `srodki`, licząc wiersze i kolumny od 1. Wyświetl tę listę oraz jej długość. Wskaż pierwszy i ostatni środek w kolejności od góry do dołu i od lewej do prawej.\n\n**Przykład wyjaśniający:** Na mniejszej planszy 3×4 wypełnionej jednym symbolem istnieją dwa bloki 3×3: zaczynający się w pierwszej kolumnie i zaczynający się w drugiej. Nie wybieramy tylko rozłącznych bloków. Dla planszy 5×5 samodzielnie uwzględnij wszystkie przesunięcia."
    }
   ]
  },
  {
   "number": 11,
   "kind": "lesson",
   "title": "Wektory, punkty i geometria całkowitoliczbowa",
   "sourceFile": "11_nwd_ruch_i_geometria/karta_pracy.ipynb",
   "notebook": "lekcje/11_nwd_ruch_i_geometria/karta_pracy.ipynb",
   "download": "pobierz/11_nwd_ruch_i_geometria.zip",
   "assetBase": "lekcje/11_nwd_ruch_i_geometria/",
   "checksum": "622b983ea547765dcc33621f4d86bc22d6bcd38493d0b411fb5ab6f85fefb41a",
   "sections": [
    {
     "id": "intro",
     "title": "Cel i sposób pracy",
     "kind": "intro",
     "context": "",
     "markdown": "# Karta pracy 11. Wektory, punkty i geometria całkowitoliczbowa\n\n**Kurs:** Python — programowanie do matury rozszerzonej z informatyki\n\n**Prowadzący:** por. Jakub GRĄTKIEWICZ · jakub.gratkiewicz@wat.edu.pl\n\n**Cel:** Przygotowanie całego algorytmu do zadania Dron z matury 2025.\n\nZnasz podstawy Pythona. Przypominamy potrzebne narzędzia i stosujemy je w coraz bardziej złożonych zadaniach.\n\nOtwórz ten notatnik w folderze bieżącej lekcji. W zadaniu plikowym samodzielnie napisz otwarcie pliku, odczyt, konwersję, obliczenia i zapis odpowiedzi. Nie ma wspólnej komórki wczytującej dane ani gotowych list z plików zadaniowych.\n\nZadania 1–10 wykonujemy na lekcji, zadania 11–12 samodzielnie. Niedokończone zadania uzupełnij przed następnym spotkaniem.\n\nW pustych komórkach roboczych wpisz własny kod. Wyświetl wyniki obliczeń i przygotuj się do wyjaśnienia swojego rozwiązania.\n\nPrzed oddaniem zrestartuj jądro, uruchom własne komórki od początku i zapisz notatnik oraz wymagane pliki wynikowe."
    },
    {
     "id": "s001",
     "title": "Katalog lekcji i dane",
     "kind": "organization",
     "context": "",
     "markdown": "## Katalog lekcji i dane\n\nPliki wejściowe w katalogu tej lekcji:\n\n- ruchy-trening.txt\n\nPrzeczytaj format w poleceniu. Pliki otwierasz we własnym kodzie; nie przepisuj ich zawartości do programu. Nazwy wyników są podane w zadaniach. Zapisuj wyniki obok notatnika i nie nadpisuj danych wejściowych."
    },
    {
     "id": "s002",
     "title": "1. Przypomnienie",
     "kind": "recall",
     "context": "",
     "markdown": "## 1. Przypomnienie\n\n1. Czy (dx,dy) jest położeniem czy zmianą położenia?\n2. Czy punkt o współrzędnej x=5000 leży wewnątrz kwadratu 0<x<5000?\n3. Jak sprawdzić środek odcinka bez dzielenia rzeczywistego?\n\nTo pytania do wspólnego powtórzenia, nie zestaw kartkówki.\n\n```python\n# Własne odpowiedzi:\n# 1.\n# 2.\n# 3.\n```"
    },
    {
     "id": "s003",
     "title": "2. Treść dydaktyczna i zadania na lekcji",
     "kind": "theory",
     "context": "",
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nKażde polecenie określa dane, problem do rozwiązania i wymagany wynik. Przykład wyjaśniający pokazuje, jak rozumieć wymagania i format odpowiedzi. W zadaniu plikowym oblicz właściwy wynik z podanego pliku, nie z małego przykładu w opisie. Samodzielnie zaplanuj sposób rozwiązania i napisz kod. Funkcja ma zwracać wynik; wyświetl go w miejscu jej wywołania, jeśli wymaga tego polecenie. W zadaniach plikowych sam napisz także otwarcie, odczyt i zapis pliku. Przygotuj się do wyjaśnienia swoich decyzji."
    },
    {
     "id": "s004",
     "title": "Przesunięcie i położenie",
     "kind": "theory",
     "context": "",
     "markdown": "## Przesunięcie i położenie\n\nPunkt (x,y) opisuje położenie, a wektor (dx,dy) zmianę. Kolejny punkt powstaje przez (x+dx,y+dy). Sumowanie obu kolumn daje końcowe położenie, lecz do analizy drogi trzeba zapamiętać każdy punkt po ruchu.\n\nW zadaniu Dron rozpatrujemy punkty po kolejnych ruchach, bez dodatkowego punktu startowego. Dodatnie dx oznacza, że współrzędna x rośnie ściśle, więc punkty są różne i uporządkowane od lewej do prawej.\n\n```python\nx = y = 0\nfor dx,dy in [(3,2),(2,4),(5,-6)]:\n    x += dx\n    y += dy\n    print(x,y)\n```"
    },
    {
     "id": "s005",
     "title": "Zadanie 1: Jeden ruch",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 1: Jeden ruch\n\n**Dane:** Punkt `(x, y)` i ruch `(dx, dy)`, oba z całkowitymi współrzędnymi.\n\n**Do wykonania:** Napisz funkcję `przesun(punkt, ruch)` określającą położenie po wykonaniu ruchu.\n\n**Wynik:** Zwróć parę `(nowe_x, nowe_y)` opisującą miejsce po ruchu. Dodatnie `dx` przesuwa w prawo, dodatnie `dy` w górę, a wartości ujemne w przeciwnych kierunkach. Wyświetl wynik dla punktu `(3, 2)` i ruchu `(2, -5)`.\n\n**Przykład wyjaśniający:** Punkt `(4, 1)` po ruchu `(-2, 3)` znajdzie się w `(2, 4)`: dwie jednostki w lewo i trzy w górę. Ruch `(-2, 3)` nie jest nowym położeniem — opisuje zmianę względem miejsca, w którym obiekt już był."
    },
    {
     "id": "s006",
     "title": "Zadanie 2: Cała trasa",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: Cała trasa\n\n**Dane:** Lista kolejnych przesunięć. Obiekt rozpoczyna ruch w `(0, 0)`.\n\n**Do wykonania:** Napisz funkcję `trasa(ruchy)` wyznaczającą położenie po każdym przesunięciu. Punktu startowego nie dodawaj osobno do wyniku.\n\n**Wynik:** Zwróć listę kolejnych osiągniętych punktów, po jednym na każdy ruch. Nie dopisuj osobno `(0, 0)`, więc długość wyniku ma być równa liczbie ruchów. Dla pustych danych zwróć `[]`. Pokaż trasę dla `[(3, 2), (2, 4), (5, -6)]`.\n\n**Przykład wyjaśniający:** Dla ruchów `[(2, 1), (3, -1)]` trasa to `[(2, 1), (5, 0)]`. Drugi ruch wykonujemy z miejsca osiągniętego po pierwszym, a nie ponownie od początku układu. Dlatego drugim punktem nie jest `(3, -1)`."
    },
    {
     "id": "s007",
     "title": "Zadanie 3: Łazik i rozkazy F, L, R",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 3: Łazik i rozkazy F, L, R\n\n**Dane:** Łazik startuje w `(0, 0)`, skierowany na północ. `F` oznacza ruch o jedno pole naprzód, `L` obrót w lewo, `R` w prawo o 90°. Północ zwiększa `y`, wschód zwiększa `x`.\n\n**Do wykonania:** Napisz funkcję `lazik(komendy)` symulującą podany ciąg poleceń z alfabetu F, L, R. Obrót nie zmienia położenia. Pusty napis pozostawia stan początkowy.\n\n**Wynik:** Zwróć krotkę `(x, y, kierunek)` opisującą stan po wszystkich poleceniach. Kierunki to `N` — północ, `E` — wschód, `S` — południe, `W` — zachód. Wyświetl wynik dla `\"FFRFFLF\"` i porównaj ze szkicem.\n\n**Przykład wyjaśniający:** Dla komend `\"RF\"` łazik najpierw obraca się z północy na wschód, a następnie jedzie o jedno pole. Wynik to `(1, 0, \"E\")`. Samo `\"R\"` dałoby `(0, 0, \"E\")`, ponieważ obrót nie przesuwa łazika."
    },
    {
     "id": "s008",
     "title": "Wnętrze, brzeg i NWD",
     "kind": "theory",
     "context": "",
     "markdown": "## Wnętrze, brzeg i NWD\n\nWnętrze kwadratu opisujemy ostrymi nierównościami. Użycie <= włącza brzeg, co zmienia treść zadania. Punkty na bokach i w narożnikach nie należą do wnętrza.\n\nNWD przesunięć liczymy dla wartości bezwzględnych: ruch w dół ma ujemne dy. NWD(A,0)=A dla A>0. Nie myl liczby ruchów spełniających warunek NWD z liczbą punktów leżących wewnątrz obszaru.\n\n```python\npunkty = [(1,1),(0,1),(5000,1),(1,5000)]\nfor x,y in punkty:\n    print((x,y), 0 < x < 5000 and 0 < y < 5000)\n```"
    },
    {
     "id": "s009",
     "title": "Zadanie 4: Ścisłe wnętrze",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: Ścisłe wnętrze\n\n**Dane:** Punkt o całkowitych współrzędnych i kwadrat o wierzchołkach `(0, 0)`, `(bok, 0)`, `(bok, bok)`, `(0, bok)`, dla `bok > 0`.\n\n**Do wykonania:** Napisz funkcję `wewnatrz(punkt, bok=5000)` rozstrzygającą, czy punkt leży we wnętrzu kwadratu. Punkty na jego krawędziach i wierzchołkach nie należą do wnętrza.\n\n**Wynik:** Zwróć `True` wyłącznie dla punktu znajdującego się w środku obszaru, bez dotykania jego granicy. Zwróć `False` dla krawędzi, wierzchołków i punktów poza kwadratem. Wyświetl wyniki dla podanych pięciu punktów przy boku 5000.\n\n**Przykład wyjaśniający:** W kwadracie o boku 4 punkt `(1, 3)` jest wewnątrz, `(4, 2)` leży na prawej krawędzi, a `(5, 2)` poza kwadratem. Tylko pierwszy daje `True`. Granica obszaru jest celowo wyłączona z zliczania."
    },
    {
     "id": "s010",
     "title": "Zadanie 5: NWD dla ruchu w dół",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: NWD dla ruchu w dół\n\n**Dane:** Lista przesunięć z całkowitymi współrzędnymi, które mogą być ujemne lub równe zeru.\n\n**Do wykonania:** Napisz własne `nwd(a, b)` oraz `ile_nwd(ruchy)`. Policz przesunięcia, dla których NWD wartości bezwzględnych współrzędnych jest większe od 1. Przyjmij `NWD(0, 0) = 0`.\n\n**Wynik:** Zwróć liczbę ruchów, dla których obie składowe mają wspólny dzielnik większy od 1. Badamy `dx` i `dy` jednego ruchu, nie współrzędne punktu osiągniętego po całej trasie. Pokaż wynik dla `[(12, -18), (7, 0), (5, 3)]`.\n\n**Przykład wyjaśniający:** Ruch `(8, -12)` spełnia warunek, ponieważ NWD(8, 12) = 4. Ruch `(3, 2)` go nie spełnia, bo NWD wynosi 1. Dla `(6, 0)` NWD wynosi 6, więc ten ruch również liczymy. Znak minus nie zmienia wartości NWD."
    },
    {
     "id": "s011",
     "title": "Zadanie 6: Sprawdzenie trójki",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Sprawdzenie trójki\n\n**Dane:** Trzy punkty `a`, `m`, `c` o całkowitych współrzędnych.\n\n**Do wykonania:** Napisz funkcję `jest_srodkiem(a, m, c)`, która zwraca prawdę wyłącznie wtedy, gdy punkty są parami różne, a `m` jest dokładnym środkiem odcinka `ac`. Nie stosuj zaokrąglania.\n\n**Wynik:** Zwróć `True`, jeśli punkt `m` leży dokładnie w połowie odcinka łączącego `a` z `c`, a wszystkie trzy punkty są różne. W innym przypadku zwróć `False`. Pokaż wyniki dla obu podanych trójek i uzasadnij drugą odpowiedź.\n\n**Przykład wyjaśniający:** Dla końców `(0, 2)` i `(4, 6)` środkiem jest `(2, 4)`. Punkt `(1, 3)` wprawdzie leży na tym odcinku, ale nie w połowie, więc nie spełnia warunku. Sama współliniowość trzech punktów nie wystarcza."
    },
    {
     "id": "s012",
     "title": "Środek odcinka i koszt wyszukiwania",
     "kind": "theory",
     "context": "",
     "markdown": "## Środek odcinka i koszt wyszukiwania\n\nM jest środkiem AC dokładnie wtedy, gdy 2*Mx=Ax+Cx i 2*My=Ay+Cy. Dzielenie całkowite bez sprawdzenia parzystości mogłoby zaokrąglić niecałkowity środek do istniejącego punktu.\n\nProsty algorytm sprawdza trójki w O(n³). Dla 100 punktów jest wykonalny, ale zbiór punktów pozwala sprawdzać środek każdej pary w średnim O(1), czyli łącznie oczekiwanym O(n²). Końce wybieraj jako i<j, sprawdzaj dwie parzystości i różność trzech punktów.\n\n```python\na, m, c = (2,2), (4,4), (6,6)\nczy_srodek = 2*m[0] == a[0]+c[0] and 2*m[1] == a[1]+c[1]\nprint(\"Czy M jest środkiem AC?\", czy_srodek)\nprint((0+3)//2)  # 1 nie jest dokładną połową 3\n```"
    },
    {
     "id": "s013",
     "title": "Zadanie 7: Dokładny kandydat na środek",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Dokładny kandydat na środek\n\n**Dane:** Dwa punkty `a` i `c` o całkowitych współrzędnych.\n\n**Do wykonania:** Napisz funkcję `srodek_calkowity(a, c)` wyznaczającą środek odcinka tylko wtedy, gdy obie jego współrzędne są całkowite. Nie zastępuj niecałkowitego środka punktem zaokrąglonym.\n\n**Wynik:** Zwróć parę całkowitych współrzędnych środka, jeśli taki punkt istnieje. Jeśli choć jedna współrzędna rzeczywistego środka nie jest całkowita, zwróć `None`. Nie sprawdzasz tutaj, czy środek należy do jakiejś listy punktów.\n\n**Przykład wyjaśniający:** Odcinek od `(0, 0)` do `(4, 2)` ma środek `(2, 1)`, więc zwracamy tę parę. Dla końców `(0, 0)` i `(3, 2)` środek to `(1.5, 1)` i odpowiedzią jest `None`, a nie zaokrąglone `(1, 1)`."
    },
    {
     "id": "s014",
     "title": "Zadanie 8: Wyszukiwanie par i zbiór",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: Wyszukiwanie par i zbiór\n\n**Dane:** Lista różnych punktów uporządkowana według ściśle rosnącej współrzędnej `x`.\n\n**Do wykonania:** Napisz funkcję `trojki(punkty)` wyszukującą wszystkie trójki `(A, M, C)`, w których `M` jest środkiem odcinka `AC`. Końce porządkuj tak, aby `Ax < Cx`. Uwzględnij punkty niesąsiadujące na liście.\n\n**Wynik:** Zwróć listę trójek punktów `(A, M, C)`, bez powtórnego wypisywania tej samej trójki z odwróconymi końcami. Każdy z trzech punktów musi występować w danych. Zastosuj rozwiązanie o oczekiwanym koszcie O(n²), korzystając ze zbioru punktów.\n\n**Przykład wyjaśniający:** Dla punktów `[(0, 0), (1, 5), (2, 2), (4, 4)]` pasuje trójka `((0, 0), (2, 2), (4, 4))`. Jej punkty nie są trzema kolejnymi elementami listy. Samo istnienie geometrycznego środka nie wystarcza — ten środek musi być jednym z podanych punktów."
    },
    {
     "id": "s015",
     "title": "Zadanie 9: Raport trasy",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 9: Raport trasy\n\n**Dane:** Plik `ruchy-trening.txt` z parami przesunięć, po jednej parze w wierszu. Start `(0, 0)`, bok kwadratu 10.\n\n**Do wykonania:** Napisz funkcję `raport(ruchy, bok)` określającą: liczbę ruchów spełniających warunek NWD > 1, liczbę punktów trasy we wnętrzu kwadratu i wszystkie trójki ze środkiem odcinka. Przygotuj samodzielny odczyt do `ruchy_z_pliku`.\n\n**Wynik:** Zwróć krotkę `(liczba_ruchow_z_nwd_wiekszym_od_1, liczba_punktow_wewnatrz, lista_trojek)`. Wynik dla pliku i boku 10 zapisz w `raport_z_pliku`, a trzy części w trzech wierszach `wyniki-trening.txt`. W ostatnim wierszu możesz zapisać listę trójek w czytelnej notacji Pythona.\n\n**Przykład wyjaśniający:** Ruchy `[(2, 2), (2, 2), (2, 2)]` prowadzą do trzech różnych punktów `(2, 2)`, `(4, 4)`, `(6, 6)`. Do NWD używamy powtarzającej się pary ruchu, lecz do badania wnętrza kwadratu i środka odcinka używamy osiągniętych punktów. Nie są to te same dane."
    },
    {
     "id": "s016",
     "title": "Zadanie 10: Kurier najdalej od bazy",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 10: Kurier najdalej od bazy\n\n**Dane:** Ruchy kuriera, np. `[(3, 0), (0, 4), (-5, 0), (0, -5)]`. Start to `(0, 0)`. Długość najkrótszego powrotu po ulicach równoległych do osi wynosi `abs(x) + abs(y)`.\n\n**Do wykonania:** Napisz funkcję `najdalej_od_bazy(ruchy)` wskazującą położenie po ruchu, z którego powrót jest najdłuższy. Przy remisie wybierz wcześniejszy ruch.\n\n**Wynik:** Zwróć krotkę `(numer_ruchu_od_1, punkt, dlugosc_powrotu)` dla miejsca wymagającego najdłuższego powrotu. Numer wskazuje, po którym ruchu kurier tam dotarł. Nie chodzi o sumę drogi przebytej od początku. Dla pustej listy zwróć `None`.\n\n**Przykład wyjaśniający:** Dla ruchów `[(2, 0), (0, 3), (-1, 0)]` odległości powrotu wynoszą kolejno 2, 5 i 4. Wynik to `(2, (2, 3), 5)`. Najtrudniej wrócić po drugim ruchu, mimo że trasa kuriera później trwa dalej."
    },
    {
     "id": "s017",
     "title": "Podsumowanie",
     "kind": "theory",
     "context": "",
     "markdown": "## Podsumowanie\n\nWyjaśnij jedno własne rozwiązanie i wskaż ważny przypadek brzegowy. W zadaniu plikowym pokaż kod od otwarcia pliku do zapisania odpowiedzi."
    },
    {
     "id": "s018",
     "title": "3. Zadania do samodzielnego wykonania",
     "kind": "homework",
     "context": "",
     "markdown": "## 3. Zadania do samodzielnego wykonania\n\nWykonaj zadania 11–12 przed następnym spotkaniem i zapisz własne rozwiązania."
    },
    {
     "id": "s019",
     "title": "Zadanie 11: odległość od startu",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 11: odległość od startu\n\n**Dane:** Niepusta lista punktów o całkowitych współrzędnych.\n\n**Do wykonania:** Napisz funkcję `najdalszy(punkty)` wybierającą punkt najdalszy od `(0, 0)` w zwykłej odległości geometrycznej. Przy remisie wybierz pierwszy. Porównuj bez obliczania pierwiastków.\n\n**Wynik:** Zwróć wybrany punkt w postaci `(x, y)`, nie jego indeks ani odległość. Chodzi o odległość w linii prostej od początku układu, a nie sumę drogi wzdłuż osi. Pokaż własny przykład i wyjaśnij tę różnicę.\n\n**Przykład wyjaśniający:** Punkt `(3, 4)` leży w odległości 5 od `(0, 0)`, a `(0, 6)` w odległości 6, więc z tej pary wybieramy `(0, 6)`. Gdyby mierzyć powrót po ulicach, odległości wynosiłyby 7 i 6 — kolejność byłaby inna."
    },
    {
     "id": "s020",
     "title": "Zadanie 12: odtwórz ruchy",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 12: odtwórz ruchy\n\n**Dane:** Punkty po kolejnych ruchach: `[(3, 2), (5, 6), (10, 0)]`. Obiekt wystartował z `(0, 0)`.\n\n**Do wykonania:** Napisz funkcję `ruchy_z_punktow(punkty)` odtwarzającą kolejne przesunięcia. Funkcja ma również obsłużyć pustą listę.\n\n**Wynik:** Zwróć listę par `(dx, dy)`, po jednej na każde dojście do kolejnego punktu. Pierwszy ruch rozpoczyna się w `(0, 0)`. Dla pustej listy zwróć `[]`. Wyświetl wynik i porównaj trasę odtworzoną z ruchów z punktami wejściowymi.\n\n**Przykład wyjaśniający:** Dla punktów `[(2, 1), (5, 0)]` ruchy to `[(2, 1), (3, -1)]`. Drugie położenie wymaga przesunięcia o 3 w prawo i 1 w dół względem pierwszego. Sam punkt `(5, 0)` nie opisuje drugiego ruchu."
    }
   ]
  },
  {
   "number": 12,
   "kind": "lesson",
   "title": "Matura 2025: Dron i kompletne rozwiązanie",
   "sourceFile": "12_matura_2025_zadanie_3_dron/karta_pracy.ipynb",
   "notebook": "lekcje/12_matura_2025_zadanie_3_dron/karta_pracy.ipynb",
   "download": "pobierz/12_matura_2025_zadanie_3_dron.zip",
   "assetBase": "lekcje/12_matura_2025_zadanie_3_dron/",
   "checksum": "e14bf4352da75639cf1429c7f58e28dcc3f5dcabf66e38125934d83eca8987f6",
   "sections": [
    {
     "id": "intro",
     "title": "Cel i sposób pracy",
     "kind": "intro",
     "context": "",
     "markdown": "# Karta pracy 12. Matura 2025: Dron i kompletne rozwiązanie\n\n**Kurs:** Python — programowanie do matury rozszerzonej z informatyki\n\n**Prowadzący:** por. Jakub GRĄTKIEWICZ · jakub.gratkiewicz@wat.edu.pl\n\n**Cel:** Pełne rozwiązanie zadania 3.1 i 3.2 a–b oraz samodzielne sprawdzenie całego procesu.\n\nZnasz podstawy Pythona. Przypominamy potrzebne narzędzia i stosujemy je w coraz bardziej złożonych zadaniach.\n\nOtwórz ten notatnik w folderze bieżącej lekcji. W zadaniu plikowym samodzielnie napisz otwarcie pliku, odczyt, konwersję, obliczenia i zapis odpowiedzi. Nie ma wspólnej komórki wczytującej dane ani gotowych list z plików zadaniowych.\n\nZadania 1–8 wykonujemy na lekcji, zadania 9–10 samodzielnie. Niedokończone zadania uzupełnij przed następnym spotkaniem.\n\nW pustych komórkach roboczych wpisz własny kod. Wyświetl wyniki obliczeń i przygotuj się do wyjaśnienia swojego rozwiązania.\n\nPrzed oddaniem zrestartuj jądro, uruchom własne komórki od początku i zapisz notatnik oraz wymagane pliki wynikowe."
    },
    {
     "id": "s001",
     "title": "Katalog lekcji i dane",
     "kind": "organization",
     "context": "",
     "markdown": "## Katalog lekcji i dane\n\nPliki wejściowe w katalogu tej lekcji:\n\n- dron_przyklad.txt\n- dron.txt\n\nPrzeczytaj format w poleceniu. Pliki otwierasz we własnym kodzie; nie przepisuj ich zawartości do programu. Nazwy wyników są podane w zadaniach. Zapisuj wyniki obok notatnika i nie nadpisuj danych wejściowych."
    },
    {
     "id": "s002",
     "title": "1. Przypomnienie",
     "kind": "recall",
     "context": "",
     "markdown": "## 1. Przypomnienie\n\n1. Dlaczego nie należy dodawać (0,0) do punktów rozpatrywanych w 3.2?\n2. Jakie błędy wykrywa punkt na krawędzi?\n3. Dlaczego należy sprawdzić unikalność znalezionej trójki?\n\nTo pytania do wspólnego powtórzenia, nie zestaw kartkówki.\n\n```python\n# Własne odpowiedzi:\n# 1.\n# 2.\n# 3.\n```"
    },
    {
     "id": "s003",
     "title": "2. Treść dydaktyczna i zadania na lekcji",
     "kind": "theory",
     "context": "",
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nKażde polecenie określa dane, problem do rozwiązania i wymagany wynik. Przykład wyjaśniający pokazuje, jak rozumieć wymagania i format odpowiedzi. W zadaniu plikowym oblicz właściwy wynik z podanego pliku, nie z małego przykładu w opisie. Samodzielnie zaplanuj sposób rozwiązania i napisz kod. Funkcja ma zwracać wynik; wyświetl go w miejscu jej wywołania, jeśli wymaga tego polecenie. W zadaniach plikowych sam napisz także otwarcie, odczyt i zapis pliku. Przygotuj się do wyjaśnienia swoich decyzji."
    },
    {
     "id": "s004",
     "title": "Zadanie maturalne · źródło i zakres",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie maturalne · źródło i zakres\n\n## Zadanie maturalne — pełna transkrypcja treści CKE\n\n**Źródło:** CKE, egzamin maturalny z informatyki, poziom rozszerzony, Formuła 2023, 14 maja 2025 r., arkusz `MINP-R0-100-2505`, zadanie 3 „Dron”, łącznie 6 punktów.  \n**Oryginalny arkusz:** [arkusz-2025.pdf](arkusz-2025.pdf)\n\nPoniżej przepisano treść zadania maturalnego. Zachowano polecenia i przykłady, zmieniając jedynie układ typograficzny. Pominięto puste pola odpowiedzi, punktację na marginesie oraz nagłówki i stopki stron. Wykres przykładu 1 jest dostępny na stronie 10 załączonego PDF; jego współrzędne podano również w treści zadania 3.2."
    },
    {
     "id": "s005",
     "title": "Zadanie 3. Dron",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie 3. Dron\n\n### Zadanie 3. Dron\n\nTor lotu pewnego drona składa się z prostych odcinków. Lot rozpoczyna się w punkcie `(0, 0)`, a kończy w punkcie `(20000, 0)`. Dron poza startem i lądowaniem jest zawsze na wysokości większej od zera.\n\nPlik `dron.txt` zawiera 100 wierszy, w których zapisano dane dotyczące ruchu drona. W każdym wierszu jest zapisana para liczb całkowitych rozdzielonych znakiem spacji. Pierwsza liczba oznacza przemieszczenie drona (odległość) w poziomie od ostatniej pozycji – jest to zawsze liczba dodatnia. Druga liczba oznacza przemieszczenie w pionie od ostatniej pozycji. Jeśli druga liczba jest dodatnia, to dron wykonał ruch w górę, jeśli ujemna – w dół, a jeśli równa 0 – nie zmieniał wysokości.\n\nPrzykład 1.\n\nDla przykładowych danych:\n\n```text\n3000 2000\n2000 9000\n5000 -7000\n5000 4000\n3000 6000\n2000 -14000\n```\n\nlot drona można zilustrować na wykresie:\n\n[Wykres – strona 10 oryginalnego arkusza](arkusz-2025.pdf#page=10)\n\ngdzie:\n\n- x – odległość w poziomie od punktu startowego\n- y – wysokość (odległość w pionie od punktu startowego)\n- [A, B] – umieszczone na wykresie pary liczb oznaczające przemieszczenia drona odpowiednio w poziomie i w pionie.\n\nNapisz program (lub kilka programów), który(-e) znajdzie(-dą) odpowiedzi dla podanych zadań. Każdą odpowiedź zapisz w pliku `wyniki3.txt` i poprzedź ją numerem oznaczającym zadanie.\n\nDo Twojej dyspozycji jest plik `dron_przyklad.txt` zawierający 10 wierszy danych w opisanej postaci. Odpowiedzi dla pliku `dron_przyklad.txt` są podane pod każdym zadaniem. Pamiętaj, że Twój program musi ostatecznie zadziałać na pliku `dron.txt` zawierającym 100 wierszy danych."
    },
    {
     "id": "s006",
     "title": "Zadanie 3.1. (0–2)",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie 3.1. (0–2)\n\n### Zadanie 3.1. (0–2)\n\nDla każdego przesunięcia `[A, B]` zapisanego w pliku `dron.txt` oblicz największy wspólny dzielnik (NWD) wartości bezwzględnych liczb `A` i `B`. Podaj liczbę par `[A, B]`, dla których największy wspólny dzielnik wartości bezwzględnych liczb `A` i `B` jest większy od 1.\n\n**Uwaga:** przyjmujemy, że `NWD(A, 0) = A`.\n\nOdpowiedź dla pliku `dron_przyklad.txt` to\n\n```text\n6\n```"
    },
    {
     "id": "s007",
     "title": "Zadanie 3.2. (0–4)",
     "kind": "matura",
     "context": "",
     "markdown": "## Zadanie 3.2. (0–4)\n\n### Zadanie 3.2. (0–4)\n\nRozważmy wszystkie punkty, w których dron znajdował się po wykonaniu kolejnych ruchów (przesunięć).\n\nDla danych z przykładu 1. będą to punkty: `(3000, 2000)`, `(5000, 11000)`, `(10000, 4000)`, `(15000, 8000)`, `(18000, 14000)` i `(20000, 0)`.\n\n**a)** Podaj, ile spośród wszystkich rozważanych punktów znajduje się wewnątrz kwadratu o wierzchołkach `(0, 0)`, `(0, 5000)`, `(5000, 5000)`, `(5000, 0)`. Nie liczymy punktów leżących na krawędziach kwadratu.\n\n**b)** Spośród wszystkich rozważanych punktów znajdź i podaj trzy różne, takie, że jeden z nich jest środkiem odcinka o końcach w pozostałych dwóch. Jest tylko jedna taka trójka punktów.\n\n**Uwaga:** punkty należące do szukanej trójki nie muszą być trzema kolejnymi punktami, do których przemieszczał się dron.\n\nOdpowiedź dla pliku `dron_przyklad.txt` to:\n\n```text\na) 2\nb) (14000, 3014), (16000, 2010), (18000, 1006)\n```\n\nDo oceny oddajesz:\n\n- plik `wyniki3.txt` – zawierający odpowiedzi do zadań 3.1.–3.2. (odpowiedź do każdego zadania powinna być poprzedzona jego numerem)\n- pliki zawierające kody źródłowe Twojego(-ich) programu(-ów) o nazwach (uwaga: brak tych plików jest równoznaczny z brakiem rozwiązania zadania):"
    },
    {
     "id": "s008",
     "title": "Przekład polecenia na interfejsy",
     "kind": "theory",
     "context": "",
     "markdown": "## Przekład polecenia na interfejsy\n\nPotrzebne są cztery niezależne funkcje: odczyt par, liczenie NWD, odtwarzanie punktów i wyszukiwanie geometryczne. Listy ruchów i punktów mają taką samą długość, ale przechowują inne dane.\n\nPełne dane mają 100 wierszy, przykładowe 10. Start to (0,0), końcowy punkt (20000,0). Warto sprawdzić te warunki jeszcze przed analizą szczegółowych odpowiedzi.\n\n```python\nruchy_demo = [(2000,1001),(2000,1004)]\nx = sum(dx for dx,dy in ruchy_demo)\ny = sum(dy for dx,dy in ruchy_demo)\nprint(x,y)\n```"
    },
    {
     "id": "s009",
     "title": "Zadanie 1: Odczyt i warunki danych",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 1: Odczyt i warunki danych\n\n**Dane:** Plik `dron_przyklad.txt`: w każdym wierszu dwie liczby całkowite `dx dy`, przy czym `dx > 0`.\n\n**Do wykonania:** Napisz funkcję `wczytaj(nazwa)` samodzielnie odczytującą pary przesunięć. Program ma rozpoznawać niewłaściwą liczbę pól i niedodatnie `dx`. Nie korzystaj z danych przygotowanych w innej karcie.\n\n**Wynik:** Zwróć listę par liczb całkowitych i zapisz ją w `ruchy_p`. Wyświetl jej długość; przykład CKE zawiera 10 ruchów. Jeśli wiersz ma niewłaściwą liczbę wartości albo `dx <= 0`, przerwij odczyt z informacją o błędnym wierszu, zamiast go pomijać.\n\n**Przykład wyjaśniający:** Wiersz `20 -5` oznacza ruch o 20 w prawo i 5 w dół; ma dać parę `(20, -5)`. Wiersz `0 5` jest niepoprawny w tym zadaniu, bo dron ma w każdym ruchu przesuwać się w prawo. Ujemne `dy` jest natomiast dozwolone."
    },
    {
     "id": "s010",
     "title": "Zadanie 2: 3.1: NWD i zliczanie",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: 3.1: NWD i zliczanie\n\n**Dane:** Lista przesunięć `(dx, dy)` oraz warunek zadania 3.1 matury 2025.\n\n**Do wykonania:** Napisz własne `nwd(a, b)` i `z31(ruchy)`. Policz przesunięcia, dla których NWD wartości bezwzględnych obu współrzędnych przekracza 1. Przy zerowym `dy` obowiązuje NWD opisane w arkuszu.\n\n**Wynik:** Zwróć liczbę ruchów spełniających warunek. Dla każdego ruchu rozpatruj jego `dx` oraz `dy`, a nie położenie drona po tym ruchu. Wyświetl odpowiedź dla `ruchy_p`, porównaj z przykładem CKE i wyjaśnij rolę znaków współrzędnych.\n\n**Przykład wyjaśniający:** Dla ruchów `[(6, -9), (5, 2), (4, 0)]` odpowiedź wynosi 2. Pierwszy ma NWD równe 3, drugi 1, a trzeci 4. NWD liczby i zera jest wartością bezwzględną tej liczby, więc poziomy ruch też może spełniać warunek."
    },
    {
     "id": "s011",
     "title": "Punkty po ruchach i warunki brzegowe",
     "kind": "theory",
     "context": "",
     "markdown": "## Punkty po ruchach i warunki brzegowe\n\nDla 3.2 a liczymy tylko punkty po ruchach, które spełniają oba ścisłe warunki 0<x<5000 i 0<y<5000. Dla 3.2 b punkty nie muszą być kolejne.\n\nWspółrzędne x rosną, więc przy i<j końce odcinka są różne. Środek leży pomiędzy nimi w osi x. Warunek parzystości chroni przed wskazaniem fałszywego środka przez dzielenie całkowite.\n\n```python\na,c = (0,0),(3,3)\nprint(\"Suma współrzędnych:\", a[0]+c[0], a[1]+c[1])\nprint(\"Czy suma współrzędnych x jest parzysta?\", (a[0]+c[0]) % 2 == 0)\n```"
    },
    {
     "id": "s012",
     "title": "Zadanie 3: Punkty po kolejnych ruchach",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 3: Punkty po kolejnych ruchach\n\n**Dane:** Kolejne przesunięcia drona. Lot rozpoczyna się w `(0, 0)`.\n\n**Do wykonania:** Napisz funkcję `trasa(ruchy)` wyznaczającą punkty osiągnięte po kolejnych ruchach. Nie dodawaj punktu startowego jako osobnego elementu.\n\n**Wynik:** Zwróć listę położeń drona, po jednym punkcie na każdy ruch. Każdy ruch odbywa się z miejsca osiągniętego wcześniej. Dla danych przykładowych wyświetl dwa pierwsze punkty i ostatni; porównaj ostatni z miejscem lądowania `(20000, 0)`.\n\n**Przykład wyjaśniający:** Ruchy `[(4, 3), (2, -1)]` dają punkty `[(4, 3), (6, 2)]`. Drugie przesunięcie dodaje się do dotychczasowego położenia. Początku `(0, 0)` nie wpisujemy osobno do listy punktów badanych w następnych podpunktach."
    },
    {
     "id": "s013",
     "title": "Zadanie 4: 3.2 a: wnętrze kwadratu",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: 3.2 a: wnętrze kwadratu\n\n**Dane:** Punkty trasy po ruchach i kwadrat o wierzchołkach `(0, 0)`, `(0, 5000)`, `(5000, 5000)`, `(5000, 0)`.\n\n**Do wykonania:** Napisz funkcję `z32a(punkty)` zliczającą punkty położone ściśle we wnętrzu kwadratu. Nie uwzględniaj krawędzi ani wierzchołków.\n\n**Wynik:** Zwróć liczbę zapisanych punktów trasy, które leżą we wnętrzu kwadratu. Nie obliczaj długości lotu w tym obszarze ani liczby przecięć jego granicy. Wyświetl wynik dla trasy przykładowej i porównaj z odpowiedzią CKE.\n\n**Przykład wyjaśniający:** Dla punktów `[(100, 200), (5000, 200), (5100, 100)]` liczymy tylko pierwszy. Drugi jest na krawędzi, trzeci poza obszarem. Nawet jeśli odcinek lotu przebiega przez kwadrat, nie dodaje to punktów, których nie ma na liście położeń po ruchach."
    },
    {
     "id": "s014",
     "title": "Zadanie 5: 3.2 b: wszystkie kandydatury",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: 3.2 b: wszystkie kandydatury\n\n**Dane:** Lista punktów trasy drona, o rosnących współrzędnych `x`. Treść zadania 3.2 b gwarantuje jedną szukaną trójkę.\n\n**Do wykonania:** Napisz funkcję `z32b(punkty)` znajdującą wszystkie trójki różnych punktów `(A, M, C)`, w których `M` jest dokładnym środkiem `AC`. Końce uporządkuj według rosnącego `x`. Nie ograniczaj się do sąsiednich punktów.\n\n**Wynik:** Zwróć listę znalezionych trójek `(A, M, C)`, gdzie każda litera oznacza parę współrzędnych istniejącego punktu trasy. Dla danych maturalnych lista ma zawierać jedną trójkę. Wyświetl wynik dla przykładu i porównaj z arkuszem. Oczekiwany koszt wyszukiwania: O(n²).\n\n**Przykład wyjaśniający:** Z punktów `[(1, 1), (2, 8), (3, 3), (5, 5)]` pasuje trójka `((1, 1), (3, 3), (5, 5))`. Punkt `(3, 3)` leży dokładnie w połowie między końcami, choć wybrane punkty nie zajmują trzech kolejnych miejsc na liście."
    },
    {
     "id": "s015",
     "title": "Złożenie, plik i obrona rozwiązania",
     "kind": "theory",
     "context": "",
     "markdown": "## Złożenie, plik i obrona rozwiązania\n\nWynik 3.1 jest liczbą, 3.2 a także liczbą, a 3.2 b trójką punktów. Zachowaj te typy do etapu formatowania. W raporcie tekstowym podpisz 3.1 oraz obie części 3.2.\n\nNa koniec uruchom rozwiązanie w świeżym jądrze, sprawdź przykład CKE, pełne dane i ponownie odczytaj plik. Przy odpowiedzi ustnej wyjaśnij, dlaczego trójka jest poprawna i jaki koszt ma wyszukiwanie.\n\n```python\na,m,c = (14000,3014),(16000,2010),(18000,1006)\nprint(\"Współrzędna x:\", 2*m[0], a[0]+c[0])\nprint(\"Współrzędna y:\", 2*m[1], a[1]+c[1])\n```"
    },
    {
     "id": "s016",
     "title": "Zadanie 6: Całe zadanie na przykładzie",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Całe zadanie na przykładzie\n\n**Dane:** Lista ruchów zgodna z wymaganiami zadania maturalnego.\n\n**Do wykonania:** Napisz funkcję `rozwiaz(ruchy)` łączącą odpowiedzi do 3.1, 3.2 a i 3.2 b. Rozwiązanie ma rozpoznawać brak dokładnie jednej trójki oraz nieprawidłowy punkt końcowy lotu, zamiast bezwarunkowo wybierać dowolny wynik.\n\n**Wynik:** Dla poprawnych danych zwróć krotkę `(wynik_31, wynik_32a, jedyna_trojka)`: liczbę ruchów z NWD > 1, liczbę punktów wewnątrz kwadratu i trójkę `(A, M, C)`. Przy niezgodności danych przerwij obliczenia z informacją o problemie. Wyświetl podpisany wynik dla pliku przykładowego.\n\n**Przykład wyjaśniający:** Jeśli wyszukiwanie zwróci pustą listę albo dwie trójki, nie można uznać zadania za poprawnie zakończone przez wybranie dowolnego elementu. Podobnie końcowy punkt `(20000, 1)` nie jest wymaganym lądowaniem `(20000, 0)`. W obu sytuacjach program ma zasygnalizować problem."
    },
    {
     "id": "s017",
     "title": "Zadanie 7: Pełne dane i kontrola relacji",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Pełne dane i kontrola relacji\n\n**Dane:** Pełny plik `dron.txt`, zawierający 100 przesunięć.\n\n**Do wykonania:** Samodzielnie wczytaj plik i oblicz komplet odpowiedzi w `odp`. Dla znalezionych punktów A, M, C uzasadnij niezależnie, że M jest środkiem odcinka, sprawdzając obie współrzędne.\n\n**Wynik:** W `odp` zapisz wynik w formacie z zadania 6 i wyświetl trzy podpisane odpowiedzi. Dla znalezionej trójki pokaż na liczbach, że środkowy punkt jest środkiem w obu współrzędnych. Wskaż również, że A, M i C występują na obliczonej trasie.\n\n**Przykład wyjaśniający:** Dla przykładowych punktów A = `(2, 4)` i C = `(8, 10)` środkiem jest M = `(5, 7)`. Uzasadnienie powinno dotyczyć zarówno współrzędnej x, jak i y. Zgodność tylko jednej współrzędnej nie wystarcza do potwierdzenia środka odcinka."
    },
    {
     "id": "s018",
     "title": "Zadanie 8: wyniki3.txt i komplet oddania",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: wyniki3.txt i komplet oddania\n\n**Dane:** Komplet odpowiedzi `odp` dla pełnego pliku.\n\n**Do wykonania:** Przygotuj zapis `wyniki3.txt` i ponowny odczyt jego zawartości. Zapisz notatnik tak, aby po restarcie jądra można było uruchomić rozwiązanie od początku.\n\n**Wynik:** Zapisz trzy podpisane części: `3.1.` z liczbą ruchów, `3.2. a)` z liczbą punktów oraz `3.2. b)` ze współrzędnymi A, M, C w tej kolejności. Ponownie odczytaną treść zapisz w `odczyt_wyniku` i wyświetl. Przygotuj ustne wyjaśnienie kosztu wyszukiwania trójki.\n\n**Przykład wyjaśniający:** Zapis punktu `(2, 4)` oznacza współrzędne, a nie indeks 2 i wartość 4. W ostatniej części raportu trzeba podać trzy takie pary, np. `A=(2, 4), M=(5, 7), C=(8, 10)`, z własnymi obliczonymi wartościami. Sama liczba znalezionych trójek nie odpowiada na pytanie arkusza."
    },
    {
     "id": "s019",
     "title": "Podsumowanie",
     "kind": "theory",
     "context": "",
     "markdown": "## Podsumowanie\n\nWyjaśnij jedno własne rozwiązanie i wskaż ważny przypadek brzegowy. W zadaniu plikowym pokaż kod od otwarcia pliku do zapisania odpowiedzi."
    },
    {
     "id": "s020",
     "title": "3. Zadania do samodzielnego wykonania",
     "kind": "homework",
     "context": "",
     "markdown": "## 3. Zadania do samodzielnego wykonania\n\nWykonaj zadania 9–10 przed następnym spotkaniem i zapisz własne rozwiązania."
    },
    {
     "id": "s021",
     "title": "Zadanie 9: wyszukiwanie trzema pętlami",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 9: wyszukiwanie trzema pętlami\n\n**Dane:** Lista punktów uporządkowana według ściśle rosnącego `x`.\n\n**Do wykonania:** Napisz alternatywne `trojki_wolno(punkty)`, które rozpatruje wszystkie trójki indeksów `i < j < k` i wybiera te, w których drugi punkt jest środkiem odcinka między pozostałymi. Zastosuj trzy pętle.\n\n**Wynik:** Zwróć listę trójek punktów w tym samym formacie co `z32b`. Dla trasy przykładowej obie funkcje mają wskazać te same trójki; kolejność całej listy nie jest istotna. Wyjaśnij, dlaczego trzy niezależne wybory indeksu zwiększają koszt do O(n³).\n\n**Przykład wyjaśniający:** Warunek `i < j < k` oznacza wybór trzech różnych miejsc we właściwej kolejności, ale niekoniecznie sąsiednich. Z listy pięciu punktów można rozpatrzyć np. indeksy 0, 2 i 4. Nie chodzi wyłącznie o okna `(0, 1, 2)`, `(1, 2, 3)` itd."
    },
    {
     "id": "s022",
     "title": "Zadanie 10: poprawność fizyczna trasy",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 10: poprawność fizyczna trasy\n\n**Dane:** Lista przesunięć drona. Poprawny lot zaczyna się w `(0, 0)`, kończy w `(20000, 0)`, każdy ruch ma dodatnie `dx`, a wszystkie punkty po ruchach poza lądowaniem mają dodatnie `y`.\n\n**Do wykonania:** Napisz funkcję `poprawny_lot(ruchy)` sprawdzającą jednocześnie wszystkie podane wymagania. Pustą listę uznaj za niepoprawny lot.\n\n**Wynik:** Zwróć `True` tylko wtedy, gdy wszystkie warunki lotu są spełnione jednocześnie; w przeciwnym razie `False`. Pokaż wynik dla danych przykładowych oraz krótkiego przypadku, w którym naruszysz jedną regułę. Nazwij tę regułę.\n\n**Przykład wyjaśniający:** Ruchy `[(10000, 2), (10000, -2)]` spełniają wymagania: po pierwszym ruchu dron jest nad osią, po drugim ląduje w `(20000, 0)`. Ruchy `[(10000, 0), (10000, 0)]` kończą się w tym samym miejscu, lecz pierwszy punkt już leży na osi, więc lot jest niepoprawny."
    }
   ]
  }
 ]
};
