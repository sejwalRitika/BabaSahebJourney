import React from "react";
const Compile =(props) =>{
return(
<>
<section id="header" className="d-flex align-items-center">
<div className="container-fluid">
<div className="row">
<div className="col-10 mx-auto">
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
<h3 className="my-3">
In 1935, Ambedkar was appointed principal of the Government Law College, Bombay, a position he held for two years. He also served as the chairman of Governing body of Ramjas College, University of Delhi, after the death of its Founder Shri Rai Kedarnath. Settling in Bombay (today called Mumbai), Ambedkar oversaw the construction of a house, and stocked his personal library with more than 50,000 books. His wife Ramabai died after a long illness the same year. It had been her long-standing wish to go on a pilgrimage to Pandharpur, but Ambedkar had refused to let her go, telling her that he would create a new Pandharpur for her instead of Hinduism's Pandharpur which treated them as untouchables. At the Yeola Conversion Conference on 13 October in Nasik, Ambedkar announced his intention to convert to a different religion and exhorted his followers to leave Hinduism. He would repeat his message at many public meetings across India.
</h3>
</div>
<div className="col-lg-6 order-1 order-lg-2 header-img">
<img src={props.imgsrc} className="img-fluid animatedalt"alt="home alt"/>
</div>
</div>
</div>
</div>
</div>
</section>
</>
)
}
export default Compile