import { createContext, useState } from "react";
import React from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback] = useState([
        {
            id: 1,
            text: "This is a test feedback",
            rating: 5,
        }
    ]);
  return (
    <FeedbackContext.Provider value={{
       feedback
    }}>{children}</FeedbackContext.Provider>
  );
};

export default FeedbackContext;

//  Fazer anotações sobre o provider que foi feito aqui, salvar no mapa mental e postar linkedin como carrosel
// https://www.youtube.com/watch?v=CetDgDigYVo&ab_channel=LucasVer%C3%ADssimo    << exemplo de carrosel

/*
(node:8028) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:8028) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.

Este erro ocorre pois o webpack-dev-server está desatualizado. Para corrigir, execute o comando abaixo:
 
npm install webpack-dev-server@latest --save-dev


*/