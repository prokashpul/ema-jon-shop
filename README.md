# Getting Started with Create React App

live site with https://ema-jon-shop-ce231.web.app/

## `RequiredAuth.js`

```javascript
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user] = useAuthState(auth);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
```

## `login.js`

```javascript
const location = useLocation();
const from = location.state?.from?.pathname || "/";
if (user) {
  navigate(from, { replace: true });
}
```

# `title dynamic`

`create Title.js and into wright code`

```javascript
const Title = (newTitle) => {
  return (document.title = newTitle);
};

export default Title;
```

`go to spaced page `

```javascript
input Title from "./Title.js"

Title("Page title")
```
