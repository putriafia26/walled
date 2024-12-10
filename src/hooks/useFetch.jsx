function useFetch() {
    // const [showBalance, setShowBalance] = useState(true);
    const [users, setUsers] = useState([]);
    useEffect(() => {
      async function getData() {
        const url = "http://localhost:3000/users";
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
  
          const json = await response.json();
          setUsers(json);
          console.log(json);
        } catch (error) {
          console.error(error.message);
        }
      }
      getData();
    }, []);
}