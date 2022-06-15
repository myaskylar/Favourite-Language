# MVS-Test
 
This app will retrieve a Github user’s favourite programming language.
When you search someone's Github username, this app will present the user's most frequently used language based on how many times they used it in their repository.
: 


# **Approach**
```
Tools:
(front-end)
React
Bootstrap
```
## **Tasks:**
```
- Create authorised token for Github API.
- Create a .env file to store the token code.
- Create search bar and button component in React.
- Fetch data from API using asynchronous  functions.
- Create a callback function using array methods (map.(), reduce.(),filter.(),sort.()) to filter through fetched data.
- Use useState to store data.
- Use the reduce.() and sort.() method to sort the highest used language.
```

# **Challenges**
In some repositories, the language field is empty which returns NULL.This is because there is no code related content recognized in the repository. Github automatically updates the language field after every push event. For a language to be recognized it should be listed in the Linguist library.
But most repositories have a combination of languages  which are stored in  different URLs.If it's got some entries, we should see the most-used one instead.


# **Solution:**
```
- Using Promise.all with Async/Await to get data from multiple endpoints
- We create a variable  for holding our data.
- Using the keyword await’. Await - ‘complete this first.’
- Promise.all method is used to tell the function to go and do all of the urls from the URLs array. One at a time.
- Using the .map() array method to iterate over an array.
- Then pass each url into the fetch() => fetch(url);
- Use .then for chaining to convert response from ‘fetched’ to JSON (.then(res => res.json()).
 ```
## **Extra** (This app is not connected to the server)
*(back-end)*
```
- Use node.js and express to fetch api from Github API.
- Create server in back end 
- Create demo api in json file for testing 
- Install dependency on package.json (express, cors(for connecting frontend to backend), nodemon, dotenv(production)).
- Create api.js file 
- Use express.Router to connect the database.
- Use path to combine the url (//https://api.github.com/users/${userName}/repos))
- Create host name (api.github.com)
- Header (authentication token)
- Use HTTPS request to connect api responses. 
- Use express and cors middleware 
- Create GET endpoint
- Run the server in localhost.
 ```
