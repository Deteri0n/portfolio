
import { useState } from "react";
import axios from "axios";


export default function MyForm(props) {
  
  const { url } = props;

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const validate = () => {
    if (!email) {
      setStatus("Email cannot be blank");
      return;
    } else if (!message) {
      setStatus("message cannot be blank");
      return;
    } else {
      setStatus("");
      sendForm(email, message)
        .then(res => {
          setStatus("Email sent, I will contact you ASAP!")
        })
        .catch(err => setStatus("Ooops! Something went wrong."));
    }
  }

  const sendForm = (email, message) => {
    return axios
      .post(url, {
        header: {Accept: 'application/json'},
        data : {
          'email': email,
          'name': name,
          'message': message
        }
      })
  }

  return(

    <div className="min-h-screen mx-auto py-8 px-8 flex justify-center items-center">
      {status && 
        <div>
          {status}
        </div>
      }
        
      <form onSubmit={ev => ev.preventDefault()} className="flex w-full max-w-sm space-x-3">
      <div className="max-w-2xl bg-gray-800 py-10 px-5 m-auto w-full mt-10 shadow rounded-lg">
        <div className="text-3xl mb-6 font-light text-white text-center">
          Contact Me !
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">
            <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                    <input
                      value={name}
                      onChange={ev => setName(ev.target.value)}
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                </div>
            </div>
                <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                      <input
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                        type="email"
                        name="email"
                        placeholder="ex@mple.com"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                    </div>
                    </div>
                    <div className="col-span-2">
                        <label className="text-gray-700" for="name">
                          <textarea 
                            className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            value={message}
                            onChange={ev => setMessage(ev.target.value)}
                            name="message"
                            type="text"
                            id="message"
                            placeholder="Enter your message"
                            rows="5"
                            cols="40">
                          </textarea>
                        </label>
                    </div>
                    <div className="col-span-2 text-right">
                        <button
                          type="button"
                          className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                          onClick={() => validate()}
                        >
                          Send
                        </button>
                    </div>
                </div>
        </div>
      </form>   
    </div>
  )
}