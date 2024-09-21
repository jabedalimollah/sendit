import axios from "axios";

const SendData = async (formData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_KEY}/create`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { SendData };
