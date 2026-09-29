# Aktualizacja zadań w repozytorium

## Oryginał, własny fork i kopia na komputerze

Prowadzący publikuje nowe lub poprawione zadania w [WDI-WDP/tal-repo-na-zadania](https://github.com/WDI-WDP/tal-repo-na-zadania). Repozytorium korzysta z gałęzi **main**.

| Miejsce | Co zawiera? | Nazwa w poleceniach Git |
|---|---|---|
| Repozytorium WDI-WDP | Oryginalne materiały prowadzącego | `upstream`, po dodaniu tego adresu |
| Twój fork na GitHub | Materiały i Twoje zapisane rozwiązania | `origin`, jeśli sklonowałeś własny fork |
| Folder na komputerze | Pliki, które otwierasz i zmieniasz w Jupyter | Lokalna kopia repozytorium |

Aktualizacja ma **dołączyć zmiany prowadzącego do Twojej pracy**. Nie wymaga tworzenia nowego forka ani ponownego klonowania.

Samo `git pull` z własnego `origin` nie pobierze nowych zadań z WDI-WDP, jeśli Twój fork nie zawiera jeszcze tych zmian. Potrzebne jest także połączenie historii z oryginałem, czyli **merge**.

## Zabezpieczenie własnych rozwiązań

Przed synchronizacją zapisz otwarte notatniki i zamknij je w Jupyter, aby otwarty edytor nie zapisał później starej wersji. Ważne rozwiązania możesz dodatkowo skopiować do folderu poza repozytorium.

W PowerShell przejdź do istniejącej lokalnej kopii swojego forka. Przykładowa ścieżka:

```powershell
cd C:\Repo\tal-repo-na-zadania
git remote -v
git branch --show-current
git status
```

Sprawdź, czy **origin prowadzi do Twojego konta**, np. `git@github.com:TWOJ-LOGIN/tal-repo-na-zadania.git`, a nie do WDI-WDP. Jeśli sklonowałeś oryginał lub pracujesz na innej gałęzi niż `main`, ustal z prowadzącym, którą kopię i gałąź należy aktualizować.

Jeżeli masz własne zmiany, przejrzyj listę, a następnie zapisz je w commicie i wyślij do swojego forka:

```powershell
git add .
git commit -m "Zapis rozwiazan przed aktualizacja zadan"
git push origin main
git status
```

Ten przykład zakłada pracę na `main`. Nie dodawaj haseł, kluczy ani przypadkowych plików. Jeśli nie ma zmian, pomiń `add` i `commit`. Przed scalaniem stan powinien być czysty, a własne commity zapisane na GitHub. Przy błędzie zatrzymaj się, zamiast wykonywać kolejne polecenia.

## Wariant A: Sync fork na GitHub

1. Zaloguj się na GitHub i otwórz **swój fork**, czyli `TWOJ-LOGIN/tal-repo-na-zadania`. Sprawdź właściciela nad listą plików.
2. Wybierz gałąź **main**. Informacja pod nazwą repozytorium powinna wskazywać, że fork pochodzi z WDI-WDP.
3. Kliknij **Sync fork** nad listą plików.
4. Przeczytaj informację o zmianach i wybierz **Update branch**.
5. Po zakończeniu sprawdź nowe zadania lub ostatnie commity w swoim forku.

Komunikat, że gałąź jest aktualna, oznacza, że nie ma nowych zmian do pobrania. Nie trzeba tworzyć pustego commita.

**Nie wybieraj opcji odrzucania własnych commitów**, np. **Discard commits**, aby wymusić zgodność. Jeśli GitHub zgłasza konflikt lub proponuje pull request do jego rozwiązania, przerwij prostą synchronizację i skorzystaj z pomocy prowadzącego.

Ten krok aktualizuje fork **na GitHub**, ale jeszcze nie folder na komputerze.

Pomoc: [synchronizacja forka w przeglądarce](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/syncing-a-fork).

## Wariant A: pobranie zmian na komputer

Po udanym **Sync fork → Update branch**, w lokalnym folderze własnego forka wykonaj:

```powershell
git status
git switch main
git pull --ff-only origin main
git status
```

Rozpocznij przy czystym stanie pracy. `git switch main` wybiera gałąź, którą aktualizujesz. `git pull --ff-only origin main` pobiera jej aktualną wersję z Twojego forka i dopuszcza tylko aktualizację bez tworzenia dodatkowego scalenia lokalnych, rozbieżnych historii.

Jeśli polecenie zgłosi, że **fast-forward nie jest możliwy**, lokalna gałąź i fork mają rozbieżne commity. Nie oznacza to, że należy skasować własne pliki. Pokaż prowadzącemu komunikat i `git status`.

Otwórz kartę ponownie z dysku w Jupyter. Sprawdź, czy widzisz nowe polecenia i czy pozostały Twoje rozwiązania. Samo odświeżenie strony forka nie zmienia lokalnego notatnika.

Pomoc: [git pull i opcja ff-only](https://git-scm.com/docs/git-pull).

## Wariant B: jednorazowe dodanie upstream

Ten wariant wykonuje synchronizację poleceniami Git. Jest alternatywą dla przycisku **Sync fork**, nie obowiązkowym drugim sposobem aktualizacji.

W lokalnej kopii własnego forka sprawdź adresy:

```powershell
git remote -v
```

Jeśli nie ma nazwy `upstream`, dodaj oryginalne repozytorium prowadzącego:

```powershell
git remote add upstream https://github.com/WDI-WDP/tal-repo-na-zadania.git
git remote -v
```

**origin** ma nadal wskazywać Twój fork, a **upstream** repozytorium WDI-WDP. Dodanie adresu nie kopiuje plików ani nie wykonuje scalenia.

Tę konfigurację robisz raz dla danej lokalnej kopii. Jeśli `upstream` już istnieje, sprawdź adres zamiast dodawać go ponownie. Przy błędnym adresie skonsultuj zmianę; nie zastępuj przypadkowo `origin` oryginalnym repozytorium.

Pomoc: [konfiguracja upstream dla forka](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/configuring-a-remote-repository-for-a-fork), [git remote](https://git-scm.com/docs/git-remote).

## Wariant B: pobranie nowych commitów

Zapisz własną pracę zgodnie z wcześniejszym slajdem. Przy czystym stanie i prawidłowych adresach wykonaj:

```powershell
git switch main
git pull --ff-only origin main
git fetch upstream
git log --oneline HEAD..upstream/main
```

Po każdym poleceniu sprawdź wynik. Jeśli pojawi się błąd, nie przechodź dalej automatycznie.

`git fetch upstream` pobiera informacje i commity z repozytorium prowadzącego. **Nie zmienia jeszcze Twoich plików roboczych.** Lokalna nazwa `upstream/main` wskazuje pobraną wersję gałęzi prowadzącego.

Ostatnie polecenie pokazuje commity z `upstream/main`, których nie ma w bieżącej gałęzi. Przejrzyj ich opisy. Brak wpisów oznacza, że te zmiany są już uwzględnione.

Pomoc: [pobieranie commitów przez git fetch](https://git-scm.com/docs/git-fetch).

## Wariant B: scalenie i wysłanie do forka

Jeśli pobieranie zakończyło się poprawnie, dołącz zmiany do lokalnej gałęzi `main`:

```powershell
git merge --no-edit upstream/main
git status
```

`merge` łączy zmiany prowadzącego z Twoją historią. Może wykonać prostą aktualizację **fast-forward** albo utworzyć commit scalający. `--no-edit` akceptuje domyślny opis tego commita. Ta opcja **nie rozwiązuje konfliktów** i nie wybiera za Ciebie wersji plików.

Jeśli scalenie zakończyło się poprawnie, przejrzyj zaktualizowane karty. Dopiero wtedy wyślij wynik do własnego forka:

```powershell
git push origin main
git status
```

Otwórz swój fork na GitHub i sprawdź pliki oraz ostatni commit. **Nie wykonuj `git push upstream main`**: rozwiązania i połączone zmiany wysyłasz do swojego repozytorium, nie do repozytorium prowadzącego.

Pomoc: [scalanie zmian przez git merge](https://git-scm.com/docs/git-merge).

## Konflikt w karcie Jupyter

Konflikt może wystąpić, gdy prowadzący zmieni treść karty, a Ty uzupełnisz ten sam notatnik. Git nie zawsze potrafi automatycznie połączyć obie wersje pliku `.ipynb`.

1. Zatrzymaj się po komunikacie **CONFLICT**. Nie wykonuj `push` i nie uruchamiaj nierozwiązanego notatnika.
2. Sprawdź `git status` i pokaż prowadzącemu nazwy konfliktujących plików.
3. Podczas łączenia trzeba zachować nowe polecenia **i** Twój kod. Nie wybieraj bez sprawdzenia całej wersji „naszej” lub „ich”. Plik `.ipynb` ma strukturę JSON, dlatego przypadkowe usuwanie fragmentów może go uszkodzić.

Jeśli chcesz wycofać niedokończone scalenie rozpoczęte przy czystym stanie, a nie wprowadziłeś jeszcze poprawek rozwiązywania konfliktu:

```powershell
git merge --abort
git status
```

Jeżeli zacząłeś już ręcznie poprawiać konflikt, najpierw zachowaj tę pracę i poproś o pomoc. `--abort` wycofuje bieżącą próbę scalenia, nie jest sposobem na usunięcie pojedynczego błędu w kodzie.

Nie używaj `reset --hard`, wymuszonego `push` ani usuwania repozytorium jako sposobu aktualizacji. Nie musisz tracić rozwiązań, aby otrzymać nowe zadania.

Pomoc: [konflikty i przerwanie scalenia](https://git-scm.com/docs/git-merge).

## Podsumowanie dwóch sposobów aktualizacji

| Etap | Wariant A: GitHub i PowerShell | Wariant B: PowerShell |
|---|---|---|
| Własna praca | Zapisane notatniki, commit, push do własnego forka | Tak samo |
| Zmiany prowadzącego | Na swoim forku: **Sync fork → Update branch** | `git fetch upstream`, potem `git merge --no-edit upstream/main` |
| Kopia lokalna | `git pull --ff-only origin main` | Aktualizuje się podczas udanego merge |
| Kopia na GitHub | Aktualizuje się podczas Sync fork | `git push origin main` po udanym merge |

W obu wariantach sprawdzasz stan przed rozpoczęciem i po zakończeniu. Wariant B wymaga wcześniejszego dodania `upstream` i uzgodnienia lokalnej gałęzi z `origin/main`.

**Nie klonuj repozytorium ponownie przed każdą lekcją.** Aktualizuj istniejącą kopię, otwórz kartę z dysku i sprawdź, czy masz aktualne zadania oraz dotychczasowe rozwiązania.

## Zadanie: aktualna karta we własnym forku

Zaktualizuj swojego forka na podstawie [repozytorium WDI-WDP](https://github.com/WDI-WDP/tal-repo-na-zadania) jednym z opisanych sposobów.

- Pokaż, że `origin` wskazuje Twoje konto, a nie repozytorium prowadzącego.
- Znajdź aktualną kartę w swoim forku na GitHub oraz w folderze na komputerze.
- Otwórz ją w Jupyter i upewnij się, że Twoje dotychczasowe rozwiązania pozostały dostępne.
- Wyjaśnij, dlaczego samo `fetch` nie aktualizuje otwartego notatnika i czym różni się pobranie commitów od ich scalenia.

Jeżeli nie ma nowych zmian, pokaż informację o aktualności i `git status`. Nie twórz sztucznej zmiany tylko po to, by powstał commit. W razie konfliktu pokaż komunikat prowadzącemu zamiast wymuszać aktualizację.
