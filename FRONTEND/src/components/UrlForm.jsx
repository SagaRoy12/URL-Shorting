import {useState} from 'react'
import {getShortUrlFromBackend} from '../APIs/shortUrlApiFrontendPart.js' 
//import { QueryClient } from '@tanstack/react-query'

const UrlForm = () => {
    
    const [url, setUrl] = useState("")
    const [shortUrl, setshortUrl] = useState(null)
    const [copied, setCopied] = useState(false)

    const handelSubmit = async()=>{
        
        const newShorturl = await getShortUrlFromBackend(url)
        console.log(newShorturl)
        setshortUrl(newShorturl)
    }

    

  return (
    <div className="space-y-4">
            <div>
                <label htmlFor="url" className="block text-sm font-medium text-gray-500">
                  Enter The URL
                </label>
                <input
                  type="url"
                  id="url"
                  value={url}    // just for two way binding
                  onInput={(event)=>setUrl(event.target.value)}
                  placeholder='https://example.com'
                  className="mt-1 block w-full rounded-md border-gray-900 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                </div>

                <button
                  type="submit"
                   onClick={handelSubmit}
                   className="w-full mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-900 text-white font-medium rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50"
                >
                 Shorten The Url
                  
                </button>
           
             { /*{error && (
            <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}*/}
          
          {shortUrl && (
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
                  onClick={()=>{
                    navigator.clipboard.writeText(shortUrl);  // copying to clip board
                    alert("copied to clip baoard")
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
                  }}
                  className={`px-4 py-2 rounded-r-lg font-medium ${
                    copied ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
           {/*   <div className="mt-3 text-center">
                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Open link in new tab →
                </a>
              </div>}*/}
            </div>
          )} 
          </div >
  )
}

export default UrlForm