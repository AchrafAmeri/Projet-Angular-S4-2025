export enum StatutMenu {
  ACTIF = 'actif',
  INACTIF = 'inactif'
}

export class Menu {

  constructor(
    public id: number = 0,
    public nom: string = '',
    public description: string = '',
    public date_creation: string = '',
    public statut: StatutMenu = StatutMenu.ACTIF
  ) {}

}
