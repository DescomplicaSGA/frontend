import React, { Component } from 'react';

import './styles.css';
import axios from '../../services/api';
import MaterialTable from "material-table";

export default class Classes extends Component {
  
  state = {
    classes: []
  }

  async componentDidMount(){

    let response = await axios.get('/class');

    this.setState({classes: response.data});

    console.log(this.state.classes);

  }
  
  render() {
    return (
      <div className="background">
        <MaterialTable
          columns={[
            { title: "Data", field: "date" },
            { title: "Hora inicial", field: "init_hour" },
            { title: "Hora final", field: "final_hour" },
            { title: "Hora inicial", field: "init_hour" },
            { title: "Estudantes", field: "student"},
            { title: "Professor", field: "teacher" },
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
            pageSize:10,
            headerStyle: {
              backgroundColor: '#01579b',
              color: '#FFF',
              width: '300px',
              fontSize: '16px',
            },
            rowStyle: {
              height: '40px',
              
            }
          }} 
        />
      </div>
    );
  }
}
