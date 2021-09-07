import './Login.css';
const Login = ({loggedin, Username, UsernameFun}) =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="col-md-6 offset-md-3 col-sm-6 offset-sm-3">
                        <div className="card pt-5">
                            <div className="card-body">
                                <h4>Lets Start</h4>
                                <input type="text" className="form-control" placeholder="Enter your name" value={Username} onChange={(e) => UsernameFun(e)} />
                                <div>
                                    <button className="btn btn-primary mt-3" onClick={loggedin}>Start</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login