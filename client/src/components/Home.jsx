const Home = () => {

    const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

    return (
        <div className="flex w-full justify-center">
            <div className="flex md:flex-row flex-col items-strart justify-between md:p-20 py-12 px-4 ">
                <div className="flex flex-1 justify-start flex-col md:mr-10 ">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1 mx-4 ">
                        Welcome to <br /> StoryFlow
                    </h1>
                    <p className ="text-left text-white font-light md:w-9/12 w-11/12 text-base py-10 mx-4">
                        Where your imagination turns into bedtime stories.
                    </p>

                    <button className="bg-[#2952e3] py-2 px-7 rounded-full cursor-pointer hover:bg-[#2546bd]">
                        Try Now!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;