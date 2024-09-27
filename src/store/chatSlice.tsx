import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getChatList, getMessages } from '../api/chat'

export interface ChatState {
    chats: [] | null,
    messages: [] | null,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
  }
  
  const initialState: ChatState = {
    chats: null,
    messages: null,
    status: 'idle',
    error: null
  }

  export const fetchChatList = createAsyncThunk('chat/fetchChatList', async () => {
    const data = await getChatList();
    return data.response;
  });
  
  export const fetchMessages = createAsyncThunk('chat/fetchMessages', async (chatId: string) => {
    const data = await getMessages(chatId);
    return data.response;
  });
  
  export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchChatList.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchChatList.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.chats = action.payload;
          })
          .addCase(fetchChatList.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Something went wrong';
          })
          .addCase(fetchMessages.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchMessages.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.messages = action.payload;
          })
          .addCase(fetchMessages.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Something went wrong';
          })
        }
    
  })
  
  // Action creators are generated for each case reducer function
 export default chatSlice.reducer