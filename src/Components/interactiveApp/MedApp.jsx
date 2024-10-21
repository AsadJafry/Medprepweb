import React from 'react';
import SectionPages from './SectionPages';
import { contents } from '../../utils/data';

function MedApp(props) {
    let data=contents
    return (
        <div>
            {contents.sections.map((item,index)=>{
                return (

                    <SectionPages sectionObj={item.section} key={index}/>
                )
            })}
        </div>
    );
}

export default MedApp;