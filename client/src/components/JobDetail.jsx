import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const JobDetail = () => {
  const data = useSelector((state) => state.job.value);
  const navigate = useNavigate()

  return (
    <div className="flex justify-center">
      <main className="flex flex-col justify-center border border-gray-800 h-[28rem] w-[50rem] p-[2rem] mb-[3rem] rounded-[10px]">
        <h1 className="font-semibold text-semibold text-[1.4rem]">{data?.position}</h1>
        <h5>{data?.location}</h5>
        <p className="text-[0.9rem] mt-[1rem]">{data?.role}</p>
        <p className="font-semibold mt-[20px] ">
          Salary: <span className="text-blue-900 bg-gray-200 rounded-[5px] p-[5px]">{data?.salary}</span>
        </p>
        <h3 className="font-semibold mt-[10px]">
          Mode: <span className="text-blue-900 bg-gray-200 rounded-[5px] p-[5px]">{data?.mode}</span>
        </h3>
        <h3 className="font-semibold mt-[10px] ">
          Arrangement: <span className="text-blue-900 bg-gray-200 rounded-[5px] p-[5px]">{data?.arrangement}</span>
        </h3>
        <div className="flex items-center mt-[1rem]">
          <img src={data?.image} className="h-[2rem] mr-3 rounded-[15px]" />
          <h3 className="font-semibold">{data?.company}</h3>
        </div>
        <button onClick={()=> {
          toast.success(`Application for ${data?.position} at ${data?.company} applied successfully`);
          navigate('/')
          }} className="bg-gray-800 p-[0.5rem] rounded-[5px] text-white font-semibold flex items-center justify-center mt-[2rem]">Submit Application</button>
      </main>
    </div>
  );
};

export default JobDetail;
