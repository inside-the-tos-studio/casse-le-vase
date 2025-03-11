# Vase Challenge - (un peu de JS et de TS)

Une entreprise a créé **des vases ultra résistants** et nous demande de tester sa résistance aux chocs **lorsqu'il tombe de très haut**. Pour réaliser ce test, vous êtes dans un immeuble disposant d'un nombre d'étages fixe (par ex: 100).
Le but est donc de créer une fonction nous indiquant l'étage limite ou le vase se casse.

## Mission

Ta mission, si tu l'acceptes, sera de trouver de manière optimisée (le moins d'itérations possibles) à quel étage le vase casse lorsqu'on le jette par la fenêtre.

### Exemple:
1. 1ere itération: Etage 1 - le vase ne casse pas. ✅
1. 2eme itération: Etage 2 - le vase ne casse pas. ✅
1. 3eme itération: Etage 3 - le vase ne casse pas. ✅
...
89. 89eme itération: Etage 89 - le vase se casse. ❌

### TO DO

- [ ] Réaliser le test pour 100000 étages
- [ ] Réaliser le test pour 1000000 étages
- [ ] Réaliser le test pour 2000000 étages
- [ ] Réaliser le test pour 10000000 étages

## Installation

1. Clonez le repository.
2. Exécutez `npm install` pour installer les dépendances.

## Developpement

1. Executez `npm run dev` pour lancer l'exercice.
  - Choisissez une valeur via votre terminal pour réaliser votre test.
  - La valeur de casse du vase sera affichée

2. Exécutez `npm run build` pour compiler le code TypeScript. (le build doit fonctionner)
3. Le **code a modifier** se trouve dans `src/which-floor.ts`
4. Un bon code, est un code qui fonctionne !

### Algorithme

L'algorithme utilise une approche de recherche binaire pour déterminer l'étage où le vase se brise, optimisant ainsi le nombre de tests nécessaires.

### Tests

Tu peux ajouter des tests unitaires si tu le souhaites (c'est toujours mieux il parait ...)