# estiam1-innov-proj
Le repo contenant le code d'innovation project pour Estiam.


# I. Choix du sujet et identification de la problématique

## 1. Identifier le problème

Notre solution va résoudre le problème du mauvais tri sélectif en aidant l'utilisateur avec un triage automatique.
Par exemple, les personnes qui se trompent dans leur tri en mettant du carton dans les déchets ménagers.

Le problème étant que lorsque l'on trie mal un déchet, il ne peut pas être recyclé correctement et fini souvent incinéré.
Ceci a donc un impact écologique.
De plus, ceci a un impact économique car les technologies permettant de traiter les déchets mal triés coûtent cher.

De plus, une mauvaise gestion des déchets peut conduire à un impact social car les conséquences environnementales d'un mauvais tri peuvent nuire à la qualité de vie d'une population.

## 2. Etude des solutions existantes

**Sensibilisation et éducation :**
- Avantages : Sensibilise les individus aux bonnes pratiques de tri, augmente la conscience environnementale, peut entraîner un changement de comportement à long terme.
- Limites : Peut nécessiter du temps pour observer des résultats tangibles, dépend de la réceptivité des individus, peut être difficile à maintenir sur le long terme.

**Contrôles inopinés :**
- Avantages : Permet d'identifier les erreurs de tri et de sensibiliser directement les contrevenants, peut dissuader les comportements incorrects.
- Limites : Peut être perçu comme intrusif ou coercitif, nécessite des ressources pour la mise en place et le suivi des contrôles, ne résout pas nécessairement le problème à la source.

**Soutien des collectivités :**
- Avantages : Facilite le tri sélectif en fournissant des outils et des infrastructures adaptés, encourage la participation des habitants, peut améliorer la qualité du tri.
- Limites : Coûts associés à la mise en place et à l'entretien des infrastructures, nécessite une coordination efficace entre les acteurs locaux, peut ne pas suffire à changer les comportements individuels.

**Notre solution :**
- Avantages : Permet de trier automatiquement l'élément placé dans la poubelle afin de palier aux autres problèmes. Ne nécessite pas d'effort supplémentaire de la part de l'utilisateur. Avoir un suivi en direct des poubelles demandées.
- Limites : Coûts associés à la mise en place, la maintenance et à l'entretien des machines. Nécessite également une source d'énergie à proximité pour alimenter la machine.

## 3. Solution proposée

Notre solution permet de trier automatiquement un déchet mis dans une poubelle. Un seul orifice est présent, et analyse avec plusieurs capteurs en entrée de quel type de déchet il s'agit, et le redirige dans le bon compartiment de la poubelle.
De plus, les poubelles intelligentes seront liées à une base de données accessibles par les habitants pour suivre en direct le remplissage des poubelles. Cette visibilité sera faite via une page internet.

La solution est très efficace parce qu'elle permet de n'avoir qu'un seul objet pour remplir la fonction de poubelle, sans devoir regarder la correspondance de plusieurs poubelles pour savoir laquelle est la bonne.

Elle est équipée de panneaux solaires afin de la charger en énergie pour qu'elle fonctionne de façon autonome.
De plus, elle règle le problème de mauvais tri en analysant automatiquement et en sélectionnant précisément le compartiment correspondant.

> Pour ce projet, la poubelle sera fictive et simulée via un programme qui agira de façon aléatoire (simulant ainsi qu'une personne mette des déchets dans la poubelle). De plus, le projet se décompose en 3 parties : un front-end, un back-end, et un serveur simulant la poubelle.

# II. Présentation du business model

## 1. Etude du marché & proposition de valeur

Le client va pouvoir trier efficacement sans se prendre la tête, facilitant sa vie et optimisant le traitement des déchets triés en centre de recyclage, afin d'éviter les impacts environnementaux cités plus haut. De plus, il peut suivre l'état des poubelles directement depuis l'application web.

La problématique du mauvais tri, du manque de connaissances concernant le tri, et les impacts seront donc mis de côté, ce qui va permettre de palier à la problématique de base.

## 2. Stratégie marketing & commerciale

Pour toucher la clientèle la plus large possible, il faudra compter sur l'aide des collectivités locales pour faire installer notre produits dans les emplacements où se trouvent déjà les poubelles à tri. De plus, des campagnes de promotion pourront être faites sur les réseaux afin de partager le site et que les gens puissent découvrir notre projet via leur écran directement ; comme par exemple des posts sur Instagram, Twitter ou Facebook.

Notre but est d'être aidé et financé par les administrations locales (municipalités, etc) afin de rendre ce projet réalisable.

## 3. Evaluation des coûts

Les coûts principaux ne peuvent pas être précisément évalués parce que nous ne savons pas exactement combien coûte la fabrication d'une telle machine. Cependant, il faudrait compter l'hébergement du front-end et back-end, la base de données (suivant la technologie utilisée), et l'entretien des machines permettant de faire fonctionner les poubelles intelligentes. 

> Dans ce projet, comme les poubelles sont simulées, on remplace les coûts d'entretien etc des machines par l'hébergement de la "poubelle intelligente virtuelle".

# III. Présentation de votre équipe

Les compétences vont être la polyvalence, savoir travailler sur du back-end, front-end, et de la base de données.

Membres de l'équipe :
- Gabriel Poupeney, développement
- Sonia Khirat, développement
- Kevin Esterle, développement
- Elouann Hosta, développement

# IV. Présentation d'un plan d'action concret

Les étapes clés du développement n'ont pas encore été définies.

###

# Contenu du projet

- Front-end Vue.js 3 dans le dossier /eip-front.
- Back-end TypeScript (Node.js + Express) dans le dossier /eip-back.
