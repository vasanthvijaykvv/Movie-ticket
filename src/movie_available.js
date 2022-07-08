import React from 'react';

import {  Link  } from 'react-router-dom';
import Vikrampic from './vikram1.jpg';
import Kgfpic from './KGF2.jpg';
import Beastpic from './beast1.jpg';
import Avengers from './avengers.jpg';
import Johnwick from './johnwick.jpg';
import Conjuring from './conjuring3.jpg';
import Wwoman from './wonderwoman.jpg';
import Pushpa from './pushpa.jpg';
import Valimai from './valimai.jpg';
import Suryamovie from './suryamovie.jpg';
import Dangal from './dangal.jpg';
class Movieavailable extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (<>
             <div class='container-fluid pt-3'>
                <div class='row'>
                    <div class='col-sm-4 boxshadow'>

                        <img src={Vikrampic}
                            class=" mx-auto d-block img-responsive rounded"
                            alt="my photo"
                            width="490px"
                            height="258px"
                            title='Vikram'
                        />
                    </div>
                    <div class='col-sm-4 boxshadow'>
                        <img src={Kgfpic}
                            class=" mx-auto d-block img-responsive rounded"
                            alt="my photo"
                            width="490px"
                            height="258px"
                            title='KGF'
                        />
                    </div>
                    <div class='col-sm-4 boxshadow'>
                        <img src={Beastpic}
                            class=" mx-auto d-block img-responsive rounded"
                            alt="my photo"
                            width="490px"
                            height="258px"
                            title='BEAST'
                        />
                    </div>
                </div>
            </div>
            <div class='container-fluid pt-3'>
                <div class='row'>
                    <div class='col-sm-3 boxshadow'>

                        <img src={Avengers}
                            class=" mx-auto d-block img-responsive rounded"
                            alt="my photo"
                            width="260px"
                            height="380px"
                            title='Avengers-ENDGAME'
                        />
                    </div>
                    <div class='col-sm-3 boxshadow'>
                        <img src={Johnwick}
                            class=" mx-auto d-block img-responsive rounded"
                            alt="my photo"
                            width="260px"
                            height="380px"
                            title='Johnwick'

                        />
                    </div>
                    <div class='col-sm-3 boxshadow'>
                        <img src={Conjuring}
                            class=" mx-auto d-block img-responsive rounded"
                            alt="my photo"
                            width="260px"
                            height="380px"
                            title='THE Conjuring 3 Final Chapter'

                        />
                    </div>
                    <div class='col-sm-3 boxshadow'>
                        <img src={Wwoman}
                            class=" mx-auto d-block img-responsive rounded"
                            alt="my photo"
                            width="260px"
                            height="380px"
                            title='Wonder Woman'

                        />
                    </div>
                </div>
            </div>
            <div class='container-fluid pt-3'>
                <div class='row'>
                    <div class='col-sm-3 boxshadow'>
                        <img src={Pushpa}
                            class=" mx-auto d-block img-responsive rounded"
                            alt="my photo"
                            width="260px"
                            height="380px"
                            title='PushPa'

                        />
                    </div>
                    <div class='col-sm-3 boxshadow'>
                        <img src={Valimai}
                            class=" mx-auto d-block img-responsive rounded"
                            alt="my photo"
                            width="260px"
                            height="380px"
                            title='Valimai'

                        />
                    </div>
                    <div class='col-sm-3 boxshadow'>
                        <img src={Suryamovie}
                            class=" mx-auto d-block img-responsive rounded"
                            alt="my photo"
                            width="260px"
                            height="380px"
                            title='Soorarai Pottru'

                        />
                    </div>
                    <div class='col-sm-3 boxshadow'>
                        <img src={Dangal}
                            class=" mx-auto d-block img-responsive rounded"
                            alt="my photo"
                            width="260px"
                            height="380px"
                            title='DANGAL'
                        />
                    </div>
                </div>
            </div>
            <div class='container- pt-3 '>
                <div class='row'>
                    <div class='col-sm-12'>
                        <ul class='pagination  justify-content-center'>
                            <button type='button' class='btn btn-success btn-lg' ><Link to="/ticketbook" id='previous'> <li class="page-item">Click for Booking</li></Link></button>
                        </ul>
                    </div>
                </div>
            </div>
        </>
        )
    }

}
export default Movieavailable;