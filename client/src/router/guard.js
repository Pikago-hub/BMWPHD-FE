import authService from '../services/auth.service';
import authHeader from '../services/auth-header';
import userService from '../services/user.service';
import useUserStore from '../store/index';


function setupGuard(router) {
  router.beforeEach((to, from) => {
    // if the "to" page requires authentication but there is no token stored in localStorage,
    // redirect to the login page
    if (to.meta.requiresAuth && !isLoggedIn(to)) {
      console.log('i am in guard')
      router.push('/login')
    };
    

    // if a logged in user tries to access the login page, redirect back to where comes from
    if (isVisitorOnly(to)) {
      return from;
    }

    // get user info and save to Pinia
    getUserInfo();
  });
}

function isLoggedIn(route) {
  let token = getToken();
  const status = token ? true : false;

  // if user is not logged in, we need to cache the requested page so that we can redirect to
  // this page after user logs in, this has a better user experience
  if (!status) {
    utils.cacheUtils.set('requested_page_prior_login', route.name);
  }
  return status;
}

// Some views are for visitor only (e.g., login view)
function isVisitorOnly(route) {
  let token = getToken();
  // if logged in and this page is visitor only return true
  return route.meta.visitorOnly && token;
}

function getToken() {
  var token = JSON.parse(localStorage.getItem("user"));
  return token?.token;
}

function getUserInfo() {
  const userStore = useUserStore();
  if (getToken()) {
    userStore.getUserInfo();
  }
}

export default setupGuard;
