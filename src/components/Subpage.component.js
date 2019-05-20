import React from 'react';

// content to render in contact and about pages also to render further components based on this layout

const subpageText = [
    {
        "path": "about",
        "title": "About",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vestibulum dolor. In blandit elit eget magna tempor, a varius est bibendum."
    },
    {
        "path": "contact",
        "title": "Contact",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vestibulum dolor. In blandit elit eget magna tempor, a varius est bibendum."
    }
]

const Subpage = (props) => {  
    const content = subpageText.find( 
        item => item.path === props.match.params.name
    )
    return (
        <section className="subpage-container">
            <div className="subpage-image-container">
                <i className="far fa-address-book"></i>
            </div>  
            <div>
                <h2>{content.title}</h2>
                <p>
                    {content.text} 
                </p>
            </div> 
        </section>
    )            
    // }       
};

export default Subpage;