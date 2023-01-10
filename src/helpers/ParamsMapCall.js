class ParamsListClass {
  constructor() {
    this.tipoCorriente = null;
    this.tipoVelocidad = null;
    this.tipoVehiculo = "mercaderies";
    this.tipoConexion = null;
    this.potencia = null;
    this.distancia = null;
  }

  setParams(params) {
    this.tipoCorriente = params.tipoCorriente;
    this.tipoVelocidad = params.tipoVelocidad;
    this.tipoVehiculo = params.tipoVehiculo;
    this.tipoConexion = params.tipoConexion;
    this.potencia = params.potencia;
    this.distancia = params.distancia;
  }

  getParams() {
    return {
      tipoCorriente: this.tipoCorriente,
      tipoVelocidad: this.tipoVelocidad,
      tipoVehiculo: this.tipoVehiculo,
      tipoConexion: this.tipoConexion,
      potencia: this.potencia,
      distancia: this.distancia,
    };
  }
}

const paramsList = new ParamsListClass();
export default paramsList;
