const getOrderHistory = async (page: number): Promise<History> => {
  try {
    const { data } = await axios.get(`https://some.site?page=${page}`);
    const history = await JSON.parse(data);

    return history;
  } catch (error) {
    alert(error.message);
  }
};
