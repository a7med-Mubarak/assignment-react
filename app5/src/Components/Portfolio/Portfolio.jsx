
export default function Portfolio(){


    function imgPop(){
        document.querySelector(".popUp").classList.replace("d-none", "d-flex");
    }
    function removee(){
        document.querySelector(".popUp").classList.replace("d-flex", "d-none");
    }


    return <>
    <section className="py-5">
        <div className="container">

        <h1 className="pl">PORTFOLIO COMPONENT</h1>
            <div className="mx-auto mb-3 d-flex justify-content-center">
                <h2>__________</h2>
                <h2 className="pt-3">⭐</h2>
                <h2>__________</h2>
            </div>

            <div className="row g-5">
                <div className="col-md-4 ">
                    <div className="item">    
                        <img   className="img-fluid" src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt=""/>
                        <div className="hover" onClick={() =>imgPop()}><i className="fa-2xl fa-solid fa-plus"/></div>
                    </div>
                    
                 
                </div>
                
                <div className="col-md-4">
                    <div className="item">
                        <img className="img-fluid" src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt=""/>
                        <div onClick={() =>imgPop()} className="hover"><i className="fa-2xl fa-solid fa-plus"/></div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item">
                        <img className="img-fluid" src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt=""/>
                        <div onClick={() =>imgPop()} className="hover"><i className="fa-2xl fa-solid fa-plus"/></div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item">
                        <img className="img-fluid" src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt=""/>
                        <div onClick={() =>imgPop()} className="hover"><i className="fa-2xl fa-solid fa-plus"/></div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item">
                        <img className="img-fluid" src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt=""/>
                        <div onClick={() =>imgPop()} className="hover"><i className="fa-2xl fa-solid fa-plus"/></div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item">
                        <img className="img-fluid" src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt=""/>
                        <div onClick={() =>imgPop()} className="hover"><i className="fa-2xl fa-solid fa-plus"/></div>

                    </div>
                </div>
            </div>
        </div>

    </section>




    <div onClick={removee} className="popUp d-none justify-content-center align-items-center  position-fixed top-0 bottom-0 start-0 end-0 ">

        <div className="child"></div>

    </div>



    </>
}




