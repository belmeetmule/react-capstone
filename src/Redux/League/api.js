const baseURL = 'https://football-apis.herokuapp.com/api/v1/leagues';

const api = {
  fetchLeagueData: async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
    return data;
  },
};

export default api;
