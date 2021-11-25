import React from 'react';
import image1 from '../../img/clients/client-1.png';
import image2 from '../../img/clients/client-2.png';
import image3 from '../../img/clients/client-3.png';
import image4 from '../../img/clients/client-4.png';
import image5 from '../../img/clients/client-5.png';
import image6 from '../../img/clients/client-6.png';


const Client = () => {
    return (
        <section id="clients" class="clients section-bg">
            <div class="container">

                <div class="row">

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={image1} class="img-fluid" alt="" />
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={image2} class="img-fluid" alt="" />
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={image3} class="img-fluid" alt="" />
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={image4} class="img-fluid" alt="" />
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={image5} class="img-fluid" alt="" />
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={image6} class="img-fluid" alt="" />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Client;