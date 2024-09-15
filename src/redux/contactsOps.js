import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Устанавливаем базовый URL для всех запросов
axios.defaults.baseURL = "https://66e6eb7517055714e58aed53.mockapi.io";

// Получение контактов
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/api/contacts"); // Используем относительный URL
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message); // Возвращаем сообщение об ошибке
    }
  }
);

// Удаление контакта
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const { data } = await axios.delete(`/api/contacts/${contactId}`); // Используем относительный URL
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message); // Возвращаем сообщение об ошибке
    }
  }
);

// Добавление контакта
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post("/api/contacts", contact); // Используем относительный URL
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message); // Возвращаем сообщение об ошибке
    }
  }
);
