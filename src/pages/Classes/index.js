import React, { Component } from 'react';

import './styles.css';
import axios from '../../services/api';
import MaterialTable from "material-table";
import {Link} from 'react-router-dom';

export default class Classes extends Component {
  
  state = {
    classes: []
  }

  async componentDidMount(){

    let response = await axios.get('/class');

    this.setState({classes: response.data});

  }
  
  render() {
    return (
      <div className="background">
        <div className="box_table">
        <Link to="/cadastrar-aula"><button className="signUp-teacher">Cadastrar novo</button></Link>
        <MaterialTable
          columns={[
            { title: "Data", field: "date" },
            { title: "Hora inicial", field: "init_hour" },
            { title: "Hora final", field: "final_hour" },
            { title: "Hora inicial", field: "init_hour" },
            { title: "Professor", field: "teacher.name" },
          ]}
          data={this.state.classes}
          title="Aulas"
          localization={{
            pagination: {
              labelDisplayedRows: '{from}-{to} de {count}',
              labelRowsSelect: 'Linhas',  
            },
            toolbar: {
              searchPlaceholder: 'Procurar'
            },
            header: {
                actions: 'Actions'
            },
            body: {
                emptyDataSourceMessage: 'Não há alunos cadastrados',
                filterRow: {
                    filterTooltip: 'Filtrar'
                },
                editRow: {
                  deleteText: 'Tem certeza que deseja deletar?'
                }
            }
          }}
          options={{
            pageSize: 7,
            headerStyle: {
              backgroundColor: '#47B8B6',
              color: '#FFF',
              width: '300px',
              fontSize: '16px',
            },
            rowStyle: {
              height: '40px'
            }
          }}
          
          detailPanel={[
            {
              icon: 'double_arrow',
              openIcon: 'arrow_drop_down_circle',
              tooltip: 'Alunos',
              render: rowData => {
              
                var students_class = [];

                rowData.student.map(student => {
                  students_class.push(
                    <div className="student" key={student._id}>
                      <p><span>Nome:</span> {student.name}</p>
                      <p><span>Identificador:</span> {student.id}</p>
                      <p><span>Criado em:</span> {student.createdAt}</p>
                    </div>
                  )
                });

                return (
                  <div className="list_students">
                    {students_class}
                  </div>
                );
            }
            }
          ]} 
          />
        </div>
      </div>
    );
  }
}
