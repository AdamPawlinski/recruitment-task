import React  from 'react';
import Sidebar from '../components/Sidebar.component';

const MainLayout = (props) => {    
    return (
        <React.Fragment>
            <Sidebar />
            <section className="main-container">  
                {props.children}
            </section>
        </React.Fragment>
    )
};

export default MainLayout;