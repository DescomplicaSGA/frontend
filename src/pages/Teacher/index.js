import React, { Component } from 'react';

import './styles.css';
import axios from '../../services/api';
import MaterialTable from "material-table";
import {Link} from 'react-router-dom';

export default class Teacher extends Component {

  state = {
    teachers: []
  }

  async componentDidMount(){

    let response = await axios.get('/teacher');

    this.setState({teachers: response.data});

    console.log(this.state.teachers);

  }

  render() {
    return (
      <div className="background">
        <Link to="/cadastrar-professor"><button className="signUp-teacher">Cadastrar novo</button></Link>
        <MaterialTable
          columns={[
            { title: "Identificador", field: "id" },
            { title: "Nome", field: "name" },
            { title: "Criado em", field: "createdAt" }
          ]}
          data={this.state.teachers}
          title="Professores"
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
              backgroundColor: '#47B8B6',
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
