# Signal_MainPage

Le but de ce projet est de reproduire la page d'accueil de Signal grâce à React : [https://signal.org/fr/](https://signal.org/fr/)

## Documentation sur React

### Qu'est‑ce que React ?

React est une **bibliothèque JavaScript** créée par Meta en 2013 pour construire des interfaces utilisateur (UI) modernes et dynamiques.

Elle repose sur le concept de **composants** : ce sont des blocs d’interface réutilisables permettant :

- une meilleure organisation du code
- une cohérence visuelle
- une maintenance facilitée
- un développement plus rapide

Pour rendre ces composants flexibles, React utilise des **props**, qui fonctionnent comme des paramètres permettant de transmettre des données d’un composant parent à un composant enfant.

---

### Pourquoi utiliser React plutôt qu’un framework ?

Selon l’analyse présentée dans l’article suivant : [https://dyma.fr/blog/quel-framework-choisir-angular-vue-js-ou-react/](https://dyma.fr/blog/quel-framework-choisir-angular-vue-js-ou-react/)

Plusieurs éléments ressortent :

- **React est le terme le plus recherché** parmi React, Angular et Vue.js, ce qui montre une dynamique forte et un intérêt constant de la communauté.

- **React est largement plus téléchargé** sur npm qu’Angular et Vue.js, ce qui indique qu’il est davantage utilisé, testé et éprouvé dans des projets réels.

De plus, React utilise le DOM virtuel (VDOM). C'est un concept de programmation dans lequel une représentation virtuelle et légère d’une interface utilisateur (UI) est conservée en mémoire. Le but de ce stockage est d'effecuer une **réconciliation** (synchronisation) avec le DOM réel pour gagner en performances.

---

### Un avantage clé : React n’est pas un framework

Contrairement à Angular et Vue.js, React est une **bibliothèque**, ce qui lui confère plusieurs avantages :

- **Plus léger** : le cœur de React est minimaliste.
- **Plus flexible** : il n’impose pas d’architecture stricte, ce qui permet de choisir librement les outils complémentaires.
- **Plus accessible** : la courbe d’apprentissage est plus douce que celle d’Angular.
- **Plus simple à intégrer** dans un projet existant, car il ne nécessite pas de restructurer toute l’application.

Cette flexibilité permet d’adapter React à des projets de toutes tailles, du simple site vitrine à l’application web complexe.
