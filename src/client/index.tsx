import React from "react";
import { hydrateRoot } from 'react-dom/client';
import App from "./entry";

hydrateRoot(document.getElementById("root")!, <App />);

