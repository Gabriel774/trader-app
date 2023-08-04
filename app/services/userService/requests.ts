interface LoginRequest {
  name: string;
  password: string;
}

interface RegisterRequest {
  name: string;
  password: string;
  profile_pic?: File | null;
}
