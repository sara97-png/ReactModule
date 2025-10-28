import { useState, useEffect} from "react";

export default function UsersList() {
   const [users, setUsers] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [status, setStatus] = useState("");

    useEffect(() => {
        setIsLoading(true);

        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log("response json: ", json);
        setUsers(json);
        setStatus("Korisnici uspješno učitani.");
        setIsLoading(false);
      }).catch(error => {
        setStatus(error);
        setIsLoading(false);
      })
    }, [])


    return (
        <div>
            <h2>Korisnici</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
             <ul style={{listStyleType: "none", paddingLeft: 0}}>
                {users.map(user => ( //u ovom primjeru map koristimo da svaki element niza pretvorimo u jsx
                    <li key={user.id}>
                        {user.name} - <em>{user.email}</em>
                    </li>
                ))}
            </ul>
            )}
            {status && <p>{status}</p>}
        </div>
    )
}