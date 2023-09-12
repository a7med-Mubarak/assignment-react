
export default function Contact(){
    return <>
            <div className=" container pt-5 pb-5">
                <div className="d-flex p-lg-5">
                    <div className="w-100">
                        <h1 className="title-unline mx-5 contact pb-3 text-white">
                        CONATCT SECTION
                            <div className="d-flex mx-5">
                                <h1>_____</h1>
                                <h1 className="pt-3">⭐</h1>
                                <h1>_____</h1>
                            </div>
                                
                        </h1>
                            
                        <div>
                            <div className=" contact row flex-column gap-3">
                                <div className="col">
                                    <input type="text" className="form-control w-50" placeholder="Your name" aria-label="name"/>
                                </div>
                                <div className="col">
                                    <input type="email" className="form-control w-50" placeholder="Your Age"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control w-50" placeholder="Your Email" aria-label="Your Email"/>
                                </div>
                                <div className="col">
                                    <input type="password" placeholder="userPassword" rows="6" className="form-control w-50"/>
                                </div></div>
                                  <div className="col pt-5  d-flex justify-content-center">
                                     <button type="submit" className="btn rounded-pill ps-3 pe-3 btn-light  w-25">Send Message</button>
                                  </div>
                        </div>
                        </div>
                        </div>
                        </div>
    </>
}

