import { axiosInstance } from "../utils/axiosInstance";

export const addContact = async (contactData) => {
  try {
    const response = await axiosInstance.post('/api/v1/contacts/add', contactData);
    return response; 
  } catch (error) {
    console.error("Error adding contact:", error.message);
    throw error;
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/contacts/${id}`);
    return response; 
  } catch (error) {
    console.error("Error deleting contact:", error.message);
    throw error; 
  }
};


export const ContactsData = async () => {
  try {
    const { data } = await axiosInstance.get("/api/v1/contacts/contacts");
    return data; 
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
};
