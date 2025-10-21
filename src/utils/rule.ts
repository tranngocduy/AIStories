const isEmail = require('validator/lib/isEmail');

type TType = 'email';

const checkRuleStringIsEmail = (value: string) => {
  const result = !!isEmail(String(value).toLowerCase());
  return result;
}

export const checkRule = (type: TType, value: string) => {
  if (type === 'email') return checkRuleStringIsEmail(value);
}
