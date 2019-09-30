import React, { Component } from 'react';

import './styles.css';
import axios from '../../services/api';
import MaterialTable from "material-table";
import {Link} from 'react-router-dom';

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
        <div className="_box_table">
          <Link to='/cadastrar-estudante' >
            <button className="signUp-student">Cadastrar novo</button>
          </Link>
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
              pageSize:7,
              headerStyle: {
                backgroundColor: '#47B8B6',
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
      </div>
    );
  }
}


