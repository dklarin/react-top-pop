# top-pop

Clover zadatak

Top Pop

Backend

Node
Treba napraviti server koristeći express framework koji će slušati na portu 3000.

Zatim treba napravit 3 rute: 
1. GET /tracks -> dohvaća sve pjesme 
2. GET /tracks/:id -> dohvaća pjesmu po id-ju 
3. GET /tracks/sorted -> preko query parametra sortBy prima name ili duration i na temelju toga vraća sortiranu tracks listu (http://localhost:3000/sorted?sortBy=name ili http://localhost:3000/sorted?sortBy=duration).

Za dohvaćanje podataka treba koristiti json file zadatak.json iz privitka kojeg možete kopirati u direktorij svog projekta. 

Frontend

React
Napraviti aplikaciju Top Pop koja će korištenjem Deezer
API-ja ispisati listu najpopularnijih pjesama u ovom trenutku.
* Aplikacija se sastoji od dvije glavne komponente. 
* Odabir boja i dizajna u aplikaciji je proizvoljan.

1. komponenta: na ovoj komponenti vaš je zadatak prikazati popis 10
trenutno najpopularnijih pjesama koristeći
https://api.deezer.com/chart . Koristeći select tag omogućite da se
lista može sortirati ulazno i silazno po dužini trajanja.

2. komponenta: prilikom klika na pojedinu pjesmu otvoriti će se nova
komponenta u obliku modala na kojoj će pisati:
     1. redni broj pjesme na listi
     2. naziv pjesme
     3. ime glazbenika
     4. trajanje pjesme u formatu “mm:ss”
     5. close button koji zatvara modal
  
Možeš koristiti https://cors-anywhere.herokuapp.com za fetchanje
podataka sad deezer API-ja



## How to use:
* cd top-pop-server: yarn install
* cd top-pop-client: yarn install
* cd cors-anywhere: yarn install

### Top-pop app image
![top pop app image](https://github.com/dklarin/react-top-pop/blob/main/images/top_pop_app.png)

### Song selected
![song selected image](https://github.com/dklarin/react-top-pop/blob/main/images/song_selected.png)
