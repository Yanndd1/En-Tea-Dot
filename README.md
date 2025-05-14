# 🍵 En-Tea-Dot
Extension Chrome : vous collez un texte, elle renvoie immédiatement la version corrigée (orthographe, grammaire, ponctuation) grâce à un llm, puis un clic pour copier.
1. C’est quoi ?
En-Tea-Dot est une extension Chrome / Edge qui transforme n’importe quel brouillon en un français impeccable.
Collez votre texte dans la fenêtre pop-up, cliquez sur Corriger : la version réécrite par GPT-4o s’affiche ; un bouton Copier la place directement dans le presse-papiers. Rien à installer sur la page, tout se passe dans l’icône de la barre d’outils.

2. Points forts
✔︎	Fonction
Réécriture instantanée	Orthographe, grammaire, ponctuation : tout en une passe.
Interface minimaliste	Aucune injection de balises ; l’édition se fait dans le pop-up.
Copie en un clic	Le texte corrigé est prêt à coller où vous voulez.
Modèle configurable	Utilise GPT-4o par défaut, mais accepte gpt-3.5-turbo, etc.
Respect de la vie privée	Seul le texte soumis part vers l’API ; rien n’est stocké côté serveur.

3. Installation
Depuis les sources
Téléchargez et décompressez en-tea-dot.zip.

Ouvrez chrome://extensions (ou edge://extensions) et activez le Mode développeur.

Cliquez sur Charger l’extension non empaquetée puis sélectionnez le dossier décompressé.

Première utilisation
Ouvrez la page Options de l’extension.

Collez votre clé secrète OpenAI (sk-…).

(Facultatif) changez le nom du modèle, ex. gpt-4o.

Enregistrez : l’extension est prête !

4. Mode d’emploi
Cliquez sur l’icône  dans la barre d’outils.

Collez (ou tapez) votre texte brut dans la zone du haut.

Appuyez sur Corriger.

La zone du bas affiche la version corrigée ; cliquez sur Copier pour la placer dans le presse-papiers.

5. Paramètres
Champ	Valeur par défaut	Détails
Clé API	(vide)	Stockée dans chrome.storage.sync, jamais envoyée ailleurs.
Modèle	gpt-4o-mini	Tout identifiant de modèle chat-completion OpenAI est accepté.

6. Développement
bash
Copier
Modifier
# Installation des dépendances (lint / build)
pnpm install

# Mode développement : rebuild sur modification
pnpm run dev

# Build et zip prêt à publier
pnpm run build
Arborescence principale :

pgsql
Copier
Modifier
src/
 ├─ service_worker.js
 ├─ popup.html / popup.js
 ├─ options.html / options.js
 └─ utils/settings.js
7. Dépannage rapide
Problème constaté	Solution
« Erreur : clé API manquante »	Saisissez une clé valide dans la page Options.
HTTP 401 / 429	Vérifiez que la clé est active et que la limite de requêtes n’est pas atteinte.
Texte vide en sortie	Essayez un autre modèle (gpt-4o au lieu de gpt-4o-mini).

8. Feuille de route
Ajout de l’anglais et d’autres langues.

Mode hors-ligne (LLM WebAssembly).

Historique des corrections récentes.

9. Licence
MIT – utilisez-la librement, mais gardez votre clé API privée !
