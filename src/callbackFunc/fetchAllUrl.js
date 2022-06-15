const fetchAllUrl = async (urls) => {
  
  const requests = urls.map((url) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    })
  );

  const responses = await Promise.all(requests);
  const promises = responses.map((response) => response.json());
  return await Promise.all(promises);
};

export default fetchAllUrl;
