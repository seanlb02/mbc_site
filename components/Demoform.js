import { useState, useEffect } from 'react'
import Draggable from 'react-draggable'






export default function () {

    const [subName, setSubName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState(0)
    const [crowdSize, setCrowdSize] = useState("")
    const [demoLink, setDemoLink] = useState("")
    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        //   return () => window.removeEventListener('resize', handleResize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
<>
        { width > 700 ?

                <Draggable>
                <div className="fixed absolute flex flex-col p-4 items-center align-center top-56 right-56 z-50 max-h-[100vh] min-h-[100vh] w-[100vw] lg:w-[50vw] m-auto bg-white lg:border-2 lg:border-black lg:min-h-[50vh] cursor-move">
                    <div>Fill in your details to be added to our database</div>
                    <div className="flex border-2 border-black h-[50vh] w-full flex-col m-4 p-4 align-center">
                        
                        <form className="flex flex-col gap-4">
                            <input className="flex w-full border border-black p-2" placeholder="Artist Name"></input>
                            <input className="flex w-full border border-black p-2" placeholder="Email"></input>
                            <input className="flex w-full border border-black p-2" placeholder="Mobile Number"></input>
                            <input className="flex w-full border border-black p-2" placeholder="Usual crowd size"></input>
                            <input className="flex w-full border border-black p-2" placeholder="Music link/URL"></input>

                        </form>
                    </div>                        <div className="h-fit w-fit p-4 bg-black text-white align-center items-center justify-center my-2">Submit</div>

                </div>
                </Draggable>
                :
                <div className="fixed absolute flex flex-col justify-center p-4 items-center align-center z-50 max-h-[100vh] min-h-[100vh] w-[100vw] lg:w-[50vw] m-auto bg-white lg:border-2 lg:border-black lg:min-h-[50vh] cursor-crosshairs">
                    <div>Fill in your details to be added to our database</div>
                    <div className="flex border-2 border-black h-[50vh] w-full flex-col m-4 p-4 align-center">
                        
                        <form className="flex flex-col gap-4">
                            <input className="flex w-full border border-black p-2" placeholder="Artist Name"></input>
                            <input className="flex w-full border border-black p-2" placeholder="Email"></input>
                            <input className="flex w-full border border-black p-2" placeholder="Mobile Number"></input>
                            <input className="flex w-full border border-black p-2" placeholder="Usual crowd size"></input>
                            <input className="flex w-full border border-black p-2" placeholder="Music link/URL"></input>
                            

                        </form>
                        <div className="h-fit w-fit p-4 bg-black text-white align-center items-center justify-center mt-10">Submit</div>

                    </div>
                </div>
        }
        </>
    )
}

