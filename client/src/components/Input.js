import React from 'react';
const Input =({label,setInput,value})=>{
    return(
        <div class="col-md-6">
            <div class="form-group">
                <label for="firstname">{label}</label>
                <input type="text" required class="form-control" value={value} placeholder="" onChange={(e)=>setInput(e.target.value)}/>
            </div>
        </div>
    );
};
export default Input;