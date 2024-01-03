import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const res = await client.getEntries({ content_type: 'projects' });
      const data = res.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image.fields.file.url;

        return { title, url, id, img };
      });
      setProjects(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {isLoading, projects}
};
