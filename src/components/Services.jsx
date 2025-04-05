import React from 'react';
import '../components/Services.css'

const Services = () => {
  const servicesData = [
   
    {
      icon: 'fas fa-money-bill-trend-up',
      title: 'Consultation for Private Collectors & Studios',
      description: 'From assessing film reel conditions to advising on storage, restoration, and historical value, we provide expert guidance tailored to collectors, small studios, and heritage organizations.'
    },
    {
      icon: 'fas fa-coins',
      title: ' Archives & Libraries',
      description: 'Our network includes connections with globally respected partners like A24, Criterion Collection, and MUBI—helping creators and collectors link their work with renowned institutions.'
    },
    {
      icon: 'fas fa-shield-halved',
      title: 'Curation & Licensing Support',
      description: 'We assist filmmakers, collectors, and institutions in licensing restored content to streaming platforms, museums, or film festivals, enabling broader cultural reach.'
    },
    {
      icon: 'fas fa-credit-card',
      title: 'Digitization & Archiving',
      description: 'Convert analog reels into high-resolution digital formats for long-term preservation, easy access, and modern distribution—while ensuring fidelity to the original cinematic experience.'
    },    
    {
      icon: 'fas fa-headset',
      title: 'Physical Reel Restoration',
      description: 'We specialize in cleaning, repairing, and restoring damaged or aging film reels using professional-grade equipment and archival-safe techniques to revive films in their original glory.'
    }
    
  ];

  return (
   
    <section className="services">
      <div className="box-container">
        {servicesData.map((service, index) => (
          <div className="box" key={index}>
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default Services;
