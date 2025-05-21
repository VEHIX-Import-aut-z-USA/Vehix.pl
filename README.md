# Vehix - Import Samochodów z USA

Strona internetowa dla firmy Vehix zajmującej się importem samochodów z USA.

## Funkcje

- Strona główna z sekcjami: hero, USP, grupy docelowe, proces importu, statystyki, opinie klientów
- Strona O nas z historią firmy i przewagami konkurencyjnymi
- Strona Oferta z kategoriami samochodów i dodatkowymi usługami
- Strona Proces importu z szczegółowym opisem etapów i kosztów
- Strona Realizacje z galerią sprowadzonych aut i opiniami klientów
- Strona FAQ z najczęściej zadawanymi pytaniami
- Strona Kontakt z formularzem kontaktowym i możliwością rezerwacji konsultacji
- Baza danych do przechowywania formularzy kontaktowych i rezerwacji konsultacji
- Responsywny design dostosowany do urządzeń mobilnych, tabletów i desktopów
- Animacje i efekty wizualne poprawiające UX

## Technologie

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Prisma ORM
- PostgreSQL
- React Hook Form
- Zod
- Lucide Icons

## Instalacja

1. Sklonuj repozytorium
2. Zainstaluj zależności:

```bash
npm install
```

3. Skopiuj plik `.env.example` do `.env` i uzupełnij dane dostępowe do bazy danych:

```bash
cp .env.example .env
```

4. Uruchom migracje Prisma:

```bash
npx prisma migrate dev
```

5. Uruchom serwer deweloperski:

```bash
npm run dev
```

6. Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## Struktura projektu

- `app/` - Strony aplikacji Next.js
- `components/` - Komponenty React
- `prisma/` - Schemat bazy danych i migracje
- `public/` - Statyczne pliki (obrazy, fonty, itp.)
- `lib/` - Funkcje pomocnicze i konfiguracja

## Wdrożenie

Aplikacja jest gotowa do wdrożenia na platformach takich jak Vercel, Netlify czy AWS.

1. Skonfiguruj bazę danych PostgreSQL
2. Ustaw zmienne środowiskowe (DATABASE_URL)
3. Wdróż aplikację za pomocą preferowanej platformy

## Licencja

Wszelkie prawa zastrzeżone.