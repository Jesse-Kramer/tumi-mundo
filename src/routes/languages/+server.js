// +server.js - mock response om alleen te testen
export async function POST({ request }) {
    const { searchTerm } = await request.json();
    
    // Test mockup response
    return new Response(
      JSON.stringify({ filteredLanguages: [{ language: "English" }, { language: "Spanish" }] }),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }