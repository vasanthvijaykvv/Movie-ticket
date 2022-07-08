import React from 'react';

import { Link } from 'react-router-dom';
import './bookticket.css'
import swal from 'sweetalert';
var valone = "";
class Booktickets extends React.Component {
   constructor() {
      super();
      this.state = { tickets: "" };
   }
   onclickbutton = (valtwo) => {

      switch (valtwo) {
         case "A1":
            document.getElementById("myBtn1").disabled = true;
            break;
         case "A2":
            document.getElementById("myBtn2").disabled = true;
            break;
         case "A3":
            document.getElementById("myBtn3").disabled = true;
            break;
         case "A4":
            document.getElementById("myBtn4").disabled = true;
            break;
         case "A5":
            document.getElementById("myBtn5").disabled = true;
            break;
         case "A6":
            document.getElementById("myBtn6").disabled = true;
            break;
         case "A7":
            document.getElementById("myBtn7").disabled = true;
            break;
         case "A8":
            document.getElementById("myBtn8").disabled = true;
            break;
         case "A9":
            document.getElementById("myBtn9").disabled = true;
            break;
         case "A10":
            document.getElementById("myBtn10").disabled = true;
            break;
         case "A11":
            document.getElementById("myBtn11").disabled = true;
            break;
         case "A12":
            document.getElementById("myBtn12").disabled = true;
            break;
         case "B1":
            document.getElementById("myBtn13").disabled = true;
            break;
         case "B2":
            document.getElementById("myBtn14").disabled = true;
            break;
         case "B3":
            document.getElementById("myBtn15").disabled = true;
            break;
         case "B4":
            document.getElementById("myBtn16").disabled = true;
            break;
         case "B5":
            document.getElementById("myBtn17").disabled = true;
            break;
         case "B6":
            document.getElementById("myBtn18").disabled = true;
            break;
         case "B7":
            document.getElementById("myBtn19").disabled = true;
            break;
         case "B8":
            document.getElementById("myBtn20").disabled = true;
            break;
         case "B9":
            document.getElementById("myBtn21").disabled = true;
            break;
         case "B10":
            document.getElementById("myBtn22").disabled = true;
            break;
         case "B11":
            document.getElementById("myBtn23").disabled = true;
            break;
         case "B12":
            document.getElementById("myBtn24").disabled = true;
            break;
         case "C1":
            document.getElementById("myBtn25").disabled = true;
            break;
         case "C2":
            document.getElementById("myBtn26").disabled = true;
            break;
         case "C3":
            document.getElementById("myBtn27").disabled = true;
            break;
         case "C4":
            document.getElementById("myBtn28").disabled = true;
            break;
         case "C5":
            document.getElementById("myBtn29").disabled = true;
            break;
         case "C6":
            document.getElementById("myBtn30").disabled = true;
            break;
         case "C7":
            document.getElementById("myBtn31").disabled = true;
            break;
         case "C8":
            document.getElementById("myBtn32").disabled = true;
            break;
         case "C9":
            document.getElementById("myBtn33").disabled = true;
            break;
         case "C10":
            document.getElementById("myBtn34").disabled = true;
            break;
         case "D1":
            document.getElementById("myBtn35").disabled = true;
            break;
         case "D2":
            document.getElementById("myBtn36").disabled = true;
            break;
         case "D3":
            document.getElementById("myBtn37").disabled = true;
            break;
         case "D4":
            document.getElementById("myBtn38").disabled = true;
            break;
         case "D5":
            document.getElementById("myBtn39").disabled = true;
            break;
         case "D6":
            document.getElementById("myBtn40").disabled = true;
            break;
         case "D7":
            document.getElementById("myBtn41").disabled = true;
            break;
         case "D8":
            document.getElementById("myBtn42").disabled = true;
            break;
         case "D9":
            document.getElementById("myBtn43").disabled = true;
            break;
         case "D10":
            document.getElementById("myBtn44").disabled = true;
            break;
         case "E1":
            document.getElementById("myBtn45").disabled = true;
            break;
         case "E2":
            document.getElementById("myBtn46").disabled = true;
            break;
         case "E3":
            document.getElementById("myBtn47").disabled = true;
            break;
         case "E4":
            document.getElementById("myBtn48").disabled = true;
            break;
         case "E5":
            document.getElementById("myBtn49").disabled = true;
            break;
         case "E6":
            document.getElementById("myBtn50").disabled = true;
            break;
         case "E7":
            document.getElementById("myBtn51").disabled = true;
            break;
         case "E8":
            document.getElementById("myBtn52").disabled = true;
            break;
         case "E9":
            document.getElementById("myBtn53").disabled = true;
            break;
         case "E10":
            document.getElementById("myBtn54").disabled = true;
            break;
         case "F1":
            document.getElementById("myBtn55").disabled = true;
            break;
         case "F2":
            document.getElementById("myBtn56").disabled = true;
            break;
         case "F3":
            document.getElementById("myBtn57").disabled = true;
            break;
         case "F4":
            document.getElementById("myBtn58").disabled = true;
            break;
         case "F5":
            document.getElementById("myBtn59").disabled = true;
            break;
         case "F6":
            document.getElementById("myBtn60").disabled = true;
            break;
         case "F7":
            document.getElementById("myBtn61").disabled = true;
            break;
         case "F8":
            document.getElementById("myBtn62").disabled = true;
            break;
         case "F9":
            document.getElementById("myBtn63").disabled = true;
            break;
         case "F10":
            document.getElementById("myBtn64").disabled = true;
            break;
         case "G1":
            document.getElementById("myBtn65").disabled = true;
            break;
         case "G2":
            document.getElementById("myBtn66").disabled = true;
            break;
         case "G3":
            document.getElementById("myBtn67").disabled = true;
            break;
         case "G4":
            document.getElementById("myBtn68").disabled = true;
            break;
         case "G5":
            document.getElementById("myBtn69").disabled = true;
            break;
         case "G6":
            document.getElementById("myBtn70").disabled = true;
            break;
         case "G7":
            document.getElementById("myBtn71").disabled = true;
            break;
         case "G8":
            document.getElementById("myBtn72").disabled = true;
            break;
         case "G9":
            document.getElementById("myBtn73").disabled = true;
            break;
         case "G10":
            document.getElementById("myBtn74").disabled = true;
            break;
      }
      valone = valone + "-" + valtwo;
      return this.setState({ tickets: valone })


   }


