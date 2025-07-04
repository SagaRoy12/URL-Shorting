
//import "./App.css";

const UrlShortener = () => {
 



  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">URL Shortener</h1>
            <p className="text-gray-600 mt-2">Paste your long URL to get a shorter link</p>
          </div>
          
          <form className="space-y-4">
            <div className="relative">
              <input
                type="url"
                value
                
                placeholder="https://example.com/very/long/url/that/needs/shortening"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              {originalUrl && (
                <button
                  type="button"
                  onClick={() => setOriginalUrl("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
            
            <button
              type="submit"
              
              className={`w-full py-3 px-4 rounded-lg text-white font-medium transition ${
                loading || !originalUrl
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Shortening...
                </span>
              ) : (
                "Shorten URL"
              )}
            </button>
          </form>
          
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
        </div>
        
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
          <p className="text-xs text-center text-gray-600">
            Create short links that can be easily shared, tweeted, or emailed to friends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UrlShortener;