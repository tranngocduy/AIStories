export const parseDataToObject = (data?: string) => {
  if (!data) return null;

  try { return JSON.parse(data); }

  catch (error) { return null; }
}
