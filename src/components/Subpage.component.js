import React from 'react';

// content to render in contact and about pages also to render further components based on this layout

const subpageText = [
    {
        "path": "about",
        "title": "About",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vestibulum dolor. In blandit elit eget magna tempor, a varius est bibendum.",
        "class": "about-text"
    },
    {
        "path": "contact",
        "title": "Contact",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vestibulum dolor. In blandit elit eget magna tempor, a varius est bibendum.",
        "class": "contact-text"
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
                <p className={content.class}>
                    {content.text} 
                </p>
            </div> 
        </section>
    )            
    // }       
};

export default Subpage;