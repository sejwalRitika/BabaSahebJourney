import React from "react";
const Provied =(props) =>{
return(
<>
<section id="header" className="d-flex align-items-center">
<div className="container-fluid">
<div className="row">
<div className="col-10 mx-auto">
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
<h3 className="my-3">
In 1932, the British colonial government announced the formation of a separate electorate for Depressed Classes in the Communal Award. Mahatma Gandhi fiercely opposed a separate electorate for untouchables, saying he feared that such an arrangement would divide the Hindu community
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
export default Provied