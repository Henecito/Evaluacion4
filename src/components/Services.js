import React from 'react';
import pantallImage from '../assets/img/pantalla.webp';
import chasisImage from '../assets/img/chasis.jpeg';
import bateriaImage from '../assets/img/bateria.jpeg';
import computadoraImage from '../assets/img/computadora.jpg';
import consolaImage from '../assets/img/consola.jpg';

const services = [
  {
    title: 'Cambios de Pantalla',
    image: pantallImage,
  },
  {
    title: 'Cambios de Chasis',
    image: chasisImage,
  },
  {
    title: 'Cambios de Batería',
    image: bateriaImage,
  },
  {
    title: 'Reparación de Computadoras',
    image: computadoraImage,
  },
  {
    title: 'Mantenciones de Consolas',
    image: consolaImage,
  },
  {
    title: 'Próximos Servicios',
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="services-cards">
        {services.map((service, index) => (
          <div key={index} className="services-card">
            <img 
              src={service.image} 
              alt={service.title} 
              className="services-card-image" 
              onError={(e) => {
                e.target.onerror = null; 
              }}
            />
            <h3 className="services-card-title">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
