(self["webpackChunkgame_app"] = self["webpackChunkgame_app"] || []).push([["src_components_HomePage_index_js"],{

/***/ "./src/components/HomePage/HomeResults.js":
/*!************************************************!*\
  !*** ./src/components/HomePage/HomeResults.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _GamesResults_GameCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GamesResults/GameCard */ "./src/components/GamesResults/GameCard.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");







var HomeResults = function HomeResults(_ref) {
  var games = _ref.games;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "home-slider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2__.default, settings, games.map(function (game, index) {
    var id = game.id,
        title = game.title,
        platform = game.platform,
        short_description = game.short_description,
        thumbnail = game.thumbnail;
    return game.genre === "Strategy" && game.platform === "PC (Windows)" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GamesResults_GameCard__WEBPACK_IMPORTED_MODULE_1__.default, {
      key: id,
      id: id,
      title: title,
      platform: platform,
      short_description: short_description,
      thumbnail: thumbnail
    }) : "";
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeResults);

/***/ }),

/***/ "./src/components/HomePage/index.js":
/*!******************************************!*\
  !*** ./src/components/HomePage/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_image_league_legends_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assets/image/league-legends.jpg */ "./src/assets/image/league-legends.jpg");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _contexts_HomeGamesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../contexts/HomeGamesContext */ "./src/contexts/HomeGamesContext.js");
/* harmony import */ var _HomeResults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomeResults */ "./src/components/HomePage/HomeResults.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");







var HomePage = function HomePage() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_HomeGamesContext__WEBPACK_IMPORTED_MODULE_2__.HomeGamesContext),
      doneFetch = _useContext.doneFetch,
      games = _useContext.games;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "grid-home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, {
    container: true,
    justify: "center",
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/games/details/286"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "banner-p",
    src: _assets_image_league_legends_jpg__WEBPACK_IMPORTED_MODULE_1__.default,
    alt: "League Legends"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, {
    container: true,
    justify: "center",
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    gutterBottom: true,
    variant: "h3",
    component: "h1"
  }, "\xA1Encuentra los mejores juegos gratuitos!")), doneFetch ? games.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_HomeResults__WEBPACK_IMPORTED_MODULE_3__.default, {
    games: games
  }) : "Sin resultado" : "Cargando....."));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./src/assets/image/league-legends.jpg":
/*!*********************************************!*\
  !*** ./src/assets/image/league-legends.jpg ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e155c2198d3f7d083a8ca1f5d2cccafa.jpg");

/***/ })

}]);
//# sourceMappingURL=src_components_HomePage_index_js.bundle.js.map