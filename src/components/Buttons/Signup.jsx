import React from 'react'

const Signup = () => {
    return (
        <div>
            <button type='button' className='btn btn-outline-primary ms-auto' data-bs-toggle='modal' data-bs-target='#loginModal'>
                <span className='fa fa-sign-in me-1'></span>Register
            </button>

            <div className='modal fade' id='loginModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'> 
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalLabel'>Register</h5>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>

                        </div>
                        <div className='modal-body'>

                            <button type='button' className='btn btn-primary w-100 mb-4'>
                                <span className='fa fa-google me-2'></span>Sign in with Google
                            </button>

                            <button type='button' className='btn btn-primary w-100 mb-4'>
                                <span className='fa fa-facebook me-2'></span>Sign in with Facebook
                            </button>

                            <form>
                                <div className='mb-3'>
                                    <label htmlFor='loginEmail' className='form-label'>Email address</label>
                                    <input type='email' className='form-control' id='exampleInputEmail' aria-describedby='emailHelp' />   
                                    <div id='emailHelp' className='form-text'>we'll never share your email with anyone else.</div> 

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='loginPassword' className='form-label'>Password</label>
                                    <input type='password' className='form-control' id='exampleInputPassword'aria-describedby='passwordHelp' />

                                </div>
                                <div className='mb-3 form-check'>
                                    <input type='checkbox' className='form-check-input' id='exampleCheck1' />
                                    <label className='form-label' htmlFor='loginCheck'>Check me out</label>

                                </div>
                                <button type='submit' className='btn btn-outline-primary w-100 mt-5'>Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )   
}

export default Signup