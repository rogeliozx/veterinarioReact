import React, { Component } from "react";
import uuid from "uuid";

const steteInicial = {
  cita: {
    mascota: "",
    Dueño: "",
    Fecha: "",
    Hora: "",
    sintomas: ""
  },
  error: false
};

class NuevaCita extends Component {
  state = { ...steteInicial };
  handleChange = e => {
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { mascota, Dueño, Fecha, Hora, sintomas } = this.state.cita;

    if (
      mascota === "" ||
      Dueño === "" ||
      Fecha === "" ||
      Hora === "" ||
      sintomas === ""
    ) {
      this.setState({
        error: true
      });
      return;
    }
    //generar objeto con los datos
    const nuevaCita = { ...this.state.cita };
    nuevaCita.id = uuid();
    this.props.crearNuevaCita(nuevaCita);

    this.setState({
      ...steteInicial
    });
  };

  render() {
    const { error } = this.state;
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Crea una nueva cita</h2>
          {error ? (
            <div
              className="alert alert-danger 
            mt-2 mb-5 text-center"
            >
              Todos los campos con obligatorios
            </div>
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.mascota}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Dueño</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Dueño Mascota"
                  name="Dueño"
                  onChange={this.handleChange}
                  value={this.state.cita.Dueño}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-4 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Dueño Mascota"
                  name="Fecha"
                  onChange={this.handleChange}
                  value={this.state.cita.Fecha}
                />
              </div>

              <label className="col-sm-2 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-4 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  placeholder="Dueño Mascota"
                  name="Hora"
                  onChange={this.handleChange}
                  value={this.state.cita.Hora}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Sintomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="sintomas"
                  placeholder="Describe sintomas"
                  onChange={this.handleChange}
                  value={this.state.cita.sintomas}
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar nueva cita"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default NuevaCita;
