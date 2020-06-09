export default class  SwapiService {
    _apiBase = 'https://swapi.dev/api'
    async getResours(url) {
      const res = await  fetch(`${this._apiBase}${url}`);
      if (!res.ok) {
        throw new Error(`Could not fatch ${url} ` + 
        `, resived ${res.status}`)
      }
      return await res.json();
    }
   
    async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results.map(this._transformPerson);
    }
  
    async getPerson(id) {
      const person = await this.getResource(`/people/${id}/`);
      return this._transformPerson(person);
    }
  
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet);
    }
  
    async getPlanet(id) {
      const planet = await this.getResource(`/planets/${id}/`);
      return this._transformPlanet(planet);
    }
  
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results.map(this._transformStarship);
    }
  
    async getStarship(id) {
      const starship = this.getResource(`/starships/${id}/`);
      return this._transformStarship(starship);
    }

    extractId(item){
      const idRegXp = /\/([0-9]*)\/$/;
      return item.url.match(idRegXp)[1];
    }

    _transformStarship(starship) {
        return {
          id: this.extractId(starship),
          name: starship.name,
          model: starship.model,
          manufacturer: starship.manufacturer,
          costInCredits: starship.costInCredits,
          length: starship.length,
          crew: starship.crew,
          passengers: starship.passengers,
          cargoCapasity: starship.cargoCapasity
        };
    }

    _transformPerson(person) {
      return {
        id: this.extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birthYear,
        eyeColor: person.eyeColor
      };
  }

    _transformPlanet(planet) {
      return {
        id: this.extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      };
  }
  
  }
  
  
  
  const swapi = new SwapiService();
  
  swapi.getAllStarships().then((starships)=>{
    starships.forEach((p)=>{
      console.log(p.name)
    })
  })