### Description of the project
The Culprit Game is a two players Semi-Cooperation game based on the prisonner's dilemma (cf. https://en.wikipedia.org/wiki/Prisoner%27s_dilemma for more information about this principle).
It has been created in 2017 in the context of the IC06 course of the UTC school.

**Created by:** Eumaël Desseaux, Estelle Maudet & Camille Quenin

---

### Play to this game
To play, both players will have to start the game in their web browser.
The Culprit Game is hosted online and directly available at https://theculpritgame.herokuapp.com/.

### Deploy the game locally
Instead of using the version deployed at herokuapp, you also have the possibility to deploy the game locally.
To do so, you have to:
* Download and install `Node.js` : https://nodejs.org/en/ (includes `npm`).
* Execute the following commands in a shell:
```bash
# Get the project.
git clone https://github.com/maudetes/culpritgame.git
cd culpritgame/

# Install it.
npm install 

# Start the server locally.
node index.js
```
* Open a browser to http://localhost:3000/ (or replace 'localhost' by the IP address of the computer hosting the server)
