import { useState, useRef, useEffect } from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { HiOfficeBuilding } from "react-icons/hi";
import jobData from "./jobData";
import { filteredData } from "../featured/jobDetail";
import { useDispatch } from "react-redux";

const Search = () => {
  const [filter, setFilter] = useState({
    jobtitle: "",
    company: "",
    location: "",
  });

  const dispatch = useDispatch();
  const handleJobTitleFilter = (event) => {
    setFilter((prevFilters) => ({
      ...prevFilters,
      jobtitle: event.target.value,
    }));
  };

  const handleCompanyFilter = (event) => {
    setFilter((prevFilters) => ({
      ...prevFilters,
      company: event.target.value,
    }));
  };

  const handleLocationFilter = (event) => {
    setFilter((prevFilters) => ({
      ...prevFilters,
      location: event.target.value,
    }));
  };

  const titleRef = useRef(null);
  const companyRef = useRef(null);
  const locationRef = useRef(null);

  useEffect(() => {
    dispatch(filteredData(jobData.filter(job => {
      return (
        job.position.toLowerCase().includes(filter.jobtitle.toLowerCase()) && 
        job.company.toLowerCase().includes(filter.company.toLowerCase()) &&
        job.location.toLowerCase().includes(filter.location.toLowerCase())
      )
    })))
  }, [filter, dispatch]);

  return (
    <main className="searchDiv gap-10 bg-greyIsh rounded-[10px] p-[3rem] flex-col flex justify-center items-center">
      <form action="">
        <section className="firstDiv flex justify-between 2xl:flex-col 2xl:border-cyan-600 items-center rounded-[10px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700 ">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[20px] icons" onClick={() => titleRef.current.focus()} />
            <input
              ref={titleRef}
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Job Title..."
              value={filter.jobtitle}
              onChange={handleJobTitleFilter}
            />
            <AiOutlineCloseCircle
              className="text-[25px] text-[#a5a6a6] hover:text-textColor icon"
              onClick={() =>
                setFilter((prev) => ({
                  ...prev,
                  jobtitle: "",
                }))
              }
            />
          </div>

          <div className="flex gap-2 items-center">
            <HiOfficeBuilding className="text-[20px] icons" onClick={() => companyRef.current.focus()} />
            <input
              ref={companyRef}
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search by Company..."
              value={filter.company}
              onChange={handleCompanyFilter}
            />
            <AiOutlineCloseCircle
              className="text-[25px] text-[#a5a6a6] hover:text-textColor icon"
              onClick={() =>
                setFilter((prev) => ({
                  ...prev,
                  company: "",
                }))
              }
            />
          </div>

          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[20px] icons" onClick={() => locationRef.current.focus()} />
            <input
              ref={locationRef}
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Enter Job Location..."
              value={filter.location}
              onChange={handleLocationFilter}
            />
            <AiOutlineCloseCircle
              className="text-[25px] text-[#a5a6a6] hover:text-textColor icon"
              onClick={() =>
                setFilter((prev) => ({
                  ...prev,
                  location: "",
                }))
              }
            />
          </div>
        </section>
      </form>

      <section className="secDiv flex 2xl:flex-col items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold ">
            {" "}
            Sort by:
          </label>
          <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1">
            <option value="">Relevance</option>
            <option value="">Starts with</option>
            <option value="">Contains</option>
            <option value="">Inclusive</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="text-[#808080] font-semibold ">
            {" "}
            Type:
          </label>
          <select name="" id="type" className="bg-white rounded-[3px] px-4 py-1">
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">part-time</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className="text-[#808080] font-semibold ">
            {" "}
            Sort by:
          </label>
          <select name="" id="level" className="bg-white rounded-[3px] px-4 py-1">
            <option value="">Senior</option>
            <option value="">Intermediate</option>
            <option value="">Begineer</option>
          </select>
        </div>
      </section>
    </main>
  );
};

export default Search;
