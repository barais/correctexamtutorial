---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## CorrectExam Tutoriel

  Learn more at [correctexam](https://correctexam.github.io/)
drawings:
  persist: false
transition: slide-left
title: CorrectExam Tutoriel
mdc: true
hideInToc: true

---

# CorrectExam: un outil opensource pour une correction efficace des examens papier
Olivier Barais (Univ Rennes) -- [https://correctexam.github.io/#team](https://correctexam.github.io/#team)




<div class="absolute left-150px bottom-0px">
<Transform :scale="0.9">

<img src="https://i.imgur.com/fbC3WDw.png">

</Transform>
</div>

---
layout: two-cols
hideInToc: true
---


# Who am I

Olivier Barais, Prof. @Univ. Rennes, IRISA/INRIA DiverSE, B-COM

INRIA DiverSE team leader with Benoit Combemale, deputy director of electronic and computer science department @UnivRennes (~1600 students)

- Research Topic:
  - **Secure Software Supply Chain**
  - **Dynamic software architecture**
  - **Software language engineering**
  - Distributed system
  - Cloud computing
  - Model-driven engineering

::right::

<div class="absolute left-150px bottom-0px">
<Transform :scale="0.9">

<img src="https://i.imgur.com/7VZl928.png">

</Transform>
</div>

---
layout: default
hideInToc: true
---

## Déroulé de la présentation

<Toc />


---
layout: default
---

# Le besoin

- Faire en sorte que les étudiants consultent davantage les copies corrigées pour apprendre de leurs erreurs
- Corriger de manière plus “juste”
  - une vue statistique des résultats
  - correction anonyme, aléatoire…
  - capacité à modifier le barème à la volée

- Corriger de manière plus efficace
  - à plusieurs correcteurs en simultanée
  - question par question / copie par copie
  - par lot
  - correction automatisée pour les QCM
  - sur tablette ou sur ordinateur
  - en évitant le “tout QCM”


---
layout: default
hideInToc: true
---

## Besoin inspiré par des produits commerciaux surtout nord américain où un marché existe

- La solution Gradescope (N°1): 

> “Le logiciel de notation Gradescope permet aux étudiants de recevoir plus rapidement des commentaires plus détaillés sur leur travail, et aux enseignants de voir des analyses détaillées des devoirs et des questions. Il s'agit d'un moyen simple d'enregistrer les travaux sous forme numérique afin de préserver le travail original et de permettre une visualisation rapide et facile depuis n'importe où”

<div class="absolute left-230px top-250px">
<Transform :scale="0.7">

<img src="https://i.imgur.com/VXJX0QZ.png">

</Transform>
</div>


---
layout: default
hideInToc: true
---

## CorrectExam: pourquoi construire ce logiciel ?

- Un retour insuffisant des évaluations vers les étudiants
- ChatGPT & consorts mais aussi Github Copilot, … sont là
  - Ils “trivialisent” beaucoup de nos devoirs à la maison, exams, projets, TPs, TDs…
  - => Nous devons faire évoluer notre manière d’enseigner / ce que nous enseignons / ce que nous évaluons / comment nous l’évaluons … Le papier/crayon a encore de l’avenir pour l’évaluation

---
layout: default
hideInToc: true
---

## CorrectExam: pourquoi construire ce logiciel ?

Mais aussi ...

- Permettre de corriger les examens pendant les réunions 😀
- Économiser 5$ par copie d'étudiant
- Créer une implémentation open source pour maîtriser les problèmes de privacy/teaching analytics
- Créer une implémentation open source d'un logiciel réel avec une architecture complexe afin de disposer d'une étude de cas pour :
  - expliquer l'architecture logicielle moderne aux étudiants
  - des expériences dans la recherche en génie logiciel
- Essayer de garder la crédibilité (dans ma vision) pour faire de la recherche en génie logiciel


---
layout: cover
---


# Les choix architecturaux / Les fonctionnalités
<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: image-left
image: https://i.imgur.com/BqUJFy1.png
---

Déporter tout ce qui demande de la puissance de calcul dans le navigateur :
  - Traitement d’images
  - Machine learning
  - Cache
  - Parallélisation


---
layout: default
hideInToc: true
---

## Choix techniques

- **Quarkus** (https://quarkus.io/) pour le back (Java + compilation native via GraalVM)
- **Postgres** ou **MySQL** + **S3** (**minio**) pour les bases de données
- **Angular** (https://angular.io/) pour la partie font
- **pdf.js** (https://mozilla.github.io/pdf.js/) pour jouer avec les pdf (examen, scan d'examen, feedback pour les étudiants)
- **fabric.js** (http://fabricjs.com/) pour dessiner sur un pdf (canvas)
- **opencv** (https://opencv.org/)  compilé en wasm au sein d'un pool de web worker les traitements d’images
- **tensorflow JS** (https://www.tensorflow.org/js) avec le navigateur pour la reconnaissance des noms/prénoms/INE
- **PrimeNG** (https://primeng.org/) comme bibliothèque de base pour les composants graphiques
...

---
layout: default
hideInToc: true
---

## Choix techniques

- Utilisation massive
  - des **WebWorkers** (~pool de threads), 
  - des **OffscreenCanvas** pour optimiser les performances 

- **Docker** (https://www.docker.com/) et **K8S** (https://kubernetes.io) pour déployer le back et la couche de monitoring
- Le front est hébergé dans un CDN pour suivre l'architecture JamStack (https://jamstack.org/) (actuellement page github et netifly)
- **CI/CD** utilisant les github actions (https://github.com/features/actions), dockerhub webhook (https://docs.docker.com/docker-hub/webhooks/), et  gowebhook (https://github.com/adnanh/webhook)


---
layout: default
hideInToc: true
---

## Architecture 1/2

<div class="absolute left-40px top-100px">
<Transform :scale="0.95">

<img src="https://i.imgur.com/2Tfq8UJ.png">

</Transform>
</div>

---
layout: two-cols-header
hideInToc: true
---

# Architecture 2/2


::left::

### Architecture logique


![](https://i.imgur.com/1MspNaJ.png)

::right::

### Déploiement

![](https://i.imgur.com/cBb2jJM.png)


---
layout: cover
---

# Le projet

---
layout: default
hideInToc: true
---

## Historique

- **Mars 2022**: Première discussion
- **Avril 2022**: 2 premiers examens en mode tests @UnivRennes
- **Septembre 2022**: nouvelles fonctionnalités (QCM, traduction, …), extensions des tests (IUT de Toulouse, Université de Nice, INSA de Rennes 
- **Printemps 2023**: Amélioration suite au retour des utilisateurs (85 PR entre janvier et mai 2023)
- **Été 2023**: Correction par lots, travail sur les performances, intégration de la fédération d’identité, support d’un mode standalone pour corriger directement depuis son PC sans partage de données)
- **Automne 2023**: Export pdf annoté, Amélioration des performances (Support des examens à plus de 5000 copies) 

**287 PR** depuis le début du projet

> **100 examens corrigés** (60 utilisateurs en croissance depuis septembre 2023)


---
layout: default
hideInToc: true
---

## Fonctionnalités 1/2

- Template d’examen en format libre (word, libroffice, latex, asciidoc, markdown, …) Juste besoin d’un PDF en entrée
- Import et manipulation des scans au format pdf (ordre des pages, rotation, suppression)
- Alignement des feuilles des copies (pour corriger les défauts du scan)
- Reconnaissance des noms sur les copies (pour l’affectation des copies aux étudiants)
- Tag meilleures/moins bonnes réponses (pour la génération d’un corrigé type à la volée)
- Support de la notation directe, positive ou négative
- Comparaison rapide de réponses avec les mêmes commentaires / même question
- Support des QCM (moins bon qu’AMC : Auto multiple Choice https://www.auto-multiple-choice.net/)
- Correction par lots (pour noter en une seule étape un ensemble de réponses similaires)
- Annotation des copies à l’aide d’un stylet pendant la correction
- Statistiques par examen

---
layout: default
hideInToc: true
---

## Fonctionnalités 2/2


- Import/Export des modules avec ou sans les données étudiantes
- Import/Export des commentaires
- Envoi mail aux étudiants avec leur copie sous forme d’un pdf annoté et/ou avec un lien pour une consultation sur la plateforme
- Export des résultats au format Excel (pour un envoi à la scolarité)
- Support des fédérations d’identités universitaires
- ….


---
layout: default
hideInToc: true
---

## Carte d’identité OpenHub


<div class="absolute left-40px top-100px">
<Transform :scale="0.95">

<img src="https://i.imgur.com/DAmzTos.png">

</Transform>
</div>





---
layout: cover
---

# Les retours/La structuration de la communauté


---
layout: quote
hideInToc: true
---
> je viens de finir de corriger mon premier examen avec CorrectExam, je suis agréablement surpris de l'utilisation, c'est très fonctionnel, je ne pourrais pas dire si je gagne du temps mais le retour à l'étudiant me semble très important, c'est ce que je privilégie. Et je vois que des fonctionnalités s'ajoutent au fur et à mesure (commentaires textuels avec zone de texte !).  

**Julien Geandrot, le 19/11/2023**


https://github.com/correctexam/corrigeExamFront/issues/397

---
layout: quote
hideInToc: true
---
> Vraiment, c'est un excellent outil, merciiiiiiiiiiiiiiiiii

**Marie Babel, le 29/11**

---
layout: quote
hideInToc: true
---
> Grand merci. C'est vraiment une avancée majeure d'avoir un outil comme cela. Et cela a été un vrai plaisir de voir l'outil s'améliore en temps réel au fur et à mesure de l'expression des besoins. 

**Nicolas Thierry le 30/11**


---
layout: quote
hideInToc: true
---
> Ta nouvelle version est encore mieux, formidable la vision d'ensemble de toutes les réponses ! Les statistiques sont aussi très utiles, même si c'est déprimant de voir comment les étudiants ratent collectivement des questions sur des notions élémentaires 😂 

**Mariko le 29/11**

---
layout: default
hideInToc: true
---

## La structuration de la communauté

- 95 tickets par une quinzaine d’utilisateurs


- Pas mal d’email en direct ~200 emails

- Mise en conformité pour le RGPD, la propriété intellectuelle des étudiants, … (discussion avec les juristes de l’Université)

Mise en place d’une mailing liste, d’un comité  opérationnel, …

Utilisation de GitHub comme plateforme de collaboration

---
layout: cover
hideInToc: true
---
# La roadmap


---
layout: default
---
## La roadmap

- Formation des Ingénieurs pédagogiques à l’Université de Rennes
- Déploiement de la version 1.1 sur une infrastructure pilotée par la DSI à l’Université de Rennes
- Bêta-tests avec d’autres utilisateurs curieux/bienveillants
- Analyse accessibilité
- V1.2 Un certain nombre de tâches identifiées 
  [github V1.2](https://github.com/correctexam/corrigeExamFront/issues?q=is%3Aopen+is%3Aissue+milestone%3AV1.2)
- V1.3 
  [github V1.3](https://github.com/correctexam/corrigeExamFront/issues?q=is%3Aopen+is%3Aissue+milestone%3AV1.3)
- Intégration du support à la correction de notebook Jupyter
- Intégration Moodle (un connecteur LTI ?)


---
layout: cover
---

# Une démonstration / Tutoriel


**Site Web :** https://correctexam.github.io

**Application :** https://correctexam.github.io/corrigeExamFront/

**Documentation :** https://correctexam.readthedocs.io/


---
layout: default
hideInToc: true

---

## Une démonstration / Tutoriel

- Création d'un compte sur la plate-forme
- Création d'un cours
- Création d'un exam
- Mise en place du barème
- Chargement et alignement des copies
- Association des copies
- Correction
- Analyse des statistiques
- Envoi de la copie vers les étudiants
- Truc et astuces: 
  - Pour les QCMs
  - Association des copies
  - Analyse du pdf de scan après chargement (rotation, ordre des copies, ...)
  - Import / Export d'un module
  - Travailler à plusieurs correcteurs

---
layout: center
class: text-center
---

# Learn More

[Documentations](https://correctexam.readthedocs.io/) · [GitHub](https://github.com/correctexam) · [Application](https://correctexam.github.io/corrigeExamFront/) · [Web site](https://correctexam.github.io)


<div class="absolute left-650px top-0px">
<Transform :scale="0.99">

<img src="https://i.imgur.com/qemwTWw.png">

</Transform>
</div>

<div class="absolute left-0px top-0px">
<Transform :scale="0.60">

<img src="https://i.imgur.com/lrgXTJs.png">

</Transform>
</div>