# React native - TP Map et notions spécifiques au mobile

## Objectifs

Dans le premier TP, nous avons vu comment créer une application mobile avec React Native.
En utilisant Expo, nous avons pu créer une application qui fonctionne sur Android et iOS.
Nous avons vu comment créer des composants, les utiliser, les styliser. Et au final beaucoup de choses qui sont communes avec React. Nous ne pouvons pas tout voir sur cette technologie mais nous allons voir quelques notions spécifiques au mobile et l'utilisation d'une carte et d'un GPS.

## Missions

- [ ] Utiliser un navigateur en bottomTabNavigator spécifique pour ios et un autre pour android.
- [ ] Créer une media query pour afficher un composant spécifique à une taille d'écran.
- [ ] Créer une page qui affiche une carte et un marqueur à un endroit précis.
- [ ] Utiliser une SageAreaView pour ne pas aller dans des zones non visibles de l'écran.

## Le TP

### Utiliser un navigateur en bottomTabNavigator spécifique pour ios et un autre pour android.

Dans le TP précédent, nous avons utilisé un navigateur en StackNavigator.
Ici nous allons utiliser un navigateur en bottomTabNavigator pour IOS et un autre pour Android.
Pour cela, nous allons utiliser la librairie `react-navigation`.

https://reactnavigation.org/docs/bottom-tab-navigator
https://reactnavigation.org/docs/material-bottom-tab-navigator

Il faudra utiliser la librairie material-bottom-tab-navigator pour Android et bottom-tab-navigator pour IOS.
Pour cela récupérer la Platerform avec la fonction `Platform.OS` et utiliser le bon navigateur en fonction de la plateforme.

### Afficher une carte et un marqueur à un endroit précis

Pour afficher une carte, nous allons utiliser la librairie `react-native-maps`.
https://docs.expo.dev/versions/latest/sdk/map-view/
https://github.com/react-native-maps/react-native-maps

Créer une route qui affiche une carte et un marqueur à un endroit précis.
Protéger cette route avec une SafeAreaView pour ne pas aller dans des zones non visibles de l'écran.
https://docs.expo.dev/versions/latest/sdk/safe-area-context/

### Créer une autre page qui affiche la position actuelle de l'utilisateur

Créer une autre page qui affiche la position actuelle de l'utilisateur.
Pour cela, il faudra utiliser le GPS du téléphone.
https://docs.expo.dev/versions/latest/sdk/location/

### Créer une media query pour afficher un composant spécifique à une taille d'écran.

Créer une media query pour afficher un composant spécifique à une taille d'écran.
https://reactnative.dev/docs/usewindowdimensions

### Prenez une photo et affichez la dans l'application

Prenez une photo et affichez la dans l'application.
https://docs.expo.dev/versions/latest/sdk/imagepicker/


## Achetez un Mac...

Pour du développement mobile, un Mac est indispensable.
Tout fonctionne directement et fonctionne pour android aussi bien que pour iOS.
Expo est un peu le contre exemple mais il est de tout de façon bien plus simple de développer ce genre d'application sur un Mac.