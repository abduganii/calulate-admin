import api from "./api";

export const GetAllData = async (url, query) => {
  try {
    const params = new URLSearchParams(query);
    const response = await api.get(`/${url}?${params.toString()}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const GetByIdData = async (url, id) => {
  try {
    const response = await api.get(`/${url}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const AddData = async (url, data) => {
  const response = await api.post(`/${url}`, data);
  return response;
};

export const UpdateData = async (url, data, id) => {
  const response = await api.put(`/${url}/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

export const DeleteData = async (url, id) => {
  try {
    const response = await api.delete(`/${url}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
