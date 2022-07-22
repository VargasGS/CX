﻿import React, { Component } from 'react';
import { Container, Form, Row, Col, Label, Input, Button, FormGroup } from 'reactstrap';


export class MantenimientoEstadoHallazgo extends Component {
    static displayName = MantenimientoEstadoHallazgo.name;


    render() {
        return (
            <main>
                <div className="row-full">Mantenimiento de los Estados del Hallazgo</div>
                <Container>
                    <Row>
                        <Col md={4}>

                            <div className="item1">
                                <h6 className="heading3">Estado de hallazgo </h6>
                                <input type="text" name="codigo_estado" />
                                <input type="text" name="descripcion_estado" />
                            </div>
                        </Col>

                        <Col md={4}>

                        </Col>

                        <Col md={4}>
                           
                        </Col>
                     </Row>

                    <Row>
                        <Col md={4}>
                           
                        </Col>
                    </Row>


                    <table className="table table-bordered table" name="table_estado">
                        <thead className="titulo2">
                            <tr >
                                <th>Código estado </th>
                                <th>Descripcion</th>
                               


                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>

                

                <Row>
                    <Col md={4}>
                        <div className="item1">
                            <h6 className="heading3"> Adicionado por</h6>
                            <input type="text" className="etiqueta" name="fecha_adicion" />
                            <input type="text" placeholder="" name="usuario_adicion_taller" />

                        </div>

                    </Col>

                    <Col md={4}>
                        <div className="item1">
                            <h6 className="heading3">Modificado por</h6>
                            <input type="text" className="etiqueta" name="fecha_modificacion" />
                            <input type="text" placeholder="" name="usuario_modificacion_taller" />
                        </div>

                    </Col>
                    </Row>

                    <Row>
                        <Col md={3}>
                         
                        </Col>
                        <Col md={3}>
                            <button id="btnGuardar" type="button" className="btn  btn-block botones" >Guardar</button>
                        </Col>

                        <Col md={3}>
                            <button id="btnGuardar" type="button" className="btn  btn-block botones ">Salir</button>
                        </Col>

                        <Col md={3}>
                           
                        </Col>
                    </Row>
                </Container>
               
          

                </main>
            );
    }
}