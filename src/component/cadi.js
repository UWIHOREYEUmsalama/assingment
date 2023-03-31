import { Component } from "react";
import img2 from '../Fimg/img2.jpg'
import img1 from '../Fimg/img1.jpg'
import img3 from '../Fimg/img3.jpg'
import img4 from '../Fimg/img4.jpg'


class Cadi extends Component{
    render(){
        return(
           

<div class="w-full flex justify-center p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bms-root">
    
    <div class="flex flex-col items-center pb-10 mx-4 bg-slate-50 w-50 h-50">
        <img class="w-50 h-50 " src={img1} alt="Bonnie image"/>
        
    </div>


    <div class="flex flex-col items-center pb-10 mx-4 bg-slate-50 w-50 h-50">
        <img class="w-50 h-50 " src={img3} alt="Bonnie image"/>
        
    </div>

    
    <div class="flex flex-col items-center pb-10 mx-4 bg-slate-50 ">
        <img class="w-50 h-50 " src={img2} alt="Bonnie image"/>
        
    </div>
    
    <div class="flex flex-col items-center pb-10 mx-4 bg-slate-50 ">
        <img class="w-50 h-50 " src={img4} alt="Bonnie image"/>
        
    </div>


</div>






        )
    }
}

export default Cadi