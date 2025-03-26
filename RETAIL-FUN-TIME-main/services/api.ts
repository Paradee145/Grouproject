export const API_URL = "http://localhost:5000/api"; // 백엔드 주소

// 회원가입 API 호출
export const signUp = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    return await response.json();
  } catch (error) {
    throw new Error("회원가입 요청 실패");
  }
};

// 로그인 API 호출
export const signIn = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    return await response.json();
  } catch (error) {
    throw new Error("로그인 요청 실패");
  }
};
