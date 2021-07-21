class Televisor {
    constructor(fabricante, modelo, canalAtual, volume) {
      this._fabricante = fabricante;
      this._modelo = modelo;
      this._canalAtual = canalAtual;
      this._volume = volume;
    }
  
    get fabricante() {
      return this._fabricante;
    }
  
    get modelo() {
      return this._modelo;
    }
  
    get volume() {
      return this._volume;
    }
  
    set volume(volume) {
      if (isNaN(volume)) {
        this._volume = 0;
      } else {
        this._volume = volume;
      }
    }
  
    get canalAtual() {
      return this._canalAtual;
    }
  
    set canalAtual(canal) {
      this._canalAtual = canal;
    }
  }
  
  const minhaTV = new Televisor("LG", "LG2021", 5, 12);
  
  minhaTV.volume = 55;
  minhaTV.canalAtual = 7;
  minhaTV.volume--;
  console.log(`Minha televisão está ligada no canal ${minhaTV.canalAtual} com o volume em ${minhaTV.volume}.`);