import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import { Details, ExerciseVideos, SimilarExercises } from '../components';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl =
        'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(
        `${exerciseUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );

      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetail.name} exercise`,
        youtubeOptions
      );
      setExerciseDetail(exerciseDetailData);
      setExerciseVideos(exerciseVideoData);
    };

    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} />
      <SimilarExercises />
    </Box>
  );
};
export default ExerciseDetail;
