import {createSlice} from  '@reduxjs/toolkit'

 const initialState   = {
   movies: [{ id: 1 , name: "Khalid" , Image: "https://plus.unsplash.com/premium_photo-1742404280631-fc42d69b605c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D" , Tell: 6190584},
    { id: 2 , name: "cubaydi" , Image: "https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D" ,Tell: 7834},
    { id: 3 , name: "ayuub"  , Image: "https://plus.unsplash.com/premium_photo-1682098022877-593355cd975a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D", Tell: 23457867}
   ]
 };

 const movieSlice =  createSlice ({
   name: 'Movies',
   initialState ,
    reducers: {
        

        AddMovies: (state , action)=>{
            const {name , image , Tell}  = action.payload
            const  newMovies = {
                id: state.movies[state.movies.length -1].id +1,
                 name,
                 Tell,
                 Image: image
            }
           state.movies.push(newMovies); 

        },

        

     DeleteMovies: (state , action)=>{
        
        state.movies = state.movies.filter((mov)=> (
            mov.id !== action.payload

        ))
      },
    }
 });

 export const   {AddMovies , DeleteMovies} =  movieSlice.actions;
 export default movieSlice.reducer;