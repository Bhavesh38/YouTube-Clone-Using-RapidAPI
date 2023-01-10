import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Videos from "./Videos";
import ChannelCard from './ChannelCard';
import { fetchFromAPI } from "../utils/fetchFromAPI"
const ChannelDetail = () => {
    const [ChannelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();
    console.log(ChannelDetail, videos);
    useEffect(() => {
        fetchFromAPI(`channels?.part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]))

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items))
    }, [id])
    return (
        <div>
            ChannelDetail
        </div>
    )
}

export default ChannelDetail
