import axios from 'axios';

/* GLOBAL AXIOS SETTINGS */

const instance = axios.create({
  headers: {
    Authorization:
      'bearer AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAAbgDBPkkux02YJMrCA1CXQAAAAAACAAAAAAADZgAAwAAAABAAAABan82MDm_Ca8gqUjfNdGT6AAAAAASAAACgAAAAEAAAACqMl-7bDyUBbtjXK8H2mpR4AAAAxeW2j7j-6__7EX1saqeo_rQBlSEnJXhPZtMXNBxwUAgxIM1C916z6DS69pDMzHVXF0Nw51WVzIjtAEBgnOX7Te1h0vZrNwWwXXKAcSAtCC2MdqYOPMx47DjU8i1-FBZlp7Gs22TTFQ7l3gytAJt2RZenx1jW03m3FAAAAFIeh6WldN8VjT7P6LwcTreekIkN'
  }
});

export default instance;
