import React from 'react';
import {OpenLink} from '../../modules/open-links';


class About extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="padded">
          <h2>Clustering Market Basket</h2>
          <p>
            Aplicación de escritorio desarrollada como trabajo final de la materia <strong>Investigación Operativa</strong> de la carrera <strong>Ingeniería de Sistemas</strong> perteneciente a la <strong>Universidad del Centro de la Provincia de Buenos Aires, Argentina.</strong>
          </p>
          <h3>Acerca de la aplicación</h3>
          <p>
            El proposito de la aplicación es realizar un análisis de la cesta de compras con el objetivo de encontrar información de como se asocian los datos, para que luego ésta información pueda ser usada, de diversas maneras, por los vendedores para incrementar sus ventas y aumentar sus ganancias.
          </p>
          <p>
            Aunque la aplicación fue pensada para llevar a cago un análisis de la cesta de compras, esta se podría extender a diferentes estudios si se llevase a cabo una abstracción de la problématica, en la documentación entregada se pueden encontrar algunos ejemplos. (<a href="#" onClick={OpenLink.bind(this,'https://docs.google.com/document/d/1GZc95kKFlt_MZTeC2KZ82oIE6PqiXqpYcSda0l9TDdI/edit?usp=sharing')}>Link a la documentación</a>)
          </p>
          <h3>Desarrollado por:</h3>
          <strong>
            <ul>
              <li>Federico Elizalde  | <a href="mailto:efealde@gmail.com">efealde@gmail.com</a></li>
              <li>Baltasar Solanilla | <a href="mailto:baltasar.solanilla@gmail.com">baltasar.solanilla@gmail.com</a></li>
            </ul>
          </strong>
          <p>Repositorio en GitHub: <a href="#" onClick={OpenLink.bind(this,'https://github.com/felizalde/clustering-market')}>clustering-market</a></p>
        </div>
    );
  }

}

export default About;
