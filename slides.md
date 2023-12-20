---
theme: seriph
background:
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
title: Javadoc
mdc: true
layout: default
---
<style>
  .header{
    padding: 0rem;
    text-align: left;
  }
</style>
<div class="header">

# Javadoc
```java
/**
 * The class that manages the epresentation
 * @author Sebastiano Racca
 * @author Garabello Paolo
*/
public class Presentation {

  /**
  * Starts the presentation
  */
  public void start(){
    System.out.println("Javadoc, cos'è e come usarlo");
  }
}
```
</div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Premi spazio per la prossima pagina <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# Cos'è Javadoc?

Javadoc è uno strumento utilizzato nella programmazione Java per generare documentazione automatica a partire dai commenti del codice sorgente.

## Scopo

- **Documentazione del codice:** Javadoc fornisce una documentazione chiara e ben strutturata del codice Java.
- **Generazione automatica:** Basandosi sui commenti scritti direttamente nel codice, Javadoc genera documentazione in formato HTML o altri formati.

<br>
<br>

Leggi di più su [Oracle](https://docs.oracle.com/javase/8/docs/technotes/guides/javadoc/index.html)

---

# Installazione & Preview

## Installazione

😌 Non richiede istallazione <!-- 💩 -->



## Preview


```java
/**
 * Descrizione....
 * @param parametro
 * @return void
*/
public void mioMetodo() {

}
```

---

# Javadoc Tags

I tag di javadoc sono annotazioni che forniscono informazioni aggiuntive sul codice e vengono utilizzati per generare automaticamente la documentazione API.

Tra i più utili:
- `@param`: Descrive un parametro di un metodo o di un costruttore;
- `@return`: Descrive il valore restituito da un metodo;
- `@throws` o `@exception`: Descrive le eccezioni che un metodo può generare;
- `@see`: Fornisce un riferimento a un'altra classe o metodo;
- `@link`: Crea un collegamento ipertestuale.

---

# Esempio

```java {all|2-6|3|4|5|9-13|10|11|12|18-22|19|20|21|all}
public class Animale {
  /**
   * Costruttore di un animale.
   * @param nome Il nome dell'animale.
   * @param tipo Il tipo di animale.
  */
  Animale(String nome, String tipo) { }

  /**
   * Restituisce una stringa che descrive l'animale.
   * @return L'animale stesso.
   * @link https://docs.oracle.com/javase/8/docs/api/java/lang/String.html
  */
  public String toString() {}
}

public class Mammifero extends Animale {
  /**
   * Costruttore di un mammifero.
   * @param nome Il nome dell'animale.
   * @see Animale
  */
  Mammifero(String nome) {}
}
```

---

# Pubblicare la Documentazione

Come pubblicare la documentazione


Comando:
```bash
javadoc -d [destination] [source files]
```

Esempio:
```bash
javadoc -d docs/ ./src/*.java
```

---

# Grazie per l'attenzione

```java
/**
 * Ends the presentation
*/
public void close() {
  System.out.println("Grazie per l'attenzione");
  System.exit(0);
}
```

---
