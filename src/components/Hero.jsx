import { ReactTyped } from "react-typed";


function Hero() {
  return (
    <div className="bg-[white] w-full py-[50px]">
      <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold">
        <div className=" text-xl md:text-3xl mb-4">
        Hi EveryOne
        </div>
        <h2 className=" text-black text-3xl md:text-[80px] md:p-[24px]"> Kya kr rhe ho</h2>
        <div className="  text-[20px] md:text-[50px] p-[24px] text-black"> Bye
        
       <ReactTyped className="pl-3"
      strings={[
        " Chalo Phir",
        " Abhi tak Wahi Ho",
        " Nikal",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    >
      
    </ReactTyped>
  
              
              
              </div>
      </div>
    </div>
  )
}

export default Hero
