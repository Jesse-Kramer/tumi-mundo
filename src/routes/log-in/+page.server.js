export const actions = {
    default: async ({ request }) => {
      const data = await request.formData(); // Assume login data comes from a form
      const userId = 10; // Example user ID
      const profileId = 121; // Example profile ID
  
      // Save userId and profileId to session or database as needed
  
    return {
    success: true,
    userId,
    profileId
    };
}
};
  