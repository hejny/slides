
# Tvořte úspěšný, ne dokonalý produkt!

???

========================

# Towns

![](/content/drafts/tvorte-uspesny-ne-dokonaly-produkt/towns.jpg)

???

Zhruba před 10 lety jsem 


========================

# H-edu

![](/content/drafts/tvorte-uspesny-ne-dokonaly-produkt/hedu1.png)


???

========================

# H-edu

![](/content/drafts/tvorte-uspesny-ne-dokonaly-produkt/hedu2.png)


???

========================

# Krmítka

![](/content/drafts/tvorte-uspesny-ne-dokonaly-produkt/krmitka.png)


???

1.7 roku za 3 dny
 
========================

# Analýza

???

Předtím, než začneme na čemkoliv dělat je potřeba udělat pečlivou analýzu.


========================

# Mám nápad
## vs.
## Mám zadání


???

Pokud mám zadání, nemusím to teoreticky řešit. Ale je obré.

========================


# Co je potřeba */ problém* za danou věcí? 

???

Hledejte základní potřeby 
Pohodlí, bezpečnost, jídlo, sex, zábava...

========================

# Opravdu problém existuje?
## Nejedná se pouze o můj výmysl?

========================

# Persony
## Kdo přesně daný problém má?
## ↓
## Kdo bude zákazník či uživatel?


???

Žena, češka, z Plzně, Programuje v Pythonu, pije Starobrno,...

========================

# Kolik daných lidí existuje?
## 10?, 1k?, 1m?, 1mld?

========================

# Kolik je za řešení ochoten
# **utratit**?

???

Očeává to zdarma nebo zaplatí 10 000 za měsíc?

========================

# Bude svět lepší poté,
# co daný problém vyřešíme? 

???

Hlavně z hlediska sebenevyhoření a týmu.


========================

## Jaké je nejlepší řešení pro danou věc?
# Software?

???

Dále budu mluvit pouze o situaci kdy to je **Software**.

========================

## 📱Mobilní aplikace? *( Android? iOS? )*
## Web? *( Progressive web app? )*
## FB skupina? 💬 Chatbot?


???

Co za software:
todo Výhody každěho řešení


========================

# Je opravdu potřeba...
## ...zakládat firmu?
## ...dělat web na míru?
## ...mít social content?
## ...mít pěkný design?


???

Všechno je super, ale zdroje jsou omezené a když se dají na jedno, nezůstanou na druhé. 


========================

# Bezpečnost!

https://github.com/hejny/secure-app

```php
$password_hash = md5($_REQUEST['password']);
$query = $db->prepare("SELECT password,id FROM users WHERE username='{$_REQUEST['username']}'");
```

```php
$pagefile = __DIR__."/pages/{$_GET['page']}.php";
if(!file_exists($pagefile)){
    $pagefile = __DIR__."/pages/wall.php";
}

require $pagefile;
```




???

Ale jedna věc, kterou byste neměli zanedbat je bezpečnost.


========================

# Zálohujte!
## A ověřte, že **zálohy fungují!**

???

Např. AWS S3

========================


# Nastavte měření!
## Analytics, Smartlook,...


========================

# 80 / 20


???

Dělejte 20p věcí na 80 procent.

========================

# Tým
## Kolegové, Konference *(Barcampy)*,
## Hackathony *(StartupWeekendy)*, Sociální sítě

## ~~Rodina, Přátelé~~


???

Mluvím o tom až po analýze, ale často je tým mnohem cennější než celý nápad a produkt. To se dá kompletně změnit (např Instagram ) 

Jina schopnost utvořit rychle první verzi a dlouhodobě udržovat běžící věc.


========================

# Mluvte o svém nápadu!


???

nebojte se, že vám ho někdo ukradne, naopak se dozvíte mnoho cenných rad a případně se do toho s váma někdo pusti

Nedělejte to sami. Ale také na 90 na 10 ale spíš 50 na 50.

Doplňte se. Samý programátoři to není dobré. 


========================

# MVP
## (Minimum viable product)
# Spusťte první verzi co **nejdřív**!


???

Prvních několik early adopters. Udělejte rozhovor s uživateli a podívejte se na to, jak to používají. 

Když produkt rozšiřujete, využijte přátele, rodinu..., ale názor berte s rezervou. 


========================

![](/content/drafts/tvorte-uspesny-ne-dokonaly-produkt/toilet-pay.gif)

???

========================

## Uživatel
### vs.
# Zákazník


???

Nechte lidi zaplatit co nejdříve, aby jste nemeli žádné zákazníky, jen uživatele. 
To že lidé říkají, že zaplatí, neznamená, že zaplatí. 

Pokud uživatelé něco říkají, neznamená to, že to opravdu chtějí.
Ptát se radši lidí, co to opravdu využívají, než poslouchat stežovatele.


========================

## **Bugy** a faily
# Jsou naprosto

![](/content/drafts/tvorte-uspesny-ne-dokonaly-produkt/ok-fail.png)


???

todos:

Web and mobile disclaimer



========================

