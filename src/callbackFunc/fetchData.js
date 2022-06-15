const fetchData = async (userName) => {
  
  try {
    const mainUrl = `https://api.github.com/users/${userName}/repos`;
    const res = await fetch(mainUrl, {
      method: "GET",
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    });

    if (res.status !== 200) {
      window.alert("User not found");
      window.location = "/";
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default fetchData;
