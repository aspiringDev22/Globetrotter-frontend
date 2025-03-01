import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const syncUsername = async (username: string) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("username, scores")
      .eq("username", username)
      .single();

    if (error && error.code !== 'PGRST116') { 
      throw error;
    }

    if (!data) {
      const { error: insertError } = await supabase
        .from("users")
        .insert([{ username, scores: [] }]);
        
      if (insertError) throw insertError;
      return { success: true, created: true, scores: [] };
    }
    
    return { success: true, created: false, scores: data.scores || [] };
  } catch (error: any) {
    console.error("Error syncing username:", error.message);
    return { success: false, error: error.message };
  }
};

export const updateScores = async (username: string, scores: number[]) => {
  try {
    const { error } = await supabase
      .from("users")
      .update({ scores })
      .eq("username", username);
      
    if (error) throw error;
    return { success: true };
  } catch (error: any) {
    console.error("Error updating scores:", error.message);
    return { success: false, error: error.message };
  }
};

export const fetchUserScores = async (username: string) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("scores")
      .eq("username", username)
      .single();
      
    if (error) throw error;
    return { success: true, scores: data?.scores || [] };
  } catch (error: any) {
    console.error("Error fetching scores:", error.message);
    return { success: false, error: error.message, scores: [] };
  }
};