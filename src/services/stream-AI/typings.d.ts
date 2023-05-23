declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type User = {
    address?: string;
    age?: number;
    avatar?: string;
    createdAt?: string;
    email?: string;
    gender?: Record<string, any>;
    id?: number;
    isActive?: number;
    isAdmin?: number;
    isDelete?: number;
    lastLoginAt?: string;
    password?: string;
    phoneNumber?: string;
    updatedAt?: string;
    username?: string;
  };
}
