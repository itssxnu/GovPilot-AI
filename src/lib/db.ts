export interface User {
  id: string;
  name: string;
  email: string;
  nic?: string;
  password?: string;
}

// Persist the user database across hot reloads in development environment
const globalForDb = global as unknown as {
  usersStore: Map<string, User>;
};

if (!globalForDb.usersStore) {
  globalForDb.usersStore = new Map<string, User>();
  
  // Seed the default citizen account
  globalForDb.usersStore.set("citizen@gov.lk", {
    id: "lk-citizen-109283",
    name: "K. L. Perera",
    email: "citizen@gov.lk",
    nic: "198428109283",
    password: "password123",
  });
}

export const usersStore = globalForDb.usersStore;

export function registerUser(user: Omit<User, "id">): User {
  const emailKey = user.email.toLowerCase().trim();
  const existing = usersStore.get(emailKey);
  
  if (existing) {
    throw new Error("A citizen with this email address is already registered.");
  }
  
  const id = `lk-citizen-${Math.floor(100000 + Math.random() * 900000)}`;
  const newUser: User = {
    id,
    name: user.name.trim(),
    email: emailKey,
    nic: user.nic?.trim(),
    password: user.password,
  };
  
  usersStore.set(emailKey, newUser);
  return newUser;
}

export function validateUserCredentials(email: string, password?: string): User | null {
  const emailKey = email.toLowerCase().trim();
  const user = usersStore.get(emailKey);
  
  if (!user) return null;
  if (password && user.password !== password) return null;
  
  return user;
}
