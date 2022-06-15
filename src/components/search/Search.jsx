import React, { useState, useEffect } from "react";
import "./search.css";
import fetchData from "../../callbackFunc/fetchData";
import fetchAllUrl from "../../callbackFunc/fetchAllUrl";

const Search = ({ setFavLanguage }) => {
  //set state to username
  const [userName, setUserName] = useState("");
  //set state to user's api data
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    //all languages urls
    const multiLanguageUrls = allData.map((repo) => repo.languages_url);

    //callback function fetch multiple url using Promise.all()
    fetchAllUrl(multiLanguageUrls).then((data) => {
      //returns arrays of objects... iterate array use map() only select object key => (language)
      //and concatenate keys into one array using reduce method.
      const allLanguages = data
        .map((key) => Object.keys(key))
        .reduce((a, c) => a.concat(c), []);

      //find duplicate value from array
      //use reduce method set current value as key and using spread operator to copy the previous value
      //if current value same as previous value add +1 || 0 and return as object
      //Exp array = [a,a,b,b,b,c]
      //returns duplicate counts  = {a:2, b:3, c:1}
      const counts = allLanguages.reduce(
        (a, b) => ({ ...a, [b]: (a[b] || 0) + 1 }),
        {}
      );

      //Arrange duplicate count object in ascending order
      //Use Object.entries callback function to change object to array.
      //exp {a:2, b:3, c:1} => [[a,2],[b,3],[c,1]]
      //then use sort method arrange array in ascending order.
      const highestLanguage = Object.entries(counts).sort(
        (a, b) => a[1] - b[1]
      );

      //Set highest value as favorite language
      setFavLanguage(highestLanguage.pop());
    });
  }, [allData, setFavLanguage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Callback function to fetch api using username as parameter
    fetchData(userName)
      .then((data) => {
        console.log(data);
        setAllData(data);
      })
      .catch((err) => {
        console.log(err.massage);
      });

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Github Username"
          required
        />
        <button type="submit" className="btn btn-primary">
          Check
        </button>
      </form>
    </div>
  );
};

export default Search;
