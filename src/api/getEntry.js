import { supabase } from "src/supabase";

const getEntry = async (db, column, entry) => {
  const { data, error } = await supabase.from(db).select().eq(column, entry);
  return { data, error };
};

export default getEntry;
