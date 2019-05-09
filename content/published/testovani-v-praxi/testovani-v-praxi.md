# Testovaní v praxi

===

# Technické metriky

===

## Test-driven development

Test-driven development je přístup k vývoji software, který je založen na malých, stále se opakujících krocích, vedoucích ke zefektivnění celého vývoje.
Prvním krokem je definice funkcionality a následné napsání testu, který tuto funkcionalitu ověřuje. Poté přichází na řadu psaní kódu a nakonec úprava tohoto kódu. 

- Unit testy
    Testování konkrétních dílčích kousků kódu, obvykle jedné [třídy](https://cs.wikipedia.org/wiki/T%C5%99%C3%ADda_(programov%C3%A1n%C3%AD)), [metody](https://cs.wikipedia.org/wiki/Metoda_(objektov%C4%9B_orientovan%C3%A9_programov%C3%A1n%C3%AD)) či funkce.
- Integrační testy
    Testování, že spolu jednotlivé kousky spolupracují.
- Automatizované testy v prohlížeči
 - [Selenium](https://www.seleniumhq.org/)
 - [Cypress](https://www.cypress.io/)
- Testrer
    Člověk, který projde aplikaci, zda vše funguje.

===

## Po nasazení

- Testování chyb na produkci
    - [Sentry](https://sentry.io/)
- Http checker
    Hlídá zda je konkrétní stránka dostupná / jak rychle je dostupná.
    - [Uptime Robot](https://uptimerobot.com/)
    - [Marketing Miner](https://www.marketingminer.com/)
- Regresní testování 
    Testování aplikace, zda staré funkce nebyly rozbité některou z nových úprav.

===

## Prevence chyb

- [Cloudflare](https://www.cloudflare.com/)
    Vytvoří prostředníka mezi uživatelem a vaším serverem. Pokud na váš web přijde najednou mnoho lidí, Cloudflare na váš server vyšle pouze 1 požadavek a ten potom rozdistribuuje mezi všechny návštěvníky.

===


# Chování uživatele na stránce

===

## Google Analytics

===

## Heatmap tools

Na kterou část webu / aplikace uživatel zaměřuje nejvíc pozornost.
- kam uživatel kliká / kde má uživatel myš

- [Hotjar](https://www.hotjar.com)
- [Heatmap.com](https://heatmap.com/)
- [Smartlook](https://www.smartlook.com/).

===

## Smartlook

Nahrávky toho, jak se uživatelé na webu chovají.
Jsou prvky uzpůsobené tak, aby je uživatel našel a pochopil co znamenají?
    - umístění, ikonka, barevnost

===

## AB Testování

- AB testovaní dává smysl pouze pokud už existuje podstaný počet uživatelů (cca todo) - tzn. pro projekty, které právě spouštíte bych ho nedoporučoval.
- Vždy se testuje 1. konkrétní věc - např. červené vs oranžové tlačítko.

===


# Uživatelské testování

Testování konkrétního scénáře naživo.


===

Odkazy na zmíněné tooly:

- [Selenium](https://www.seleniumhq.org/) - Automatické "proklikávání" stránek
- [Cypress](https://www.cypress.io/) - Automatické "proklikávání" stránek
- [Sentry](https://sentry.io/) - Trackování chyb
- [Uptime Robot](https://uptimerobot.com/) - Sledování, zda je stránka funkční
- [Marketing Miner](https://www.marketingminer.com/) - Komplexní marketingový tool hlídající konkrétní stránky
- [Cloudflare](https://www.cloudflare.com/) - Služba, která vás dokáže odstínit od obrovských výkyvů návštěvnosti
- [Google Analytics](https://analytics.google.com/) - Komplexní webová analytika
- [Hotjar](https://www.hotjar.com) - Nástroj na Heatmapy
- [Heatmap.com](https://heatmap.com/) - Nástroj na Heatmapy
- [Smartlook](https://www.smartlook.com/) - Nástroj na nahrávání uživatelů na stránce