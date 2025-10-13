export const parseDataToObject = (data?: any) => {
  if (!data) return {};

  try { return JSON.parse(data); }

  catch (error) { return {}; }
}
