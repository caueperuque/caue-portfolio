const fetchGithubApi = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    return ({ message: error });
  }
};

export default fetchGithubApi;
