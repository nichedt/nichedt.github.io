// https://tailwindcss.com/docs/controlling-file-size
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./src/**/*.tsx'],

  // This is the function used to extract class names from your templates
  defaultExtractor: (content) => {
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
    return broadMatches.concat(innerMatches);
  },
});

module.exports = (env) => {
  const config = {
    // can create a custom theme with file ./tailwind.config.js
    // https://tailwindcss.com/docs/installation#create-your-tailwind-config-file
    // future reference, plugins: [require('tailwindcss')('./tailwind.config.js'), require(...)]
    plugins: [require('tailwindcss'), require('autoprefixer')],
  };
  // purge in production only
  if (env.mode === 'production') config.plugins.push(purgecss);
  return config;
};
