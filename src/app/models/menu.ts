export enum EtatMenu {
  ACTIF = 'actif',
  INACTIF = 'incactif'
}

export class Menu {

  constructor(
    public id: number = 0,
    public nom: string = '',
    public description: string = '',
    public date_creation: string = '',
    public etat: EtatMenu = EtatMenu.ACTIF
  ) {}

}
