import React from "react";
const Common =(props) =>{
return(
<>
<section id="header" className="d-flex align-items-center">
<div className="container-fluid">
<div className="row">
<div className="col-10 mx-auto">
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
<h1>{props.name}<strong className="brand-name">B.R.AMBEDKAR BIOGRAPHY</strong>
</h1>
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
export default Common