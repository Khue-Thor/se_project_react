import { useState, useEffect } from "react";
import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { Profile } from "../Profile/Profile";
import { AddItemModal } from "../AddItemModal/AddItemModal";
import { ItemModal } from "../ItemModal/ItemModal";
import { DeleteConfirmationModal } from "../DeleteConfirmationModal/DeleteConfirmationModal";
import { weatherApi } from "../../utils/weatherApi";
import { api } from "../../utils/api";
import * as auth from "../../utils/auth";
import { location, API_KEY } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../context/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { EditProfileModal } from "../EditProfileModal/EditProfileModal";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { RegisterModal } from "../RegisterModal/RegisterModal";
import { LoginModal } from "../LoginModal/LoginModal";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);
  const [clothingitems, setClothingItems] = useState([]);
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const handleRegisterClick = () => setIsRegisterModalOpen(true);

  const handleLoginClick = () => setIsLoginModalOpen(true);

  const handleAddClick = () => setIsAddItemModalOpen(true);

  const handleChangeProfile = () => setIsProfileModalOpen(true);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePreviewOpen(true);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const closeModal = () => {
    setIsImagePreviewOpen(false);
    setIsAddItemModalOpen(false);
    setDeleteModalOpen(false);
    setIsProfileModalOpen(false);
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(false);
  };

  async function handleRegistration({ name, avatar, email, password }) {
    setIsLoading(true);
    try {
      const res = await auth.register(name, avatar, email, password);
      setIsLoggedIn(true);
      setCurrentUser({ res });
      closeModal();
    } catch (err) {
      return console.error(err);
    } finally {
      return setIsLoading(false);
    }
  }

  async function handleUserLogin(email, password) {
    setIsLoading(true);
    try {
      const res = await auth.login(email, password);
      if (res) {
        setIsLoggedIn(true);
        setCurrentUser({ user: res.token });
        closeModal();
      }
    } catch (err) {
      return console.err(err);
    } finally {
      return setIsLoading(false);
    }
  }

  function handleLogOut(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    history.push("/");
  }

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  useEffect(() => {
    function handleOverlayClose(e) {
      if (
        { isImagePreviewOpen, isAddItemModalOpen, setDeleteModalOpen } &&
        !e.target.closest(".modal__content")
      ) {
        closeModal();
      }
    }
    document.addEventListener("mousedown", handleOverlayClose);

    return () => {
      document.removeEventListener("mousedown", handleOverlayClose);
    };
  });

  function handleEditProfile(name, avatar) {
    setIsLoading(true);
    auth
      .updateUser(name, avatar)
      .then((user) => {
        setCurrentUser(user.data);
        closeModal();
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }

  async function handleAddItemSubmit(name, imageUrl, weather) {
    setIsLoading(true);
    api
      .addItem({ name, imageUrl, weather })
      .then((data) => {
        setClothingItems([data.item, ...clothingitems]);
        closeModal();
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }

  function handleLikeClick(id, isLiked) {
    isLiked
      ? api
          .addCardLike(id)
          .then((updateCard) => {
            setClothingItems((cards) => cards.map((card) => (card._id === id ? updateCard : card)));
          })
          .catch((err) => console.error(err))
      : api
          .removeCardLike(id)
          .then((updateCard) => {
            setClothingItems((cards) =>
              cards.map((card) => {
                return card._id === id ? updateCard : card;
              })
            );
          })
          .catch((err) => console.error(err));
  }

  function handleCardDeleteSubmit() {
    api
      .deleteItem(selectedCard._id)
      .then(() => {
        setClothingItems([...clothingitems.filter((item) => item._id !== selectedCard._id)]);
        setSelectedCard({});
        closeModal();
      })
      .catch((err) => console.error(err));
  }
  
    useEffect(() => {
    weatherApi
      .getWeatherData(location, API_KEY)
      .then((setweatherInfo) => {
        setWeatherData(setweatherInfo);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    api
      .getItems()
      .then((clothing) => {
        setClothingItems(clothing);
      })
      .catch((error) => console.error(error));
  }, []);

  // useEffect(() => {
  //   Promise.all([weatherApi.getWeatherData(location, API_KEY), api.getItems()])
  //     .then(([weatherInfo, clothing]) => {
  //       setWeatherData(weatherInfo);
  //       setClothingItems(clothing);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      setIsLoggedIn(true);
      auth
        .getUser(token)
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch((err) => console.error(err.message));
    }
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="App__content">
            <Header
              isLoggedIn={isLoggedIn}
              weatherData={weatherData}
              handleAddClick={handleAddClick}
              onRegisterClick={handleRegisterClick}
              onLoginClick={handleLoginClick}
            />
            <Switch>
              <Route exact path={"/"}>
                <Main
                  isLoggedIn={isLoggedIn}
                  weatherData={weatherData}
                  cards={clothingitems}
                  onCardClick={handleCardClick}
                  handleLikeClick={handleLikeClick}
                />
              </Route>
              <ProtectedRoute path="/profile" loggedIn={isLoggedIn} currentUser={currentUser}>
                <Profile
                  cards={clothingitems}
                  isLoggedIn={isLoggedIn}
                  handleAddClick={handleAddClick}
                  onCardClick={handleCardClick}
                  onChangeProfile={handleChangeProfile}
                  onLogOut={handleLogOut}
                  handleLikeClick={handleLikeClick}
                />
              </ProtectedRoute>
            </Switch>

            <Footer />
          </div>
          {isRegisterModalOpen && (
            <RegisterModal
              name="next"
              form="register"
              isOpen={isRegisterModalOpen}
              isLoading={isLoading}
              onCloseModal={closeModal}
              onRegistration={handleRegistration}
            />
          )}
          {isLoginModalOpen && (
            <LoginModal
              name="login"
              isOpen={isLoginModalOpen}
              isLoading={isLoading}
              onCloseModal={closeModal}
              onLogin={handleUserLogin}
            />
          )}
          {isAddItemModalOpen && (
            <AddItemModal
              name="create"
              isLoading={isLoading}
              isOpen={isAddItemModalOpen}
              onCloseModal={closeModal}
              onAddItem={handleAddItemSubmit}
            />
          )}
          {isProfileModalOpen && (
            <EditProfileModal
              name="edit"
              currentUser={currentUser}
              isOpen={isProfileModalOpen}
              onCloseModal={closeModal}
              onEditProfile={handleEditProfile}
            />
          )}
          {isImagePreviewOpen && (
            <ItemModal
              isLoggedIn={isLoggedIn}
              card={selectedCard}
              currentUser={currentUser}
              onCloseModal={closeModal}
              onDeleteModal={openDeleteModal}
            />
          )}
          {deleteModalOpen && (
            <DeleteConfirmationModal
              onCloseModal={closeModal}
              onOpen={openDeleteModal}
              handleDelete={handleCardDeleteSubmit}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
