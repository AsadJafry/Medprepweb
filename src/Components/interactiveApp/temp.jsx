import React, { useState } from 'react';

const SubSection = ({ subTitle, subContent }) => {
  const [subSectionHidden, setSubSectionHidden] = useState(true);

  // Function to convert \n to <br />
  const formatText = (text) => {
    return text.split('\n').map((item, index) => (
      <span key={index}>
        {item}
        <br />
      </span>
    ));
  };

  return (
    <div className="sub-section">
      <button className="section-header" onClick={() => setSubSectionHidden(!subSectionHidden)}>
        {subTitle}
      </button>

      {!subSectionHidden && (
        <div className="section-content">
          {subContent?.text && <p>{formatText(subContent.text)}</p>}

          {subContent?.table && (
            <TwoColumnedTable 
              table={subContent.table.tableData} 
              col1Header={subContent.table.col1Header} 
              col2Header={subContent.table.col2Header} 
            />
          )}

          {/* Adding the otherText case */}
          {subContent?.otherText && subContent.otherText.map((item, index) => (
            <div className="other-text-section" key={index}>
              <div className="text-row">
                <div className="dot"></div>
                <div className="text-bold">{item.textBold}</div>
              </div>
              <div className="text-row">
                <div className="dot"></div>
                <div className="text-normal">{formatText(item.text)}</div>
              </div>
            </div>
          ))}

          {/* Adding the nested subsections */}
          {subContent?.subSection && subContent.subSection.map((item, index) => (
            <SubSection key={index} subTitle={item.title} subContent={item.content} />
          ))}

          {/* Adding the text below subsections */}
          {subContent?.textBellowSubsection && subContent.textBellowSubsection.map((item, index) => (
            <div className="text-below" key={index}>
              {item.textBold && <div className="text-bold">{item.textBold}</div>}
              <div className="text-normal">{formatText(item.text)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubSection;
