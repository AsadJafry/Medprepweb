// import React, { useState } from 'react';
// import './Styles.css'; // Assuming you have some global styles defined
// import TwoColumnedTable from './TwoColumnedTable'; // Ensure this component is adapted for web

// const SectionPages = ({ sectionObj }) => {

//   // Component for subsections
//   const SubSection = ({ subTitle, SubContent }) => {
//     const [subSectionHidden, setSubSectionHidden] = useState(true);

//     return (
//       <div className="subsection">
//         <button 
//           onClick={() => setSubSectionHidden(!subSectionHidden)}
//           className="toggle-button"
//         >
//           {subTitle}
//         </button>

//         {!subSectionHidden && (
//           <div className="content">
//             {SubContent?.text && (
//               <div className="text-content">
//                 <div className="bullet-point"></div>
//                 <p>{SubContent.text}</p>
//               </div>
//             )}

//             {SubContent?.table && (
//               <div className="table-section">
//                 <TwoColumnedTable 
//                   table={SubContent?.table?.tableData} 
//                   col1Header={SubContent?.table?.col1Header} 
//                   col2Header={SubContent?.table?.col2Header} 
//                 />
//               </div>
//             )}

//             {SubContent?.otherText && SubContent?.otherText.map((item, index) => (
//               <div className="other-text" key={index}>
//                 <div className="text-bold">{item?.textBold}</div>
//                 <div className="text-normal">{item?.text}</div>
//               </div>
//             ))}

//             {SubContent?.subSection && SubContent?.subSection.map((item, index) => (
//               <SubSection key={index} subTitle={item?.title} SubContent={item?.content} />
//             ))}

//             {SubContent?.textBellowSubsection && SubContent?.textBellowSubsection.map((item, index) => (
//               <div className="text-below" key={index}>
//                 {item?.textBold && <div className="text-bold">{item?.textBold}</div>}
//                 <div className="text-normal">{item.text}</div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="section-page">
//       <h1>{sectionObj?.title}</h1>
//       <div className="scroll-view">
//         {sectionObj?.subSection.map((item, index) => (
//           <SubSection key={index} subTitle={item?.title} SubContent={item?.content} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionPages;

import React, { useState } from 'react';
import './Styles2.css';
import TwoColumnedTable from './TwoColumnedTable';

function SectionPages({ sectionObj }) {
  const SubSection = ({ subTitle, subContent }) => {
    const [subSectionHidden, setSubSectionHidden] = useState(true);
    
    return (
      <div className="sub-section">
        <button className="section-header" onClick={() => setSubSectionHidden(!subSectionHidden)}>
          {subTitle}
        </button>
        
        {!subSectionHidden && (
          <div className="section-content">
            {subContent?.text && <p>{subContent?.text}</p>}

            {subContent?.table && (
              <TwoColumnedTable 
                table={subContent?.table?.tableData} 
                col1Header={subContent?.table?.col1Header} 
                col2Header={subContent?.table?.col2Header} 
              />
            )}

            {/* Adding the otherText case */}
            {subContent?.otherText && subContent?.otherText.map((item, index) => (
              <div className="other-text-section" key={index}>
                <div className="text-row">
                  <div className="dot"></div>
                  <div className="text-bold">{item?.textBold}</div>
                </div>
                <div className="text-row">
                  <div className="dot"></div>
                  <div className="text-normal">{item?.text}</div>
                </div>
              </div>
            ))}

            {/* Adding the nested subsections */}
            {subContent?.subSection && subContent?.subSection.map((item, index) => (
              <SubSection key={index} subTitle={item?.title} subContent={item?.content} />
            ))}

            {/* Adding the text below subsections */}
            {subContent?.textBellowSubsection && subContent?.textBellowSubsection.map((item, index) => (
              <div className="text-below" key={index}>
                {item?.textBold && <div className="text-bold">{item?.textBold}</div>}
                <div className="text-normal">{item.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="section-page">
      <header className="app-header">
        <h1>{sectionObj?.title}</h1>
      </header>
      <div className="content">
        {sectionObj?.subSection.map((item, index) => (
          <SubSection key={index} subTitle={item?.title} subContent={item?.content} />
        ))}
      </div>
    </div>
  );
}

export default SectionPages;

// import React, { useState } from 'react';
// import './Styles2.css';

// import TwoColumnedTable from './TwoColumnedTable';

// function SectionPages({ sectionObj }) {
//   const SubSection = ({ subTitle, subContent }) => {
//     const [subSectionHidden, setSubSectionHidden] = useState(true);
    
//     return (
//       <div className="sub-section">
//         <button className="section-header" onClick={() => setSubSectionHidden(!subSectionHidden)}>
//           {subTitle}
//         </button>
        
//         {!subSectionHidden && (
//           <div className="section-content">
//             {subContent?.text && <p>{subContent?.text}</p>}

//             {subContent?.table && (
//               <TwoColumnedTable 
//                 table={subContent?.table?.tableData} 
//                 col1Header={subContent?.table?.col1Header} 
//                 col2Header={subContent?.table?.col2Header} 
//               />
//             )}

//             {/* Adding the nested subsections */}
//             {subContent?.subSection && subContent?.subSection.map((item, index) => (
//               <SubSection key={index} subTitle={item?.title} subContent={item?.content} />
//             ))}

//             {/* Adding the text below subsections */}
//             {subContent?.textBellowSubsection && subContent?.textBellowSubsection.map((item, index) => (
//               <div className="text-below" key={index}>
//                 {item?.textBold && <div className="text-bold">{item?.textBold}</div>}
//                 <div className="text-normal">{item.text}</div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="section-page">
//       <header className="app-header">
//         <h1>{sectionObj?.title}</h1>
//       </header>
//       <div className="content">
//         {sectionObj?.subSection.map((item, index) => (
//           <SubSection key={index} subTitle={item?.title} subContent={item?.content} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SectionPages;