   nullvalue = () => {
      return window.location.reload()
   }
   confrimBooking = () => {
      var len = this.state.tickets.toString().length;
      if (len >= 1) {
         swal("Ticket Booked Successfully!", "Enjoy the Movie... Seat no" + this.state.tickets, "success")
         setTimeout(() => {
            window.location.reload()
         }, 4700)
      }
      else {
         swal("ERROR!", "Kindly Book Atleast one Ticket", "warning");

      }
      return this.setState({ tickets: "", vv: "", k: "" })
   }
   render() {
      return (<>

         <div class='container pt-3 justify-content-center' >
            <div class='box1'>A</div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn1' onClick={() => this.onclickbutton("A1")} title='A1'>1</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn2' onClick={() => this.onclickbutton("A2")} title='A2'> 2</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn3' onClick={() => this.onclickbutton("A3")} title='A3'> 3</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn4' onClick={() => this.onclickbutton("A4")} title='A4'> 4</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn5' onClick={() => this.onclickbutton("A5")} title='A5'> 5</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn6' onClick={() => this.onclickbutton("A6")} title='A6'> 6</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn7' onClick={() => this.onclickbutton("A7")} title='A7'> 7</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn8' onClick={() => this.onclickbutton("A8")} title='A8'> 8</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn9' onClick={() => this.onclickbutton("A9")} title='A9'> 9</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn10' onClick={() => this.onclickbutton("A10")} title='A10'> 10</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn11' onClick={() => this.onclickbutton("A11")} title='A11'> 11</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn12' onClick={() => this.onclickbutton("A12")} title='A12'> 12</button></div>
         </div>
         <div class='container  justify-content-center '>
            <div class='box1'>B</div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn13' onClick={() => this.onclickbutton("B1")} title='B1'> 1</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn14' onClick={() => this.onclickbutton("B2")} title='B2'> 2</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn15' onClick={() => this.onclickbutton("B3")} title='B3'> 3</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn16' onClick={() => this.onclickbutton("B4")} title='B4'> 4</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn17' onClick={() => this.onclickbutton("B5")} title='B5'> 5</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn18' onClick={() => this.onclickbutton("B6")} title='B6'> 6</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn19' onClick={() => this.onclickbutton("B7")} title='B7'> 7</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn20' onClick={() => this.onclickbutton("B8")} title='B8'> 8</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn21' onClick={() => this.onclickbutton("B9")} title='B9'> 9</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn22' onClick={() => this.onclickbutton("B10")} title='B10' > 10</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn23' onClick={() => this.onclickbutton("B11")} title='B11'> 11</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn24' onClick={() => this.onclickbutton("B12")} title='B12'> 12</button></div>
         </div>
         <div class='container  justify-content-center '>

            <div class='box1'>C</div>

            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn25' onClick={() => this.onclickbutton("C1")} title='C1'> 1</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn26' onClick={() => this.onclickbutton("C2")} title='C2'> 2</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn27' onClick={() => this.onclickbutton("C3")} title='C3'> 3</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn28' onClick={() => this.onclickbutton("C4")} title='C4'> 4</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn29' onClick={() => this.onclickbutton("C5")} title='C5'> 5</button></div>
            <div className='emptyclass'>emptyclasssss</div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn30' onClick={() => this.onclickbutton("C6")} title='C6'> 6</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn31' onClick={() => this.onclickbutton("C7")} title='C7' > 7</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn32' onClick={() => this.onclickbutton("C8")} title='C8' > 8</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn33' onClick={() => this.onclickbutton("C9")} title='C9'> 9</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn34' onClick={() => this.onclickbutton("C10")} title='C10'> 10</button></div>

         </div>
         <div class='container  justify-content-center '>

            <div class='box1'>D</div>

            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn35' onClick={() => this.onclickbutton("D1")} title='D1'> 1</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn36' onClick={() => this.onclickbutton("D2")} title='D2'> 2</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn37' onClick={() => this.onclickbutton("D3")} title='D3'> 3</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn38' onClick={() => this.onclickbutton("D4")} title='D4'> 4</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn39' onClick={() => this.onclickbutton("D5")} title='D5'> 5</button></div>
            <div className='emptyclass'>emptyclasssss</div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn40' onClick={() => this.onclickbutton("D6")} title='D6'> 6</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn41' onClick={() => this.onclickbutton("D7")} title='D7'> 7</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn42' onClick={() => this.onclickbutton("D8")} title='D8'> 8</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn43' onClick={() => this.onclickbutton("D9")} title='D9'> 9</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn44' onClick={() => this.onclickbutton("D10")} title='D10'> 10</button></div>
         </div>
         <div class='container  justify-content-center '>

            <div class='box1'>E</div>

            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn45' onClick={() => this.onclickbutton("E1")} title='E1'> 1</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn46' onClick={() => this.onclickbutton("E2")} title='E2'> 2</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn47' onClick={() => this.onclickbutton("E3")} title='E3'> 3</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn48' onClick={() => this.onclickbutton("E4")} title='E4'> 4</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn49' onClick={() => this.onclickbutton("E5")} title='E5'> 5</button></div>
            <div className='emptyclass'>emptyclasssss</div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn50' onClick={() => this.onclickbutton("E6")} title='E6'> 6</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn51' onClick={() => this.onclickbutton("E7")} title='E7'> 7</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn52' onClick={() => this.onclickbutton("E8")} title='E8'> 8</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn53' onClick={() => this.onclickbutton("E9")} title='E9'> 9</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn54' onClick={() => this.onclickbutton("E10")} title='E10'> 10</button></div>
         </div>
         <div class='container  justify-content-center '>

            <div class='box1'>F</div>

            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn55' onClick={() => this.onclickbutton("F1")} title='F1'> 1</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn56' onClick={() => this.onclickbutton("F2")} title='F2'> 2</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn57' onClick={() => this.onclickbutton("F3")} title='F3'> 3</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn58' onClick={() => this.onclickbutton("F4")} title='F4'> 4</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn59' onClick={() => this.onclickbutton("F5")} title='F5'> 5</button></div>
            <div className='emptyclass'>emptyclasssss</div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn60' onClick={() => this.onclickbutton("F6")} title='F6'> 6</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn61' onClick={() => this.onclickbutton("F7")} title='F7'> 7</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn62' onClick={() => this.onclickbutton("F8")} title='F8'> 8</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn63' onClick={() => this.onclickbutton("F9")} title='F9'> 9</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn64' onClick={() => this.onclickbutton("F10")} title='F10'> 10</button></div>
         </div>
         <div class='container  justify-content-center '>

            <div class='box1'>G</div>

            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn65' onClick={() => this.onclickbutton("G1")} title='G1'> 1</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn66' onClick={() => this.onclickbutton("G2")} title='G2'> 2</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn67' onClick={() => this.onclickbutton("G3")} title='G3'> 3</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn68' onClick={() => this.onclickbutton("G4")} title='G4'> 4</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn69' onClick={() => this.onclickbutton("G5")} title='G5'> 5</button></div>
            <div className='emptyclass'>emptyclasssss</div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn70' onClick={() => this.onclickbutton("G6")} title='G6'> 6</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn71' onClick={() => this.onclickbutton("G7")} title='G7'> 7</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn72' onClick={() => this.onclickbutton("G8")} title='G8'> 8</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn73' onClick={() => this.onclickbutton("G9")} title='G9'> 9</button></div>
            <div class='box'> <button type='button' class='btn  btn-md' id='myBtn74' onClick={() => this.onclickbutton("G10")} title='G10'> 10</button></div><br></br>

         </div>
         <div className='outputvalue'><strong>Seat no{this.state.tickets}</strong></div>
         <div class='container- pt-3'>
            <div class='row'>
               <div class='col-sm-4'>
                  <ul class='pagination '>
                     <button type='button' class='btn btn-success btn-lg' onClick={this.nullvalue} ><Link to="/movie" id='previous'> <li class="page-item ">Previous</li></Link></button>
                  </ul>
               </div>
               <div class='col-sm-4'>
                  <ul class='pagination justify-content-center '>
                     <button type='button' class='btn btn-info btn-lg' onClick={this.confrimBooking} > <li class="page-item ">Confrim Booking</li></button>
                  </ul>
               </div>
               <div class='col-sm-4'>
                  <ul class='pagination justify-content-center '>
                     <button type='button' class='btn btn-danger btn-lg' onClick={this.nullvalue} > <li class="page-item ">RESET</li></button>
                  </ul>
               </div>
            </div>
         </div>
      </>
      )
   }

}

export default Booktickets;