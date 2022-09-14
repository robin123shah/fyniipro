import React from 'react'
import Footer from "../../../components/Screens/Footer/Footer";
// import Navbar from "../../Navigation/Navbar/Navbar";
import Navbar2 from "../../../components/Navigation/Navbar/Navbar2";

const NextPage3  = () => {

    return (
      <>
    <Navbar2 className="mb-5"/>
    <div className='mt-15 py-10 '>

        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center"  >
        <h1 style={{fontSize:'35px',fontWeight:'800'}} className="m-11" >Career in govt. Vs private sector explained !</h1>
    <div className="w-full md:w-3/3 flex flex-col mb-16 items-center text-center mt-3"  >
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://fynii3.netlify.app/images/c1.jpg"  />

      <p className="mb-8 leading-relaxed"  ></p>
      <div className="flex w-full justify-center items-end"  >
        </div>
      <div className="container px-5 py-4 mx-auto"  >
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center"  >
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036"  >
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"  ></path>
      </svg>
      <p className="leading-relaxed text-4xl"  >There are so many parameters should to tick before opting to work in private/government sector. Both of them have their pros and cons. (for private sector, we are considering here top corporates, well-established firms and startups) There are some industry/profession where Govt sector is better and vice-versa.
At the end, your overall development, career growth & salary matters. So be careful while opting and don't trap in conventional mindsets or rat-race, choose what you love to do and is extremely passionate about that thing! For e.g. - If you are someone who likes to talk to people & solve their problems then civil services (govt. sector), however if you want to be AI/ML engineer, private sector is a good bet for you.</p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"  ></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm"  >Fynii Infotech</h2>
      <p className="text-gray-500"  ></p>
    </div>
  </div>
    </div>
  </div>
  </div>
  <Footer />
  </>
    );
}

export default NextPage3;