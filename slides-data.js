window.PYTHON_COURSE = {
 "meta": {
  "title": "Python — programowanie do matury rozszerzonej",
  "shortTitle": "Python · matura rozszerzona",
  "standard": "Powtórzenie i zadania maturalne · 12 lekcji",
  "teacher": "por. Jakub GRĄTKIEWICZ",
  "email": "jakub.gratkiewicz@wat.edu.pl",
  "lessonCount": 12,
  "sectionCount": 299,
  "setupCount": 1,
  "setupSectionCount": 17,
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
   "checksum": "e76af0620a2994402a520cdba57a0b014d4bce90bf2062063e78834a6fdc32b0",
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
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nPrzypomnij potrzebne narzędzia, przeczytaj kontrakt funkcji i sam napisz rozwiązanie. W zadaniach z plikiem pamiętaj również o odczycie danych i wymaganym zapisie wyniku."
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
     "markdown": "## Zadanie 1: Indeksy i wycinki\n\nDla s='matura' utwórz krotkę wycinki: pierwszy znak, ostatni znak, znaki o indeksach 1–3 i odwrócony napis.\n\n**Wskazówka:** Koniec wycinka jest wyłączony."
    },
    {
     "id": "s006",
     "title": "Zadanie 2: Kopia danych",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: Kopia danych\n\nUtwórz lista_a=[3,1,3] i jej kopię lista_b. Dopisz 9 tylko do lista_b. Zapisz, co stałoby się po lista_b=lista_a.\n\n**Wskazówka:** Użyj copy, a nie samego przypisania."
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
     "markdown": "## Zadanie 3: Filtr jako funkcja\n\nNapisz dodatnie(liczby), zwracającą nową listę elementów >0 w kolejności wejścia. Nie zmieniaj argumentu.\n\n**Wskazówka:** Potrzebujesz listy wynikowej i return po pętli."
    },
    {
     "id": "s009",
     "title": "Zadanie 4: Wiadomość z przesuniętym alfabetem",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: Wiadomość z przesuniętym alfabetem\n\nNapisz szyfruj(wiadomosc,k), przesuwającą każdą wielką literę A–Z o k pozycji w alfabecie. Po Z wracamy do A. Spacje pozostaw bez zmian; innych znaków w danych nie ma. Załóż 0<=k<=25. Wyświetl zaszyfrowaną wiadomość \"TAJNA BAZA\" dla k=3 i wyjaśnij, co stanie się z literą Z.\n\n**Wskazówka:** Metoda alfabet.index(znak) podaje pozycję litery; reszta z dzielenia pozwala zawijać alfabet."
    },
    {
     "id": "s010",
     "title": "Zadanie 5: Palindrom dwoma wskaźnikami",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: Palindrom dwoma wskaźnikami\n\nNapisz palindrom(s) bez odwracania napisu. Porównuj znaki symetryczne. Pusty napis i pojedynczy znak uznaj za palindromy.\n\n**Wskazówka:** Dla i=0 drugim indeksem jest len(s)-1."
    },
    {
     "id": "s011",
     "title": "Zadanie 6: Wynik i numer wiersza",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Wynik i numer wiersza\n\nNapisz pierwsze_max(liczby), zwracającą parę (maksimum, numer od 1). Przy remisie zachowaj pierwszy wiersz; dla pustej listy zwróć None.\n\n**Wskazówka:** Przy równości nie aktualizuj zapamiętanego indeksu."
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
     "markdown": "## Zadanie 7: Histogram znaków\n\nNapisz histogram(s), zwracającą słownik liczności znaków bez Counter. Wielkość liter ma znaczenie.\n\n**Wskazówka:** Brakujący znak ma dotychczasową liczność zero."
    },
    {
     "id": "s014",
     "title": "Zadanie 8: Punkty w grze słownej",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: Punkty w grze słownej\n\nW naszej grze litery A,E,I,O,U dają po 1 punkcie, pozostałe litery A–Z po 2. Słowo o długości co najmniej 6 dostaje dodatkowo 5 punktów. Napisz punkty_slowa(slowo) i wyświetl punkty słów KOT, PYTHON i ALA. Załóż, że słowa zawierają tylko wielkie litery A–Z. Powtórzenia liter liczą się osobno.\n\n**Wskazówka:** Dodawaj punkty za każde wystąpienie litery, a premię dopiero po przejściu całego słowa."
    },
    {
     "id": "s015",
     "title": "Zadanie 9: Usuwanie duplikatów z zachowaniem kolejności",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 9: Usuwanie duplikatów z zachowaniem kolejności\n\nNapisz unikalne(dane). [4,2,4,7,2] ma dać [4,2,7]. Użyj listy wynikowej i zbioru wartości już napotkanych.\n\n**Wskazówka:** Sam set nie przechowuje kolejności potrzebnej do tego zadania."
    },
    {
     "id": "s016",
     "title": "Zadanie 10: Dwie podpowiedzi do sejfu",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 10: Dwie podpowiedzi do sejfu\n\nSejf ma czteroznakowy kod z cyfr, które się nie powtarzają; zero może być pierwsze. Próba otwarcia także zawiera cztery różne cyfry. Napisz podpowiedz(kod,proba), zwracającą (cyfry na właściwym miejscu, poprawne cyfry na innym miejscu). Każdą cyfrę uwzględnij tylko w jednej grupie. Wyświetl podpowiedź dla kodu \"5072\" i próby \"5209\".\n\n**Wskazówka:** Kod przechowuj jako napis. Najpierw porównaj pozycje, dopiero potem sprawdzaj obecność cyfry."
    },
    {
     "id": "s017",
     "title": "Zadanie 11: Raport o napisach",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 11: Raport o napisach\n\nNapisz raport_napisow(napisy): zwróć parę (lista palindromów, słownik liczności długości). Zachowaj kolejność i powtarzające się palindromy. Połącz wcześniejsze funkcje.\n\n**Wskazówka:** Nie zastępuj listy znalezionych napisów zbiorem."
    },
    {
     "id": "s018",
     "title": "Zadanie 12: Kompresja sygnału",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 12: Kompresja sygnału\n\nNadajnik zapisuje sygnał jako ciąg liter A–Z. Napisz spakuj(sygnal), zastępującą każdą serię jednakowych sąsiednich liter parą (litera, długość serii). Zwróć listę takich par, a dla pustego napisu pustą listę. Wyświetl zapis \"AAABBCA\". Dwa bloki tej samej litery rozdzielone innym znakiem mają pozostać osobnymi parami.\n\n**Wskazówka:** Zamknij serię po zmianie litery. Ostatnią serię dopisz już po zakończeniu pętli."
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
     "markdown": "## Zadanie 13: anagramy\n\nNapisz anagramy(a,b). Porównuj dokładnie znaki, bez ignorowania spacji i wielkości liter. Wykorzystaj histogramy.\n\n**Wskazówka:** Kolejność nie jest ważna, liczności są."
    },
    {
     "id": "s022",
     "title": "Zadanie 14: najdłuższy napis",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 14: najdłuższy napis\n\nNapisz najdluzszy(napisy), zwracającą pierwszy najdłuższy napis; dla pustej listy None. Nie sortuj całej listy.\n\n**Wskazówka:** Jedno przejście po liście wystarczy."
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
   "checksum": "c12a4adf2ca3b5bfb093fa139df4bc3b1e5bb5a668464d31a06104f2b122d44c",
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
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nPrzypomnij potrzebne narzędzia, przeczytaj kontrakt funkcji i sam napisz rozwiązanie. W zadaniach z plikiem pamiętaj również o odczycie danych i wymaganym zapisie wyniku."
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
     "title": "Zadanie 1: Białe znaki",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 1: Białe znaki\n\nNapisz pola(wiersz), zwracającą listę liczb całkowitych. Obsłuż wielokrotne spacje, tabulatory i pusty wiersz.\n\n**Wskazówka:** Przypomnij sobie różnicę między split() i split(' ')."
    },
    {
     "id": "s006",
     "title": "Zadanie 2: Samodzielne wczytanie jednej kolumny",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: Samodzielne wczytanie jednej kolumny\n\nPlik skrot_przyklad.txt zawiera jedną liczbę w każdym wierszu. Napisz czytaj_liczby(nazwa): sam otwórz plik i wczytaj liczby. Wywołaj ją dla tego pliku, zapisz listę w a. Sprawdź liczbę rekordów oraz pierwszy i ostatni element. Nie przepisuj danych do kodu.\n\n**Wskazówka:** Odczyt zwraca tekst; konwersja jest częścią Twojego rozwiązania."
    },
    {
     "id": "s007",
     "title": "Zadanie 3: Sygnał z radioteleskopu",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 3: Sygnał z radioteleskopu\n\nPlik sygnal.txt zawiera po jednym całkowitym pomiarze w wierszu. Sam otwórz plik i wczytaj dane. Policz, ile razy pomiar jest większy od poprzedniego; pierwszy pomiar nie ma poprzednika, a równe wartości nie są wzrostem. Wyświetl wynik i zapisz go jako jedną liczbę do wyniki-sygnal.txt. Kolejność wierszy ma znaczenie.\n\n**Wskazówka:** Porównuj sąsiednie pomiary. Zliczanie samych różnych wartości nie da odpowiedzi."
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
     "title": "Zadanie 4: Dwa wiersze, dwa znaczenia",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: Dwa wiersze, dwa znaczenia\n\nNapisz dwa_wiersze(nazwa). Sam otwórz liczby_przyklad.txt, odczytaj dwa wiersze i zwróć dwie listy liczb. Zapisz je w a i b. Pierwszy wiersz to czynniki, drugi to liczby do zbadania. Potwierdź 200 i 20 elementów.\n\n**Wskazówka:** Nie spłaszczaj dwóch rekordów do jednej listy."
    },
    {
     "id": "s010",
     "title": "Zadanie 5: Pary przesunięć",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: Pary przesunięć\n\nNapisz czytaj_pary(nazwa), samodzielnie otwierającą plik i wymagającą dwóch liczb w każdym wierszu. Wczytaj dron_przyklad.txt do r. Potwierdź 10 par, pierwszą (2000,1001) i ostatnią (2000,-1006).\n\n**Wskazówka:** Konwertuj i sprawdzaj osobno każdy wiersz."
    },
    {
     "id": "s011",
     "title": "Zadanie 6: Paczki, które jeszcze jadą",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Paczki, które jeszcze jadą\n\nPlik paczki.txt ma wiersze identyfikator;zdarzenie. START oznacza wysłanie paczki, KONIEC — dostarczenie. Zdarzenia zapisano chronologicznie; ten sam identyfikator może zostać wysłany ponownie po dostarczeniu. Sam odczytaj plik. Ustal, które paczki są nadal w drodze, i zapisz ich identyfikatory alfabetycznie, po jednym wierszu, do wyniki-paczki.txt. Paczka może mieć KONIEC tylko wtedy, gdy jest w drodze, a START tylko wtedy, gdy w drodze nie jest. Część wysłań nie ma jeszcze dostarczenia.\n\n**Wskazówka:** Zbiór może opisywać bieżący stan. split(\";\") rozdziela pola rekordu, a sorted porządkuje identyfikatory."
    },
    {
     "id": "s012",
     "title": "Zadanie 7: Odczyt i kontrola alfabetu",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Odczyt i kontrola alfabetu\n\nNapisz bledne_wiersze(napisy), zwracającą numery od 1 napisów o długości innej niż 12 lub ze znakiem spoza o,+,*. Następnie sam otwórz symbole_przyklad.txt, wczytaj napisy bez zakończeń wierszy do napisy i sprawdź cały plik.\n\n**Wskazówka:** Nie usuwaj ostatniego symbolu razem z końcem wiersza."
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
     "title": "Zadanie 8: Raport o parach",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: Raport o parach\n\nNapisz bilans(ruchy), zwracającą (liczba_ruchow, suma_dx, suma_dy). Korzystając z własnego czytaj_pary, wczytaj ponownie dron_przyklad.txt i oblicz bilans_przykladu.\n\n**Wskazówka:** Do obliczeń przekazuj dane, nie nazwę pliku."
    },
    {
     "id": "s015",
     "title": "Zadanie 9: Rachunek w kawiarni graczy",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 9: Rachunek w kawiarni graczy\n\nSam wczytaj zamowienia.txt. Każdy wiersz ma format produkt;liczba_sztuk;cena_jednostkowa_w_groszach. Jeden produkt może występować w kilku wierszach — uwzględnij wszystkie. Oblicz liczbę zamówionych sztuk i łączny koszt. Zapisz wyniki-kawiarnia.txt: w pierwszym wierszu liczbę sztuk, w drugim kwotę w złotych z dwiema cyframi po kropce. Obliczenia wykonuj na całkowitej liczbie groszy.\n\n**Wskazówka:** Cena dotyczy jednej sztuki. Oddziel obliczenie kwoty od sposobu jej wyświetlenia."
    },
    {
     "id": "s016",
     "title": "Zadanie 10: Samodzielny zapis i odczyt",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 10: Samodzielny zapis i odczyt\n\nNapisz zapisz_liczby(nazwa, liczby): sam otwórz plik do zapisu i zapisz po jednej liczbie na wiersz. Zapisz [7,7,2] do zapis-liczb.txt, wczytaj go własną funkcją czytaj_liczby i wyświetl odczytane liczby. Następnie zapisz pustą listę do pusty-zapis.txt i opisz zawartość pliku. Nie nadpisuj plików wejściowych.\n\n**Wskazówka:** Dwa wystąpienia 7 muszą pozostać dwoma wierszami."
    },
    {
     "id": "s017",
     "title": "Zadanie 11: Cały proces na pełnym pliku",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 11: Cały proces na pełnym pliku\n\nSam wczytaj dron.txt, używając własnego kodu, oblicz bilans i zapisz raport-dron.txt: trzy wiersze z podpisami ruchy, x, y. Odczytaj go ponownie do odczyt_raportu. Wartości muszą wynikać z danych, a nie z przepisania oczekiwanej odpowiedzi.\n\n**Wskazówka:** Kompletne rozwiązanie obejmuje odczyt, obliczenia i zapis."
    },
    {
     "id": "s018",
     "title": "Zadanie 12: Punktacja ligi robotów",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 12: Punktacja ligi robotów\n\nPlik mecze.txt zawiera wiersze druzyna_A;druzyna_B;gole_A;gole_B. Za wygraną przyznaj 3 punkty, za remis każdej drużynie po 1, za przegraną 0. Sam wczytaj wyniki i zsumuj punkty drużyn. Zapisz wyniki-liga.txt w formacie nazwa;punkty, zachowując kolejność pierwszego pojawienia się drużyny w pliku. Uwzględnij również drużynę, która nie zdobyła żadnego punktu.\n\n**Wskazówka:** W słowniku zapamiętaj obie drużyny, zanim przyznasz punkty. Nie twórz osobnej pozycji za każdy mecz."
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
     "title": "Zadanie 13: pierwszy błędny rekord",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 13: pierwszy błędny rekord\n\nNapisz pierwszy_blad(wiersze), zwracającą numer pierwszego wiersza niebędącego parą liczb całkowitych. Obsłuż ValueError. Dla poprawnych danych zwróć None.\n\n**Wskazówka:** Zła liczba pól i tekst zamiast liczby to różne błędy."
    },
    {
     "id": "s022",
     "title": "Zadanie 14: od pliku do indeksów palindromów",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 14: od pliku do indeksów palindromów\n\nW nowej komórce sam otwórz symbole_przyklad.txt i wczytaj napisy. Zapisz w numery_palindromow numery wierszy będących palindromami, licząc od 1. Nie polegaj na liście utworzonej wcześniej.\n\n**Wskazówka:** Numer wiersza i indeks listy nie są tym samym."
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
   "checksum": "02ed1608dc3c3143ab07dfbff1f26c3abadf6f06cddd63d80bef277edf9d4a8e",
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
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nPrzypomnij potrzebne narzędzia, przeczytaj kontrakt funkcji i sam napisz rozwiązanie. W zadaniach z plikiem pamiętaj również o odczycie danych i wymaganym zapisie wyniku."
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
     "markdown": "## Zadanie 1: Ostatnia cyfra\n\nNapisz rozdziel(n,p), zwracającą (iloraz, reszta). Załóż n>=0 i 2<=p<=16. Sprawdź 45 dla podstawy 2 oraz 255 dla 16.\n\n**Wskazówka:** Reszta nie musi być pojedynczą cyfrą dziesiętną."
    },
    {
     "id": "s006",
     "title": "Zadanie 2: Suma i liczba cyfr",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: Suma i liczba cyfr\n\nNapisz statystyka_cyfr(n), bez str, zwracającą (suma cyfr, liczba cyfr) dla n>=0. Dla 0: (0,1), dla 407: (11,3).\n\n**Wskazówka:** Obsłuż zero przed pętlą."
    },
    {
     "id": "s007",
     "title": "Zadanie 3: Cyfra kontrolna kapsuły",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 3: Cyfra kontrolna kapsuły\n\nKapsuła ma pięciocyfrowy numer. Pomnóż jego cyfry, czytane od lewej, kolejno przez 1,2,3,4,5 i dodaj iloczyny. Cyfra kontrolna to najmniejsza liczba od 0 do 9, która dodana do tej sumy daje wielokrotność 10. Napisz numer_kapsuly(n), dopisującą tę cyfrę z prawej strony numeru. Załóż 10000<=n<=99999; nie używaj str. Wyświetl numer dla 31415.\n\n**Wskazówka:** Jeśli pobierasz cyfry od prawej przez %, zacznij od wagi 5."
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
     "markdown": "## Zadanie 4: Horner dla dowolnej podstawy\n\nNapisz horner(cyfry,p), przyjmującą listę cyfr od lewej, 2<=p<=16. Załóż, że każda cyfra należy do zakresu od 0 do p-1. [1,0,1,1] w bazie 2 daje 11, [15,15] w bazie 16 daje 255. Wyświetl obie wartości.\n\n**Wskazówka:** Nie obliczaj za każdym razem całej potęgi; rozszerz dotychczasowy prefiks."
    },
    {
     "id": "s010",
     "title": "Zadanie 5: Panel czterech lampek",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: Panel czterech lampek\n\nNa panelu lampki zasilanie, radio, kamera i alarm mają wagi 1,2,4,8. Liczba kod od 0 do 15 jest sumą wag włączonych lampek. Napisz lampki(kod), zwracającą cztery wartości 0 lub 1 w podanej kolejności. Użyj // i %, bez operatorów bitowych. Wyświetl stan panelu dla kodów 0, 5, 13 i 15.\n\n**Wskazówka:** Każda lampka odpowiada jednej cyfrze zapisu dwójkowego; zacznij od cyfry jedności."
    },
    {
     "id": "s011",
     "title": "Zadanie 6: Liczba na cyfry",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Liczba na cyfry\n\nNapisz cyfry_w_bazie(n,p), zwracającą listę cyfr od lewej dla n>=0 i p>=2. Dla zera zwróć [0]. Wyświetl zapisy liczb 0, 11 i 50 w systemie trójkowym.\n\n**Wskazówka:** Kolejność reszt jest przeciwna do kolejności zapisu."
    },
    {
     "id": "s012",
     "title": "Zadanie 7: Nieparzysty skrót",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Nieparzysty skrót\n\nNapisz skrot(n) dla n>0. Zostaw tylko cyfry nieparzyste, zachowując kolejność. Zwróć 0, jeżeli skrót nie istnieje. Nie używaj napisów, list ani funkcji wbudowanych wewnątrz skrot.\n\n**Wskazówka:** Pozycję zwiększ tylko po zachowanej cyfrze."
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
     "markdown": "## Zadanie 8: Własne NWD\n\nNapisz nwd(a,b) algorytmem Euklidesa. Obsłuż wartości ujemne i zero. Porównaj z ręcznym wynikiem dla (84,35).\n\n**Wskazówka:** Jednoczesne przypisanie korzysta ze starych wartości a i b."
    },
    {
     "id": "s015",
     "title": "Zadanie 9: Identyczne paczki ratunkowe",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 9: Identyczne paczki ratunkowe\n\nMasz 12 butelek wody i 18 batonów. Trzeba wykorzystać wszystko, tworząc jak najwięcej identycznych paczek. Napisz paczki_ratunkowe(woda,batony), zwracającą (liczba paczek, butelki w paczce, batony w paczce). Oba zapasy są dodatnie. Użyj własnej funkcji nwd i wyjaśnij, dlaczego sam mniejszy zapas nie musi być odpowiedzią.\n\n**Wskazówka:** Liczba paczek musi dzielić bez reszty oba zapasy."
    },
    {
     "id": "s016",
     "title": "Zadanie 10: Dwa warunki na jednym rekordzie",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 10: Dwa warunki na jednym rekordzie\n\nNapisz wybierz(dane), zachowującą liczby z istniejącym skrótem i NWD liczby oraz skrótu równym 7. Zachowaj kolejność. Dla [224,4872,23527,123] wynik: [4872,23527].\n\n**Wskazówka:** Wylicz skrót raz dla każdego rekordu."
    },
    {
     "id": "s017",
     "title": "Zadanie 11: Dwa niezależne opisy liczby",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 11: Dwa niezależne opisy liczby\n\nNapisz raport_liczby(n), zwracającą (skrót, liczba jedynek w zapisie binarnym). Użyj funkcji z tej karty. Dla 13: (13,3), dla 224: (0,3). Wyjaśnij, czemu filtrowanie cyfr dziesiętnych nie jest filtrowaniem bitów.\n\nPlik liczby-trening.txt zawiera po jednej liczbie w wierszu. Sam go otwórz i wczytaj do lista_z_pliku. Dla każdej liczby oblicz raport; zapisz raporty_z_pliku oraz plik wyniki-trening.txt, po jednym wierszu: liczba, skrót, liczba jedynek.\n\n**Wskazówka:** Podstawa określa znaczenie pozycji i zbiór cyfr."
    },
    {
     "id": "s018",
     "title": "Zadanie 12: Rozkaz zapisany w pięciu bitach",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 12: Rozkaz zapisany w pięciu bitach\n\nRobot dostaje kod od 0 do 31. Cyfry dwójkowe o wagach 1,2,4,8 włączają kolejno akcje start, pomiar, zdjecie, powrot. Najpierw układa je w tej kolejności. Jeżeli cyfra o wadze 16 jest równa 1, odwraca kolejność całej listy. Napisz rozkaz(kod) i wyświetl akcje dla kodów 9 i 19. Kod 0 oznacza pustą listę. Użyj // i %.\n\n**Wskazówka:** Najwyższa cyfra nie oznacza dodatkowej akcji — zmienia kolejność pozostałych."
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
     "markdown": "## Zadanie 13: NWW\n\nNapisz nww(a,b) dla nieujemnych liczb. Jeśli choć jedna jest zerem, zwróć 0. Wykorzystaj NWD i dzielenie całkowite przed mnożeniem.\n\n**Wskazówka:** Iloczyn NWD i NWW jest iloczynem dodatnich argumentów."
    },
    {
     "id": "s022",
     "title": "Zadanie 14: zapis szesnastkowy",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 14: zapis szesnastkowy\n\nNapisz szesnastkowo(n) dla n>=0. Użyj cyfry_w_bazie i alfabetu 0123456789ABCDEF. Nie używaj hex w implementacji; użyj go do porównania wyników.\n\n**Wskazówka:** Cyfra o wartości 15 jest reprezentowana przez F."
    }
   ]
  },
  {
   "number": 5,
   "kind": "lesson",
   "title": "Matura 2024: Nieparzysty skrót krok po kroku",
   "sourceFile": "05_matura_2024_zadanie_3_nieparzysty_skrot/karta_pracy.ipynb",
   "notebook": "lekcje/05_matura_2024_zadanie_3_nieparzysty_skrot/karta_pracy.ipynb",
   "download": "pobierz/05_matura_2024_zadanie_3_nieparzysty_skrot.zip",
   "assetBase": "lekcje/05_matura_2024_zadanie_3_nieparzysty_skrot/",
   "checksum": "363e73baa5e17cf6b71218416bcb80faa9882c75ca23ac9615643ac7755b3458",
   "sections": [
    {
     "id": "intro",
     "title": "Cel i sposób pracy",
     "kind": "intro",
     "context": "",
     "markdown": "# Karta pracy 05. Matura 2024: Nieparzysty skrót krok po kroku\n\n**Kurs:** Python — programowanie do matury rozszerzonej z informatyki\n\n**Prowadzący:** por. Jakub GRĄTKIEWICZ · jakub.gratkiewicz@wat.edu.pl\n\n**Cel:** Pełne rozwiązanie zadania 3.1–3.3 z arkusza MINP-R0-100-2405.\n\nZnasz podstawy Pythona. Przypominamy potrzebne narzędzia i stosujemy je w coraz bardziej złożonych zadaniach.\n\nOtwórz ten notatnik w folderze bieżącej lekcji. W zadaniu plikowym samodzielnie napisz otwarcie pliku, odczyt, konwersję, obliczenia i zapis odpowiedzi. Nie ma wspólnej komórki wczytującej dane ani gotowych list z plików zadaniowych.\n\nZadania 1–8 wykonujemy na lekcji, zadania 9–10 samodzielnie. Niedokończone zadania uzupełnij przed następnym spotkaniem.\n\nW pustych komórkach roboczych wpisz własny kod. Wyświetl wyniki obliczeń i przygotuj się do wyjaśnienia swojego rozwiązania.\n\nPrzed oddaniem zrestartuj jądro, uruchom własne komórki od początku i zapisz notatnik oraz wymagane pliki wynikowe."
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
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nPrzypomnij potrzebne narzędzia, przeczytaj kontrakt funkcji i sam napisz rozwiązanie. W zadaniach z plikiem pamiętaj również o odczycie danych i wymaganym zapisie wyniku."
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
     "markdown": "## Zadanie 1: 3.1: funkcja zgodna z ograniczeniami\n\nNapisz skrot(n) arytmetycznie dla n>0. Zwracaj 0 przy braku skrótu. Przepisz funkcję tak, żeby można było zapisać ją na kartce bez biblioteki standardowej.\n\n**Wskazówka:** Każda używana zmienna wewnątrz funkcji przechowuje liczbę całkowitą."
    },
    {
     "id": "s011",
     "title": "Zadanie 2: 3.1: skróty wybranych liczb",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: 3.1: skróty wybranych liczb\n\nOblicz skróty cyfr 1,2,9 oraz liczb 10101,20003,86420. Zapisz pary liczba–skrót w slownik_skrotow i wyświetl każdą parę w osobnym wierszu. Wyjaśnij, dlaczego zera znikają.\n\n**Wskazówka:** Zero jest cyfrą parzystą."
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
     "markdown": "## Zadanie 3: Wczytanie obu przykładów\n\nNapisz wczytaj(nazwa): sam otwórz plik, wczytaj każdą liczbę i zwróć listę. Wczytaj skrot_przyklad.txt do przyklad_1 oraz skrot2_przyklad.txt do przyklad_2. Oba pliki leżą obok notatnika. Potwierdź po 20 rekordów.\n\n**Wskazówka:** Nazwy skrot i skrot2 dotyczą innych podpunktów."
    },
    {
     "id": "s014",
     "title": "Zadanie 4: 3.2: liczność i największy element",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: 3.2: liczność i największy element\n\nNapisz bez_skrotu(liczby), zwracającą (liczba rekordów bez skrótu, maksimum). Gdy grupa jest pusta, zwróć (0,None). Potwierdź (2,2428) dla pierwszego przykładu.\n\n**Wskazówka:** Aktualizacja maksimum musi być wewnątrz warunku brakującego skrótu."
    },
    {
     "id": "s015",
     "title": "Zadanie 5: 3.3: funkcja NWD",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: 3.3: funkcja NWD\n\nNapisz nwd(a,b) dla nieujemnych argumentów. Potwierdź, że NWD liczby 4872 i jej skrótu wynosi 7.\n\n**Wskazówka:** Warunek maturalny dotyczy największego dzielnika."
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
     "markdown": "## Zadanie 6: 3.3: lista odpowiedzi\n\nNapisz nwd_siedem(liczby). Zachowaj kolejność oraz wszystkie wystąpienia, nie używaj set. Sprawdź przykład CKE.\n\n**Wskazówka:** Lista wynikowa nie wymaga sortowania."
    },
    {
     "id": "s018",
     "title": "Zadanie 7: Obliczenia na pełnych danych",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Obliczenia na pełnych danych\n\nWczytaj skrot.txt i skrot2.txt. Wyświetl liczbę rekordów. Zapisz odpowiedzi w odp_32 i odp_33, wypisz je i wyjaśnij znaczenie każdego wyniku.\n\n**Wskazówka:** Ostateczny przebieg musi korzystać z nazw bez dopisku przyklad."
    },
    {
     "id": "s019",
     "title": "Zadanie 8: Pliki odpowiedzi i kontrola po zapisie",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: Pliki odpowiedzi i kontrola po zapisie\n\nSam otwórz pliki wynikowe do zapisu. Zapisz odp_32 jako dwa wiersze do wyniki3_2.txt i odp_33 po jednej liczbie do wyniki3_3.txt. Pliki mają powstać obok notatnika. Wczytaj je ponownie własną funkcją i porównaj z obliczeniami.\n\n**Wskazówka:** Sprawdzaj plik, który oddajesz, nie tylko wcześniejszy print."
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
     "markdown": "## Zadanie 9: najczęstszy skrót\n\nNapisz najczestszy_skrot(liczby), zwracającą parę (skrót, liczba wystąpień). Pomiń liczby bez skrótu. Przy remisie wybierz mniejszy skrót, a gdy żaden nie istnieje, zwróć None. Wyświetl wynik dla [13,103,130,224,57,507]. Korzystaj z własnej arytmetycznej funkcji skrot.\n\n**Wskazówka:** Słownik przechowuje, ile razy pojawił się każdy skrót."
    },
    {
     "id": "s023",
     "title": "Zadanie 10: liczby równe własnemu skrótowi",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 10: liczby równe własnemu skrótowi\n\nNapisz niezmienione(liczby), zwracającą dodatnie liczby równe własnemu skrótowi. Zachowaj kolejność i powtórzenia. Wyświetl wynik dla [13,103,57,224,135,13] i wyjaśnij, jakie cyfry mają wybrane liczby.\n\n**Wskazówka:** Usunięcie dowolnej cyfry zmniejsza liczbę cyfr dodatniej liczby."
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
   "checksum": "2075ebeeb0303dbaff81a796783d9657faca2346ef77de31009c519e7ac84a3a",
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
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nPrzypomnij potrzebne narzędzia, przeczytaj kontrakt funkcji i sam napisz rozwiązanie. W zadaniach z plikiem pamiętaj również o odczycie danych i wymaganym zapisie wyniku."
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
     "markdown": "## Zadanie 1: Ranking z powtórzeniami\n\nNapisz kta(liczby,k), zwracającą k-tą liczbę od największej. Załóż 1<=k<=len(liczby). Nie zmieniaj argumentu.\n\n**Wskazówka:** sorted nie usuwa powtórzeń."
    },
    {
     "id": "s006",
     "title": "Zadanie 2: Liczności bez biblioteki",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: Liczności bez biblioteki\n\nNapisz licznik(dane) budującą słownik wystąpień. Sprawdź [2,2,3,5,3].\n\n**Wskazówka:** Nowy klucz zaczyna od wartości 0."
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
     "markdown": "## Zadanie 3: Choć jedna wielokrotność\n\nNapisz dzieli_jakas(p,liczby), kończącą szukanie po pierwszej wielokrotności p. Załóż p>0; pusta lista daje False.\n\n**Wskazówka:** False zwróć dopiero po sprawdzeniu całej listy."
    },
    {
     "id": "s009",
     "title": "Zadanie 4: Zliczanie wystąpień dzielników",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: Zliczanie wystąpień dzielników\n\nNapisz licz_dzielniki(pierwszy,drugi). Dla [2,2,3,7] i [12,15] wynik to 3, a nie 2 ani 4.\n\n**Wskazówka:** Nie zliczaj par (p,n); zliczaj pasujące wystąpienia p."
    },
    {
     "id": "s010",
     "title": "Zadanie 5: Rozkład liczby",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: Rozkład liczby\n\nNapisz rozklad(n) dla n>=2, zwracającą listę czynników pierwszych od najmniejszego. Dla 72: [2,2,2,3,3]. Po pętli uwzględnij pozostały duży czynnik.\n\n**Wskazówka:** Gdy d*d przekracza pozostałą liczbę, reszta >1 musi być pierwsza."
    },
    {
     "id": "s011",
     "title": "Zadanie 6: Ile robotów zbuduje warsztat?",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Ile robotów zbuduje warsztat?\n\nJeden robot wymaga 4 kół, 2 silników i 1 czujnika. Magazyn ma 14 kół, 5 silników i 9 czujników. Napisz warsztat(zapas,plan), przyjmującą dwa słowniki i zwracającą (maksymalna liczba robotów, słownik pozostałych części). Plan jest niepusty, wszystkie wymagane ilości dodatnie, zapasy nieujemne; brak części w zapasie oznacza zero. Nie zmieniaj wejściowego słownika.\n\n**Wskazówka:** Ogranicza Cię część, której wystarczy na najmniej kompletnych robotów."
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
     "markdown": "## Zadanie 7: Ograniczony iloczyn\n\nNapisz mozna(n,pierwsze), sprawdzającą budowę n z dostarczonych wystąpień liczb pierwszych. Dla [2,2,3,5]: 12 i 20 są możliwe, 16 nie.\n\n**Wskazówka:** Jedno wystąpienie w liście daje prawo do jednego dzielenia."
    },
    {
     "id": "s014",
     "title": "Zadanie 8: Dlaczego while może być błędem",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: Dlaczego while może być błędem\n\nNapisz brakujace(n,pierwsze), zwracającą słownik brakujących czynników i liczności. Dla 16 i [2,2,3] wynik to {2:2}; dla 12 to {}.\n\n**Wskazówka:** Bez ograniczenia liczności while n%p==0 zużyłby czynnik dowolnie wiele razy."
    },
    {
     "id": "s015",
     "title": "Zadanie 9: Raport zbiorczy",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 9: Raport zbiorczy\n\nNapisz raport(pierwsze,liczby,k), zwracającą (liczba pasujących dzielników, k-ta największa, lista budowalnych liczb). Dla [2,2,3,5], [12,16,20], k=2: (4,3,[12,20]).\n\nTeraz sam otwórz czynniki-trening.txt: pierwszy wiersz zawiera czynniki, drugi badane liczby. Wczytaj dwie listy i oblicz raport_z_pliku dla k=2. Zapisz trzy części raportu w trzech wierszach wyniki-trening.txt. Nie zastępuj odczytu wpisaniem list do kodu.\n\n**Wskazówka:** Każde wywołanie mozna rozpoczyna od całej badanej liczby."
    },
    {
     "id": "s016",
     "title": "Zadanie 10: Podium po kilku rundach",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 10: Podium po kilku rundach\n\nLista wyników to [(\"Ada\",14),(\"Jan\",18),(\"Ada\",7),(\"Ola\",21),(\"Ewa\",9)]. Napisz podium(rundy): zsumuj punkty każdej osoby i zwróć pierwsze trzy pary (imię, suma). Więcej punktów oznacza wyższą pozycję, a remis rozstrzyga kolejność alfabetyczna. Jeśli osób jest mniej niż trzy, zwróć wszystkie. Jedna osoba ma mieć tylko jedno miejsce w rankingu.\n\n**Wskazówka:** Najpierw zbierz sumy, dopiero potem sortuj. Klucz (-punkty, imię) łączy dwa porządki."
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
     "markdown": "## Zadanie 11: druga różna\n\nNapisz druga_rozna(liczby). Tym razem powtórzenia należy pominąć. Gdy różnych wartości jest mniej niż 2, zwróć None.\n\n**Wskazówka:** Zmieniony warunek zadania uzasadnia użycie set."
    },
    {
     "id": "s020",
     "title": "Zadanie 12: liczby z dostępnych czynników",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 12: liczby z dostępnych czynników\n\nNapisz mozliwe_liczby(pierwsze,granica), zwracającą rosnąco liczby od 2 do granica włącznie, które da się zbudować z dostępnych czynników. Dla każdej liczby korzystaj z całego zapasu od nowa. Wyświetl wynik dla pierwsze=[2,2,3,5] i granica=20.\n\n**Wskazówka:** Przejdź po kandydatach i wykorzystaj wcześniej napisaną funkcję mozna."
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
   "checksum": "4c15b218bfe7dbc72c69daf22703b522fc11aeaaa7c648bbe9adf7e27a4eb9a2",
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
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nPrzypomnij potrzebne narzędzia, przeczytaj kontrakt funkcji i sam napisz rozwiązanie. W zadaniach z plikiem pamiętaj również o odczycie danych i wymaganym zapisie wyniku."
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
     "markdown": "## Zadanie 1: Końce fragmentu\n\nNapisz opis(a,l,r), zwracającą (fragment, długość, suma), przy 0<=l<=r<=len(a). Uwzględnij pusty fragment.\n\n**Wskazówka:** r nie należy do fragmentu."
    },
    {
     "id": "s006",
     "title": "Zadanie 2: Ile okien?",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: Ile okien?\n\nNapisz liczba_okien(n,k) dla n>=0, k>=1. Gdy k>n, zwróć 0. Dla n=7,k=3 wynik to 5.\n\n**Wskazówka:** Pierwszy początek to 0, ostatni n-k."
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
     "markdown": "## Zadanie 3: Budowa prefiksów\n\nNapisz prefiksy(a), zwracającą listę n+1 sum zaczynającą się od zera. Dla [3,1,8]: [0,3,4,12].\n\n**Wskazówka:** Zerowy prefiks umożliwia fragmenty zaczynające się od 0."
    },
    {
     "id": "s009",
     "title": "Zadanie 4: Odpowiadanie na zapytania",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: Odpowiadanie na zapytania\n\nNapisz sumy_fragmentow(a,zapytania). Zbuduj prefiksy tylko raz, a następnie zwróć sumę dla każdej pary (l,r).\n\n**Wskazówka:** Nie wywołuj prefiksy ponownie dla każdego pytania."
    },
    {
     "id": "s010",
     "title": "Zadanie 5: Akumulator stacji orbitalnej",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: Akumulator stacji orbitalnej\n\nKolejne zmiany energii to [-4,3,-6,8,-2]. Wartość dodatnia oznacza ładowanie, ujemna zużycie. Napisz minimalny_zapas(zmiany), zwracającą najmniejszy nieujemny zapas początkowy, przy którym energia nigdy nie spadnie poniżej zera. Wykorzystaj sumy prefiksowe. Nie wystarczy, żeby nieujemny był tylko stan końcowy. Dla pustej listy zwróć 0.\n\n**Wskazówka:** Najniższa suma prefiksowa pokazuje największy chwilowy niedobór."
    },
    {
     "id": "s011",
     "title": "Zadanie 6: Najlepsze stałe okno",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Najlepsze stałe okno\n\nNapisz stale_okno(a,k), zwracającą (największa suma, pierwszy indeks początku) dla 1<=k<=len(a). Przy remisie pierwszy. Dla [1,8,9,2,10], k=2: (17,1).\n\n**Wskazówka:** Inicjalizacja maksimum na 0 nie działa dla ujemnych sum."
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
     "markdown": "## Zadanie 7: Dokładne porównanie\n\nNapisz lepsza(s1,d1,s2,d2), która sprawdza s1/d1 > s2/d2 bez dzielenia. Załóż dodatnie długości. Sprawdź też remis 10/2 i 15/3.\n\n**Wskazówka:** Iloczyny krzyżowe zachowują dokładność int."
    },
    {
     "id": "s014",
     "title": "Zadanie 8: Wszystkie długości od minimum",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: Wszystkie długości od minimum\n\nNapisz najlepszy(a,k), zwracającą (suma, długość, początek), dla 1<=k<=len(a). Użyj prefiksów. Dla [9,1,9] i k=2 wygrywa cały fragment: (19,3,0).\n\n**Wskazówka:** Prawy koniec range musi dopuścić len(a)."
    },
    {
     "id": "s015",
     "title": "Zadanie 9: Ostatni fragment i remis",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 9: Ostatni fragment i remis\n\nWyznacz najlepsze fragmenty dla [0,0,9,9], [5,5,5] i [2,4], zawsze z k=2. Dla każdej listy wyświetl sumę, długość i indeks początku. Wyjaśnij wybór fragmentu, zwłaszcza gdy średnie są równe.\n\nSam otwórz fragmenty-trening.txt i wczytaj liczby rozdzielone spacjami do ciag_z_pliku. Dla k=2 zapisz wynik_z_pliku oraz wyniki-trening.txt zawierający sumę, długość i indeks początku. Zachowaj kolejność pliku.\n\n**Wskazówka:** Sprawdź końce pętli i różnicę między > oraz >=."
    },
    {
     "id": "s016",
     "title": "Zadanie 10: Najkrótszy pakiet alarmowy",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 10: Najkrótszy pakiet alarmowy\n\nPakiety mają rozmiary [4,7,3,11,2,9]. Chcesz wysłać co najmniej 20 jednostek danych, wybierając jak najmniej kolejnych pakietów. Napisz pakiet_alarmowy(rozmiary,cel), zwracającą (indeks początku od 0, liczba pakietów, suma rozmiarów). Przy remisie wybierz wcześniejszy początek, a jeśli nie ma odpowiedniego fragmentu, zwróć None. Rozmiary i cel są dodatnie. Użyj prefiksów; wystarczy przegląd par końców.\n\n**Wskazówka:** Tym razem minimalizujesz długość, a nie maksymalizujesz średnią. Warunek sumy decyduje, czy fragment w ogóle pasuje."
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
     "markdown": "## Zadanie 11: okno przesuwne\n\nNapisz stale_okno_bez_prefiksow(a,k). Przesuwając okno, odejmuj wychodzący element i dodawaj wchodzący. Porównaj z wcześniejszym algorytmem.\n\n**Wskazówka:** Pamiętasz tylko sumę bieżącego okna, a nie wszystkie prefiksy."
    },
    {
     "id": "s020",
     "title": "Zadanie 12: okna o średniej powyżej progu",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 12: okna o średniej powyżej progu\n\nNapisz okna_powyzej(a,k,prog), zliczającą fragmenty długości k o średniej większej niż całkowity prog. Załóż 1<=k<=len(a). Użyj sum prefiksowych i porównania bez dzielenia. Wyświetl wynik dla [1,8,9,2,10], k=2 i prog=6.\n\n**Wskazówka:** Średnia suma/k jest większa od progu dokładnie wtedy, gdy suma > prog*k."
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
   "checksum": "00772a236fe085fee85bab1f0d1419ad2426811015632fafdc06067128a84ff7",
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
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nPrzypomnij potrzebne narzędzia, przeczytaj kontrakt funkcji i sam napisz rozwiązanie. W zadaniach z plikiem pamiętaj również o odczycie danych i wymaganym zapisie wyniku."
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
     "markdown": "## Zadanie 1: Odczyt i kontrola przykładów\n\nNapisz wczytaj(nazwa): sam otwórz plik, odczytaj dwa wiersze i zamień je na dwie listy liczb. Wczytaj liczby_przyklad.txt do pa i pb. Sprawdź długości 200 i 20.\n\n**Wskazówka:** Każdy wiersz ma odrębne znaczenie."
    },
    {
     "id": "s012",
     "title": "Zadanie 2: 4.1: wystąpienia dzielników",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: 4.1: wystąpienia dzielników\n\nNapisz z41(a,b), zwracającą liczność zgodną z 4.1. Przykład CKE: 199.\n\n**Wskazówka:** any ogranicza zliczanie jednego wystąpienia do jednego trafienia."
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
     "markdown": "## Zadanie 3: 4.2: sto pierwsza\n\nNapisz z42(a). Zwróć element o indeksie 100 z nowej listy uporządkowanej malejąco. Przykład: 5.\n\n**Wskazówka:** Nie zmieniaj a, bo będzie potrzebne do 4.4."
    },
    {
     "id": "s015",
     "title": "Zadanie 4: 4.3: ograniczona liczność",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: 4.3: ograniczona liczność\n\nNapisz z43(a,b), zwracającą budowalne liczby z b. Każde wystąpienie p w a daje jedno dzielenie. Przykład to [10,12,14,15,18,20,21,25,27,28].\n\n**Wskazówka:** Resetuj reszta dla każdej liczby n."
    },
    {
     "id": "s016",
     "title": "Zadanie 5: 4.4: prefiksy i wszystkie granice",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: 4.4: prefiksy i wszystkie granice\n\nNapisz z44(a,k=50), zwracającą (najlepsza suma,długość,indeks początku). Uwzględnij ostatni element i fragment długości dokładnie k.\n\n**Wskazówka:** Przy równości zachowaj dotychczasowy wynik."
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
     "markdown": "## Zadanie 6: Zintegrowane rozwiązanie\n\nNapisz rozwiaz(a,b), zwracającą odpowiedzi czterech podpunktów w słowniku. W 4.4 zachowaj (suma,długość,pierwsza liczba). Wywołaj funkcję dla pliku przykładowego i wyświetl każdą odpowiedź z numerem podpunktu.\n\n**Wskazówka:** W kodzie nie trać dokładnej sumy przez przedwczesne zaokrąglenie."
    },
    {
     "id": "s019",
     "title": "Zadanie 7: Przejście do pełnego pliku",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Przejście do pełnego pliku\n\nWczytaj liczby.txt, potwierdź 3000 i 20 liczb, wyznacz odpowiedzi w odp. Wypisz również dokładną sumę najlepszego fragmentu.\n\n**Wskazówka:** Przykład sprawdza format, lecz pełny plik może ujawnić inne błędy."
    },
    {
     "id": "s020",
     "title": "Zadanie 8: wyniki4.txt",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: wyniki4.txt\n\nSam otwórz wyniki4.txt do zapisu obok notatnika. Zapisz cztery podpisane odpowiedzi. W 4.4 wypisz średnią do 10 miejsc, długość i pierwszą liczbę. Odczytaj plik ponownie do odczyt i sprawdź jego format.\n\n**Wskazówka:** Zapisywanie odpowiedzi jest osobnym etapem, który też wymaga sprawdzenia."
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
     "markdown": "## Zadanie 9: położenie najlepszego fragmentu\n\nUżyj z44 do wyznaczenia najlepszego fragmentu dla [10,10,0,0], [0,0,10,10] oraz [5,5,5], zawsze z k=2. Wyświetl jego elementy, sumę, długość i indeks początku. Wyjaśnij, dlaczego w ostatniej liście wybieramy pierwszy fragment.\n\n**Wskazówka:** Elementy fragmentu odczytasz wycinkiem od początku do początku powiększonego o długość."
    },
    {
     "id": "s024",
     "title": "Zadanie 10: dokładny zapis średniej",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 10: dokładny zapis średniej\n\nDla pełnych danych utwórz srednia_dokladna jako Fraction(suma,dlugosc). Wyświetl średnią jako dokładny ułamek oraz jako zapis dziesiętny do 10 miejsc po przecinku. Wyjaśnij różnicę między tymi zapisami.\n\n**Wskazówka:** Fraction przechowuje dokładny ułamek, a nie przybliżenie float."
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
   "checksum": "bf8258e3d4ef19826113ad52da0deebffd370bae2dae93e238432c9f902312ab",
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
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nPrzypomnij potrzebne narzędzia, przeczytaj kontrakt funkcji i sam napisz rozwiązanie. W zadaniach z plikiem pamiętaj również o odczycie danych i wymaganym zapisie wyniku."
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
     "markdown": "## Zadanie 1: Mapowanie symboli\n\nNapisz cyfry(s), zamieniającą napis z alfabetu o,+,* na listę wartości. Dla '+o*+': [1,0,2,1].\n\n**Wskazówka:** Nie porównuj kodów znaków z ich wartościami."
    },
    {
     "id": "s006",
     "title": "Zadanie 2: Palindrom i ostatni znak",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: Palindrom i ostatni znak\n\nNapisz palindrom(s) porównującą symetryczne indeksy. Sprawdź 'o++o', 'o++*' oraz jednoznakowy napis. Dlaczego pominięcie ostatniego znaku zmienia wynik?\n\n**Wskazówka:** Prawy indeks dla i=0 to -1, a nie -2."
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
     "markdown": "## Zadanie 3: Zapis symboliczny na liczbę\n\nNapisz dekoduj(s) metodą Hornera. Dla '+o*' wynik 11, dla 'oo+o*' również 11. Nie pomijaj ostatniego symbolu.\n\n**Wskazówka:** Przechodź po wszystkich znakach napisu, bez skracania długości."
    },
    {
     "id": "s009",
     "title": "Zadanie 4: Liczba na zapis symboliczny",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: Liczba na zapis symboliczny\n\nNapisz koduj(n), n>=0. Dla 0: 'o', 5: '+*', 26: '***'. Wyświetl zapisy symboliczne liczb 0, 5, 26 i 100.\n\n**Wskazówka:** Nie ograniczaj długości wyniku do długości napisów wejściowych."
    },
    {
     "id": "s010",
     "title": "Zadanie 5: Maksimum z właściwym kluczem",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: Maksimum z właściwym kluczem\n\nNapisz najwiekszy(napisy), zwracającą parę (wartość,oryginalny napis). W razie remisu wybierz pierwszy. Załóż listę niepustą.\n\n**Wskazówka:** key pozwala porównywać wartość, zachowując oryginalny napis."
    },
    {
     "id": "s011",
     "title": "Zadanie 6: Licznik na obcej planecie",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Licznik na obcej planecie\n\nWyświetlacz używa cyfr o,+,* o wartościach 0,1,2. Napisz licznik_planety(start,ile), zwracającą ile kolejnych zapisów liczb, zaczynając od wartości zapisu start. Zwiększaj wartość o 1; wyniki nie mają zer wiodących. Wykorzystaj własne koduj i dekoduj. Wyświetl cztery stany od \"**\" i wyjaśnij, dlaczego po nim licznik potrzebuje trzech znaków. Dla ile=0 zwróć pustą listę.\n\n**Wskazówka:** Oddziel wartość liczby od wyglądu napisu na wyświetlaczu."
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
     "markdown": "## Zadanie 7: Jeden blok 3×3\n\nNapisz jednolity(wiersze,r,c), sprawdzającą dziewięć pól bloku o podanym lewym górnym rogu. Załóż, że blok mieści się w siatce.\n\n**Wskazówka:** Zwróć True dopiero po przejściu wszystkich dziewięciu pól."
    },
    {
     "id": "s014",
     "title": "Zadanie 8: Wszystkie środki",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: Wszystkie środki\n\nNapisz kwadraty(wiersze) dla prostokątnej siatki, zwracającą środki w numeracji od 1. Dla trzech wierszy 'oooo' wynik to [(2,2),(2,3)]. Dla za małej siatki zwróć [].\n\n**Wskazówka:** Nie przeskakuj o trzy kolumny po znalezieniu kwadratu."
    },
    {
     "id": "s015",
     "title": "Zadanie 9: Małe zadanie łączące",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 9: Małe zadanie łączące\n\nSam otwórz symbole-trening.txt i wczytaj jego wiersze do napisy, bez zakończeń wierszy. Używając własnych funkcji, zbuduj raport: palindromy, środki kwadratów, maksimum i suma w obu zapisach. Następnie sam zapisz te cztery części w wyniki-trening.txt. Nie przepisuj zawartości pliku do kodu.\n\n**Wskazówka:** To te same rodzaje wyników, które złożysz na kolejnej karcie."
    },
    {
     "id": "s016",
     "title": "Zadanie 10: Obrócona mapa pikselowa",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 10: Obrócona mapa pikselowa\n\nMapa jest prostokątną listą napisów z symbolami o,+,*. Napisz obroc_mape(wiersze), obracającą ją o 90 stopni zgodnie z ruchem wskazówek zegara. Zwróć nową listę napisów, nie zmieniaj wejścia. Wyświetl obrót [\"oo+\",\"*+o\"], po jednym wierszu mapy. Dla pustej listy zwróć []; w niepustej mapie wszystkie wiersze mają tę samą dodatnią długość.\n\n**Wskazówka:** Pierwsza kolumna starej mapy, czytana od dołu, staje się pierwszym wierszem nowej."
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
     "markdown": "## Zadanie 11: inne systemy\n\nNapisz wartosc(s,p) metodą Hornera dla alfabetu 0123456789ABCDEF i 2<=p<=16, bez int(s,p). Gdy cyfra nie pasuje do podstawy, zwróć None. Wyświetl wartości zapisów 1011 w podstawie 2, FF w podstawie 16 i 17 w podstawie 8.\n\n**Wskazówka:** Ten sam Horner działa dla dowolnej podstawy."
    },
    {
     "id": "s020",
     "title": "Zadanie 12: zero wiodące",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 12: zero wiodące\n\nNapisz kanoniczny(s) przez dekodowanie i ponowne kodowanie. 'ooo+o' ma dać '+o', 'ooo' ma dać 'o'. Wyjaśnij, dlaczego nie odtwarzasz całego oryginału.\n\n**Wskazówka:** Wartość liczby nie przechowuje informacji o zerach wiodących."
    }
   ]
  },
  {
   "number": 10,
   "kind": "lesson",
   "title": "Matura 2025: Zapis symboliczny krok po kroku",
   "sourceFile": "10_matura_2025_zadanie_2_zapis_symboliczny/karta_pracy.ipynb",
   "notebook": "lekcje/10_matura_2025_zadanie_2_zapis_symboliczny/karta_pracy.ipynb",
   "download": "pobierz/10_matura_2025_zadanie_2_zapis_symboliczny.zip",
   "assetBase": "lekcje/10_matura_2025_zadanie_2_zapis_symboliczny/",
   "checksum": "6d1f8c5453a78d430aefcbeda33b667d28a3de4bcf527360caf18d52796fb3aa",
   "sections": [
    {
     "id": "intro",
     "title": "Cel i sposób pracy",
     "kind": "intro",
     "context": "",
     "markdown": "# Karta pracy 10. Matura 2025: Zapis symboliczny krok po kroku\n\n**Kurs:** Python — programowanie do matury rozszerzonej z informatyki\n\n**Prowadzący:** por. Jakub GRĄTKIEWICZ · jakub.gratkiewicz@wat.edu.pl\n\n**Cel:** Pełne rozwiązanie podpunktów 2.1–2.4, z kontrolą indeksów, powtórzeń i zapisu wyniku.\n\nZnasz podstawy Pythona. Przypominamy potrzebne narzędzia i stosujemy je w coraz bardziej złożonych zadaniach.\n\nOtwórz ten notatnik w folderze bieżącej lekcji. W zadaniu plikowym samodzielnie napisz otwarcie pliku, odczyt, konwersję, obliczenia i zapis odpowiedzi. Nie ma wspólnej komórki wczytującej dane ani gotowych list z plików zadaniowych.\n\nZadania 1–8 wykonujemy na lekcji, zadania 9–10 samodzielnie. Niedokończone zadania uzupełnij przed następnym spotkaniem.\n\nW pustych komórkach roboczych wpisz własny kod. Wyświetl wyniki obliczeń i przygotuj się do wyjaśnienia swojego rozwiązania.\n\nPrzed oddaniem zrestartuj jądro, uruchom własne komórki od początku i zapisz notatnik oraz wymagane pliki wynikowe."
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
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nPrzypomnij potrzebne narzędzia, przeczytaj kontrakt funkcji i sam napisz rozwiązanie. W zadaniach z plikiem pamiętaj również o odczycie danych i wymaganym zapisie wyniku."
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
     "markdown": "## Zadanie 1: Odczyt przykładów\n\nNapisz wczytaj(nazwa). Sam otwórz symbole_przyklad.txt, usuń tylko zakończenia wierszy i zwróć listę napisów. Sprawdź długość 12 i alfabet o,+,* każdego rekordu. Zapisz listę w napisy_p.\n\n**Wskazówka:** Nie usuwaj ostatniego symbolu przez s[:-1]."
    },
    {
     "id": "s013",
     "title": "Zadanie 2: 2.1: palindromy",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: 2.1: palindromy\n\nNapisz z21(napisy), zachowującą kolejność i powtórzenia. Porównaj z odpowiedzią CKE dla pliku przykładowego.\n\n**Wskazówka:** Pętla po liście pozwala zachować kolejność pliku."
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
     "markdown": "## Zadanie 3: 2.2: funkcja i przykład ręczny\n\nNapisz z22(wiersze). Uruchom na sześciu wierszach z treści CKE. Wynik: [(3,5),(3,6),(4,11)]. Następnie na pliku przykładowym: [(6,3)].\n\n**Wskazówka:** Dwa pierwsze kwadraty nakładają się."
    },
    {
     "id": "s016",
     "title": "Zadanie 4: 2.3: Horner i maksimum",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: 2.3: Horner i maksimum\n\nNapisz dekoduj(s) i z23(napisy), która zwraca parę (wartość,napis). Sprawdź (519789,'***+o*ooo++o').\n\n**Wskazówka:** Przejdź po wszystkich dwunastu symbolach."
    },
    {
     "id": "s017",
     "title": "Zadanie 5: 2.4: suma i zapis odwrotny",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: 2.4: suma i zapis odwrotny\n\nNapisz koduj(n) i z24(napisy), zwracającą (suma,zakodowana suma). Sprawdź oba wyniki z przykładu CKE.\n\n**Wskazówka:** Zakodowana suma może mieć więcej niż 12 znaków."
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
     "markdown": "## Zadanie 6: Jeden interfejs raportu\n\nNapisz rozwiaz(napisy), zwracającą słownik '2.1'–'2.4'. Wywołaj ją dla pliku przykładowego i wyświetl odpowiedzi z numerami podpunktów.\n\n**Wskazówka:** Nie kopiuj ponownie kodu czterech algorytmów; wywołaj funkcje."
    },
    {
     "id": "s020",
     "title": "Zadanie 7: Pełne dane",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Pełne dane\n\nOdczytaj symbole.txt, wyświetl liczbę napisów i zapisz raport w odp. Wypisz odpowiedzi wszystkich podpunktów i wyjaśnij znaczenie wyników.\n\n**Wskazówka:** Nie wpisuj oczekiwanych odpowiedzi zamiast obliczeń."
    },
    {
     "id": "s021",
     "title": "Zadanie 8: wyniki2.txt",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: wyniki2.txt\n\nSam otwórz wyniki2.txt do zapisu obok notatnika. Palindromy zapisz po jednym wierszu. Dla 2.2 podaj najpierw liczbę kwadratów, potem pary środków. Zapisz też maksimum i sumę w obu zapisach. Odczytaj plik do odczyt_wyniku i sprawdź zawartość.\n\n**Wskazówka:** Numer części oddziela znaczenie kolejnych wierszy."
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
     "markdown": "## Zadanie 9: zapis cyframi trójkowymi\n\nNapisz zapis_trojkowy(s), zamieniającą symbole o,+,* odpowiednio na cyfry 0,1,2 za pomocą str.maketrans i translate. Wyświetl otrzymany napis dla '+o*' i 'oo+o*'. Następnie odczytaj ich wartości przez int(zapis,3) i wyjaśnij znaczenie zer wiodących.\n\n**Wskazówka:** str.maketrans(\"o+*\", \"012\") tworzy mapowanie znaków, które wykorzystuje metoda translate."
    },
    {
     "id": "s025",
     "title": "Zadanie 10: plansza samych zer",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 10: plansza samych zer\n\nPrzygotuj planszę z pięciu wierszy po pięć znaków o. Ile bloków 3×3 zawiera? Zapisz ich środki w srodki i wyświetl je wraz z liczbą bloków. Wskaż pierwszy i ostatni środek.\n\n**Wskazówka:** Liczba bloków wynosi (h-2)*(w-2)."
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
   "checksum": "c581448e32a5c7aa9381d40a06b47321acb6b1860fafecd7f81f6c9fe84f5cb1",
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
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nPrzypomnij potrzebne narzędzia, przeczytaj kontrakt funkcji i sam napisz rozwiązanie. W zadaniach z plikiem pamiętaj również o odczycie danych i wymaganym zapisie wyniku."
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
     "markdown": "## Zadanie 1: Jeden ruch\n\nNapisz przesun(punkt,ruch), zwracającą nowy punkt. Dla (3,2) i (2,-5): (5,-3).\n\n**Wskazówka:** Dodaj odpowiadające sobie współrzędne."
    },
    {
     "id": "s006",
     "title": "Zadanie 2: Cała trasa",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: Cała trasa\n\nNapisz trasa(ruchy) zwracającą punkty po ruchach od startu (0,0). Nie dodawaj startu do listy. Puste dane dają [].\n\n**Wskazówka:** Każdy krok zaczyna się w końcu poprzedniego."
    },
    {
     "id": "s007",
     "title": "Zadanie 3: Łazik i rozkazy F, L, R",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 3: Łazik i rozkazy F, L, R\n\nŁazik startuje w (0,0), zwrócony na północ. F przesuwa go o jedno pole do przodu, L obraca w lewo, R w prawo, zawsze o 90 stopni. Północ zwiększa y, wschód zwiększa x. Napisz lazik(komendy), zwracającą (x,y,kierunek), gdzie kierunek to N,E,S lub W. Obrót nie zmienia położenia. Wyświetl wynik dla \"FFRFFLF\". Dane zawierają tylko F,L,R; pusty napis pozostawia łazik w pozycji startowej.\n\n**Wskazówka:** Pamiętaj osobno położenie i kierunek. Indeks kierunku może krążyć po czterech wartościach dzięki % 4."
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
     "markdown": "## Zadanie 4: Ścisłe wnętrze\n\nNapisz wewnatrz(punkt,bok=5000), zwracającą informację, czy 0<x<bok i 0<y<bok. Wyświetl wyniki dla (1,1), (0,1), (5000,1), (1,0) i (1,5000). Wyjaśnij, dlaczego punkty na brzegu nie należą do wnętrza.\n\n**Wskazówka:** Brzeg nie jest wnętrzem."
    },
    {
     "id": "s010",
     "title": "Zadanie 5: NWD dla ruchu w dół",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: NWD dla ruchu w dół\n\nNapisz nwd(a,b) oraz ile_nwd(ruchy), zliczającą pary z NWD>1. Dla [(12,-18),(7,0),(5,3)] wynik to 2.\n\n**Wskazówka:** Zero w drugiej współrzędnej nie oznacza automatycznie NWD=0."
    },
    {
     "id": "s011",
     "title": "Zadanie 6: Sprawdzenie trójki",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 6: Sprawdzenie trójki\n\nNapisz jest_srodkiem(a,m,c), wymagającą trzech różnych punktów i dokładnej relacji środka. Dla (0,0),(1,1),(3,3) wynik musi być False.\n\n**Wskazówka:** Unikaj zaokrąglania połowy nieparzystej sumy."
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
     "markdown": "## Zadanie 7: Dokładny kandydat na środek\n\nNapisz srodek_calkowity(a,c), zwracającą krotkę, jeśli obie współrzędne środka są całkowite, albo None.\n\n**Wskazówka:** Sprawdź parzystość obu sum przed //2."
    },
    {
     "id": "s014",
     "title": "Zadanie 8: Wyszukiwanie par i zbiór",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: Wyszukiwanie par i zbiór\n\nNapisz trojki(punkty) dla różnych punktów o rosnącym x. Zwróć wszystkie (A,M,C), nie kończąc po pierwszym wyniku. Sprawdź także punkty niebędące sąsiednimi na liście.\n\n**Wskazówka:** Sprawdzenie wszystkich wyników pozwala zweryfikować gwarancję unikalności."
    },
    {
     "id": "s015",
     "title": "Zadanie 9: Raport trasy",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 9: Raport trasy\n\nNapisz raport(ruchy,bok), zwracającą (liczba par z NWD>1, liczba punktów wewnątrz, trójki). Dla trzech ruchów (2,2) i boku 10 wynik to (3,3,[((2,2),(4,4),(6,6))]).\n\nSam otwórz ruchy-trening.txt i wczytaj pary przesunięć do ruchy_z_pliku. Oblicz raport_z_pliku dla boku 10 i zapisz trzy części raportu w trzech wierszach wyniki-trening.txt. Plik zawiera przesunięcia, nie gotowe punkty.\n\n**Wskazówka:** Nie pomyl listy ruchów z listą punktów."
    },
    {
     "id": "s016",
     "title": "Zadanie 10: Kurier najdalej od bazy",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 10: Kurier najdalej od bazy\n\nKurier porusza się po ulicach równoległych do osi. Po ruchach [(3,0),(0,4),(-5,0),(0,-5)] szuka miejsca, z którego powrót do (0,0) byłby najdłuższy. Długość najkrótszego powrotu po ulicach wynosi abs(x)+abs(y). Napisz najdalej_od_bazy(ruchy), zwracającą (numer ruchu od 1, punkt, długość powrotu). Przy remisie wybierz wcześniejszy ruch; dla pustej listy zwróć None. Ruchy mogą mieć ujemne współrzędne.\n\n**Wskazówka:** Analizuj punkty po ruchach, nie same wektory przesunięć. Kierunek ruchu nie decyduje o odległości od bazy."
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
     "markdown": "## Zadanie 11: odległość od startu\n\nNapisz najdalszy(punkty), zwracającą pierwszy punkt najdalszy od (0,0). Porównuj kwadraty odległości, bez pierwiastków. Załóż niepustą listę.\n\n**Wskazówka:** Pierwiastek zachowuje porządek, więc nie trzeba go obliczać."
    },
    {
     "id": "s020",
     "title": "Zadanie 12: odtwórz ruchy",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 12: odtwórz ruchy\n\nNapisz ruchy_z_punktow(punkty), odtwarzającą przesunięcia od startu (0,0). Wyświetl wektory ruchu dla punktów [(3,2),(5,6),(10,0)]. Wyjaśnij, skąd bierze się ujemna druga współrzędna ostatniego ruchu.\n\n**Wskazówka:** Odejmij poprzednie położenie od bieżącego."
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
   "checksum": "7fc42337d5bd1a903da5f5037c88e3513ef308a8986769b1f8b9a42b805c9c52",
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
     "markdown": "## 2. Treść dydaktyczna i zadania na lekcji\n\nPrzypomnij potrzebne narzędzia, przeczytaj kontrakt funkcji i sam napisz rozwiązanie. W zadaniach z plikiem pamiętaj również o odczycie danych i wymaganym zapisie wyniku."
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
     "markdown": "## Zadanie 1: Odczyt i warunki danych\n\nNapisz wczytaj(nazwa): sam otwórz dron_przyklad.txt i wczytaj pary do ruchy_p. W każdym wierszu wymagaj dwóch liczb i dodatniego dx. Sprawdź 10 rekordów. Nie korzystaj z danych przygotowanych w innej karcie.\n\n**Wskazówka:** Waliduj rekord, zanim rozpakujesz dwa pola."
    },
    {
     "id": "s010",
     "title": "Zadanie 2: 3.1: NWD i zliczanie",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 2: 3.1: NWD i zliczanie\n\nNapisz nwd(a,b) i z31(ruchy), zliczającą przesunięcia z NWD wartości bezwzględnych >1. Przykład CKE: 6.\n\n**Wskazówka:** Przed pętlą Euklidesa normalizuj znaki."
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
     "markdown": "## Zadanie 3: Punkty po kolejnych ruchach\n\nNapisz trasa(ruchy), bez dodatkowego punktu startowego. Potwierdź dwa pierwsze punkty przykładu i koniec (20000,0).\n\n**Wskazówka:** Dopisz punkt po aktualizacji obu współrzędnych."
    },
    {
     "id": "s013",
     "title": "Zadanie 4: 3.2 a: wnętrze kwadratu",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 4: 3.2 a: wnętrze kwadratu\n\nNapisz z32a(punkty), zliczającą punkty w ścisłym wnętrzu kwadratu 0<x<5000 i 0<y<5000. Dla przykładu ma zwrócić 2. Wyjaśnij, dlaczego nie zliczamy punktów na krawędziach.\n\n**Wskazówka:** Użycie <= zmieniłoby odpowiedź."
    },
    {
     "id": "s014",
     "title": "Zadanie 5: 3.2 b: wszystkie kandydatury",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 5: 3.2 b: wszystkie kandydatury\n\nNapisz z32b(punkty), zwracającą listę trójek (A,M,C) dla końców uporządkowanych po x. Potwierdź dokładnie jedną trójkę w przykładzie.\n\n**Wskazówka:** Nie kończ przed sprawdzeniem, że rozwiązań jest dokładnie tyle, ile gwarantuje treść."
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
     "markdown": "## Zadanie 6: Całe zadanie na przykładzie\n\nNapisz rozwiaz(ruchy), zwracającą (wynik 3.1, wynik 3.2 a, jedyna trójka). Sprawdź jedyność trójki i końcowy punkt trasy.\n\n**Wskazówka:** Rozróżnij listę możliwych rozwiązań i jedną trójkę do oddania."
    },
    {
     "id": "s017",
     "title": "Zadanie 7: Pełne dane i kontrola relacji",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 7: Pełne dane i kontrola relacji\n\nWczytaj dron.txt, potwierdź 100 ruchów, uruchom rozwiaz i zapisz w odp. Niezależnie sprawdź obie równości dla zwróconej trójki.\n\n**Wskazówka:** Znalezione punkty muszą pochodzić z trasy, a nie z listy przesunięć."
    },
    {
     "id": "s018",
     "title": "Zadanie 8: wyniki3.txt i komplet oddania",
     "kind": "exercise",
     "context": "",
     "markdown": "## Zadanie 8: wyniki3.txt i komplet oddania\n\nSam zapisz wyniki3.txt obok notatnika. Podpisz odpowiedzi 3.1, 3.2 a i 3.2 b. Odczytaj plik ponownie do odczyt_wyniku. Uruchom własny notatnik od początku i omów koszt O(n²) wyszukiwania.\n\n**Wskazówka:** Zachowaj kolejność A,M,C, żeby łatwo zweryfikować środek."
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
     "markdown": "## Zadanie 9: wyszukiwanie trzema pętlami\n\nNapisz trojki_wolno(punkty), przeglądającą wszystkie i<j<k i zwracającą trójki z punktem środkowym. Dla rosnącego x środkowym punktem może być tylko j. Wyświetl znalezione trójki dla punktów z pliku przykładowego i wyjaśnij, dlaczego koszt obliczeń wynosi O(n³).\n\n**Wskazówka:** Każda z trzech zagnieżdżonych pętli wybiera inny punkt trójki."
    },
    {
     "id": "s022",
     "title": "Zadanie 10: poprawność fizyczna trasy",
     "kind": "homework",
     "context": "",
     "markdown": "## Zadanie 10: poprawność fizyczna trasy\n\nNapisz poprawny_lot(ruchy), sprawdzającą dodatnie dx, końcowy punkt (20000,0) i dodatnią wysokość wszystkich punktów poza lądowaniem. Puste dane dają False.\n\n**Wskazówka:** Warunek dotyczy też danych wejściowych, nie tylko wyniku zadania."
    }
   ]
  }
 ]
};
