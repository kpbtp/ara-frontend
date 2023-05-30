const AboutUs  = () => {

    return(
        <> 
            <div className='h-full bg-gradient-to-b pt-1 pb-20 from-gray-950 via-gray-800 to-gray-800 text-white'>

                <div className="container flex justify-center mx-auto pt-16">
                    <div>
                        {/* <p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p> */}
                        <h1 className="xl:text-4xl text-3xl text-center text-red-500 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Cast of Characters</h1>
                    </div>
                </div>

                <div className="w-full px-10">
                    <div className="container mx-auto">
                        
                        <div className="lg:flex md:flex xl:justify-between flex-col md:justify-around sm:justify-around lg:justify-around pt-1">

                            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 pb-2">
                                <div className="bg-top bg-cover bg-no-repeat h-64">
                                    <img src="./black_clover_demon_form.jpg" alt className="h-full w-full overflow-hidden object-cover rounded shadow" />
                                </div>
                                <div className="py-1 bg-gray-800 flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow-md shadow-blue-500 mt-12 right-0 left-0">
                                    <p className="text-xl text-center text-red-500 font-normal ">DeMario Ward: Tech Lead</p>
                                    <p className="text-center text-base text-white">Attention, fellow Sigma Chads! Brace yourselves for the ultimate display of chadliness intertwined with an unwavering passion for the captivating world of anime. I am DeMario Ward, a 23-year-old alpha male who fully embraces the Sigma path while cherishing the sheer brilliance of anime. From the exhilarating clashes of Black Clover to the enthralling narratives that ignite our souls, anime holds an unmatched splendor in my heart. It fuels my relentless determination and empowers me to embody the epitome of a true Sigma Chad. Join me on this extraordinary journey as we embrace our chadness, immersing ourselves in the awe-inspiring wonders of anime, and carving our own destinies within this exhilarating realm.</p>
                                </div>
                            </div>

                            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mt-10 mb-20 xl:max-w-sm lg:w-1/2 pt-20 pb-2">
                                <div className="bg-top bg-cover bg-no-repeat h-64">
                                    <img src="./FMA_Edward.jpg" alt className="h-full w-full overflow-hidden object-cover rounded shadow my-20" />
                                </div>
                                <div className="py-1 bg-gray-800 flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow-md shadow-blue-500 mt-12 right-0 left-0">
                                    <p className="text-xl text-center text-red-500 font-normal ">Jose Salas: Design Lead</p>
                                    <p className="text-center text-base text-white p-1 my-3">Salutations, fellow anime enthusiasts! I'm Jose, a 34-year-old guy who has embarked on an incredible journey through the anime universe. What started as a childhood fascination with Pokemon has evolved into a lifelong appreciation for the artistry, storytelling, and cultural impact of anime. This website is my way of giving back to the anime community and providing a platform where fans can discover new series, delve into character analysis, and engage in spirited discussions. Join me on this adventure as we explore the diverse and captivating realm of anime.</p>
                                </div>
                            </div>

                            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mt-10 mb-20 xl:max-w-sm lg:w-1/2 pt-20 pb-2">
                                <div className="bg-top bg-cover bg-no-repeat h-64">
                                    <img src="./gorgerous-yu-yu-hakusho.jpeg" alt className="h-full w-full overflow-hidden object-cover rounded shadow my-20" />
                                </div>
                                <div className="py-1 bg-gray-800 flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow-md shadow-blue-500 mt-12 right-0 left-0">
                                    <p className="text-xl text-center text-red-500 font-normal mb-1">Brandon Johnwell: Project manager</p>
                                    <p className="text-center text-base text-white p-1 my-3">Konnichiwa, otaku no nakama!  I'm Brandon Johnwell a 33-year-old weeb who has been watching anime since before it was cool. I am talking having to watch 15 two min videos on youtube just to get through a single episode. with the renaissance that anime is going through I wanted to put that history and love to use for the community. I wanted to create a place for people to discover the thing that I enjoy so much. To experience the first time Yusuke fired the spirit gun, the first time you heard BANKAI from Ichigo, or the first time you spent 3 episodes watching a spirit bomb charge up. So watch, enjoy and go PLUS ULTRA!</p>
                                </div>
                            </div>

                            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mt-10 mb-20 xl:max-w-sm lg:w-1/2 pt-20 pb-2">
                                <div className="bg-top bg-cover bg-no-repeat h-64">
                                    <img src="./332717.jpg" alt className="h-full w-full overflow-hidden object-cover rounded shadow my-20" />
                                </div>
                                <div className="py-1 bg-gray-800 flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow-md shadow-blue-500 mt-12 right-0 left-0">
                                    <p className="text-xl text-center text-red-500 font-normal mb-1">Borja Xaire: Product Manager</p>
                                    <p className="text-center text-base text-white">Haha! Brandon thinks he liked it before it was cool... I liked it before anime was called anime! Totally kidding, but being the senior citizen that I am, I grew up on relics such as Saint Seiya and Captain Tsubasa (Los Caballeros del Zodiaco and Super Campeones, respectively in Spain). I kept waiting to grown out of the "cartoons" but as luck would have it, the cartoons grew into anime that grew with me. I call that a win.</p>
                                </div>
                            </div>
                            <div className="pb-20"></div> {/* Add padding bottom equivalent to the footer height */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs