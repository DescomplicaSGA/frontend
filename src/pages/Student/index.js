import React, { Component } from 'react';

import './styles.css';
import axios from '../../services/api';
import MaterialTable from "material-table";

export default class Student extends Component {

  state = {
    students: []
  }


  async componentDidMount(){

    let response = await axios.get('/student');

    this.setState({students: response.data});

    console.log(this.state.students);

  }

  render() {
    return (
      <div className="background">
        <MaterialTable
          columns={[
            { title: "Identificador", field: "id" },
            { title: "Nome", field: "name" },
            { title: "Criado em", field: "createdAt"},
          ]}
          data={this.state.students}
          title="Alunos"
          localization={{
            pagination: {
              labelDisplayedRows: '{from}-{to} of {count}',
              labelRowsSelect: 'Linhas',
              labelDisplayedRows: '{from}-{to} de {count}'  
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
              width: '500px',
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


