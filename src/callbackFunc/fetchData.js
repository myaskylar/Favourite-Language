const fetchData = async (userName) => {
  const TOKEN = "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";
  try {
    const mainUrl = `https://api.github.com/users/${userName}/repos`;
    const res = await fetch(mainUrl, {
      method: "GET",
      headers: {
        Authorization: `token ${TOKEN}`,
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
