import React from "react";
const Card = (props)=>{
return(
<>
<section id="header" className="d-flex align-items-center">
<div className="container-fluid">
<div className="row">
<div className="col-10 mx-auto">
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
<h2 className="my-3">
Studies at the London School of Economics, Studies at the University of Bombay, Studies at Columbia University,Post-secondary education.
</h2>
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
export default Card