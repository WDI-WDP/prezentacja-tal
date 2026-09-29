# Aktualizacja zadań w repozytorium

## Sync fork na GitHub, potem git pull

Przed aktualizacją zapisz notatniki, zrób commit własnych zmian i wyślij je do swojego forka.

1. Zaloguj się na GitHub i otwórz **swój fork**: `TWOJ-LOGIN/tal-repo-na-zadania`, nie repozytorium prowadzącego.
2. Wybierz gałąź **main**.
3. Nad listą plików kliknij **Sync fork**.
4. Kliknij **Update branch** i poczekaj na zakończenie aktualizacji. Jeśli GitHub informuje, że fork jest aktualny, nie ma nowych zmian do dołączenia.
5. Na komputerze otwórz terminal w folderze swojego sklonowanego forka, na gałęzi **main**, i wykonaj:

```powershell
git pull
```

**Pamiętaj:** Sync fork aktualizuje repozytorium na GitHub. Dopiero `git pull` pobiera te zmiany do folderu na komputerze. Po pobraniu otwórz zaktualizowaną kartę ponownie w Jupyter.

Jeśli pojawi się konflikt, poproś prowadzącego o pomoc — nie odrzucaj własnych zmian.

Pomoc: [Sync fork — instrukcja GitHub](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/syncing-a-fork).
