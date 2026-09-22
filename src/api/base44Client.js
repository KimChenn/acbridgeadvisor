export const apiClient = {
  auth: {
    me: async () => null,
    logout: () => undefined,
    redirectToLogin: () => undefined,
  },
  entities: {
    Inquiry: {
      create: async () => ({ ok: true }),
    },
  },
};
