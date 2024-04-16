import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditablesDataService {
  private data = {
    'editable-1': {
      id: 'editable-1',
      content: `
        <h1>Editable 1 Header</h1>
        <p><br></p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
      `,
    },
    'editable-2': {
      id: 'editable-2',
      content: `
        <h1>Editable 2 Header</h1>
        <p><br></p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
      `,
    },
  };

  getEditable(id: string) {
    return this.data[id];
  }

  getAllEditables() {
    return Object.values(this.data);
  }

  // You can add more methods as needed
}
