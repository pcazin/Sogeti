# Pablo CAZIN

Réalisation de la todo liste avec Angular et Spring.

## Cloner le projet

```bash
git clone https://github.com/pcazin/Sogeti
```

```bash
cd Sogeti
```

```bash
cd sogeti-test-client
```

## Installer les dépendances

```bash
npm install
```

## Lancer le server angular

```bash
ng serve
```

Le server tourne sur le port 4200 de voitre machine.

## Lancer le serveur Spring

Ouvrir le projet dans un IDE (intellij).

Créer une configuration pour lancer le server -> edit configuration -> new configuration -> Application.

Si Intellij ne télécharge pas automatiquement les dépendances du pom.xml:

```bash
mvn clean install
```

Puis click droit sur pom.xml -> Maven -> Reload Project.

Le server tourne sur le port 8080 de voitre machine.

Si le server Angular est lancé sur un port différent de 4200, 
veillez a modifier/ajouter l'origine dans TestApplication -> WebMvcConfigurer.

Résultats :

## Todo list
![alt text](/images/Todolist.png)

## Changement d'état
![alt text](/images/Todolist2.png)

## Ajouter un todo
![alt text](/images/new.png)

## Ajout dans la Todo list
![alt text](/images/after_new.png)

## Details
![alt text](/images/details.png)




