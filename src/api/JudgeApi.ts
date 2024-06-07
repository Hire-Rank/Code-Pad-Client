import axios from "axios";


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
      
      try {
        setTimeout(async () => {
          const response2 = await axios.request(options);
          console.log(response2.data);
          console.log(response2.data.status.description);
          if(response2.data.status.description==="Accepted"){
            setOutput(response2.data.stdout)
            return response2?.data?.stdout
          }
        }, 2000);
      } catch (error) {
        console.log(error.message);
        setOutput(error.message);
        // console.log(error);
        return error.message;
      }
      
    }

    return "Success";
  } catch (error) {
    setOutput(error.message);
    console.error(error);
    return "Error";
  }
};




export { createSubmission};
