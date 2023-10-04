import axios from "axios";

const cloudinaryName = process.env.NEXT_PUBLIC_CLOUD_NAME;

export const handleUpload = async (file: string | Blob) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "dvmzwc5k");

  if (!file) {
    return null;
  }

  const response = await axios.post(
    `https://api.cloudinary.com/v1_1/${cloudinaryName}/image/upload/`,
    formData,
  );

  return response;
};
