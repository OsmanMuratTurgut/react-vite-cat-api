import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
);

/*
TODO: Tailwind CSS Nav Yapısı Oluştur
TODO: React Router DOM Yapısı Oluştur
TODO: Anasayfa, Her Api için  Sayfaları Oluştur
TODO: .env Dosyası Oluştur
TODO: Container ve row için component oluştur
TODO: CatApi Key'i .env Dosyasına Yaz
TODO: Fech ile Api Çek
TODO: isloading, iserror, data, error state'leri oluştur
TODO: Cat API custom hook'u oluştur
TODO: Cat API kategori detay sayfası oluştur
TODO: UI düzenlemesi yap
TODO: Axios ile aynı yapıları tekrarlarla
TODO: RTK Query ile aynı yapıları kurgula

*/
