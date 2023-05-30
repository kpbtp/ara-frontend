const AboutUs  = () => {

    return(
        <> 
            <div className='max-h-full bg-gradient-to-b pt-1 pb-16 from-gray-950 via-gray-800 to-gray-800 text-white'>

                <div className="container flex justify-center mx-auto pt-16">
                    <div>
                        {/* <p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p> */}
                        <h1 className="xl:text-4xl text-3xl text-center text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Cast of Characters</h1>
                    </div>
                </div>

                <div className="w-full px-10">
                    <div className="container mx-auto">
                        
                        <div className="lg:flex md:flex xl:justify-between flex-col md:justify-around sm:justify-around lg:justify-around pt-10">

                            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2">
                                <div className="bg-top bg-cover bg-no-repeat h-64">
                                    <img src="./black_clover_demon_form.jpg" alt className="h-full w-full overflow-hidden object-cover rounded shadow" />
                                </div>
                                <div className="py-1 bg-gray-800 flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                                    <p className="text-xl text-center text-red-400 font-normal mb-1">DeMario Ward</p>
                                    <p className="text-center text-base text-red-400">Tech Lead</p>
                                    <p className="text-center text-base text-red-400">Team? are you thinking what I'm thinking?</p>
                                </div>
                            </div>

                            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2">
                                <div className="bg-top bg-cover bg-no-repeat h-64">
                                    <img src="./FMA_Edward.jpg" alt className="h-full w-full overflow-hidden object-cover rounded shadow" />
                                </div>
                                <div className="py-1 bg-gray-800 flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                                    <p className="text-xl text-center text-red-400 font-normal mb-1">Jose Salas</p>
                                    <p className="text-center text-base text-red-400">Design Lead</p>
                                    <p className="text-center text-base text-red-400">What are you thinking Brain? Oh, hey DeeMo!</p>
                                </div>
                            </div>

                            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2">
                                <div className="bg-top bg-cover bg-no-repeat h-64">
                                    <img src="./gorgerous-yu-yu-hakusho.jpeg" alt className="h-full w-full overflow-hidden object-cover rounded shadow" />
                                </div>
                                <div className="py-1 bg-gray-800 flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                                    <p className="text-xl text-center text-red-400 font-normal mb-1">Brandon Johnwell</p>
                                    <p className="text-center text-base text-red-400">Project Manager</p>
                                    <p className="text-center text-base text-red-400">I think so DeeMo. I mean, why are tomatoes considered vegetables when they are are actually a fruit? Narf!</p>
                                </div>
                            </div>

                            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2">
                                <div className="bg-top bg-cover bg-no-repeat h-64">
                                    <img src="./332717.jpg" alt className="h-full w-full overflow-hidden object-cover rounded shadow" />
                                </div>
                                <div className="py-1 bg-gray-800 flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                                    <p className="text-xl text-center text-red-400 font-normal mb-1">Borja Xaire</p>
                                    <p className="text-center text-base text-red-400">Product Manager</p>
                                    <p className="text-center text-base text-red-400">I think so DeeMo, but why would the woodchuck not know how much wood he could chuck if he could chuck wood?</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs

