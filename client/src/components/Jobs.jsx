import { BiTimeFive } from "react-icons/bi";
import { BsCurrencyRupee, BsPersonWorkspace } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import jobData from "./jobData";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {jobD} from "../featured/jobDetail"
import {useNavigate} from "react-router-dom"

const Jobs = () => {
  const dispatch = useDispatch()
  // const jobDt = useSelector(state => state.job.value)
  const filteredJobs = useSelector(state => state.job.filters)
  const navigate = useNavigate()

  const jobElement =
    jobData &&
    filteredJobs.map((job) => {
      const { company, location, role, position, image, salary, mode, arrangement } = job;
      return (
        <div className="group w-[20rem] p-[20px] bg-white rounded-[10px] duration-500 hover:bg-[#4682b4] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg" key={job.id} >
          <span className="flex justify-between items-center gap-4">
            <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{position}</h1>
            <span className="flex items-center text-[#7e7e7e] gap-1 group-hover:text-white text-[13px] font-semibold">
              <BiTimeFive />
              Now
            </span>
          </span>
          <h6 className="location text-[#929292] text-[14px] group-hover:text-[#eee]">{location}</h6>

          <div className="flex items-center bg-green-400 w-[220px] rounded-[9px] p-[3px] mb-[3px] mt-3">
            <BsCurrencyRupee />
            <span className="salary text-[14px] font-semibold text-[#605959]">{salary} a month</span>
          </div>

          <div className="flex items-center">
            <div className="flex items-center bg-green-400 w-[145px] rounded-[9px] p-[3px]">
              <BsPersonWorkspace className="w-[14px] ml-[4px]" />
              <span className="text-[13px] ml-2 font-semibold text-[#605959]">{mode}</span>
            </div>
            <div className="flex items-center bg-green-400 w-[138px] rounded-[9px] p-[3px] ml-1">
              <AiOutlineFieldTime className="w-[14px]" />
              <span className="text-[13px] ml-2 font-semibold text-[#605959]">{arrangement}</span>
            </div>
          </div>

          <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">{role}</p>
          <div className="company flex items-center gap-2">
            <img src={image} className="logo w-[10%] rounded-[10px]" />
            <span className="text-[14px] py-[1rem] block group-hover:text-white">{company}</span>
          </div>
          <button
            className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover
            /items:text-textColor group-hover:text-[black]"
            onClick={() => {
              dispatch(jobD(job))
              navigate('/jobDetail')
            }}
          >
            Apply Now
          </button>
        </div>
      );
    });
  return (
    <div className="flex items-center justify-center">
      <div className="jobContainer grid grid-cols-3 2xl:grid-cols-2 md:flex gap-10 justify-center flex-wrap items-center py-6">{jobElement}</div>
    </div>
  );
};

export default Jobs;
