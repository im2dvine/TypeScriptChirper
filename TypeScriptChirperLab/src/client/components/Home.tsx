// import React from 'react';
// import { chirp } from '../types';
// import { Link } from "react-router-dom";

// export const Home: React.FC<HomeProps> = (props: HomeProps) => {
//     const [chirps, setChirps] = React.useState<chirp[]>([]);

//     React.useEffect(() => {
//         getChirps();
//     }, []);

//     const getChirps = async () => {
//         try {
//             let res = await fetch("/api/chirps");
//             let chirps = await res.json();
//             setChirps(chirps);
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     return (
//         <div className="container">
//             {chirps.map(chirp => (
//                 <div className="card" key={chirp.id}>
//                     <div className="card-body">
//                         <h5 className="card-title">{ chirp.user}</h5>
//                         <p className="card-text">{chirp.text }</p>
//                         <Link to={`/chirp/${chirp.id}`}>
//                             <button type="button" className="btn btn-secondary btn-sm">Chirp It!</button>
//                         </Link>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }

// interface HomeProps { }

// export default Home

/*****/

import * as express from "express";
import { chirp } from "../types";
import { GetChirps, GetChirp, UpdateChirp, CreateChirp, DeleteChirp } from "../utils/chirpstore";

const router = express.Router();

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const chirp = GetChirp(id);
    chirp.id = id;
    res.status(200).send(chirp);
});

// Get all chirps /api => /chirps =>  /
router.get("/", (req, res) => {
    const chirps = GetChirps();
    delete chirps.nextid
    const tempArr = Object.entries(chirps);
    const chirpArr = tempArr.map(chirp => {
        const newChirp: chirp = {
            id: chirp[0],
            user: chirp[1].user,
            text: chirp[1].text
        }
        return newChirp
    });
    chirpArr.reverse();
    res.send(chirpArr);
});

// Create a new chirp
router.post("/", (req, res) => {
    CreateChirp(req.body);
    res.sendStatus(200);
});

//Edit a chirp
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const chirp = req.body;
    UpdateChirp(id, chirp);
    res.sendStatus(200);
});

// Delete a chirp
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    DeleteChirp(id);
    res.sendStatus(200);
});

export default router;