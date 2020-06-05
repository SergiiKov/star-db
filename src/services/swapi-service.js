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
      const res = await this.getResours(`/people/`);
      return res.results;
    }
    getPerson(id) {
      return this.getResours(`/people/${id}`);
    }
  
    async getAllPlanets() {
      const res = await this.getResours(`/planets/`);
      return res.results;
    }
    getPlanet(id) {
      return this.getResours(`/planets/${id}`);
    }
  
    async getAllStarships() {
      const res = await this.getResours(`/starships/`);
      return res.results;
    }
    getStarship(id) {
      return this.getResours(`/starships/${id}`);
    }
  
  }
  
  
  
  const swapi = new SwapiService();
  
  swapi.getAllStarships().then((starships)=>{
    starships.forEach((p)=>{
      console.log(p.name)
    })
  })