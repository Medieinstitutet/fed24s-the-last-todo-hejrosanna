# 📌 Rättningsrapport – fed24s-the-last-todo-hejrosanna

## 🎯 Uppgiftens Krav:
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/VLovMVBC)
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista i en react-applikation.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar/tas bort från skärmen och markeras som klar i javascript-listan.

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Använda lifting state up för att dela upp dina komponenter bättre.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. material ui eller tailwind.
- Egen css får gärna skrivas och då skall ni ha en bra struktur och använda flex eller grid på ett bra sätt.

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed24s-the-last-todo-hejrosanna\src\models\todo.ts - no-unused-vars - 'name' is defined but never used.,no-unused-vars - 'prio' is assigned a value but never used.,no-unused-vars - 'done' is assigned a value but never used.

## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller alla krav för betyget VG. Applikationen har en väl genomförd och strukturerad kod med bra uppdelning i komponenter, användning av hooks och hantering av tillstånd med lifting state up. Det finns funktionalitet för att lägga till, ta bort, och omordna todos samt markera dem som klara eller oklara. Dessutom används både CSS och ett CSS-bibliotek för styling, vilket skapar en professionell användargränssnittserfarenhet.

💡 **Förbättringsförslag:**  
En förbättring som skulle kunna göras är att implementera bättre typkontroll och validering för att säkerställa att alla funktioner bara tar emot och returnerar förväntade typer. Överväg också att använda TypeScript i delar av projektet som ännu inte är omvandlade, vilket hjälper till att förbättra kvaliteten och underlättar framtida refaktoriseringar. Slutligen kan felhantering vid interaktioner med localStorage förbättras för att hantera eventuella problem med användarens webbläsarstöd.