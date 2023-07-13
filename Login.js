import React from 'react'

const Login = () => {
  return (
    <div>
         
<div class="container">
  <div class="row">
    <div class="offset-md-3 text-center col-md-6">

      
      
<button type="button" class="btn rounded-pill btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Click Here Login
</button>
      
     
      
    </div>
  </div>
</div>




<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body p-3">
         
   
               <h3 class="text-center font-weight-bold text-primary">GIT <i><span class="text-danger">SYNERGY</span></i> 2K20 LOGIN</h3>
               <form>
                 
                 <div class="text-center">
                            <span class="text-warning"><i class="fa fa-users fa-5x"></i></span>
                        </div>
                 
               <div class="form-group">
                 <label>Enter Username</label>
                  <input type="text" class="form-control"/>
                   </div>
                 
                 
                 <div class="form-group">
                 <label>Enter Password</label>
                  <input type="password" class="form-control"/>
                   </div>
                <input type="submit" class="btn btn-primary btn-block mb-5 rounded-pill" value="Login"/>
                 </form>
             </div>
           </div>
        </div>  
      </div>
   
    </div>
  )
}

export default Login