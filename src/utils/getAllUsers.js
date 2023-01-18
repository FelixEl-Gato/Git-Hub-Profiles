export const getAllUsers = async (url) => {
  try {
    if (url === undefined) return [];

    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (url, user) => {
  try {
    if (url === undefined || user === undefined) return [];

    const res = await fetch(`${url}/${user}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
