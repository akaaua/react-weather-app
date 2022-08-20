import { Accordion, AccordionItemHeading, AccordionItem, AccordionItemPanel } from 'react-accessible-accordion';

const Forecast = ({ data }) => {
  return (
    <>
      <label className='title'>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem>
            <AccordionItemHeading></AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}

      </Accordion>
    </>
  )
}

export default Forecast