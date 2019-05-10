import React from 'react';
import Product from '../components/Product.component';

const subpageText = {
    about: {
        title: 'about',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vestibulum dolor. In blandit elit eget magna tempor, a varius est bibendum.'
    },
    contact: {
        title: 'contact',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vestibulum dolor. In blandit elit eget magna tempor, a varius est bibendum.'
    }
}

const Subpage = (subpageText) => {
    return (
        <section className="subpage-container">
            <div className="subpage-image-container">
                <i className="far fa-address-book"></i>
            </div>
            <h2>Subpage Title</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vestibulum dolor. In blandit elit eget magna tempor, a varius est bibendum. 
            </p>
        </section>
    )
};

export default Subpage;