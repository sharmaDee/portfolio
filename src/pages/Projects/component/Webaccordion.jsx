import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons'
const AccordionItem = ({ id, title, content, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  return (
    <div className="accordion-item border-b py-4 border-black/15 first:border-t  ">
      <button
        className="flex justify-between font-Teko text-Webblack items-center w-full cursor-pointer  gap-4 text-left  font-medium text-2xl focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`content-${id}`}
        id={`header-${id}`}
      >
        {title}
        <span className="text-base font-Kanit text-Webblack">{isOpen ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}</span>
      </button>

      <div
        ref={contentRef}
        id={`content-${id}`}
        role="region"
        aria-labelledby={`header-${id}`}
        className="overflow-hidden transition-all duration-300 ease-in-out "
        style={{ maxHeight: height }}
      >
        <p className="text-base font-Kanit font-normal text-Davy mt-4">{content}</p>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion ">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
