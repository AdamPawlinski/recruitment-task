import React from 'react';

const subpageText = [
    {
        "path": "/about",
        "title": "About",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vestibulum dolor. In blandit elit eget magna tempor, a varius est bibendum."
    },
    {
        "path": "/contact",
        "title": "Contact",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vestibulum dolor. In blandit elit eget magna tempor, a varius est bibendum."
    }
]



const Subpage = (props) => {
    const { location } = props;  
    const content = subpageText.find( 
        index => { 
            index.path === location.pathname            
        }
    )
    return (
        <section className="subpage-container">
        {console.log(subpageText[0].path, content, location.pathname)}
            <div className="subpage-image-container">
                <i className="far fa-address-book"></i>
            </div>  
            <div>
                {/* <h2>{content.title}</h2>
                <p>
                    {content.text} 
                </p> */}
            </div> 
        </section>
    )            
    // }       
};

export default Subpage;