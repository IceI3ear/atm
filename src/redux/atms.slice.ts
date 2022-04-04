import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserServices } from "services/atms.services";
import { IAtm } from "types/atm";
import { IAtmItem } from "types/atm.item";
import { IQueueItem } from "types/queue.item";
import { RootState } from "./store";

export const getAllAtms = createAsyncThunk("atms/getAtms", async () => {
  const response = await UserServices.getAtms();
  return {
    atm: response.atm,
    queue: response.queue,
    processedClient: response.processedClient
  };
});

export const createAtm = createAsyncThunk(
  "atms/postAtms",
  async (atmName: string) => {
    const response = await UserServices.postAtms(atmName);
    return response;
  }
);

export const createPeople = createAsyncThunk(
  "atms/postPeople",
  async (People: IQueueItem) => {
    const response = await UserServices.postPeople(People);
    return response;
  }
);

export const deleteAtm = createAsyncThunk(
  "atms/deleteAtm",
  async (id: string) => {
    const response = await UserServices.deleteAtm(id);
    return response;
  }
);

interface InitialStateType {
  loading: boolean;
  data: IAtm;
}

const initialState: InitialStateType = {
  loading: false,
  data: {
    atm: [],
    queue: [],
    processedClient: ""
  }
};

const atmSlice = createSlice({
  name: "atms",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllAtms.pending.toString()]: (state) => {
      state.loading = true;
    },
    [getAllAtms.fulfilled.toString()]: (state, action: PayloadAction<IAtm>) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getAllAtms.rejected.toString()]: (state) => {
      state.loading = false;
    },
    [createAtm.pending.toString()]: (state) => {
      state.loading = true;
    },
    [createAtm.fulfilled.toString()]: (state, action: PayloadAction<IAtm>) => {
      state.loading = false;
      state.data = action.payload;
    },
    [createAtm.rejected.toString()]: (state) => {
      state.loading = false;
    },
    [deleteAtm.pending.toString()]: (state) => {
      state.loading = true;
    },
    [deleteAtm.fulfilled.toString()]: (state, action: PayloadAction<any>) => {
      state.loading = false;
      const newAtmData = state.data.atm.filter(
        (item: IAtmItem) => item.id !== action.payload.id
      );
      state.data.atm = newAtmData;
    },
    [deleteAtm.rejected.toString()]: (state) => {
      state.loading = false;
    },
    [createPeople.pending.toString()]: (state) => {
      state.loading = true;
    },
    [createPeople.fulfilled.toString()]: (
      state,
      action: PayloadAction<any>
    ) => {
      state.loading = false;
      state.data.queue = [...state.data.queue, action.payload.queue];
    },
    [createPeople.rejected.toString()]: (state) => {
      state.loading = false;
    }
  }
});

export const atmAction = atmSlice.actions;

export default atmSlice.reducer;

export const selectAtmLoading = (state: RootState) => state.atm.loading;
export const selectAtmData = (state: RootState) => state.atm.data;
