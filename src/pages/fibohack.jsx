import React from 'react'

const Fibohack = () => {
    return (
        <>
            <div className='pt-36 w-full flex md:flex-row flex-col justify-between md:px-36 px-8 gap-10 '>
                <div className="md:w-[50%] w-[95%] flex items-center py-10">
                    <div className='flex flex-col gap-6'>
                        <h1 className="text-[4vmax] text-center font-bold"> Fibohack </h1>
                        <h1 className='text-3xl text-center '> Coming soon  Stay tuned for more updates</h1>
                    </div>
                </div>
                <div className=" bg-primary rounded-lg">
                    <iframe src=""
                        width="" height="400"
                        frameborder="0" marginheight="0"
                        marginwidth="0" className='rounded-lg bg-primary' >
                        Loading…
                    </iframe>
                </div>

            </div>
            <div className="h-[200px]">
                <div className=" h-full w-full flex justify-center items-center">
                    <h1 className="text-3xl text-center text-white">Stay Tuned for more updates</h1>
                </div>
            </div>
        </>
    )
}

export default Fibohack;
