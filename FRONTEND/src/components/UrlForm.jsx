import {useState} from 'react'
import axios from 'axios'

const UrlForm = () => {
    
    const [url, setUrl] = useState("")
    const handelSubmit = async()=>{
        
        const {data} = await axios.post("http://localhost:3000/api/create" , {url})
        console.log(data)
        
    }

  return (
    <div className="space-y-4">
            <div>
                <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                  Enter The URL
                </label>
                <input
                  type="url"
                  id="url"
                  value={url}    // just for two way binding
                  onInput={(event)=>setUrl(event.target.value)}
                  placeholder='https://example.com'
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                </div>

                <button
                  type="submit"
                   onClick={handelSubmit}
                   className="w-full mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                 Shorten The Url
                  
                </button>
           
             { /*{error && (
            <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}*/}
          
          {/* {shortUrl && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Your shortened URL:</p>
              <div className="flex items-center">
                <input
                  type="text"
                  value={shortUrl}
                  readOnly
                  className="flex-1 p-2 border border-gray-300 rounded-l-lg bg-white focus:outline-none"
                />
                <button
                  onClick={handleCopy}
                  className={`px-4 py-2 rounded-r-lg font-medium ${
                    copied
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="mt-3 text-center">
                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Open link in new tab →
                </a>
              </div>
            </div>
          )} */}
          </div >
  )
}

export default UrlForm