import { Router, Request, Response } from "express";

const router = Router();

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: Function) {
  if (req.session?.loggedIn) {
    next();
    return;
  }
  res.status(403).send("Not permitted");
}

// will send the login form to user.... not the form by default sends the post request to /current route... so we will create POST /login to handle user input
router.get("/login", (req: Request, res: Response) => {
  res.send(`<form method="POST"  >
  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
  </div>

  <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>`);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { uname, psw } = req.body;
  if (uname && psw && uname == "navi" && psw == "navi") {
    req.session = { loggedIn: true };
    return res.redirect("/");
  }
  return res.send("Invalid Credentials");
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = null;
  return res.redirect("/");
});

router.get("/", (req: RequestWithBody, res: Response) => {
  if (req.session?.loggedIn) {
    return res.send(`<h1>"Welcome to the home page"</h1><form action="/logout" method="GET">
   <button>Logout</button>
</form>`);
  }
  return res.redirect("/login");
});

router.get("/protected", requireAuth, (req: RequestWithBody, res: Response) => {
  return res.send(`<h1>"Welcome to the protected page"</h1><form action="/logout" method="GET">
   <button>Logout</button>
</form>`);
});

export { router };
