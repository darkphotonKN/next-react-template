import axios from 'axios';

/* GLOBAL AXIOS SETTINGS */

const instance = axios.create({
  // baseURL: 'http://localhost:3001/api',
  // baseURL: 'https://jsonplaceholder.typicode.com/users',
  headers: {
    Authorization:
      'bearer AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAAbgDBPkkux02YJMrCA1CXQAAAAAACAAAAAAADZgAAwAAAABAAAABan82MDm_Ca8gqUjfNdGT6AAAAAASAAACgAAAAEAAAACqMl-7bDyUBbtjXK8H2mpR4AAAAxeW2j7j-6__7EX1saqeo_rQBlSEnJXhPZtMXNBxwUAgxIM1C916z6DS69pDMzHVXF0Nw51WVzIjtAEBgnOX7Te1h0vZrNwWwXXKAcSAtCC2MdqYOPMx47DjU8i1-FBZlp7Gs22TTFQ7l3gytAJt2RZenx1jW03m3FAAAAFIeh6WldN8VjT7P6LwcTreekIkN'
  }
});

// instance.defaults.headers['Authorization'] =
//   'bearer AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAAaLKyqsY9xEyD7EO1AylzHAAAAAACAAAAAAAQZgAAAAEAACAAAADVsgXy7lypMbM25VXh3GZfJsDsngpSjfh95b17otU5VwAAAAAOgAAAAAIAACAAAAACFylEzal5wJLnRFm8zei9SUX4Y8FvFV_m5fYJkBSJlIAAAAACO9k4UkTKsAABQQqGq_q1gDGF72o17L3TFyL5GrND14guSJAa_ao-Cu0M72WjWnyPd1wKW93alE0Sd8hD4nJaaxdqKATncKcT2YhalEGtqS71TtWQKbnfcS-g8-piaBE0ZsHb165GIpti5GKpWprQGBr3KMCEGDIk7uiDPTJoAUAAAACLVKpKjORS--0vrYZIGXR6RJhh9iEiBEGG1_TsnnjgnnamIAdHkBkvjBtYTdhTztrSKM6OyJLMDyrhX6u_Urs0';

export default instance;
