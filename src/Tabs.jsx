import React from "react";
import { useState, useEffect } from "react";
import { MdDoubleArrow, MdArrowRightAlt } from "react-icons/md";

const Tabs = () => {
  const url = "https://course-api.com/react-tabs-project";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(1);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setTimeout(() => setLoading(false), 500);

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  /*  const { company, dates, duties, title } = data[value]; */

  if (loading) {
    return (
      <div className='container flex justify-center items-center min-h-screen min-w-full flex-col bg-neutral-100'>
        <h1 className='font-medium leading-tight text-5xl mt-0 mb-4 pb-4 border-b-4 border-indigo-500 animate-bounce'>Loading</h1>
      </div>
    );
  } else {
    return (
      <div className='container flex justify-center items-center min-h-screen min-w-full flex-col bg-neutral-100 '>
        <h1 className='font-medium leading-tight text-5xl mt-0 mb-4 pb-4 border-b-4 border-indigo-500 '>Experience</h1>
        {/*   tabs start */}
        <div className='  flex'>
          <p className='self-center inline-block py-4 px-4 mr-2 mt-4 text-sm font-medium text-center border-indigo-500 text-indigo-500    dark:text-gray-400 dark:hover:text-gray-300'>
            COMPANY:
          </p>
          <ul className='flex flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700'>
            {data.map((duty, index) => {
              return (
                <li key={duty.id} className='mr-2 mt-4 '>
                  <button
                    onClick={() => setValue(index)}
                    className='inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-indigo-500 dark:text-gray-400 dark:hover:text-gray-300 focus:border-indigo-500 '
                  >
                    {duty.company}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {/* end of tabs */}

        <section className='text-gray-600 body-font'>
          <div className='container px-5 py-10 mx-auto flex flex-col'>
            <div className='lg:w-4/6 mx-auto'>
              <div className='flex flex-col sm:flex-row mt-10'>
                <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
                  <div className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'>
                    <img src='https://avatars.dicebear.com/api/micah/djo.svg' alt='image from api' />
                  </div>
                  <div className='flex flex-col items-center text-center justify-center'>
                    <h2 className='font-medium title-font mt-4 text-gray-900 text-lg'>{data[value].company}</h2>
                    <div className='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
                    <p className=' font-medium leading-tight text-xl mt-0 mb-2 '>{data[value].title}</p>
                    <p className=' font-medium leading-tight text-base mt-0 mb-2 text-indigo-400'>{data[value].dates}</p>
                  </div>
                </div>
                <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left '>
                  {data[value].duties.map((duty) => {
                    return (
                      <div className='flex items-start'>
                        <MdDoubleArrow className='text-6xl mr-8 my-auto text-indigo-500' />
                        <p className='leading-relaxed text-lg mb-4'>{duty}</p>
                      </div>
                    );
                  })}

                  <button className='text-indigo-500 inline-flex items-center hover:text-indigo-800'>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 
end of info */}
      </div>
    );
  }
};

export default Tabs;
