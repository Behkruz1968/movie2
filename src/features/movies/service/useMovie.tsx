import { useMutation, useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"


interface MovieParams {
  page?: number
  without_genres?: string
}

export const useMovie = (params: MovieParams) => {

    const getMovies = () => useQuery({
        queryKey: ["movie-key", params],
        queryFn: ()=> api.get("/discover/movie", {params}).then(res => res.data)
    })
    // const getMovies = () => useQuery({
    //     queryKey: ["movie-key", params],
    //     queryFn: ()=> api.get("/discover/movie", {params: {...params, without_genres: "10749,36,18,99,27"}}).then(res => res.data)
    // })



    const getMovieById = (id?: number) => useQuery({
        queryKey: ["movie-key"],
        queryFn: ()=> api.get(`/movie/${id}`).then(res => res.data)
    })

    const createMovie = useMutation({
        mutationFn: (data: any)=> api.post("/discover/movie", data)
    })


    return {getMovies, createMovie, getMovieById}
}