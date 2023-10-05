import axios from "axios";

const cloudinaryName = process.env.NEXT_PUBLIC_CLOUD_NAME;

export const url = `https://api.cloudinary.com/v1_1/${cloudinaryName}/image/upload/`;

export const handleUpload = async (file: string | Blob) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "dvmzwc5k");

  if (!file) {
    return null;
  }

  const response = await axios.post(url, formData);
  return response;
};
