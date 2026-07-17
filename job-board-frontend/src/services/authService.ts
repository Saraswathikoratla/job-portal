const API_URL = "https://job-portal-1-re7b.onrender.com/api/auth";

export const register = async (
  name: string,
  email: string,
  password: string,
  role: string
) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      role,
    }),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
};

export const login = async (
  email: string,
  password: string
) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
     
    }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};