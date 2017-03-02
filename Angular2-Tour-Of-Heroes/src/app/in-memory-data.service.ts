import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 1, name: 'Storm' },
      { id: 2, name: 'Wolverine' },
      { id: 3, name: 'Cyclops' },
      { id: 4, name: 'Beast' },
      { id: 5, name: 'Nightcrawler' },
      { id: 6, name: 'Cable' },
      { id: 7, name: 'Dazzler' },
      { id: 8, name: 'Iceman' },
      { id: 9, name: 'Rogue' },
      { id: 10, name: 'Jean Grey' }
    ];
    return { heroes };
  }
}
