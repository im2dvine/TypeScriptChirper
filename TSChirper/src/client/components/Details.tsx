import * as React from 'react';
import { useState, useEffect } from 'react';
import { Album } from './Albums';
import { RouteComponentProps } from 'react-router-dom';

export interface DetailsProps extends RouteComponentProps<{ id: string; }> { }

const Details: React.SFC<DetailsProps> = ({ match: { params: { id } } }) => {

const [ album, setAlbum ] = useState<Album>({
    id: null,
    title: null,
    artist: null,
    url: null,
    image: null,
    thumbnail_image: null,
    _created: null
});

const getAlbum = async () => {
    let r = await fetch(`/api/album/${id}`);
    let album = await r.json();
    setAlbum(album);
}

useEffect(() => { getAlbum(); }, [id]);

    return (
        <section className="row my-2">
            <article className="col-md-12">
                <div className="card m-1 p-1 shadow">
                    <div className="d-flex justify-content-center align-items-center mb-2">
                        <button 
                        // onClick={}
                        className="btn btn-warning btn-block shadow mx-auto">Go Back</button>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Details;