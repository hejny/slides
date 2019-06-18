# Ezoterické programovací jazyky
## [Pavol Hejný](https://www.pavolhejny.com/)

https://www.pavolhejny.com/ezotericke-programovaci-jazyky



<footer>2018-08-31 ITNetwork </footer>

---


![](/content/presentations/ezotericke-programovaci-jazyky/turing-maschine.png)


---


![](/content/presentations/ezotericke-programovaci-jazyky/eniac-computer.jpg)


---

# C

```c
#include <stdio.h>

int main() {
    int x;
    for ( x = 0; x < 10; x = x + 1 ) {
        printf( "ITNetwork\n" );
    }
}
```

---

# Java

```java
public class App {
   public static void main() {
      for(int x = 0; x < 10; x++) {
         System.out.print( "ITNetwork\n" );

      }
   }
}
```

---

# Brainfuck

```brainfuck
++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<++++++++++++++
+.>.+++.------.--------.>+.>.
```


---

# Taxi

```taxi
Go to the Post Office: west 1st left, 1st right, 1st left. Pick up a passenger
going to Multiplication Station. Pick up another passenger going to Multiplication
Station. Go to Multiplication Station: south 1st left, 3rd left. Pick up a
passenger going to the Post Office. Go to the Post Office: south 1st left, 3rd
right. Go to the Taxi Garage: north 1st right, 1st left, 1st right.
```

---

# Piet

![](/content/presentations/ezotericke-programovaci-jazyky/piet-language.gif)

---

# Minecraft computer

![](/content/presentations/ezotericke-programovaci-jazyky/minecraft-computer.jpg)

---

# Domino computer

![](/content/presentations/ezotericke-programovaci-jazyky/domino-computer.jpg)

---

# PostCSS Czech Stylesheets
## https://github.com/tenhobi/postcss-czech-stylesheets

---

```css
.error-msg {
    display: block;
    border-left: 3px solid red;
    font-size: 15px;
    line-height: 20px;
    background: transparent;
    color: red !important;
}
```
---

```css
.error-msg {
    zobrazení: blok;
    border-left: 3px solid red;
    font-size: 15px;
    line-height: 20px;
    background: transparent;
    color: red !important;
}
```

---

```css
.error-msg {
    zobrazení: blok;
    levý-rámeček: 3px pevné červené;
    font-size: 15px;
    line-height: 20px;
    background: transparent;
    color: red !important;
}
```

---

```css
.error-msg {
    zobrazení: blok;
    levý-rámeček: 3px pevné červené;
    velikost-písma: 15px;
    line-height: 20px;
    background: transparent;
    color: red !important;
}
```

---

```css
.error-msg {
    zobrazení: blok;
    levý-rámeček: 3px pevné červené;
    velikost-písma: 15px;
    výška-řádku: 20px;
    background: transparent;
    color: red !important;
}
```

---

```css
.error-msg {
    zobrazení: blok;
    levý-rámeček: 3px pevné červené;
    velikost-písma: 15px;
    výška-řádku: 20px;
    pozadí: průhledné;
    color: red !important;
}
```

---

```css
.error-msg {
    zobrazení: blok;
    levý-rámeček: 3px pevné červené;
    velikost-písma: 15px;
    výška-řádku: 20px;
    pozadí: průhledné;
    barva: červená !kurva;
}
```