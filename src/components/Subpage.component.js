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
        <section>
            <i className="far fa-address-book"></i>
            <h2>Subpage Title</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vestibulum dolor. In blandit elit eget magna tempor, a varius est bibendum. 
            </p>
        </section>
    )
};

export default Subpage;