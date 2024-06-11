import axios from "axios";

const getErrorMessage=(code)=>{
  if(code=="ERR_BAD_REQUEST") return "Compilation Error ! Please check code"
  else if(code=="ERR_INTERNET_DISCONNECTED" || code=="ERR_NETWORK") return "Check your internet connection !"
  else return "Run Time Error !"
}

const createSubmission = async (source_code:string, language_id:string, stdin:string,setOutput:(output:string)=>void ) => {
  const options = {
    method: "POST",
    url: "https://judge0-ce.p.rapidapi.com/submissions",
    params: {
      base64_encoded: "false",
      fields: "*",
    },
    headers: {
      // "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
    data: {
      language_id,
      source_code,
      stdin,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    if(response&& response?.data && response.data.token){
      const options = {
        method: 'GET',
        url: 'https://judge0-ce.p.rapidapi.com/submissions/'+response.data.token,
        params: {
          base64_encoded: 'false',
          fields: '*'
        },
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          // 'Content-Type':'application/json'

        }
      };
      const myInterval =setInterval(async () => {
      try {
          const response2 = await axios.request(options);
          console.log(response2.data);
          console.log(response2.data.status.description);
          if(response2.data.status.description==="Accepted"){
            setOutput(response2.data.stdout)
            clearInterval(myInterval);
            return response2?.data?.stdout
          }
      
      } catch (error) {
        clearInterval(myInterval);
        console.log("Custom Error inside ",error.message);
        setOutput(getErrorMessage(error.code));
        // console.log(error);
        return error.message;
      }
    }, 2000);
    }

    return "Success";
  } catch (error) {
    setOutput(getErrorMessage(error.code));
    console.log("Custom Error at",error);
    return "Error";
  }
};




export { createSubmission};
