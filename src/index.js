class  SwapiService {
  _apiBase = 'https://swapi.dev/api'
  async getResours(url) {
    const res = await  fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fatch ${url} ` + 
      `, resived ${res.status}`)
    }
    return await res.json();
  }
  getAllPeople() {
    return this.getResours(`/people/`);
  }
  getPerson(id) {
    return this.getResours(`/people/${id}`);
  }
}

const swapi = new SwapiService();

swapi.getAllPeople().then((body)=>{
  console.log(body)
})