const fetchAllUrl = async (urls) => {
  const TOKEN = "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";
  const requests = urls.map((url) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    })
  );

  const responses = await Promise.all(requests);
  const promises = responses.map((response) => response.json());
  return await Promise.all(promises);
};

export default fetchAllUrl;
