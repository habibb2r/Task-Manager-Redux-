import {configureStore} from '@reduxjs/toolkit'
import taskSlice from './tasks/taskSlice';

const store = configureStore({
    reducer: {
        taskSlice: taskSlice
    }
})

export default store;